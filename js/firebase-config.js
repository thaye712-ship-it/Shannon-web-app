/* ============================================================
   Provenance — backend configuration
   ------------------------------------------------------------
   This file is safe to commit. A Firebase *web* config is not a
   secret — it identifies the project, it does not authorize
   anything. What protects the data is Firestore security rules
   plus Auth (see firestore.rules and BACKEND.md).

   Never put a service account JSON or Admin SDK key here, or
   anywhere else in this repository. Those bypass every rule.
   ============================================================ */

window.PROVENANCE_BACKEND = {

  /*
    'local'    — profiles live in this browser only (default)
    'firebase' — profiles sync to Firestore

    Leave this on 'local' until the Firestore database exists and
    the contents of firestore.rules are published, or the app will
    either fail against locked default rules or run wide open
    against test-mode rules.

    Flipping this to 'firebase' is the only change needed here.
    SETUP-FIREBASE.md has the click-by-click version.
  */
  mode: 'local',

  /* Which store/team these profiles belong to. Carried from day one so a
     second location doesn't require reshaping the data later. */
  orgId: 'dwr-default',

  /*
    Google Analytics is deliberately off. This is an internal tool used by
    named employees, so analytics means tracking staff behaviour — worth a
    deliberate decision rather than a default. It is also commonly blocked,
    which makes it a flaky thing to depend on. Set true only if you want it.
  */
  analytics: false,

  firebase: {
    apiKey: 'AIzaSyC6eOqW89XmbILGawlwwWgmaEbV4mPjt8E',
    authDomain: 'shannon-dwr.firebaseapp.com',
    projectId: 'shannon-dwr',
    storageBucket: 'shannon-dwr.firebasestorage.app',
    messagingSenderId: '48096065864',
    appId: '1:48096065864:web:116888fd481ad95019db7d',
    measurementId: 'G-BY1MJS5QBV'
  }
};
