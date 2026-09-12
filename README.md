# Shannon — product knowledge training

A fast, playful training app for Design Within Reach sales associates. It
quizzes people on the pieces on the floor: who designed each one, the style
and type of furniture it is, what it is made of, and the story that closes
a sale.

Built for a young audience first. Big type, motion, sound, streaks, combos,
levels and badges. It should feel closer to a mobile game than to a
compliance module.

## Status

Loaded with **71 real Design Within Reach products and 20 construction and
materials terms**, researched from published design history rather than
scraped from dwr.com. The catalog is weighted toward the iconic, licensed
design classics DWR is best known for selling, since those are the pieces
associates get asked about most. It covers well over half of the eventual
full catalog — more products can be added to `js/data.js` in the same
shape, and the whole question bank regenerates from it automatically with
no other changes.

## Running it

No build step, no dependencies, no install. Open `index.html` in a browser, or
serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

It is a static site, so GitHub Pages serves it as-is.

## The two modes

**Morning Sprint** — five minutes. Eight questions, twenty seconds each. Correct
answers build a combo multiplier that raises the experience points earned, and
finishing extends the daily streak.

**Deep Dive** — thirty or sixty minutes, split into chapters. Each chapter shows
learn cards first and then quizzes only on what those cards taught, so nothing
comes out of nowhere. Thirty minutes is four chapters and twenty-four questions.
Sixty is seven chapters and forty-nine questions; a full run through the catalog
takes several sessions at this pace.

## Question formats

| Format | Looks like |
| --- | --- |
| Multiple choice | Four options, keyboard keys 1 through 4 |
| True or false | Two large tap targets |
| Introduced year | A slider; within five years still counts |
| Style / material match | The design movement or material behind a piece |

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
