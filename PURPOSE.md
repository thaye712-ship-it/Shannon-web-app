# What Shannon is for

Shannon is a training tool for Design Within Reach retail sales associates.
It exists to close a specific gap: associates are expected to talk
knowledgeably about the designers, history, materials and construction
behind DWR's assortment, but that knowledge is normally picked up slowly,
on the floor, by osmosis. Shannon compresses it into short, repeatable
sessions instead.

## Who it's for

Sales floor associates, especially newer hires who haven't yet built up
the product knowledge that lets a customer-facing conversation move past
"it's a nice chair" into the designer's name, the year, the material, and
why the price is what it is.

## What it teaches

For each piece in the catalog: who designed it, what manufacturer makes
it, what year it was introduced, what design movement or style it belongs
to, what it's made of, and a short piece of history or trivia worth
repeating to a customer. The construction/materials deck separately covers
the vocabulary that shows up across the assortment — cantilever frames,
molded plywood, cane webbing, tubular steel, powder coating, outdoor teak
— so an associate can explain *how* something is made, not just who made
it.

## How it's meant to be used

Three modes, chosen based on how much time someone has and whether they
want to be quizzed or just browse:

- **Morning Sprint** (5 min) — a quick daily habit before the floor opens.
  Eight timed questions, a combo multiplier for consecutive correct
  answers, and a streak that's meant to pull people back the next day.
- **Deep Dive** (30 or 60 min) — for onboarding or a slower shift. Teaches
  a chapter's worth of material with learn cards, then quizzes only on
  what was just shown, so nothing is asked cold.
- **Flashcards** — no timer, no score. Flip through the catalog at your
  own pace, photo on the front, full profile on the back, marking each
  one "know it" or "still learning." For studying rather than testing.

Both Sprint and Deep Dive open on a topic picker, so a session can be
narrowed to specific question types — say, only Photo ID for someone who
already knows the history but can't yet recognize pieces on sight.

Progress (XP, level, streak, badges, per-topic mastery) is local to the
device and browser — there's no login and no manager dashboard. It's
built to feel like a mobile game, not a compliance module, on the theory
that associates will actually come back to something that feels like a
game.

## Current status

The catalog in `js/data.js` holds 65 real DWR products (Eames, Saarinen,
Bertoia, Jacobsen, Wegner, Le Corbusier, Mies van der Rohe, the Castiglioni
brothers and others) plus 20 construction/materials terms, each checked
against dwr.com's own brand, designer and search listings rather than
assumed from general design history alone. That covers just over half of
the eventual full catalog. 62 of the 65 also carry a real product photo,
hotlinked directly from DWR's own image hosting — the other 3
(`bestlite-bl3`, `tolix-a-chair`, `min-sofa`) turned up no confident photo
match on dwr.com, which is itself a signal they may not be current DWR
SKUs and worth re-checking. See `BUILD_LOG.md` for the change history and
`README.md` for the technical shape of a catalog record — more products
can be appended there in the same shape, verified against dwr.com first.

## What it is not

- Not a customer-facing tool. It does link to DWR's own product photos
  (hotlinked from dwr.com's image hosting, not downloaded) so the Photo
  ID quiz and flashcards can show the real piece, but it doesn't pull
  live pricing, inventory, or copy, and has no other connection to the
  production site.
- Not a system of record for who completed training — there's no backend,
  so a manager can't see completion status across a team yet.
- Not final content — product entries should be checked against DWR's
  own official designer/material information before this is rolled out
  beyond a demo.
