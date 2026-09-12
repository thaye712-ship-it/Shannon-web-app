# Moving profiles to a backend

Today profiles live in the browser's `localStorage`. That was a deliberate
first step, not a shortcut: it works with no server, no signup and no cost,
and it covers the common case of a shared showroom device where associates
take turns. What it cannot do is follow someone to a different device, or
let a manager see who has completed what.

This document is what that migration actually involves, so the decision can
be made with real detail.

## What already makes this easy

Every read and write of a person's progress goes through the `Profiles`
object in `js/app.js`. Nothing else in the app touches storage. The screens,
scoring, quiz engine and flashcards all call these and only these:

| Function | Does |
| --- | --- |
| `Profiles.index()` | Returns `{ activeId, users: [...] }` |
| `Profiles.list()` | All profiles |
| `Profiles.active()` / `activeId()` | Who is signed in |
| `Profiles.create(name, emoji)` | New profile, becomes active |
| `Profiles.select(id)` | Switch profile |
| `Profiles.remove(id)` | Delete profile and its progress |
| `Profiles.loadProgress(id)` | That person's progress record |
| `Profiles.saveProgress(id, data)` | Write it back |

Swapping the backend means reimplementing those eight functions. The rest of
the app does not change. The one real complication is that the localStorage
versions are **synchronous** and any network version will be **async**, so
those call sites need to become `await`ed — roughly a dozen places, all in
`js/app.js`.

## The progress record

One row per person. This is the whole shape:

```js
{
  xp: 0,              // number
  streak: 0,          // consecutive days
  lastPlayed: null,   // "2026-9-12"
  sound: true,
  badges: [],         // badge ids
  topics: {},         // topicId -> { seen, correct }
  sessions: 0,
  flashKnown: []      // product ids marked "know it"
}
```

Small, flat, and JSON-serializable, so it fits a single `jsonb` column or a
document store without modelling work.

## Suggested shape (Supabase)

Two tables:

```sql
create table profiles (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,              -- a store or a team
  name text not null,
  emoji text not null default '🦊',
  created_at timestamptz default now()
);

create table progress (
  profile_id uuid primary key references profiles(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);
```

`org_id` is worth including from day one even if there is only one store.
Retrofitting a tenant column after data exists is far more annoying than
carrying it from the start.

## The security question, which is the real one

This repo is public and GitHub Pages serves static files only, so any key
the page uses is visible to anyone who views source. That is normal for
Supabase/Firebase — their anon keys are designed to be public — but it means
**the database rules are the only thing protecting the data**. Get them
wrong and anyone can read or wipe every profile.

Two viable postures:

1. **No login at all (matches today's behavior).** Anyone with the site URL
   can pick any profile. Row-level security restricts writes to the
   `progress` row matching the selected profile, but there is nothing
   stopping someone selecting a colleague's name. Fine for low-stakes
   training data; not fine if it ever feeds performance review.
2. **Real auth (recommended if this goes past pilot).** Supabase magic-link
   email sign-in, one profile per account, RLS keyed to `auth.uid()`. Adds a
   real login step but makes the data trustworthy and is a prerequisite for
   any manager dashboard.

Either way the rules must be written explicitly — the default "anon can do
anything" posture is not acceptable for a public repo.

## What a manager dashboard would need on top

- A read policy letting a manager role select rows within their `org_id`
- A `completed_sessions` table if per-session history (not just totals) is
  wanted, since the current record only keeps aggregates
- Names that are actually identifiable, which makes this employee data and
  brings the usual retention/consent questions with it

## Rough order of work

1. Create the project, tables and RLS policies
2. Decide posture: anonymous profiles vs. real login
3. Reimplement the eight `Profiles` functions against the client library
4. Make the ~12 call sites async
5. Add a one-time import that pushes any existing localStorage profiles up,
   so nobody loses the progress they built during the local phase
6. Keep localStorage as an offline cache if showroom wifi is unreliable

Steps 1 and 2 need a human decision and an account. Steps 3 through 6 are
mechanical.
