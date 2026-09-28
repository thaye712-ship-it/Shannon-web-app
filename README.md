# Provenance — product knowledge training

A fast, playful training app for Design Within Reach sales associates. It
quizzes people on the pieces on the floor: who designed each one, the style
and type of furniture it is, what it is made of, and the story that closes
a sale.

Built for a young audience first. Big type, motion, sound, streaks, combos,
levels and badges. It should feel closer to a mobile game than to a
compliance module.

## Status

Loaded with **121 real Design Within Reach products and 20 construction and
materials terms**, spanning seating, sofas, tables, desks, lighting,
storage, bedroom and outdoor.

Every product is sourced from dwr.com's own listings. The first 65 were
verified one at a time against DWR's brand, designer and search pages after
an earlier pass produced a dozen well-documented designs that DWR does not
actually sell; the rest were gathered by working forward from DWR's own
category pages, so a product can only enter the catalog if it appears there.
Write-ups are grounded in DWR's own product copy plus published design
history.

This is not the entire DWR catalog and is not meant to be — variants of one
design (same chair, twelve fabrics) are deliberately collapsed into a single
entry, since there is one thing to learn, not twelve. Adding more is just
more records in `js/data.js`; the question bank, browse groups and
flashcards all regenerate from the data with no other changes.

## Running it

No build step, no dependencies, no install. Open `index.html` in a browser, or
serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

It is a static site, so GitHub Pages serves it as-is.

## The modes

**Morning Sprint** — five minutes. Eight questions, twenty seconds each. Correct
answers build a combo multiplier that raises the experience points earned, and
finishing extends the daily streak.

**Deep Dive** — thirty or sixty minutes, split into chapters. Each chapter shows
learn cards first and then quizzes only on what those cards taught, so nothing
comes out of nowhere. Thirty minutes is four chapters and twenty-four questions.
Sixty is seven chapters and forty-nine questions; a full run through the catalog
takes several sessions at this pace.

**Flashcards** — no timer, no score. Flip through the catalog at your own pace:
a photo on the front, the full profile (designer, manufacturer, year, history)
on the back. Mark each one "know it" or "still learning"; that's saved locally
with the rest of that profile's progress, so it persists between sessions.

Both Sprint and Deep Dive open on a topic picker first, so a session can be
narrowed to just one or two question types (e.g. only Photo ID, or only Style
& Type) instead of the full mix.

## Question formats

| Format | Looks like |
| --- | --- |
| Multiple choice | Four options, keyboard keys 1 through 4 |
| True or false | Two large tap targets |
| Introduced year | A slider; within five years still counts |
| Style / material match | The design movement or material behind a piece |
| Photo ID | A real DWR product photo; pick the matching name from four options |

## Product photos

Each product can carry a `photo` field: a direct URL to DWR's own hosted
product image, hotlinked (not downloaded — no image files live in this repo).
118 of 121 products have one. The three without (`bestlite-bl3`,
`tolix-a-chair`, `min-sofa`) turned up no confident match on dwr.com, which
is itself a signal they may not be current DWR SKUs and are worth
re-checking. A product with no photo simply never generates a Photo ID
question and shows a 🪑 placeholder when browsing, instead of erroring.

Two products (`quilton-sectional`, `stacked-bookcase`) have `year: null`
because DWR's page states none. Those skip the year-slider and older-of-two
questions rather than guessing a date.

## Browsing

The Products screen groups the catalog into Chairs & Seating, Sofas &
Sectionals, Tables & Desks, Lighting, Storage, Bedroom, Outdoor and Decor,
so someone can study one type at a time. Tapping any piece opens its full
profile — photo, designer, year, history, facts and materials.

Groups are derived from each product's `category` via the `GROUPS` table at
the bottom of `js/data.js`. `category` stays granular because the quiz asks
about it directly; the groups are only for browsing. A category that isn't
listed in any group falls into an "Other" bucket rather than disappearing.

## Profiles

Anyone can create a profile from the front screen — a name and an avatar, no
password, no roles. Each profile keeps its own XP, streak, badges, per-topic
mastery and flashcard marks, so a shared showroom device works for a whole
team. The avatar menu in the top bar switches between people and adds new
ones.

There is deliberately no manager tier. Everything is stored per device, so a
password guarding a device-local roster would have been friction with nothing
behind it. If progress ever moves to a backend, real accounts and manager
roles become worth adding — `firestore.rules` sketches what that takes.

Progress is stored per profile in `localStorage`, which means it does not
follow someone to another device. `BACKEND.md` documents exactly what moving
this to a real backend involves; the storage layer is isolated behind a
`Profiles` object specifically so that swap doesn't touch the rest of the app.

## Files

| File | Holds |
| --- | --- |
| `index.html` | Screen shells for home, setup, learn, quiz and results |
| `css/style.css` | All styling, animation and the dark mode palette |
| `js/data.js` | **The catalog.** Products and product know-how entries |
| `js/questions.js` | Turns catalog records into questions and chapters |
| `js/app.js` | Screens, scoring, timers, progress, confetti, sound |

## Adding more of the catalog

Add entries to the `products` array in `js/data.js` only. Nothing else needs
to change as long as each record keeps its shape.

A product record:

```js
{
  id: 'eames-lounge',                    // unique, lowercase, no spaces
  photo: 'https://...',                  // optional: direct hotlink to DWR's own product photo
  name: 'Eames Lounge Chair and Ottoman',
  designer: 'Charles and Ray Eames',
  manufacturer: 'Herman Miller',
  year: 1956,                            // number, drives the year slider
  origin: 'United States',               // country the design traces to
  category: 'Lounge chair',              // the type of piece
  style: 'Mid-Century Modern',           // design movement
  materials: ['Molded plywood', 'Leather upholstery', 'Aluminum base'],
  knownFor: 'a bent-plywood shell ...',  // lowercase, completes "known for ___"
  history: 'One paragraph ...',          // shown on the learn card
  facts: ['...', '...', '...']           // three or more; used for true/false
}
```

Leave `photo` out (or set it to `null`) if there's no confident image match —
don't guess at a URL. Find the product's real page on dwr.com first and grab
the exact image URL from there.

A product know-how record:

```js
{
  id: 'eight-way',
  topic: 'Construction',                 // Construction | Materials | Leather
  term: 'Eight-way hand-tied',
  short: 'One line, shown under the title',
  detail: 'The full explanation, shown on the card and after an answer',
  question: 'What does "eight-way hand-tied" describe on upholstered seating?',
  answer: 'The correct option',
  distractors: ['wrong', 'wrong', 'wrong']   // exactly three
}
```

Two rules the engine depends on:

1. Every product needs at least three entries in `facts`, because true/false
   questions are built by swapping a real fact for another product's fact.
2. At least four products must exist, so multiple choice can find three wrong
   answers for every correct one.

Add a product and it immediately starts appearing in both modes. No other edits.

## Progress and privacy

Experience points, level, streak, badges and per-topic mastery are stored in the
browser's local storage under `shannon.progress.v1`. Nothing is sent anywhere and
there is no account or server. Clearing site data resets a learner to zero.

## Accessibility notes

Answers are reachable by keyboard: number keys pick an option, Enter advances.
The whole interface respects the operating system's reduced-motion setting, which
turns off the blobs, confetti and card transitions. Dark mode follows the system
theme. Sound is off with one tap and the choice is remembered.

## Known limits of this build

- The catalog covers well over half of the eventual full DWR assortment,
  not all of it. The rest can be added the same way, whenever ready.
- Session length is set by question count rather than a wall clock, so the
  thirty and sixty minute labels are estimates.
- There is no server, so progress cannot follow a person across devices and
  there is no manager view of who completed what. Both need a backend.
