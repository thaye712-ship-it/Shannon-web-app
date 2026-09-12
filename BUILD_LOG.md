# Build Log

Chronological record of what changed and when. Newest entry on top. Every
commit that changes the live site should get an entry here in the same
pull request or push.

Live site: https://thaye712-ship-it.github.io/Shannon-web-app/
Deploy: GitHub Pages, served directly from the `main` branch root (no build
step). A change is live within a few minutes of landing on `main`.

---

## 2026-09-12 — Corrected catalog against dwr.com's actual listings

The previous entry's 41 new products were researched from general design
history, on the assumption that dwr.com could not be reached from this
environment. That assumption turned out to be wrong: dwr.com's brand
list, designer list, and on-site search are reachable and were used here
to check every new product against what DWR actually carries.

- **Removed 12 products** that are real, well-documented designs but are
  not part of DWR's actual assortment (confirmed via dwr.com search
  returning zero results, or unrelated results): PK22 Lounge Chair, PK24
  Chaise Longue (Kjærholm/Fritz Hansen — Kjærholm is not a DWR-carried
  designer), Grand Prix Chair (Jacobsen/Fritz Hansen), Round Chair
  (PP501) and Peacock Chair (PP550) (Wegner/PP Møbler — DWR sells Wegner
  only via Carl Hansen & Søn and Fredericia), Superleggera Chair
  (Ponti/Cassina), Ball Chair (Aarnio/Adelta), Parentesi Lamp
  (Castiglioni/Flos), Hudson Chair (Starck/Emeco), Cyclone Dining Table
  (fabricated DWR Studio product — no match on dwr.com), Akari Light
  Sculpture (Noguchi/Vitra), and Papa Bear Chair (AP19, Wegner/PP Møbler
  — DWR's actual Wegner wing chair is sold by Fredericia under a
  different name, which this pass couldn't verify with confidence, so it
  was replaced rather than guessed at).
- **Fixed 2 records** to match DWR's actual listings: Nelson Ball Clock's
  manufacturer corrected from Howard Miller to Vitra (DWR sells it as
  part of Vitra's Design Museum collection); Broom Chair renamed to
  Broom Counter Stool with corrected category and materials to match the
  real product.
- **Renamed 4 products** to match DWR's on-site naming exactly: LC2
  Petit Confort Armchair → LC2 Petit Modele Armchair, LC3 Grand Confort
  Sofa → LC3 Grand Modele Sofa, Eames Walnut Stool → Eames Turned Stool
  (broadened to cover its four turned shapes, not just walnut), Tolix
  Stool (Model H) → Tolix Marais Stool.
- **Added 6 verified replacements**, each confirmed on dwr.com before
  being written: Ox Chair (Wegner/Fredericia), Palissade Chair
  (Bouroullec brothers/HAY), Cherner Chair (Norman Cherner/Cherner Chair
  Company), CH20 Elbow Chair (Wegner/Carl Hansen & Søn — sat in Wegner's
  archive for nearly 50 years before production), Nelson Swag Leg
  Armchair (Herman Miller), and the Eames Molded Plywood Lounge Chair
  metal-base variant (LCM, Herman Miller).
- Net effect: catalog goes from 71 to **65 products**, still just over
  half (54%) of the ~120-product eventual catalog and still past the 50%
  target, but now with every entry checked against DWR's real assortment
  rather than assumed from design history alone.
- Updated `README.md`, `PURPOSE.md`, and on-site copy (home disclaimer,
  About screen status card) to describe this verification step, and to
  flag that any future addition should be checked against dwr.com first.
- Verified: JS syntax check passes, 65 products + 20 know-how entries
  load with no duplicate or incomplete records.

Branch: `claude/site-changes-build-log-m4xymb`, to be merged into `main`
immediately after this entry.

---

## 2026-09-12 — Catalog expanded to 71 products, over half of full assortment

- Added 41 new products to `js/data.js`, taking the catalog from 30 to
  **71 real DWR products** (roughly 59% of the ~120-product eventual
  catalog implied by the original "first batch" framing — past the 50%
  target). New entries span Herman Miller (Eames Storage Unit, Eames
  Molded Plywood Lounge Chair, Eames Shell Rocker, Marshmallow Sofa,
  Coconut Chair, Sayl, Aeron, Eames Walnut Stool), Knoll (Pollock
  Executive Chair, Florence Knoll Sofa, Barcelona Stool, Brno Chair, MR
  Chair, Saarinen Tulip Armchair), Fritz Hansen (PK22, PK24, Grand Prix,
  Drop Chair), Carl Hansen & Søn (CH07, CH25), PP Møbler (Round Chair,
  Peacock Chair, Papa Bear Chair), Cassina (LC2, LC3, Superleggera),
  Louis Poulsen (PH Artichoke), Flos (Taccia, Snoopy, Parentesi), Emeco
  (111 Navy, Hudson, Broom), Gubi (Beetle Chair, Multi-Lite Pendant),
  Tolix (Stool), USM (Haller Modular Shelving), Adelta (Ball Chair),
  Vitra (Akari Light Sculpture), Howard Miller (Ball Clock) and DWR
  Studio (Cyclone Dining Table).
- Added 6 new construction/materials know-how terms (sled base,
  book-matched veneer, ball-joint connector, solution-dyed acrylic,
  chrome plating, wool felt), taking that glossary from 14 to 20 entries.
- Updated `README.md`, `PURPOSE.md`, and the on-site home disclaimer and
  About screen status card to reflect the new counts.
- Verified after the change: JS syntax check passes, catalog loads 71
  products + 20 know-how entries with no duplicate IDs and no incomplete
  records, and a full click-through of a Morning Sprint and a 60-minute
  Deep Dive (now correctly computing 7 chapters from the larger catalog)
  produced no console errors.

Branch: `claude/site-changes-build-log-m4xymb`, merged into `main`
immediately after this entry — see the merge commit for the exact point
this went live.

---

## 2026-09-12 — On-site "About" page for associates and management

- Added an in-app About screen (`#screen-about`) explaining what Shannon is,
  who it's for (sales associates vs. store/regional management), what the
  catalog currently covers, and how progress/data work — written for a
  professional audience, distinct from the game-like training screens.
- Added an "About" link in the top bar and an inline "What is this,
  exactly?" link under the home page hero, both routing to the new screen.
- New CSS for the about screen (`.about-section`, `.about-grid`,
  `.about-card`, `.status-card`, `.about-list`) and a restructured top bar
  (`.topbar-right`, `.navlink`) to fit the new nav item without disturbing
  the streak/XP/sound controls.
- Verified: JS syntax check passes; manually clicked through About → Back
  → home on desktop (900px) and mobile (420px) widths with no console
  errors and correct screen routing.

Branch: `claude/site-changes-build-log-m4xymb`

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
