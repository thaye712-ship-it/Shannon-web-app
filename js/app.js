/* ============================================================
   Provenance — app engine
   Screen routing, session running, scoring, progress, effects.
   ============================================================ */

(function () {
  'use strict';

  /* ---------------- constants ---------------- */

  const SPRINT_QUESTIONS = 8;
  const SPRINT_SECONDS   = 20;
  const XP_PER_LEVEL     = 100;

  const LEVEL_NAMES = [
    'Rookie', 'Greeter', 'Closer', 'Specialist',
    'Floor Lead', 'Brand Boss', 'Showroom Legend'
  ];

  const BADGES = [
    { id: 'first',   emoji: '🌱', name: 'First Session', req: 'Finish one session' },
    { id: 'streak3', emoji: '🔥', name: 'Three Days',    req: '3-day streak' },
    { id: 'streak7', emoji: '⚡', name: 'Week Warrior',  req: '7-day streak' },
    { id: 'combo5',  emoji: '🚀', name: 'On a Roll',     req: 'Hit a 5× combo' },
    { id: 'perfect', emoji: '💯', name: 'Flawless',      req: 'Score 100%' },
    { id: 'dive30',  emoji: '🧠', name: 'Deep Diver',    req: 'Finish a 30 min dive' },
    { id: 'dive60',  emoji: '🏆', name: 'Full Tour',     req: 'Finish a 60 min dive' },
    { id: 'xp1000',  emoji: '👑', name: 'Four Figures',  req: 'Bank 1,000 XP' }
  ];

  const USERS_KEY = 'provenance.users.v1';
  const userKey = id => 'provenance.user.' + id + '.v1';

  /* Key names from before the app was renamed, read once and migrated forward. */
  const LEGACY_USERS_KEY = 'shannon.users.v1';
  const legacyUserKey = id => 'shannon.user.' + id + '.v1';
  const LEGACY_SOLO_KEY = 'shannon.progress.v1';
  const LEGACY_FLASH_KEY = 'shannon.flashKnown.v1';

  const AVATARS = ['🦊', '🐙', '🦉', '🐝', '🦜', '🐢', '🦩', '🐳', '🦁', '🐼', '🦒', '🐨'];

  const MANAGER_AUTH_KEY = 'provenance.managerAuth.v1';
  const ROOT_MANAGER = 'Shannon';

  /* ---------------- tiny DOM helpers ---------------- */

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  /* ---------------- profiles + saved progress ----------------

     Every read and write of a person's progress goes through Profiles.
     That is the point: swapping localStorage for a real backend later
     means reimplementing these functions and nothing else. The screens,
     scoring and rendering never touch storage directly.
     See BACKEND.md for what that migration involves.
  */

  const defaults = () => ({
    xp: 0,
    streak: 0,
    lastPlayed: null,
    sound: true,
    badges: [],
    topics: {},          // topicId -> { seen, correct }
    sessions: 0,
    flashKnown: []       // product ids marked "know it" in flashcards
  });

  const Profiles = {
    index() {
      try {
        const raw = localStorage.getItem(USERS_KEY);
        if (!raw) return { activeId: null, users: [] };
        const ix = JSON.parse(raw);
        return { activeId: ix.activeId || null, users: Array.isArray(ix.users) ? ix.users : [] };
      } catch (e) {
        return { activeId: null, users: [] };
      }
    },
    saveIndex(ix) {
      try { localStorage.setItem(USERS_KEY, JSON.stringify(ix)); } catch (e) { /* private mode */ }
    },
    list() { return this.index().users; },
    activeId() { return this.index().activeId; },
    active() {
      const ix = this.index();
      return ix.users.find(u => u.id === ix.activeId) || null;
    },
    create(name, emoji, opts) {
      const o = opts || {};
      const ix = this.index();
      const user = {
        id: 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: String(name).trim().slice(0, 40),
        emoji: emoji || AVATARS[Math.floor(Math.random() * AVATARS.length)],
        role: o.role === 'manager' ? 'manager' : 'associate',
        root: !!o.root,          // the root manager cannot be removed or demoted
        createdAt: new Date().toISOString()
      };
      ix.users.push(user);
      if (o.activate !== false) ix.activeId = user.id;
      this.saveIndex(ix);
      this.saveProgress(user.id, defaults());
      return user;
    },
    update(id, changes) {
      const ix = this.index();
      const u = ix.users.find(x => x.id === id);
      if (!u) return null;
      Object.assign(u, changes);
      this.saveIndex(ix);
      return u;
    },
    select(id) {
      const ix = this.index();
      if (!ix.users.some(u => u.id === id)) return false;
      ix.activeId = id;
      this.saveIndex(ix);
      return true;
    },
    remove(id) {
      const ix = this.index();
      const target = ix.users.find(u => u.id === id);
      if (target && target.root) return false;   // root manager is not deletable
      ix.users = ix.users.filter(u => u.id !== id);
      if (ix.activeId === id) ix.activeId = null;
      this.saveIndex(ix);
      try { localStorage.removeItem(userKey(id)); } catch (e) { /* private mode */ }
      return true;
    },
    managers() { return this.list().filter(u => u.role === 'manager'); },
    loadProgress(id) {
      try {
        const raw = localStorage.getItem(userKey(id));
        if (!raw) return defaults();
        return Object.assign(defaults(), JSON.parse(raw));
      } catch (e) {
        return defaults();
      }
    },
    saveProgress(id, data) {
      try { localStorage.setItem(userKey(id), JSON.stringify(data)); } catch (e) { /* private mode */ }
    }
  };

  /* ---------------- manager sign-in ----------------

     IMPORTANT, and worth reading before changing any of this:

     This is a static site served from a public repository. Any password
     written into this file would be visible to every associate and to the
     internet, so no password is stored here and none ever should be. What
     this module does is hold a salted SHA-256 hash in the device's own
     local storage, set by a manager on first use.

     That makes it a device-level gate — it keeps an associate from casually
     opening the manager view on the showroom iPad. It is NOT real security:
     anyone with dev tools can bypass it, and it does not travel between
     devices. Real authentication arrives when Firebase Auth is wired up
     (see BACKEND.md), at which point the password lives in Firebase, is set
     in its console, and never touches this repository.
  */

  const ManagerAuth = {
    record() {
      try { return JSON.parse(localStorage.getItem(MANAGER_AUTH_KEY) || 'null'); }
      catch (e) { return null; }
    },
    isConfigured() { return !!(this.record() || {}).hash; },

    async hash(password, salt) {
      const bytes = new TextEncoder().encode(salt + '::' + password);
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      return Array.from(new Uint8Array(digest))
        .map(b => b.toString(16).padStart(2, '0')).join('');
    },

    async setPassword(password) {
      const salt = Array.from(crypto.getRandomValues(new Uint8Array(16)))
        .map(b => b.toString(16).padStart(2, '0')).join('');
      const hash = await this.hash(password, salt);
      try {
        localStorage.setItem(MANAGER_AUTH_KEY, JSON.stringify({ salt, hash, setAt: new Date().toISOString() }));
      } catch (e) { /* private mode */ }
    },

    async verify(password) {
      const rec = this.record();
      if (!rec || !rec.hash) return false;
      return (await this.hash(password, rec.salt)) === rec.hash;
    }
  };

  /* Signed-in-as-manager state lives for the session only, never persisted. */
  let managerUnlocked = false;

  /*
    Shannon is the root manager: seeded once, cannot be removed or demoted,
    and is the only account that starts with authority to add and remove
    other managers. Her password is not set here — see ManagerAuth above.
  */
  function seedRootManager() {
    if (Profiles.list().some(u => u.root)) return;
    Profiles.create(ROOT_MANAGER, '🦉', { role: 'manager', root: true, activate: false });
  }

  /*
    Nobody loses progress to a rename or to the arrival of profiles. Two
    older shapes get pulled forward, in order:
      1. profiles saved under the previous app name
      2. the single-player record from before profiles existed at all
  */
  function migrateLegacy() {
    if (Profiles.list().length) return;
    if (migrateRenamedProfiles()) return;
    migrateSoloRecord();
  }

  function migrateRenamedProfiles() {
    let old = null;
    try {
      const raw = localStorage.getItem(LEGACY_USERS_KEY);
      if (raw) old = JSON.parse(raw);
    } catch (e) { /* nothing to migrate */ }
    if (!old || !Array.isArray(old.users) || !old.users.length) return false;

    old.users.forEach(u => {
      let progress = defaults();
      try {
        const raw = localStorage.getItem(legacyUserKey(u.id));
        if (raw) progress = Object.assign(defaults(), JSON.parse(raw));
      } catch (e) { /* keep defaults */ }
      Profiles.saveProgress(u.id, progress);
      try { localStorage.removeItem(legacyUserKey(u.id)); } catch (e) { /* ignore */ }
    });

    Profiles.saveIndex({ activeId: old.activeId || null, users: old.users });
    try { localStorage.removeItem(LEGACY_USERS_KEY); } catch (e) { /* ignore */ }
    return true;
  }

  function migrateSoloRecord() {
    let legacy = null;
    try {
      const raw = localStorage.getItem(LEGACY_SOLO_KEY);
      if (raw) legacy = JSON.parse(raw);
    } catch (e) { /* nothing to migrate */ }
    if (!legacy) return;

    let flashKnown = [];
    try { flashKnown = JSON.parse(localStorage.getItem(LEGACY_FLASH_KEY) || '[]'); } catch (e) { /* ignore */ }

    const user = Profiles.create('My progress', '⭐');
    Profiles.saveProgress(user.id, Object.assign(defaults(), legacy, {
      flashKnown: Array.isArray(flashKnown) ? flashKnown : []
    }));
    try {
      localStorage.removeItem(LEGACY_SOLO_KEY);
      localStorage.removeItem(LEGACY_FLASH_KEY);
    } catch (e) { /* ignore */ }
  }

  let store = defaults();

  function save() {
    const id = Profiles.activeId();
    if (id) Profiles.saveProgress(id, store);
  }

  function todayKey() {
    const d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  function yesterdayKey() {
    const d = new Date(Date.now() - 86400000);
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  function touchStreak() {
    const t = todayKey();
    if (store.lastPlayed === t) return;
    store.streak = store.lastPlayed === yesterdayKey() ? store.streak + 1 : 1;
    store.lastPlayed = t;
  }

  function levelOf(xp) { return Math.floor(xp / XP_PER_LEVEL) + 1; }
  function levelName(lv) { return LEVEL_NAMES[Math.min(lv - 1, LEVEL_NAMES.length - 1)]; }

  /* ---------------- sound ---------------- */

  let audioCtx = null;

  function beep(freq, ms, type, gain) {
    if (!store.sound) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const amp = audioCtx.createGain();
      osc.type = type || 'sine';
      osc.frequency.value = freq;
      amp.gain.setValueAtTime(gain == null ? 0.06 : gain, audioCtx.currentTime);
      amp.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + ms / 1000);
      osc.connect(amp).connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + ms / 1000);
    } catch (e) { /* audio unavailable */ }
  }

  const sfx = {
    right() { beep(660, 110, 'sine'); setTimeout(() => beep(880, 150, 'sine'), 90); },
    wrong() { beep(200, 200, 'triangle', 0.05); },
    tap()   { beep(520, 45, 'sine', 0.03); },
    win()   { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => beep(f, 220, 'sine'), i * 110)); }
  };

  /* ---------------- confetti ---------------- */

  const canvas = $('#confetti');
  const ctx = canvas.getContext('2d');
  let pieces = [];
  let rafId = null;

  function sizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  sizeCanvas();
  window.addEventListener('resize', sizeCanvas);

  function confetti(count, originY) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#6C3BF4', '#FF4FA3', '#FFC53D', '#1FD6A6', '#3BC9FF'];
    for (let i = 0; i < (count || 60); i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: (originY == null ? -20 : originY) - Math.random() * 90,
        vx: (Math.random() - 0.5) * 5,
        vy: Math.random() * 3 + 2,
        w: Math.random() * 9 + 5,
        h: Math.random() * 5 + 4,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        color: colors[(Math.random() * colors.length) | 0],
        life: 150
      });
    }
    if (!rafId) rafId = requestAnimationFrame(drawConfetti);
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces = pieces.filter(p => p.life > 0 && p.y < canvas.height + 60);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.rot += p.vr; p.life--;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.min(1, p.life / 40);
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (pieces.length) {
      rafId = requestAnimationFrame(drawConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rafId = null;
    }
  }

  /* ---------------- screen routing ---------------- */

  function show(name) {
    $$('.screen').forEach(s => s.classList.remove('is-active'));
    const target = $('#screen-' + name);
    if (target) target.classList.add('is-active');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  /* ---------------- profile screen ---------------- */

  let pendingAvatar = AVATARS[0];

  function renderProfiles() {
    const grid = $('[data-profile-grid]');
    grid.innerHTML = '';

    Profiles.list().forEach(u => {
      const prog = Profiles.loadProgress(u.id);
      const lv = levelOf(prog.xp);

      const card = el('div', 'profile-card');
      const pick = el('button', 'profile-pick');
      pick.appendChild(el('span', 'profile-emoji', u.emoji));
      pick.appendChild(el('span', 'profile-name', u.name));
      pick.appendChild(el('span', 'profile-meta',
        'Level ' + lv + '  ·  ' + prog.xp.toLocaleString() + ' XP' +
        (prog.streak ? '  ·  🔥 ' + prog.streak : '')));
      pick.addEventListener('click', () => {
        sfx.tap();
        Profiles.select(u.id);
        enterApp();
      });

      const del = el('button', 'profile-del', '✕');
      del.title = 'Remove ' + u.name;
      del.setAttribute('aria-label', 'Remove ' + u.name);
      del.addEventListener('click', e => {
        e.stopPropagation();
        if (!window.confirm('Remove ' + u.name + '? Their progress on this device is deleted and cannot be recovered.')) return;
        Profiles.remove(u.id);
        renderProfiles();
      });

      card.appendChild(pick);
      card.appendChild(del);
      grid.appendChild(card);
    });

    const add = el('button', 'profile-card profile-add');
    add.appendChild(el('span', 'profile-emoji', '＋'));
    add.appendChild(el('span', 'profile-name', 'Add someone'));
    add.addEventListener('click', () => {
      sfx.tap();
      openNewProfile();
    });
    grid.appendChild(add);
  }

  function openNewProfile() {
    pendingAvatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
    const row = $('[data-avatar-row]');
    row.innerHTML = '';
    AVATARS.forEach(a => {
      const b = el('button', 'avatar-opt' + (a === pendingAvatar ? ' active' : ''), a);
      b.addEventListener('click', () => {
        pendingAvatar = a;
        $$('.avatar-opt', row).forEach(x => x.classList.toggle('active', x.textContent === a));
      });
      row.appendChild(b);
    });
    $('[data-profile-new]').hidden = false;
    const input = $('[data-profile-name]');
    input.value = '';
    input.focus();
  }

  function createProfile() {
    const input = $('[data-profile-name]');
    const name = input.value.trim();
    if (!name) { input.focus(); return; }
    sfx.tap();
    Profiles.create(name, pendingAvatar);
    $('[data-profile-new]').hidden = true;
    enterApp();
  }

  /* Load the active profile's progress and hand over to the app proper. */
  function enterApp() {
    const id = Profiles.activeId();
    store = Profiles.loadProgress(id);
    knownSet = new Set(store.flashKnown || []);
    syncSoundButton();
    renderHome();
    show('home');
  }

  function renderUserChip() {
    const u = Profiles.active();
    $('[data-user-emoji]').textContent = u ? u.emoji : '👤';
    $('#userBtn').title = u ? 'Signed in as ' + u.name + ' — tap to switch' : 'Pick a profile';
  }

  /* ---------------- user dropdown ---------------- */

  function closeUserMenu() {
    $('[data-usermenu]').hidden = true;
    $('#userBtn').setAttribute('aria-expanded', 'false');
  }

  function toggleUserMenu() {
    const pop = $('[data-usermenu]');
    if (pop.hidden) { renderUserMenu(); pop.hidden = false; $('#userBtn').setAttribute('aria-expanded', 'true'); }
    else closeUserMenu();
  }

  function renderUserMenu() {
    const active = Profiles.active();
    $('[data-usermenu-current]').textContent = active
      ? active.emoji + '  ' + active.name + (active.role === 'manager' ? '  · manager' : '')
      : 'Nobody yet';

    const list = $('[data-usermenu-list]');
    list.innerHTML = '';
    Profiles.list()
      .filter(u => !active || u.id !== active.id)
      .forEach(u => {
        const item = el('button', 'usermenu-item');
        item.appendChild(el('span', 'usermenu-item-icon', u.emoji));
        item.appendChild(el('span', null, u.name));
        if (u.role === 'manager') item.appendChild(el('span', 'usermenu-tag', 'manager'));
        item.addEventListener('click', () => {
          sfx.tap();
          Profiles.select(u.id);
          managerUnlocked = false;      // switching people drops manager access
          closeUserMenu();
          enterApp();
        });
        list.appendChild(item);
      });

    $('[data-manager-label]').textContent = managerUnlocked ? 'Team & managers' : 'Manager sign-in';
  }

  /* ---------------- manager area ---------------- */

  function openManager() {
    if (managerUnlocked) { renderManager(); show('manager'); return; }
    const configured = ManagerAuth.isConfigured();
    $('[data-auth-title]').textContent = configured ? 'Manager sign-in' : 'Set a manager password';
    $('[data-auth-sub]').textContent = configured
      ? 'Managers can add and remove other managers and see the team roster.'
      : 'No manager password has been set on this device yet. Choose one now — it unlocks the manager view here.';
    $('[data-auth-submit]').textContent = configured ? 'Sign in' : 'Set password';
    $('[data-auth-password]').value = '';
    $('[data-auth-password]').setAttribute('autocomplete', configured ? 'current-password' : 'new-password');
    $('[data-auth-error]').hidden = true;
    show('manager-auth');
    setTimeout(() => $('[data-auth-password]').focus(), 80);
  }

  async function submitManagerAuth() {
    const input = $('[data-auth-password]');
    const err = $('[data-auth-error]');
    const value = input.value;

    if (!value) { input.focus(); return; }

    if (!ManagerAuth.isConfigured()) {
      if (value.length < 4) {
        err.textContent = 'Use at least four characters.';
        err.hidden = false;
        return;
      }
      await ManagerAuth.setPassword(value);
      managerUnlocked = true;
      sfx.right();
      renderManager();
      show('manager');
      return;
    }

    if (await ManagerAuth.verify(value)) {
      managerUnlocked = true;
      sfx.right();
      renderManager();
      show('manager');
    } else {
      err.textContent = 'That password does not match.';
      err.hidden = false;
      input.value = '';
      input.focus();
      sfx.wrong();
    }
  }

  function rosterCard(u) {
    const card = el('div', 'roster-row');

    const who = el('div', 'roster-who');
    who.appendChild(el('span', 'roster-emoji', u.emoji));
    const text = el('div', 'roster-text');
    text.appendChild(el('b', null, u.name));
    const prog = Profiles.loadProgress(u.id);
    text.appendChild(el('span', null,
      'Level ' + levelOf(prog.xp) + '  ·  ' + prog.xp.toLocaleString() + ' XP' +
      (u.root ? '  ·  root manager' : '')));
    who.appendChild(text);
    card.appendChild(who);

    const actions = el('div', 'roster-actions');

    if (!u.root) {
      const toggle = el('button', 'btn ghost roster-btn',
        u.role === 'manager' ? 'Make associate' : 'Make manager');
      toggle.addEventListener('click', () => {
        sfx.tap();
        Profiles.update(u.id, { role: u.role === 'manager' ? 'associate' : 'manager' });
        renderManager();
        renderUserChip();
      });
      actions.appendChild(toggle);

      const del = el('button', 'btn ghost roster-btn danger', 'Remove');
      del.addEventListener('click', () => {
        if (!window.confirm('Remove ' + u.name + '? Their progress on this device is deleted and cannot be recovered.')) return;
        Profiles.remove(u.id);
        if (!Profiles.activeId()) {
          /* Removed whoever was signed in — fall back to the profile picker. */
          renderProfiles();
          show('profiles');
          return;
        }
        renderManager();
      });
      actions.appendChild(del);
    } else {
      actions.appendChild(el('span', 'roster-locked', 'Cannot be removed'));
    }

    card.appendChild(actions);
    return card;
  }

  function renderManager() {
    const mgr = $('[data-manager-roster]');
    const assoc = $('[data-associate-roster]');
    mgr.innerHTML = '';
    assoc.innerHTML = '';

    const managers = Profiles.list().filter(u => u.role === 'manager');
    const associates = Profiles.list().filter(u => u.role !== 'manager');

    managers.forEach(u => mgr.appendChild(rosterCard(u)));
    if (!associates.length) {
      assoc.appendChild(el('p', 'roster-empty', 'No associates on this device yet.'));
    } else {
      associates.forEach(u => assoc.appendChild(rosterCard(u)));
    }
  }

  /* ---------------- home screen rendering ---------------- */

  function renderHome() {
    const lv = levelOf(store.xp);
    const into = store.xp % XP_PER_LEVEL;

    $('[data-streak]').textContent = store.streak;
    $('[data-xp]').textContent = store.xp.toLocaleString();
    $('[data-level]').textContent = lv;
    $('[data-level-name]').textContent = levelName(lv);
    $('[data-level-fill]').style.width = (into / XP_PER_LEVEL * 100) + '%';
    $('[data-xp-to-go]').textContent = XP_PER_LEVEL - into;

    renderMastery();
    renderBadges();
    renderUserChip();
  }

  function renderMastery() {
    const wrap = $('[data-mastery]');
    wrap.innerHTML = '';
    const colors = {
      history: '#FF4FA3', style: '#FFC53D', materials: '#3BC9FF',
      designer: '#6C3BF4', knowhow: '#1FD6A6', photo: '#FF8A3D'
    };

    Object.keys(TOPICS).forEach(id => {
      const t = TOPICS[id];
      const s = store.topics[id] || { seen: 0, correct: 0 };
      const pct = s.seen ? Math.round(s.correct / s.seen * 100) : 0;
      const circ = 2 * Math.PI * 20;

      const card = el('div', 'm-card');
      const ring = el('div', 'm-ring');
      ring.innerHTML =
        '<svg viewBox="0 0 46 46">' +
          '<circle class="bg" cx="23" cy="23" r="20"></circle>' +
          '<circle class="fg" cx="23" cy="23" r="20" style="stroke:' + colors[id] +
            ';stroke-dasharray:' + circ.toFixed(1) +
            ';stroke-dashoffset:' + (circ * (1 - pct / 100)).toFixed(1) + '"></circle>' +
        '</svg>' +
        '<span class="m-emoji">' + t.emoji + '</span>';

      const text = el('div', 'm-text');
      text.appendChild(el('b', null, t.label));
      text.appendChild(el('span', null, s.seen ? pct + '% · ' + s.seen + ' seen' : 'Not started'));

      card.appendChild(ring);
      card.appendChild(text);
      wrap.appendChild(card);
    });
  }

  function renderBadges() {
    const wrap = $('[data-badges]');
    wrap.innerHTML = '';
    BADGES.forEach(b => {
      const owned = store.badges.includes(b.id);
      const node = el('div', 'badge' + (owned ? '' : ' locked'));
      node.appendChild(el('span', 'badge-emoji', owned ? b.emoji : '🔒'));
      node.appendChild(el('span', 'badge-name', b.name));
      node.appendChild(el('span', 'badge-req', b.req));
      wrap.appendChild(node);
    });
  }

  function grant(id) {
    if (store.badges.includes(id)) return null;
    store.badges.push(id);
    return BADGES.find(b => b.id === id);
  }

  /* ---------------- session state ---------------- */

  let session = null;
  let pendingMode = null;
  let pendingTopics = null;

  function startSprint(topics) {
    session = {
      mode: 'sprint',
      topics: topics || null,
      deck: buildDeck(SPRINT_QUESTIONS, topics),
      i: 0,
      correct: 0,
      xp: 0,
      combo: 0,
      bestCombo: 0,
      missed: [],
      timed: true
    };
    renderQuestion();
    show('quiz');
  }

  function startDive(minutes, topics) {
    const chapters = minutes === 60 ? 7 : 4;
    const perChapter = minutes === 60 ? 7 : 6;
    session = {
      mode: 'dive',
      minutes,
      topics: topics || null,
      chapters: buildChapters(chapters, perChapter, topics),
      chapter: 0,
      card: 0,
      deck: [],
      i: 0,
      correct: 0,
      total: 0,
      xp: 0,
      combo: 0,
      bestCombo: 0,
      missed: [],
      timed: false
    };
    openChapter(0);
  }

  /* ---------------- quiz topic picker ---------------- */

  function renderTopicPicks() {
    const wrap = $('[data-topic-picks]');
    wrap.innerHTML = '';
    Object.keys(TOPICS).forEach(id => {
      const t = TOPICS[id];
      const label = el('label', 'topic-pick');
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.value = id;
      cb.checked = true;
      label.appendChild(cb);
      label.appendChild(el('span', 'topic-pick-emoji', t.emoji));
      label.appendChild(el('span', 'topic-pick-label', t.label));
      wrap.appendChild(label);
    });
  }

  function selectedTopics() {
    const ids = $$('[data-topic-picks] input:checked').map(b => b.value);
    return ids.length ? ids : Object.keys(TOPICS);
  }

  /* ---------------- product gallery ---------------- */

  let activeGroup = 'all';

  function renderGroupChips() {
    const wrap = $('[data-group-chips]');
    wrap.innerHTML = '';

    const groups = [{ id: 'all', label: 'Everything', emoji: '✨', count: PRODUCTS.length }]
      .concat(activeGroups());

    groups.forEach(g => {
      const chip = el('button', 'group-chip' + (g.id === activeGroup ? ' active' : ''));
      chip.appendChild(el('span', 'group-chip-emoji', g.emoji));
      chip.appendChild(el('span', null, g.label));
      chip.appendChild(el('span', 'group-chip-count', String(g.count)));
      chip.addEventListener('click', () => {
        sfx.tap();
        activeGroup = g.id;
        renderGroupChips();
        renderGallery();
      });
      wrap.appendChild(chip);
    });
  }

  function galleryProducts() {
    const list = activeGroup === 'all'
      ? PRODUCTS.slice()
      : PRODUCTS.filter(p => groupIdOf(p) === activeGroup);
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }

  function renderGallery() {
    const wrap = $('[data-gallery]');
    wrap.innerHTML = '';
    const list = galleryProducts();

    $('[data-group-count]').textContent =
      list.length + (list.length === 1 ? ' piece' : ' pieces');

    list.forEach(p => {
      const card = el('button', 'gallery-card');
      if (p.photo) {
        const img = document.createElement('img');
        img.src = p.photo;
        img.alt = p.name;
        img.loading = 'lazy';
        img.className = 'gallery-photo';
        card.appendChild(img);
      } else {
        card.appendChild(el('div', 'gallery-noimg', '🪑'));
      }
      const info = el('div', 'gallery-info');
      info.appendChild(el('b', null, p.name));
      info.appendChild(el('span', null, p.designer + ' · ' + p.manufacturer));
      card.appendChild(info);
      card.addEventListener('click', () => {
        sfx.tap();
        renderProduct(p);
        show('product');
      });
      wrap.appendChild(card);
    });
  }

  function renderProduct(p) {
    const wrap = $('[data-product-detail]');
    wrap.innerHTML = '';

    if (p.photo) {
      const shot = el('div', 'detail-photo');
      const img = document.createElement('img');
      img.src = p.photo;
      img.alt = p.name;
      shot.appendChild(img);
      wrap.appendChild(shot);
    }

    wrap.appendChild(el('h1', 'detail-title', p.name));
    wrap.appendChild(el('p', 'detail-sub',
      p.designer + '  ·  ' + p.manufacturer + (p.year == null ? '' : '  ·  ' + p.year)));

    const chips = el('div', 'chips');
    [p.category, p.style, p.origin].forEach(c => chips.appendChild(el('span', 'chip', c)));
    wrap.appendChild(chips);

    wrap.appendChild(el('p', 'detail-known', 'Known for ' + p.knownFor + '.'));
    wrap.appendChild(el('p', 'detail-body', p.history));

    wrap.appendChild(el('h2', 'detail-label', 'Worth remembering'));
    const ul = el('ul', 'about-list');
    p.facts.forEach(f => ul.appendChild(el('li', null, f)));
    wrap.appendChild(ul);

    wrap.appendChild(el('h2', 'detail-label', 'Materials'));
    const mats = el('div', 'chips');
    p.materials.forEach(m => mats.appendChild(el('span', 'chip', m)));
    wrap.appendChild(mats);
  }

  /* ---------------- flashcards ---------------- */

  /* Mirrors store.flashKnown for fast lookup; written back through save(). */
  let knownSet = new Set();

  function saveKnown() {
    store.flashKnown = Array.from(knownSet);
    save();
  }

  let flash = null;

  function startFlash() {
    flash = { order: shuffle(PRODUCTS), i: 0, flipped: false };
    renderFlash();
    show('flash');
  }

  function renderFlash() {
    const p = flash.order[flash.i];
    $('[data-flash-count]').textContent = (flash.i + 1) + '/' + flash.order.length;
    $('[data-flash-progress]').style.width = (flash.i / flash.order.length * 100) + '%';

    const wrap = $('[data-flash-card]');
    wrap.innerHTML = '';

    const card = el('div', 'flashcard' + (flash.flipped ? ' is-flipped' : ''));

    const front = el('div', 'flash-face flash-front');
    if (p.photo) {
      const img = document.createElement('img');
      img.src = p.photo;
      img.alt = '';
      img.className = 'flash-photo';
      front.appendChild(img);
    } else {
      front.appendChild(el('div', 'flash-noimg', '🪑'));
    }
    front.appendChild(el('p', 'flash-hint', 'Tap to reveal'));

    const back = el('div', 'flash-face flash-back');
    back.appendChild(el('h3', null, p.name));
    back.appendChild(el('p', 'flash-sub',
      p.designer + ' · ' + p.manufacturer + (p.year == null ? '' : ' · est. ' + p.year)));
    back.appendChild(el('p', 'flash-body', p.history));
    const chips = el('div', 'chips');
    [p.category, p.style].forEach(c => chips.appendChild(el('span', 'chip', c)));
    back.appendChild(chips);

    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', flipFlash);
    wrap.appendChild(card);

    $('[data-flash-prev]').disabled = flash.i === 0;
    $('[data-flash-known]').classList.toggle('active', knownSet.has(p.id));
  }

  function flipFlash() {
    flash.flipped = !flash.flipped;
    sfx.tap();
    renderFlash();
  }

  function flashNext() {
    sfx.tap();
    if (flash.i < flash.order.length - 1) {
      flash.i++;
      flash.flipped = false;
      renderFlash();
    } else {
      quit();
    }
  }

  function flashPrev() {
    if (flash.i > 0) {
      sfx.tap();
      flash.i--;
      flash.flipped = false;
      renderFlash();
    }
  }

  function markFlash(known) {
    const p = flash.order[flash.i];
    if (known) knownSet.add(p.id); else knownSet.delete(p.id);
    saveKnown();
    flashNext();
  }

  function openChapter(index) {
    session.chapter = index;
    session.card = 0;
    session.deck = session.chapters[index].questions;
    session.i = 0;
    renderLearnCard();
    show('learn');
  }

  /* ---------------- learn cards ---------------- */

  function renderLearnCard() {
    const ch = session.chapters[session.chapter];
    const card = ch.cards[session.card];

    $('[data-chapter-pill]').textContent =
      'Chapter ' + (session.chapter + 1) + ' of ' + session.chapters.length;
    $('[data-card-count]').textContent = (session.card + 1) + ' / ' + ch.cards.length;

    const wrap = $('[data-learn-card]');
    wrap.innerHTML = '';

    const node = el('article', 'lcard');
    node.appendChild(el('span', 'lcard-kind', card.kind === 'product' ? 'Product profile' : 'Know the term'));
    node.appendChild(el('h3', null, card.title));
    node.appendChild(el('p', 'lcard-sub', card.subtitle));
    node.appendChild(el('p', 'lcard-body', card.body));

    if (card.bullets && card.bullets.length) {
      const ul = el('ul');
      card.bullets.forEach(b => ul.appendChild(el('li', null, b)));
      node.appendChild(ul);
    }
    if (card.chips && card.chips.length) {
      const chips = el('div', 'chips');
      card.chips.forEach(c => chips.appendChild(el('span', 'chip', c)));
      node.appendChild(chips);
    }
    wrap.appendChild(node);

    $('[data-learn-prev]').disabled = session.card === 0 && session.chapter === 0;
    $('[data-learn-next]').textContent =
      session.card === ch.cards.length - 1 ? 'Quiz me →' : 'Next';
  }

  function learnNext() {
    const ch = session.chapters[session.chapter];
    sfx.tap();
    if (session.card < ch.cards.length - 1) {
      session.card++;
      renderLearnCard();
    } else {
      renderQuestion();
      show('quiz');
    }
  }

  function learnPrev() {
    sfx.tap();
    if (session.card > 0) {
      session.card--;
      renderLearnCard();
    } else if (session.chapter > 0) {
      openChapter(session.chapter - 1);
    }
  }

  /* ---------------- quiz ---------------- */

  let timerId = null;
  let timeLeft = 0;

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
    $('[data-timer]').hidden = true;
    $('[data-timer]').classList.remove('warn');
  }

  function startTimer() {
    const box = $('[data-timer]');
    const ring = $('[data-ring]');
    const num = $('[data-timer-num]');
    const circ = 2 * Math.PI * 17;

    timeLeft = SPRINT_SECONDS;
    box.hidden = false;
    box.classList.remove('warn');
    ring.style.strokeDasharray = circ.toFixed(1);
    ring.style.strokeDashoffset = '0';
    num.textContent = timeLeft;

    timerId = setInterval(() => {
      timeLeft--;
      num.textContent = Math.max(0, timeLeft);
      ring.style.strokeDashoffset = (circ * (1 - timeLeft / SPRINT_SECONDS)).toFixed(1);
      if (timeLeft <= 5) box.classList.add('warn');
      if (timeLeft <= 0) {
        stopTimer();
        answer(null);
      }
    }, 1000);
  }

  function currentQuestion() {
    return session.deck[session.i];
  }

  function renderQuestion() {
    const q = currentQuestion();
    const total = session.deck.length;

    $('[data-quiz-progress]').style.width = (session.i / total * 100) + '%';
    $('[data-q-count]').textContent = (session.i + 1) + '/' + total;
    $('[data-q-topic]').textContent = TOPICS[q.topic].emoji + '  ' + TOPICS[q.topic].label;
    $('[data-q-prompt]').textContent = q.prompt;
    $('[data-feedback]').hidden = true;

    const photoBox = $('[data-q-photo]');
    if (q.image) {
      photoBox.hidden = false;
      $('[data-q-photo-img]').src = q.image;
    } else {
      photoBox.hidden = true;
    }

    const combo = $('[data-combo]');
    if (session.combo >= 2) {
      combo.hidden = false;
      $('[data-combo-val]').textContent = session.combo;
    } else {
      combo.hidden = true;
    }

    const box = $('[data-answers]');
    box.innerHTML = '';
    box.className = 'answers' + (q.type === 'truefalse' ? ' tf' : '');

    if (q.type === 'choice') {
      const keys = ['A', 'B', 'C', 'D'];
      q.options.forEach((opt, idx) => {
        const b = el('button', 'ans');
        b.appendChild(el('span', 'ans-key', keys[idx]));
        b.appendChild(el('span', null, opt));
        b.addEventListener('click', () => answer(idx));
        box.appendChild(b);
      });
    } else if (q.type === 'truefalse') {
      [['True', '👍', true], ['False', '👎', false]].forEach(pair => {
        const b = el('button', 'ans');
        b.appendChild(el('span', 'ans-key', pair[1]));
        b.appendChild(el('span', null, pair[0]));
        b.addEventListener('click', () => answer(pair[2]));
        box.appendChild(b);
      });
    } else if (q.type === 'year') {
      const mid = Math.round((q.range[0] + q.range[1]) / 2);
      const wrap = el('div', 'yearbox');
      const val = el('div', 'year-val', String(mid));

      const slider = document.createElement('input');
      slider.type = 'range';
      slider.className = 'year-slider';
      slider.min = q.range[0];
      slider.max = q.range[1];
      slider.step = 1;
      slider.value = mid;
      slider.setAttribute('aria-label', 'Choose a year');
      slider.addEventListener('input', () => { val.textContent = slider.value; });

      const ends = el('div', 'year-ends');
      ends.appendChild(el('span', null, String(q.range[0])));
      ends.appendChild(el('span', null, String(q.range[1])));

      const lock = el('button', 'btn primary wide', 'Lock it in');
      lock.style.marginTop = '18px';
      lock.addEventListener('click', () => answer(parseInt(slider.value, 10)));

      wrap.appendChild(val);
      wrap.appendChild(slider);
      wrap.appendChild(ends);
      wrap.appendChild(lock);
      wrap.appendChild(el('p', 'year-hint', 'Within five years still counts.'));
      box.appendChild(wrap);
    }

    if (session.timed) startTimer();
  }

  function answer(given) {
    stopTimer();
    const q = currentQuestion();
    let right = false;
    let exact = false;

    if (q.type === 'choice')      right = given === q.answer;
    else if (q.type === 'truefalse') right = given === q.answer;
    else if (q.type === 'year') {
      const gap = given == null ? 999 : Math.abs(given - q.answer);
      right = gap <= 5;
      exact = gap === 0;
    }

    /* lock the buttons and paint the result */
    const buttons = $$('.ans', $('[data-answers]'));
    buttons.forEach((b, idx) => {
      b.disabled = true;
      const isCorrect =
        (q.type === 'choice' && idx === q.answer) ||
        (q.type === 'truefalse' && ((idx === 0) === q.answer));
      if (isCorrect) b.classList.add('right');
      else if (given === idx || (q.type === 'truefalse' && given === (idx === 0))) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    $$('.year-slider, .yearbox .btn').forEach(n => { n.disabled = true; });

    /* score it */
    const stat = store.topics[q.topic] || { seen: 0, correct: 0 };
    stat.seen++;

    if (right) {
      session.correct++;
      session.combo++;
      session.bestCombo = Math.max(session.bestCombo, session.combo);
      stat.correct++;
      const base = 10 + (exact ? 5 : 0);
      const speedBonus = session.timed ? Math.max(0, Math.round(timeLeft / 2)) : 0;
      const mult = Math.min(3, 1 + (session.combo - 1) * 0.25);
      session.xp += Math.round((base + speedBonus) * mult);
      sfx.right();
      if (session.combo >= 3) confetti(18, window.innerHeight * 0.35);
    } else {
      session.combo = 0;
      session.missed.push(q);
      sfx.wrong();
      if (navigator.vibrate) { try { navigator.vibrate(35); } catch (e) {} }
    }
    store.topics[q.topic] = stat;

    /* feedback panel */
    const head = $('[data-feedback-head]');
    head.className = 'feedback-head ' + (right ? 'good' : 'bad');
    if (right) {
      const cheers = ['Nailed it', 'Correct', 'That is the one', 'Sharp', 'Locked in'];
      head.textContent = cheers[(Math.random() * cheers.length) | 0] +
        (session.combo >= 3 ? '  ·  ' + session.combo + '× combo 🔥' : '');
    } else {
      head.textContent = given === null ? 'Time is up' : 'Not quite';
    }
    $('[data-feedback-why]').textContent = q.why;
    $('[data-next]').textContent =
      session.i === session.deck.length - 1 ? 'See how you did →' : 'Keep going →';
    $('[data-feedback]').hidden = false;
    $('[data-feedback]').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  function nextQuestion() {
    sfx.tap();
    session.i++;
    if (session.i < session.deck.length) {
      renderQuestion();
      return;
    }
    /* end of this deck */
    if (session.mode === 'dive') {
      session.total += session.deck.length;
      if (session.chapter < session.chapters.length - 1) {
        openChapter(session.chapter + 1);
        return;
      }
    }
    finish();
  }

  /* ---------------- results ---------------- */

  function finish() {
    stopTimer();

    const total = session.mode === 'dive' ? session.total : session.deck.length;
    const pct = total ? Math.round(session.correct / total * 100) : 0;

    touchStreak();
    store.xp += session.xp;
    store.sessions++;

    const earned = [];
    let b;
    if ((b = grant('first'))) earned.push(b);
    if (store.streak >= 3 && (b = grant('streak3'))) earned.push(b);
    if (store.streak >= 7 && (b = grant('streak7'))) earned.push(b);
    if (session.bestCombo >= 5 && (b = grant('combo5'))) earned.push(b);
    if (pct === 100 && (b = grant('perfect'))) earned.push(b);
    if (session.mode === 'dive' && session.minutes === 30 && (b = grant('dive30'))) earned.push(b);
    if (session.mode === 'dive' && session.minutes === 60 && (b = grant('dive60'))) earned.push(b);
    if (store.xp >= 1000 && (b = grant('xp1000'))) earned.push(b);

    save();

    /* headline */
    let emoji, title, sub;
    if (pct === 100)      { emoji = '🏆'; title = 'Perfect run!'; sub = 'Every single one. Go tell somebody.'; }
    else if (pct >= 80)   { emoji = '🎉'; title = 'Strong session'; sub = 'You know this floor. A couple to tighten up below.'; }
    else if (pct >= 60)   { emoji = '💪'; title = 'Solid progress'; sub = 'Good base. The misses below are the fastest wins.'; }
    else                  { emoji = '🌱'; title = 'Good start'; sub = 'This is exactly what practice is for. Run it again.'; }

    $('[data-result-emoji]').textContent = emoji;
    $('[data-result-title]').textContent = title;
    $('[data-result-sub]').textContent = sub;
    $('[data-result-correct]').textContent = session.correct + '/' + total;
    $('[data-result-xp]').textContent = '+' + session.xp;
    $('[data-result-best]').textContent = session.bestCombo + '×';

    /* score ring animates from empty */
    const ring = $('[data-score-ring]');
    const circ = 2 * Math.PI * 52;
    ring.style.strokeDasharray = circ.toFixed(1);
    ring.style.strokeDashoffset = circ.toFixed(1);
    ring.style.stroke = pct >= 80 ? '#1FD6A6' : pct >= 60 ? '#FFC53D' : '#FF4FA3';
    $('[data-score-pct]').textContent = '0';

    /* unlocked badges */
    const unlocked = $('[data-unlocked]');
    if (earned.length) {
      unlocked.hidden = false;
      unlocked.innerHTML = '';
      unlocked.appendChild(el('b', null, 'Badge unlocked!'));
      unlocked.appendChild(el('span', null,
        earned.map(x => x.emoji + ' ' + x.name).join('   ·   ')));
    } else {
      unlocked.hidden = true;
    }

    /* review list */
    const review = $('[data-review]');
    review.innerHTML = '';
    if (!session.missed.length) {
      review.appendChild(el('div', 'rev-empty', 'Nothing missed. Clean sheet. 🧼'));
    } else {
      session.missed.slice(0, 6).forEach(q => {
        const item = el('div', 'rev-item');
        item.appendChild(el('p', 'rev-q', q.prompt));
        const a = el('p', 'rev-a');
        let correctText;
        if (q.type === 'choice') correctText = q.options[q.answer];
        else if (q.type === 'truefalse') correctText = q.answer ? 'True' : 'False';
        else correctText = String(q.answer);
        a.innerHTML = '<b>' + escapeHtml(correctText) + '</b> — ' + escapeHtml(q.why);
        item.appendChild(a);
        review.appendChild(item);
      });
    }

    show('results');
    renderHome();

    /* animate the ring and the counter after the screen paints */
    setTimeout(() => {
      ring.style.strokeDashoffset = (circ * (1 - pct / 100)).toFixed(1);
      countUp($('[data-score-pct]'), pct, 1100);
    }, 120);

    if (pct >= 80) { confetti(140); sfx.win(); }
    bump($('[data-xp]'));
  }

  function countUp(node, to, ms) {
    const start = performance.now();
    function step(now) {
      const p = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function bump(node) {
    node.classList.remove('bump');
    void node.offsetWidth;
    node.classList.add('bump');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  /* ---------------- quit guard ---------------- */

  function quit() {
    stopTimer();
    session = null;
    renderHome();
    show('home');
  }

  /* ---------------- wiring ---------------- */

  $('#homeBtn').addEventListener('click', quit);

  $('#aboutBtn').addEventListener('click', () => show('about'));
  $$('[data-show-about]').forEach(b => b.addEventListener('click', () => show('about')));

  $('#galleryBtn').addEventListener('click', () => { openGallery(); });

  function openGallery() {
    renderGroupChips();
    renderGallery();
    show('gallery');
  }

  $('[data-back-gallery]').addEventListener('click', () => show('gallery'));

  $('#userBtn').addEventListener('click', e => {
    e.stopPropagation();
    sfx.tap();
    toggleUserMenu();
  });

  $('[data-usermenu]').addEventListener('click', e => e.stopPropagation());
  document.addEventListener('click', () => {
    if (!$('[data-usermenu]').hidden) closeUserMenu();
  });

  $('[data-usermenu-add]').addEventListener('click', () => {
    sfx.tap();
    closeUserMenu();
    renderProfiles();
    show('profiles');
    openNewProfile();
  });

  $('[data-usermenu-manager]').addEventListener('click', () => {
    sfx.tap();
    closeUserMenu();
    openManager();
  });

  $('[data-auth-submit]').addEventListener('click', submitManagerAuth);
  $('[data-auth-password]').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); submitManagerAuth(); }
  });

  $('[data-manager-signout]').addEventListener('click', () => {
    sfx.tap();
    managerUnlocked = false;
    show('home');
  });

  $('[data-manager-change-pw]').addEventListener('click', async () => {
    const next = window.prompt('New manager password (at least four characters):');
    if (next == null) return;
    if (next.trim().length < 4) { window.alert('Password not changed — it needs at least four characters.'); return; }
    await ManagerAuth.setPassword(next.trim());
    window.alert('Manager password updated on this device.');
  });

  $('[data-profile-create]').addEventListener('click', createProfile);
  $('[data-profile-cancel]').addEventListener('click', () => {
    $('[data-profile-new]').hidden = true;
  });
  $('[data-profile-name]').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); createProfile(); }
  });

  $$('[data-start]').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.tap();
      if (btn.dataset.start === 'flash') { startFlash(); return; }
      pendingMode = btn.dataset.start;
      renderTopicPicks();
      show('topics');
    });
  });

  $('[data-topics-continue]').addEventListener('click', () => {
    sfx.tap();
    const topics = selectedTopics();
    if (pendingMode === 'sprint') {
      startSprint(topics);
    } else {
      pendingTopics = topics;
      show('setup');
    }
  });

  $('[data-back-topics]').addEventListener('click', () => show('topics'));

  $$('[data-length]').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.tap();
      startDive(parseInt(btn.dataset.length, 10), pendingTopics);
    });
  });

  $$('[data-back]').forEach(b => b.addEventListener('click', quit));
  $$('[data-quit]').forEach(b => b.addEventListener('click', quit));
  $('[data-next]').addEventListener('click', nextQuestion);
  $('[data-learn-next]').addEventListener('click', learnNext);
  $('[data-learn-prev]').addEventListener('click', learnPrev);
  $('[data-home]').addEventListener('click', quit);

  $('[data-flash-prev]').addEventListener('click', flashPrev);
  $('[data-flash-next]').addEventListener('click', flashNext);
  $('[data-flash-known]').addEventListener('click', () => markFlash(true));
  $('[data-flash-unknown]').addEventListener('click', () => markFlash(false));

  $('[data-again]').addEventListener('click', () => {
    sfx.tap();
    if (!session) { startSprint(null); return; }
    if (session.mode === 'sprint') startSprint(session.topics);
    else startDive(session.minutes, session.topics);
  });

  const soundBtn = $('#soundBtn');
  soundBtn.addEventListener('click', () => {
    store.sound = !store.sound;
    save();
    syncSoundButton();
    if (store.sound) sfx.tap();
  });

  function syncSoundButton() {
    $('[data-sound-icon]').textContent = store.sound ? '🔊' : '🔇';
    soundBtn.setAttribute('aria-pressed', String(store.sound));
  }

  /* keyboard: 1-4 to answer, enter to advance */
  document.addEventListener('keydown', e => {
    if (!$('#screen-quiz').classList.contains('is-active')) return;
    const fb = $('[data-feedback]');
    if (!fb.hidden) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); nextQuestion(); }
      return;
    }
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 4) {
      const btns = $$('.ans', $('[data-answers]'));
      if (btns[n - 1]) btns[n - 1].click();
    }
  });

  /* ---------------- boot ---------------- */

  migrateLegacy();
  seedRootManager();

  if (Profiles.activeId()) {
    enterApp();
  } else {
    /* No one picked yet: the profile screen is the front door. */
    syncSoundButton();
    renderProfiles();
    /* Only Shannon exists on a brand new device, so open the add form too. */
    if (Profiles.list().every(u => u.root)) openNewProfile();
    show('profiles');
  }

})();
