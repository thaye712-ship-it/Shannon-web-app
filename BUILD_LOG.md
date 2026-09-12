# Build Log

Chronological record of what changed and when. Newest entry on top. Every
commit that changes the live site should get an entry here in the same
pull request or push.

Live site: https://thaye712-ship-it.github.io/Shannon-web-app/
Deploy: GitHub Pages, served directly from the `main` branch root (no build
step). A change is live within a few minutes of landing on `main`.

---

## 2026-09-12 — Real DWR catalog (first batch) merged, purpose doc added

- Merged branch `claude/friendly-dijkstra-nuqtk7`: replaced the sample
  brand data with a first batch of **30 real Design Within Reach products**
  (Eames, Saarinen, Bertoia, Jacobsen, Le Corbusier, Wegner and others),
  researched from published design history — dwr.com was not reachable
  from that build environment, so nothing was scraped from the live site.
  Roughly a quarter of the eventual catalog; more can be appended to
  `js/data.js` in the same shape.
- Reworked the question engine and app copy from brand-based topics
  (origin/history/lineup/family) to product-based topics (history, style,
  materials, designer, know-how).
- Refreshed the construction/materials vocabulary deck (14 terms) to match
  DWR's modern-design assortment (cantilever frames, molded plywood, cane
  webbing, tubular steel, powder coating, outdoor teak) in place of
  mattress- and recliner-specific terms.
- Added `PURPOSE.md` documenting who the app is for, what it teaches, how
  it's meant to be used, and current status/limitations.
- Added this build log to track future changes.

Verified after merge: all three JS files pass a syntax check, catalog
loads 30 products + 14 know-how entries, no merge conflicts.

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
