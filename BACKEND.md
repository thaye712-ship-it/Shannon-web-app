# Moving profiles to Firebase

Right now profiles live in the browser's `localStorage`. That was a
deliberate first step, not a shortcut: it works with no server, no signup
and no cost, and it covers the common case of a shared showroom device. What
it cannot do is follow someone to another device, or let anyone see
completion across a team.

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
  the web config is not a secret — but it means the Firestore rules are the
  only thing standing between a curious associate and everyone's data.

## What already makes this easy

Every read and write of a person's progress goes through the `Profiles`
object in `js/app.js`. Nothing else in the app touches storage:

| Function | Does |
| --- | --- |
| `Profiles.index()` | `{ activeId, users: [...] }` |
| `Profiles.list()` | All profiles |
| `Profiles.active()` / `activeId()` | Who is using this device |
| `Profiles.create(name, emoji)` | New profile |
| `Profiles.update(id, changes)` | Change name or avatar |
| `Profiles.select(id)` | Switch profile |
| `Profiles.remove(id)` | Delete profile and progress |
| `Profiles.loadProgress(id)` | That person's progress record |
| `Profiles.saveProgress(id, data)` | Write it back |

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
orgs/{orgId}/profiles/{profileId}   → { name, emoji, createdAt }
orgs/{orgId}/progress/{profileId}   → the record above
```

Carry `orgId` from day one even with a single store. Retrofitting a tenant
boundary after real data exists is far more painful than having it unused
for a while.

## There is no auth, on purpose

The app has no sign-in. People pick a name from a dropdown and train. That
means Firestore cannot tell one person from another, so the rules let anyone
read the roster and write progress.

That is the right trade for a shared showroom device and practice scores. It
stops being the right trade the moment these numbers inform a performance
conversation — at that point people need real accounts, and the tighter rules
are written out at the bottom of `firestore.rules`.

## What a manager dashboard would need on top

- Real accounts, so the numbers can be trusted at all
- A read over `orgs/{orgId}/progress`, which is trivial once accounts exist
- Session history if you want more than running totals; the current record
  keeps aggregates only, so that means a `sessions` subcollection written at
  the end of each run
- Names that identify real employees, which makes this employee data and
  brings the usual retention and consent questions with it

## The code is already written

The adapter exists and is wired in, sitting behind an off switch:

| File | Role |
| --- | --- |
| `js/firebase-config.js` | Project config and the `mode` switch. Committed on purpose — a web config is not a secret. |
| `js/firebase-store.js` | The Firestore adapter. Loads the SDK from Google's CDN, no build step. Completely inert unless `mode` is `'firebase'`. |
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
then set `mode: 'firebase'`. There are no accounts to create — the app has no
sign-in — so it really is just those three things.

### What to check on first run

The full checklist is in `SETUP-FIREBASE.md`: add a profile and confirm it
lands in Firestore, open on a second device and confirm the roster loads, run
a sprint and confirm the XP change saves.

**Never commit** a service account JSON or any Admin SDK credential. Those
bypass every rule. The web config (`apiKey`, `authDomain`, `projectId`, …) is
fine and is meant to be public.
