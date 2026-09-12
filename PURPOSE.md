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

Two modes, chosen based on how much time someone has:

- **Morning Sprint** (5 min) — a quick daily habit before the floor opens.
  Eight timed questions, a combo multiplier for consecutive correct
  answers, and a streak that's meant to pull people back the next day.
- **Deep Dive** (30 or 60 min) — for onboarding or a slower shift. Teaches
  a chapter's worth of material with learn cards, then quizzes only on
  what was just shown, so nothing is asked cold.

Progress (XP, level, streak, badges, per-topic mastery) is local to the
device and browser — there's no login and no manager dashboard. It's
built to feel like a mobile game, not a compliance module, on the theory
that associates will actually come back to something that feels like a
game.

## Current status

The catalog in `js/data.js` holds a first batch of 30 real DWR products
(Eames, Saarinen, Bertoia, Jacobsen, Le Corbusier, Wegner and others) plus
14 construction/materials terms, researched from published design history
rather than scraped from dwr.com, which this build environment cannot
reach directly. This is roughly a quarter of the eventual catalog. See
`BUILD_LOG.md` for the
change history and `README.md` for the technical shape of a catalog
record — more products can be appended there in the same shape with no
other code changes.

## What it is not

- Not a customer-facing tool, and not connected to dwr.com in any way —
  it doesn't pull live pricing, inventory, or copy from the real site.
- Not a system of record for who completed training — there's no backend,
  so a manager can't see completion status across a team yet.
- Not final content — product entries should be checked against DWR's
  own official designer/material information before this is rolled out
  beyond a demo.
