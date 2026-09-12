# Build Log

Chronological record of what changed and when. Newest entry on top. Every
commit that changes the live site should get an entry here in the same
pull request or push.

Live site: https://thaye712-ship-it.github.io/Shannon-web-app/
Deploy: GitHub Pages, served directly from the `main` branch root (no build
step). A change is live within a few minutes of landing on `main`.

---

## 2026-09-12 — Build log added

- Added this file to track future changes.
- No functional or content changes to the app.

Branch: `claude/site-changes-build-log-m4xymb`

---

## 2026-09-10 — Shannon product knowledge training app

Initial build of the app, replacing the placeholder README-only repo.

- Added `index.html`, `css/style.css`, `js/app.js`, `js/questions.js`,
  `js/data.js`.
- Two session modes: **Morning Sprint** (5 min, 8 timed questions, combo
  multiplier, daily streak) and **Deep Dive** (30 or 60 min, chapter-based,
  learn cards before quizzing).
- Four question formats: multiple choice, true/false, founding-year slider,
  brand matching.
- Progress (XP, level, streak, badges, mastery) stored client-side in
  `localStorage` under `shannon.progress.v1`. No server, no account.
- Catalog data in `js/data.js` is **placeholder brand data** — not the real
  catalog, not for customer-facing use.

Commit: `b4bfcf4`

---

## 2026-09-09 — Initial commit

- Repo created with a one-line `README.md`.

Commit: `eda8a06`
