/* ============================================================
   Provenance — Firestore backend adapter
   ------------------------------------------------------------
   Loaded as a module so it can pull the Firebase ESM SDK from
   Google's CDN without a build step. It stays completely inert
   unless firebase-config.js sets mode to 'firebase', so the app
   works normally with no Firebase project at all.

   Design note — why a write-through cache rather than reading
   Firestore directly:

   The rest of the app reads and writes profiles synchronously.
   Making every one of those call sites async would be a wide,
   regression-prone refactor for no user-visible gain. Instead
   localStorage stays the thing the UI talks to, and this module
   keeps it in step with Firestore:

     boot    -> hydrate() pulls remote state into localStorage
     writes  -> the app writes locally, then pushes in background

   That also means a dropped wifi connection degrades to exactly
   the old local behaviour instead of breaking the app, which is
   the right failure mode for a showroom floor.

   Conflict handling is last-write-wins. Two devices editing the
   same profile at the same moment will keep the later write. For
   one person training on one device at a time, that is fine; it
   would need revisiting if profiles were ever edited concurrently.
   ============================================================ */

(async () => {
  const cfg = window.PROVENANCE_BACKEND;
  if (!cfg || cfg.mode !== 'firebase') return;

  const SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';

  let app, db, auth, fs, authApi;
  try {
    const appMod  = await import(SDK + 'firebase-app.js');
    fs            = await import(SDK + 'firebase-firestore.js');
    authApi       = await import(SDK + 'firebase-auth.js');
    app = appMod.initializeApp(cfg.firebase);
    db  = fs.getFirestore(app);
    auth = authApi.getAuth(app);

    if (cfg.analytics) {
      try {
        const an = await import(SDK + 'firebase-analytics.js');
        an.getAnalytics(app);
      } catch (e) { /* analytics is optional and commonly blocked */ }
    }
  } catch (e) {
    console.warn('[Provenance] Firebase failed to load; staying on local storage.', e);
    return;
  }

  const org = cfg.orgId || 'default';
  const profilesCol = () => fs.collection(db, 'orgs', org, 'profiles');
  const progressDoc = id => fs.doc(db, 'orgs', org, 'progress', id);

  const Backend = {
    mode: 'firebase',

    /* Pull everything for this org. Returns null on failure so the caller
       can simply carry on with whatever is already cached locally. */
    async hydrate() {
      try {
        const [profSnap, progSnap] = await Promise.all([
          fs.getDocs(profilesCol()),
          fs.getDocs(fs.collection(db, 'orgs', org, 'progress'))
        ]);
        const users = [];
        profSnap.forEach(d => users.push(Object.assign({ id: d.id }, d.data())));
        const progress = {};
        progSnap.forEach(d => { progress[d.id] = d.data(); });
        return { users, progress };
      } catch (e) {
        console.warn('[Provenance] Could not read from Firestore; using local cache.', e);
        return null;
      }
    },

    /* Writes are deliberately fire-and-forget: a failed sync must never
       block or lose the local write the user just made. */
    pushProfile(user) {
      fs.setDoc(fs.doc(profilesCol(), user.id), {
        name: user.name,
        emoji: user.emoji,
        role: user.role || 'associate',
        root: !!user.root,
        createdAt: user.createdAt || new Date().toISOString()
      }, { merge: true }).catch(e => console.warn('[Provenance] profile sync failed', e));
    },

    removeProfile(id) {
      fs.deleteDoc(fs.doc(profilesCol(), id))
        .catch(e => console.warn('[Provenance] profile delete failed', e));
      fs.deleteDoc(progressDoc(id))
        .catch(e => console.warn('[Provenance] progress delete failed', e));
    },

    pushProgress(id, data) {
      fs.setDoc(progressDoc(id), data, { merge: true })
        .catch(e => console.warn('[Provenance] progress sync failed', e));
    },

    /* ---- manager auth, real this time ---- */

    /*
      Manager status is a document at orgs/{org}/managers/{uid}, which only
      existing managers can write. Checking it here is a convenience for the
      UI — the rules check it independently on every write, so a tampered
      client gains nothing by lying about this result.
    */
    async signInManager(email, password) {
      try {
        const cred = await authApi.signInWithEmailAndPassword(auth, email, password);
        let manager = false;
        try {
          const snap = await fs.getDoc(fs.doc(db, 'orgs', org, 'managers', cred.user.uid));
          manager = snap.exists();
        } catch (e) {
          return { ok: false, error: 'Signed in, but could not read manager status. Are the rules published?' };
        }
        return { ok: true, manager, email: cred.user.email, uid: cred.user.uid };
      } catch (e) {
        return { ok: false, error: friendlyAuthError(e) };
      }
    },

    async signOutManager() {
      try { await authApi.signOut(auth); } catch (e) { /* already gone */ }
    },

    currentManagerEmail() {
      return auth.currentUser ? auth.currentUser.email : null;
    }
  };

  function friendlyAuthError(e) {
    const code = (e && e.code) || '';
    if (code.includes('invalid-credential') || code.includes('wrong-password') ||
        code.includes('user-not-found')) return 'Email or password is not right.';
    if (code.includes('too-many-requests')) return 'Too many attempts. Wait a minute and try again.';
    if (code.includes('network')) return 'No connection to Firebase.';
    return 'Could not sign in. ' + (e && e.message ? e.message : '');
  }

  window.ProvenanceBackend = Backend;
  window.dispatchEvent(new CustomEvent('provenance:backend-ready'));
})();
