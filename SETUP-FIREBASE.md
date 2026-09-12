# Turning on Firebase — step by step

Everything here is done in the Firebase console at
<https://console.firebase.google.com> in the **shannon-dwr** project. No
downloads, no command line, no accounts to create. Four steps, about ten
minutes.

You only need this if you want progress to follow people between devices.
The app works fine without it.

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

## Step 3 — Flip the switch

In this repo, open `js/firebase-config.js` and change one line:

```js
mode: 'local',      →      mode: 'firebase',
```

Commit and push. GitHub Pages redeploys in a couple of minutes.

(Or tell me and I'll do it — it's a one-line change.)

---

## Step 4 — Check it actually works

Open the live site and check three things:

1. **Profiles sync.** Add a profile, then look in Firestore → Data. It should
   appear under `orgs/dwr-default/profiles`.
2. **It's shared.** Open the site on your phone. The same roster should load.
3. **Progress saves.** Run a Morning Sprint, then check
   `orgs/dwr-default/progress` for the XP change.

If something doesn't work, open the browser console (F12 → Console). The app
logs a clear warning and falls back to local storage rather than breaking, so
the error text there will say what happened.

---

## Two things worth knowing afterwards

**Nobody has an account, so progress is not tamper-proof.** The rules have to
allow anyone to write progress, because there's no identity to check against
when someone just picks a name. That's fine for practice scores. It is not
fine if these numbers ever feed a performance review — at that point people
need real accounts, and `firestore.rules` has the tighter version written out
at the bottom ready to swap in.

**Cost.** This stays inside Firestore's free tier at your scale. Roughly 30
associates training daily uses about 4% of the daily free reads and under 1%
of the writes. You'd need to grow tenfold before Firebase charges anything.
