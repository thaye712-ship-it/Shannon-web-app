# Turning on Firebase — step by step

Everything here is done in the Firebase console at
<https://console.firebase.google.com> in the **shannon-dwr** project. No
downloads, no command line, no service account key. Budget about 15 minutes.

The app keeps working normally while you do this — it stays on local storage
until the very last step.

---

## Step 1 — Create the Firestore database

1. Left sidebar → **Build** → **Firestore Database**
2. Click **Create database**
3. **Choose a location.** Pick the region closest to your stores
   (`nam5` / us-central works for most of the US).

   > This cannot be changed later. Moving regions means creating a new
   > project, so it's worth a moment's thought.

4. When asked for a starting mode, choose **Start in production mode**.

   Production mode denies everything until you publish rules, which is what
   you want. Test mode allows anyone on the internet to read and write your
   data for 30 days — never use it for something with real names in it.

5. Click **Create** and wait for it to provision.

---

## Step 2 — Publish the security rules

1. Still in Firestore Database, open the **Rules** tab
2. Select everything in the editor and delete it
3. Open `firestore.rules` from this repo, copy the whole file, paste it in
4. Click **Publish**

You should see "Rules published successfully". If it refuses, it will point
at the line — send it to me and I'll fix it.

---

## Step 3 — Turn on email sign-in

1. Left sidebar → **Build** → **Authentication**
2. Click **Get started** if this is the first time
3. **Sign-in method** tab → click **Email/Password**
4. Enable the first toggle (**Email/Password**). Leave "Email link
   (passwordless sign-in)" off.
5. **Save**

---

## Step 4 — Create Shannon's account

1. Authentication → **Users** tab → **Add user**
2. Email: whatever address she should sign in with, e.g.
   `shannon@yourcompany.com`

   It does not need to be a real inbox for password sign-in to work, but use
   a real one if you ever want password resets to reach her.

3. Password: **choose a real one here.** Not `Trent` — that's been in a chat
   log, so treat it as public. Use something you'd be comfortable protecting
   staff records with.
4. Click **Add user**
5. **Copy her User UID** from the list — a long string like
   `kJ8s0Xm2NpVc...`. You need it in the next step.

> The password lives only in Firebase. It is never in the repo, and I never
> see it.

---

## Step 5 — Make her a manager

This is what actually grants manager powers. A person is a manager if a
document exists for their UID in the `managers` collection.

1. Firestore Database → **Data** tab
2. Click **Start collection**
3. Collection ID: `orgs` → **Next**
4. Document ID: `dwr-default`

   > This has to match `orgId` in `js/firebase-config.js`. If you change one,
   > change both.

5. You'll be asked to add a field. Add any placeholder — name `createdAt`,
   type `string`, value `setup` — then **Save**. (Firestore needs one field
   to create the document.)
6. Now open that `dwr-default` document and click **Start collection**
   inside it
7. Collection ID: `managers` → **Next**
8. Document ID: **paste Shannon's UID** from step 4
9. Add these fields:

   | Field | Type | Value |
   | --- | --- | --- |
   | `name` | string | `Shannon` |
   | `email` | string | her email from step 4 |
   | `addedAt` | string | today's date |

10. **Save**

The final path should read:
`orgs / dwr-default / managers / <Shannon's UID>`

---

## Step 6 — Flip the switch

In this repo, open `js/firebase-config.js` and change one line:

```js
mode: 'local',      →      mode: 'firebase',
```

Commit and push. GitHub Pages redeploys in a couple of minutes.

(Or tell me and I'll do it — it's a one-line change.)

---

## Step 7 — Check it actually works

Open the live site and walk these five. The fourth is the important one.

1. **Profiles sync.** Add a profile, then look in Firestore → Data. It should
   appear under `orgs/dwr-default/profiles`.
2. **It's shared.** Open the site on your phone. The same roster should load.
3. **Manager sign-in works.** Avatar menu → Manager sign-in → Shannon's email
   and password. The Team & managers screen should open.
4. **Non-managers are refused.** Add a second user in Authentication (don't
   add them to `managers`) and try signing in with it. You should get *"That
   account signed in, but it does not have manager access."*

   This is the test that proves the rules are doing real work. If this
   account gets in, stop and tell me — something is wrong.
5. **Progress saves.** Run a Morning Sprint, then check
   `orgs/dwr-default/progress` for the XP change.

If something doesn't work, open the browser console (F12 → Console). The app
logs a clear warning and falls back to local storage rather than breaking, so
the error text there will say what happened.

---

## Two things worth knowing afterwards

**Associates have no accounts, so progress is not tamper-proof.** The rules
have to allow anyone to write progress, because there's no identity to check
against when someone just picks a name. That's fine for practice scores. It
is not fine if these numbers ever feed a performance review — at that point
associates need accounts too, and the tighter rule is already written out in
`firestore.rules` ready to swap in.

**Cost.** This stays inside Firestore's free tier at your scale. Roughly 30
associates training daily uses about 4% of the daily free reads and under 1%
of the writes. You'd need to grow tenfold before Firebase charges anything.
