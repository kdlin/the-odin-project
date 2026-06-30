# Frontend Build Guide (personal scaffold)

> A procedural mental model for building any UI without enforcing bad habits.
> This contains NO answers to the dashboard — only the *order* and the
> *questions to ask yourself*. You still do all the thinking.
> (Personal note. gitignore or delete before submitting if you want.)

---

## 0. THE ONE RULE THAT GENERATES EVERYTHING

> **Build in dependency order: do the thing other things depend on, FIRST.**

You never memorize a sequence. You ask one question before any action:

> "Does this depend on something I haven't done yet?"
> - If yes → STOP, you're out of order.
> - If no  → proceed, no need to ask anyone.

Everything below is just this rule, unpacked.

---

## 1. THE PIPELINE (and it's FRACTAL — same shape at every scale)

```
1. STRUCTURE   semantic HTML skeleton — the boxes exist
2. LAYOUT      position the boxes (grid / flex) — temp borders to SEE it
3. CONTENT     dummy text + placeholder images so boxes have size/shape
4. STYLE       colors, fonts, icons, shadows, spacing polish  ← LAST
```

Why this order (each step depends on the one above):
- STYLE depends on LAYOUT being right (else you re-style after moving boxes)
- LAYOUT depends on STRUCTURE existing (can't place boxes that don't exist)
- A CHILD depends on its PARENT existing (can't nest into a missing box)
- CONTENT depends on a container to live in

**Fractal:** the whole project runs 1->4, AND each region repeats 1->4 inside itself.
Building the sidebar? Structure its HTML, lay it out, dummy content, style later.
Same four steps, one level down.

---

## 2. PER-STEP PSEUDO-GUIDE (questions, not answers)

### STEP 1 — STRUCTURE
- [ ] Decompose the design into REGIONS on paper first (box tree). Don't type yet.
- [ ] For each box: is it a meaningful region or just a layout wrapper?
      - meaningful -> semantic tag (see ref below)
      - pure layout -> `<div>` (correct, not a cop-out)
- [ ] Name containers for the WHOLE of what they hold, not one child.
      Specific names go on inner groups.
- [ ] Verify the stylesheet link with one throwaway rule (loud bg color) BEFORE building.

GATE: can you see the page reacting to CSS at all? If no, fix the link first.

### STEP 2 — LAYOUT
- [ ] Identify each container: is it 1D (one axis) or 2D (rows AND columns)?
      - 1D -> flexbox
      - 2D -> grid
- [ ] For a grid: how many columns? how many rows? does anything span?
- [ ] Size the tracks: fixed? `fr`? `auto` (content-sized)? `1fr` (fill remaining)?
- [ ] Does the container have a HEIGHT? `1fr`/`%` heights need a parent height to divide.
- [ ] Empty boxes collapse — add temp `border` + `min-height` so you can SEE the grid.
- [ ] For named grid areas: did you ALSO assign each child its `grid-area`?
      (Naming areas alone places nothing.)

GATE: do the regions land in the RIGHT places with temp borders? Not "is there a grid"
— is it the CORRECT layout? Use DevTools grid overlay to confirm.

### STEP 3 — NEST + CONTENT
- [ ] Build regions in RISK order: most self-contained/static first,
      most complex/interdependent last. (Confidence first, hardest last.)
- [ ] For each region, recurse the whole pipeline (structure -> layout -> content).
- [ ] Repeating items (cards, list rows)? -> grid auto-flow / `repeat()`, NOT named areas.
- [ ] Drop dummy text + placeholder images so positioning is real.

GATE: every region positioned correctly with placeholder content, still unstyled.

### STEP 4 — STYLE (only now)
- [ ] Set up `:root` design tokens (colors, fonts, spacing) BEFORE hardcoding values.
- [ ] Strip the temp borders/backgrounds.
- [ ] Fonts, colors, icons (SVGs), shadows, spacing.
- [ ] Polish.

GATE: matches your target design closely enough. Pixel-perfect NOT required.

---

## 3. SELF-CHECK: BAD-HABIT ALARMS

If you catch yourself doing any of these, you've broken dependency order — STOP:
- Styling (colors/fonts) a box whose POSITION isn't finalized.
- Pixel-perfecting one region while other regions don't exist yet.
- Building the HARDEST region first (no warm-up).
- Writing CSS for an element not yet in the HTML.
- Building a component's INTERNALS before its container/grid exists.
- Using real content to fight alignment when a temp `min-height` would tell you faster.

---

## 4. LOOKUP REFERENCE (conventions — fixed answers, glance don't ask)

### Commit messages (Conventional Commits)
```
type(scope): subject in imperative mood, ~50 chars, no period
```
- Imperative: "add", not "added" — completes "If applied, this commit will ___"
- Types: feat (new), fix (bug), refactor, style (formatting), docs, chore, test
- Scope optional: `feat(admin-dashboard): add sidebar nav`
- Body (optional, blank line after subject): explain WHAT & WHY, not how.
- One logical unit per commit. If the subject needs "and", split it.

### Semantic tag decision (use tag when content MATCHES its meaning)
```
<header>  intro / top bar of page or section
<nav>     a block of navigation LINKS (not the panel around them)
<main>    the ONE primary content area (only one per page)
<aside>   tangential / complementary content
<section> a thematic grouping, usually with a heading
<article> self-contained, independently distributable unit
<footer>  closing content of page/section
<div>     pure layout wrapper, no inherent meaning  ← correct default
```

### CSS file order (general -> specific; later source = higher priority on ties)
```
1. Reset / box-sizing      (* { box-sizing: border-box; margin:0; padding:0 })
2. :root variables         (design tokens)
3. Base element styles     (body, headings, a)
4. Layout                  (macro grids)
5. Components              (.card, .sidebar...)
6. Utilities / overrides   (last)
```

### Naming
- kebab-case for classes: `.account-group` not `.accountGroup`
- Name by ROLE/content, not appearance: `.actions` not `.three-blue-buttons`
- Container = whole; inner groups = specific.
- `<title>` is PROSE (user sees it), not an identifier — no snake_case.

---

## 5. HOW TO USE YOUR MENTOR EFFICIENTLY (predict-then-verify)

Don't ask open "what should I do?" — it keeps you dependent.
State your CALL + the WHY, then ask for holes:

> "Sidebar = flex column because it's 1D. nav links get <nav>, branding stays div. Red flags?"

- Right -> confidence calibrates.
- Wrong -> correction STICKS because you committed to a position.

Batch work to REGION level, then one review (like a PR) — not per-line approval.
Reserve mentor turns for JUDGMENT (flex direction, naming), not LOOKUP (use section 4).
```
Workflow per region:
1. 2-line plan: "I'll build X with Y because Z."  -> get red-flagged
2. build the whole region
3. show the diff -> one review
4. commit -> next region
```
```
