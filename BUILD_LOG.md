# Build Log

Chronological record of what changed and when. Newest entry on top. Every
commit that changes the live site should get an entry here in the same
pull request or push.

Live site: https://thaye712-ship-it.github.io/Shannon-web-app/
Deploy: GitHub Pages, served directly from the `main` branch root (no build
step). A change is live within a few minutes of landing on `main`.

---

## 2026-09-29 — Photos on every question, text size, topic pills

- **Every product question now shows the product.** Photos were limited to
  Photo ID; they now appear on history, designer, materials, year and style
  questions too, so the piece is on screen while the associate answers about
  it. Set in `buildDeck` rather than in each generator, so it holds for any
  generator added later.
- **The "which came first" question shows both pieces**, in the same order
  as the options. A single photo there would have read as "this piece" and
  pointed at the wrong one.
- **A dead photo URL now hides itself** instead of leaving a broken-image
  icon mid-question. Worth having now that photos appear on most questions:
  they are hotlinked from the manufacturer's CDN and can disappear without
  notice.
- **Text size control** (the **A** in the top bar): Normal / Large / Larger,
  stored per device. All 102 `font-size` declarations were mechanically
  rewritten to `calc(<size> * var(--tscale))`, so one variable resizes
  everything; padding is untouched so buttons grow with their text.
- **Select all / Select none pills** on the topic picker.

### A pre-existing bug this surfaced

Checking for overflow at larger text showed the top bar **already ran wider
than a phone screen**: 158px of horizontal overflow at 400px wide on the
live build, before any of today's changes. Two causes, both now fixed:

- The bar never wrapped, so its controls ran off the edge. Below 600px they
  now drop to their own row and wrap within it.
- `.m-text` in the mastery cards had no `min-width:0`, so a long topic name
  ("Designers & Makers") refused to shrink and widened the page.

Verified at 320, 360, 400, 480, 768 and 1024px across all three text sizes:
**zero horizontal overflow in every combination, with every top-bar control
on screen and tappable.** Sprint, Deep Dive, browsing, product detail and
flashcards all still run with no JavaScript errors.

### What still has no photo

Product know-how questions cover vocabulary — "eight-way hand-tied",
"cane webbing" — not objects, so there is nothing to show; they are about a
third of a full-mix deck. Beyond those, coverage is 98.3%, the remainder
being the three products that have no photo at all.

---

## 2026-09-28 — Photo ID now offers comparable pieces

Photo ID was drawing its three wrong answers from the whole catalog, so a
photo of an armchair could be offered against a floor lamp, a dining table
and a bookcase. The silhouette answered the question before the associate
had to recognise anything.

Measured across every photo question the catalog can generate, **49% of
them had only one piece of that kind among the four options** — half the
deck was free marks.

`nearestNames` in `js/questions.js` now ranks candidate distractors by how
close they are to the piece in the photo: same category first
("Lounge chair"), then the same browse group ("Chairs & Seating"), then the
rest of the catalog. `choiceQuestion` takes a `keepOrder` flag so that
ranking survives instead of being shuffled away.

Ranked rather than filtered on purpose: 21 of the 34 categories hold fewer
than four pieces with photos, so a strict same-category rule would have
dropped most Photo ID questions instead of improving them. Each tier is
shuffled internally, so the nearest distractors are used first while which
ones appear still varies between runs.

Result, over the same 2,360 generated questions:

| | Before | After |
| --- | --- | --- |
| Distractor in the same category | 4.5% | **81.1%** |
| Distractor in the same group | 19.2% | 18.1% |
| Unrelated distractor | 76.3% | **0.8%** |
| Questions where the answer is the only piece of its kind | 49.2% | **0.8%** |

The 0.8% that remains is entirely the Nelson Ball Clock, the only piece in
the Decor group — it has nothing comparable to sit beside until more decor
products are added. Every other product now draws comparable options.

Verified in the browser: a Photo-ID-only sprint returned four floor lamps,
then four armchairs, then four table lamps, then four storage pieces. A
full mixed sprint, Deep Dive, browsing and flashcards all still run with no
JavaScript errors.

---

## 2026-09-28 — Taken offline, then restored

The site was pulled down on 12 September and brought back on the 28th.
Recorded here because the history should show the gap rather than leave
two weeks unexplained.

- **Offline.** GitHub Pages serves this repository's `main` root directly,
  and there is no Pages API available from the build environment, so the
  site was taken down by removing what Pages serves — `index.html`, `css/`
  and `js/` — and adding `.nojekyll` so the remaining Markdown was not
  rendered as a page in its place. Nothing was deleted: the full tree
  stayed on `claude/site-changes-build-log-m4xymb` and in `main`'s history
  at `72d95f4`.
- **Restored** at `686f3a5`, byte-identical to `72d95f4`, verified by diff.

Worth knowing for next time: taking the served files away stops the app
running but does not make the source private, and the two are separate
switches. Repository visibility and whether Pages is provisioned are both
console settings, neither reachable from here.

### Photo coverage audit

All 118 photo URLs were re-checked on 28 September. Every one returns 200
— no link rot since they were added. Coverage stands at 118 of 121
products.

The three without a photo (`bestlite-bl3`, `tolix-a-chair`, `min-sofa`)
are unchanged and are not a sourcing failure: no confident match exists on
dwr.com, which is itself a signal they may not be current DWR SKUs. The
rule stands that a photo URL is never guessed at, since a wrong image in a
Photo ID question teaches the wrong thing. Whether those three belong in
the catalog at all is the open question, not whether they can have photos.

Because the photos are hotlinked rather than stored, they depend on
Herman Miller's CDN keeping those URLs alive. All green today; it is a
dependency, not a guarantee.

---

## 2026-09-12 — Manager sign-in removed; everyone is just a user

Progress is stored per device. A password guarding a device-local roster
was protecting nothing — anyone holding the iPad could clear site data or
open dev tools and be past it in seconds — while costing a real person a
real login. So the whole manager tier is gone.

- **Removed the manager role, the passcode screen and the roster screen.**
  Also gone: the salted SHA-256 hashing, the unlock/lockout handling, the
  seeded root profile, and the `role`/`root` fields on profile records.
  Profiles are now `{ id, name, emoji, createdAt }` and nothing else.
- **The avatar dropdown is just people plus "＋ Add someone."**
- **Upgrade path for anyone already on the old build.** On boot,
  `dropSeededManager()` looks for a seeded root profile: if it was never
  used (0 XP, 0 sessions) it is deleted, and if it *was* used it is kept
  and demoted, so nobody loses progress either way. Both paths are tested.
- **Firebase adapter and rules follow.** `js/firebase-store.js` lost its
  auth functions; `firestore.rules` was rewritten for the no-accounts model
  — a shape check on profiles, open progress writes — with the tighter
  account-based rules kept at the bottom as a commented sketch for whenever
  these numbers need to be trustworthy. The adapter is still switched off
  (`mode: 'local'`).

To be explicit about what this trades away: there is still no manager view
of who completed what, and progress written without accounts is fine for
practice scores and not fine for a performance conversation. Both of those
need a backend and real sign-in, and `BACKEND.md` says what that costs.

Verified end to end in a headless browser: first run boots to the profile
picker with nothing pre-seeded, a full eight-question sprint banks XP,
browsing filters (Lighting, 18 of 121) and opens detail views, a flashcard
"know it" mark persists, a second profile starts at zero, switching back
restores the first profile's XP, and both upgrade paths behave. No
JavaScript errors.

---

## 2026-09-12 — Catalog nearly doubled, browse by type, and user profiles

- **56 new products, 65 → 121.** Gathered by four parallel research agents
  working *forward* from dwr.com's own category listings (sofas, sectionals,
  benches, ottomans, dining/coffee/side tables, desks, shelving, bookcases,
  credenzas, beds, dressers, outdoor, lighting) rather than backwards from
  design history. That inversion is deliberate: the earlier approach is what
  produced a dozen products DWR does not sell. Each agent also captured DWR's
  own product copy, which grounds the write-ups. New manufacturers include
  Artek, ClassiCon, Kartell, Magis, Heller, Artemide, Anglepoise, Oluce,
  Ligne Roset, Muuto, String Furniture, dk3, House of Finn Juhl, Tom Dixon,
  Woodard and Serge Mouille.
- The catalog is no longer chair-heavy: it was 34 chairs out of 65, and now
  covers 50 seating, 18 lighting, 17 tables/desks, 13 storage, 9 sofas,
  9 outdoor, 4 bedroom and 1 decor.
- **Browse by type.** The Products screen now has group filter chips
  (Chairs & Seating, Sofas & Sectionals, Tables & Desks, Lighting, Storage,
  Bedroom, Outdoor, Decor) and every piece opens a full detail view with
  photo, designer, year, history, facts and materials. Groups are derived
  from `category` via a `GROUPS` table in `js/data.js`, so `category` can
  stay granular for the quiz while browsing gets coarse, useful buckets.
  An unmapped category falls into "Other" rather than vanishing.
- **User profiles.** Anyone can create a profile (name + avatar, no
  password) from a new front screen. Each keeps its own XP, streak, badges,
  topic mastery and flashcard marks, so a shared showroom device serves a
  team. The avatar button in the top bar switches people. All storage goes
  through a single `Profiles` object so a backend can replace it without
  touching the UI — `BACKEND.md` documents that migration, including the
  security posture a public repo forces.
- Existing single-player progress is migrated into a first profile rather
  than dropped, and the legacy keys are cleaned up afterward.
- **Null-year handling.** Two products state no year on DWR's page. Rather
  than invent dates, `year` is null and the year-slider and older-of-two
  generators skip those products; learn cards and detail views omit the date.
  Without the guard, `null < number` would have silently produced wrong
  answers in the older-of-two question.
- Verified end to end in a browser: first visit lands on the profile screen
  with the create form open; creating a profile enters the app; group chips
  filter correctly (Sofas → 9 pieces); product detail opens and returns;
  a full sprint completes and banks XP; a second profile starts at 0 XP
  while the first retains 40, confirming progress is genuinely separated;
  and a reload restores the active profile. Zero console errors.

Branch: `claude/site-changes-build-log-m4xymb`

---

## 2026-09-12 — Firebase adapter written and wired, shipped switched off

- Added the real backend, behind a flag that is **off** by default:
  `js/firebase-config.js` (project config + `mode` switch),
  `js/firebase-store.js` (Firestore + Auth adapter, loads the SDK from
  Google's CDN so there is still no build step), and `firestore.rules`.
- Shipped as `mode: 'local'` on purpose. Pointing the app at Firestore
  before the rules are published and Shannon's account exists would either
  fail against locked default rules or run wide open against test-mode
  rules. Turning it on is a one-line change once the console work is done;
  `BACKEND.md` has the five steps and a first-run checklist.
- **Write-through cache rather than an async refactor.** Making every
  profile read async would have been a wide, regression-prone change across
  a dozen call sites for no user-visible gain. Instead localStorage stays
  what the UI reads and the adapter keeps it in step — hydrate on boot,
  push in the background on write. Losing wifi now degrades to the old
  local behaviour instead of breaking the app, which is the right failure
  mode for a showroom floor. Conflicts are last-write-wins, documented.
- `activeId` is deliberately not synced: who is using *this* iPad right now
  is a property of the device, not of the team.
- Manager sign-in switches to real Firebase Auth when the backend is live —
  email plus password, with manager powers read from a **custom claim** on
  the token rather than a Firestore field. A field can be edited by whoever
  can write the document; a claim can only be set server-side, so the rules
  can actually trust it. An account that signs in successfully but lacks
  the claim is signed straight back out and told why.
- The rules file carries an explicit warning where it is loose: associates
  train without accounts, so anyone can write anyone's progress. Fine for
  practice scores, not fine if this ever informs a review, with the tighter
  rule written out ready to swap in.
- Analytics is off by default. This is an internal tool used by named staff,
  so tracking them is a decision to make deliberately rather than inherit.
- Verified: local mode is completely unaffected — adapter stays inert, boot,
  profile creation, dropdown and the local manager gate all behave exactly
  as before, zero errors. **Not verified: the live Firestore round-trip or
  Auth.** This sandbox's browser proxy resets connections to Google's CDN,
  so the SDK cannot load here. What that did confirm is the failure path:
  the app logged its warning, stayed on local storage and remained fully
  usable. The real round-trip needs testing in a browser on a normal
  network, which is why BACKEND.md ends with a first-run checklist.

Branch: `claude/site-changes-build-log-m4xymb`

---

## 2026-09-12 — User dropdown, manager role, Shannon seeded as root manager

- **User dropdown.** The avatar in the top bar now opens a menu: who you're
  signed in as, every other profile on the device, "Add someone", and
  manager access. Switching people from here drops any manager session.
- **Roles.** Profiles carry `role` (`associate` | `manager`) and a `root`
  flag. **Shannon is seeded as the root manager** on first run — she cannot
  be removed or demoted, and managers can promote or remove other managers
  from a new Team & managers screen.
- **Managers require a password; associates don't**, as asked. Associates
  still just pick a name from the dropdown.
- **The password is not in this repository, and must never be.** This is a
  static site in a public repo, so a hardcoded password would be readable by
  every associate and by the internet — worse than no password, because it
  looks protective. Instead `ManagerAuth` stores a salted SHA-256 hash in
  the device's own local storage, set by a manager on first use. That is a
  device-level gate, not real security: anyone with dev tools can bypass it
  and it doesn't travel between devices. The manager sign-in screen says so
  in plain language rather than implying protection it doesn't have.
- Real authentication is a Firebase Auth job, where the password is set in
  the console and never touches this repo. `BACKEND.md` was rewritten for
  Firebase (the account that already exists) rather than Supabase, including
  a rules sketch, the custom-claim approach for manager role, and an honest
  note about which rule is loose while associates stay passwordless.
- Verified in a browser: Shannon seeds correctly as root manager; the
  dropdown lists and switches profiles; first manager access prompts to set
  a password rather than assuming one; a too-short password is refused; the
  stored record contains only `salt`/`hash`/`setAt` with no plaintext and a
  64-character digest; promoting an associate works; a wrong password is
  refused and the correct one accepted. Zero console errors.

Branch: `claude/site-changes-build-log-m4xymb`

---

## 2026-09-12 — Renamed from Shannon to Provenance

- The app is now **Provenance**. A piece's provenance is where it came
  from — who drew it, who builds it, what year, what it's made of — which
  is precisely what the app teaches, so the name states the subject rather
  than decorating it.
- Updated the page title, meta description, wordmark, brand mark letter,
  About screen, and the header comments in every source file. The About
  screen now explains the name, since it earns a sentence.
- **Storage keys moved** from `shannon.*` to `provenance.*`, with a
  migration that carries existing profiles and their progress across
  rather than stranding them under the old names. `migrateLegacy()` now
  handles two older shapes in order: profiles saved under the previous
  app name, then the pre-profiles single-player record. Anyone who has
  used the live site keeps their XP, streak, badges and flashcard marks.
- Historical entries below deliberately still say "Shannon" — they are a
  record of what happened at the time, not a place to retrofit the name.
- **Not renamed:** the GitHub repository and therefore the live URL, which
  is still `.../Shannon-web-app/`. Renaming the repo changes that URL and
  breaks any existing link or bookmark, so that is the owner's call to
  make rather than something to do unprompted.

Branch: `claude/site-changes-build-log-m4xymb`

---

## 2026-09-12 — Product photos, Photo ID quiz, quiz topic picker, Flashcards mode

- **Product photos.** Every product record in `js/data.js` can now carry a
  `photo` field: a direct hotlink to DWR's own product image (not a
  download — nothing is stored in this repo). Researched via three
  parallel background agents that searched dwr.com for each of the 65
  products and extracted the exact image URL from its real product page.
  62 of 65 resolved to a confirmed real photo; 3 (`bestlite-bl3`,
  `tolix-a-chair`, `min-sofa`) came back with no confident match, which
  is itself worth a second look — it's the same "may not be a current DWR
  SKU" signal the earlier catalog verification pass flagged elsewhere.
  Spot-checked several resulting URLs directly with `curl`: all returned
  HTTP 200 with real image content.
- **Photo ID question type.** New `photo` topic in `js/questions.js`:
  shows the real product photo, asks the associate to pick the matching
  name from four options. Products without a photo simply never generate
  one (graceful skip, same pattern as every other generator).
- **Quiz topic picker.** Both Morning Sprint and Deep Dive now open on a
  new topics screen (checkboxes for History & Story, Style & Type,
  Materials, Designers & Makers, Product Know-How, Photo ID) before
  starting, so a session can be narrowed to specific question types
  instead of always mixing everything. `buildDeck` already supported a
  topic filter; added the same filter to `buildChapters` for Deep Dive.
- **Flashcards mode.** A third, non-quiz way to study: a full-catalog
  flip-card browser (photo front, full profile back), with Prev/Next and
  "know it" / "still learning" marking persisted to `localStorage` under
  `shannon.flashKnown.v1`. No score, no timer — for studying rather than
  testing, per the user's ask for "an easy/fun way to learn besides
  quizzes."
- **Product gallery.** New "Products" link in the top bar lists all 65
  pieces with photo (or a placeholder) and designer/manufacturer, so
  associates or management can browse the whole catalog at a glance.
- **Bug found and fixed during testing:** the dedup logic in both
  `buildDeck` and `buildChapters` kept a `Set` of `q.prompt` strings to
  drop duplicates — but every Photo ID question shares the identical
  prompt text ("What is this piece called?"), so after the first one,
  every subsequent photo question was silently discarded as a
  "duplicate." Fixed by keying dedup on `prompt + tag` instead of prompt
  alone (`tag` is already the product id on every generator). Verified
  with a direct `buildDeck(8, ['photo'])` call: went from 1 question to
  the full 8, all carrying a valid image.
- Updated `README.md`, `PURPOSE.md`, and on-site About-screen copy: the
  "not connected to dwr.com in any way" claim was no longer accurate
  once photos started hotlinking from DWR's own CDN, so that language
  was corrected rather than left stale.
- Verified end-to-end in a real browser: topic picker → photo-only sprint
  (8/8 unique questions, images render), full mixed sprint to completion,
  Deep Dive topic picker → setup → back-to-topics round trip, Flashcards
  front/flip/mark-known with persistence confirmed via localStorage
  inspection, and the product gallery grid. Zero console errors across
  all of it. Image loads themselves couldn't be visually confirmed
  in-session (this sandbox's network proxy blocks the CDN domain for the
  headless browser), but `curl` from the same environment confirmed the
  URLs are live, real images — the deployed site's real users hit no such
  restriction.

Branch: `claude/site-changes-build-log-m4xymb`

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
