# Moving profiles to Firebase

Right now profiles live in the browser's `localStorage`. That was a
deliberate first step, not a shortcut: it works with no server, no signup
and no cost, and it covers the common case of a shared showroom device. What
it cannot do is follow someone to another device, give managers real
accounts, or let anyone see completion across a team.

This is what moving it to Firebase actually involves.

## Why Firebase here

Firestore is a fine fit for this and it's the account that already exists,
which beats standing up something new. Two things to know going in:

- **Aggregate reporting is more work than in SQL.** "Completion by topic
  across the team" is one query in Postgres; in Firestore it's either a
  fan-out read or counters you maintain on write. At one store's worth of
  people that difference does not matter. At fifty stores it will, and the
  usual answer is a scheduled Cloud Function that rolls up nightly.
- **Security rules are the whole defense.** This repo is public, so the
  Firebase web config is visible to anyone. That is normal and expected —
  the web config is not a secret — but it means Firestore rules and Auth are
  the only things standing between a curious associate and everyone's data.

## What already makes this easy

Every read and write of a person's progress goes through the `Profiles`
object in `js/app.js`, and manager access goes through `ManagerAuth`.
Nothing else in the app touches storage or auth:

| Function | Does |
| --- | --- |
| `Profiles.index()` | `{ activeId, users: [...] }` |
| `Profiles.list()` / `managers()` | All profiles / just managers |
| `Profiles.active()` / `activeId()` | Who is signed in |
| `Profiles.create(name, emoji, opts)` | New profile; `opts.role`, `opts.root` |
| `Profiles.update(id, changes)` | Change role, name, avatar |
| `Profiles.select(id)` | Switch profile |
| `Profiles.remove(id)` | Delete profile and progress (refuses the root manager) |
| `Profiles.loadProgress(id)` | That person's progress record |
| `Profiles.saveProgress(id, data)` | Write it back |
| `ManagerAuth.verify(pw)` / `setPassword(pw)` | Manager gate |

Migration means reimplementing those and nothing else. The one real
complication is that the localStorage versions are **synchronous** and
Firestore is **async**, so those call sites need `await` — roughly a dozen
places, all in `js/app.js`.

## The data

One document per person. The progress shape is already flat and
JSON-serializable, so it maps to a Firestore document with no modelling
work:

```js
{
  xp: 0, streak: 0, lastPlayed: null, sound: true,
  badges: [], topics: {}, sessions: 0, flashKnown: []
}
```

Suggested collections:

```
orgs/{orgId}/profiles/{profileId}   → { name, emoji, role, root, createdAt }
orgs/{orgId}/progress/{profileId}   → the record above
```

Carry `orgId` from day one even with a single store. Retrofitting a tenant
boundary after real data exists is far more painful than having it unused
for a while.

## Auth, and the Shannon question

The app currently seeds **Shannon** as the root manager: she cannot be
removed or demoted, and managers can add and remove other managers. That
role model is already in the data and does not change when Firebase lands.

What changes is the password. Today the manager gate is a salted SHA-256
hash in that device's local storage — it keeps the manager view off the
showroom floor, but anyone with dev tools can bypass it and it does not
travel between devices. **No password is stored in this repository and none
ever should be**, because the repo is public.

With Firebase:

1. Enable **Email/Password** auth in the console.
2. Create Shannon's account there and set her password in the console. It
   never enters this repo, and nobody needs to send it over chat.
3. Managers sign in with `signInWithEmailAndPassword`. Associates keep
   picking a name from the dropdown with no password, exactly as now.
4. Mark managers with a **custom claim** (`{ manager: true }`, set by a
   Cloud Function or the Admin SDK) rather than a Firestore field. A claim
   is on the token itself, so rules can trust it; a field can be edited by
   anyone who can write that document.

### Rules sketch

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /orgs/{orgId}/profiles/{profileId} {
      allow read: if true;                                  // picking a name is public
      allow create: if true;                                // anyone can add themselves
      allow update, delete: if request.auth.token.manager == true
                            && resource.data.root != true;  // root is untouchable
    }
    match /orgs/{orgId}/progress/{profileId} {
      allow read: if true;
      allow write: if true;                                 // see the caveat below
    }
  }
}
```

That `allow write: if true` on progress is the honest cost of letting
associates train without logging in: anyone can write anyone's progress. It
is acceptable for practice scores and unacceptable the moment this data
informs a review. When you want it tight, give associates accounts too and
key the rule to `request.auth.uid`.

## What a manager dashboard needs on top

- A read over `orgs/{orgId}/progress` — straightforward once managers have
  real accounts and a `manager` claim
- Session history, if you want more than running totals; the current record
  keeps aggregates only, so that means a `sessions` subcollection written
  at the end of each run
- Names that identify real employees, which makes this employee data and
  brings the usual retention and consent questions with it

## The code is already written

The adapter exists and is wired in, sitting behind an off switch:

| File | Role |
| --- | --- |
| `js/firebase-config.js` | Project config and the `mode` switch. Committed on purpose — a web config is not a secret. |
| `js/firebase-store.js` | The Firestore + Auth adapter. Loads the SDK from Google's CDN, no build step. Completely inert unless `mode` is `'firebase'`. |
| `firestore.rules` | The rules to publish. Paste into the console. |

Rather than making the whole app async, the adapter is a **write-through
cache**: localStorage stays what the UI reads, and the adapter keeps it in
step with Firestore — hydrate on boot, push in the background on write. Two
consequences worth knowing:

- Losing wifi degrades to exactly the old local behaviour rather than
  breaking the app, which is the right failure mode for a showroom.
- Conflicts are last-write-wins. One person on one device at a time is fine;
  simultaneous edits to the same profile would need revisiting.

`activeId` — who is using *this* device right now — is deliberately not
synced. It is a property of the iPad, not of the team.

## Turning it on

**See `SETUP-FIREBASE.md`** for the click-by-click version. In summary:
create the Firestore database in production mode, publish `firestore.rules`,
enable Email/Password auth, create Shannon's account, add a document at
`orgs/dwr-default/managers/{her UID}`, then set `mode: 'firebase'`.

### Why manager status is a document, not a custom claim

The usual Firebase answer is a custom claim (`request.auth.token.manager`).
Claims are slightly stronger — they ride on the token, so checking one costs
no extra read — but setting one requires the Admin SDK, a downloaded service
account key and a local Node install. That's a lot of moving parts for this,
including a credential file that must never be committed and that tends to
linger in a Downloads folder.

Instead a person is a manager if a document exists at
`orgs/{orgId}/managers/{uid}`. That collection is writable only by existing
managers, and the first one is created by hand in the console, so there is no
path from the app to promoting yourself. The cost is one document read per
rule evaluation, which is nothing at this scale, and the entire setup can be
done by clicking.

If this ever grows to many stores and the read-per-check starts to matter,
switching to claims means changing `isManager()` in the rules and the check
in `signInManager()` — nothing else.

### What to check on first run

The full checklist is in `SETUP-FIREBASE.md`. The one that matters most:
**sign in with an account that is not in the `managers` collection and
confirm it is refused.** If that account gets into the manager view, the
rules are not doing their job and everything else is a false positive.

**Never commit** a service account JSON or any Admin SDK credential. Those
bypass every rule. The web config (`apiKey`, `authDomain`, `projectId`, …) is
fine and is meant to be public.
