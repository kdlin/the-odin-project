## CSS Grid -- Positioning Grid Elements

###### Grid track vs line vs cell
START
Basic
In CSS Grid, what are a track, a line, and a cell?
Back: **Track** = one full row or column (the strip between two adjacent lines); you define tracks. **Line** = the dividers between/around tracks, created implicitly and numbered from 1; you position items on lines. **Cell** = one row track crossing one column track, the smallest unit.
END


###### Grid: position on lines, not cells
START
Basic
When you position a grid item, what do the numbers refer to?
Back: **Lines**, not cells. An item is placed "start on this line, end on that line" and fills the cells between. Spanning is free -- just move the end line further out.
```css
grid-column: 2 / 3;   /* one column */
grid-column: 2 / 4;   /* spans two columns */
```
END


###### Grid lines start at 1 and the -1 trick
START
Basic
What is the first grid line number, and what does -1 mean?
Back: Lines start at **1** (there is no line 0). Negative numbers count from the end, so **-1 = the last line** -- handy for full-width spans like `grid-column: 1 / -1`. Also, start == end gives zero span.
END


###### grid-area four-value order
START
Basic
What is the value order for the grid-area shorthand?
Back: `grid-area: row-start / col-start / row-end / col-end`. Both **starts** first, then both **ends**. Every value is a line number.
```css
grid-area: 1 / 1 / 3 / 6;
```
END


###### Grid span keyword
START
Basic
What does the span keyword do in grid placement?
Back: Replaces the end line with a count of how many tracks to cover. `grid-column: 1 / span 2` starts at line 1 and covers 2 columns. The count is inclusive -- span 2 = two tracks total.
END


###### grid-area has two meanings
START
Basic
What are the two completely different uses of grid-area?
Back: **(1) Line shorthand** -- four line numbers, e.g. `grid-area: 1 / 1 / 3 / 6`. **(2) A name** -- e.g. `grid-area: header`, which only works when paired with the container's `grid-template-areas` map.
END


###### grid-template-areas recipe
START
Basic
What are the three steps to lay out a grid with named areas?
Back: **1) Size** tracks (`grid-template-rows/columns`). **2) Map** the layout with `grid-template-areas` using names. **3) Claim** each name on its item with `grid-area: <name>`.
```css
.container {
  grid-template-areas:
    "header  header"
    "sidebar nav"
    "footer  footer";
}
.header { grid-area: header; }
```
END


###### grid-template-areas spanning + rectangle rule
START
Basic
In grid-template-areas, how do you make an item span, and what is the hard rule?
Back: **Repeat the name** -- same word across a row spans columns, same word down rows spans rows. Use `.` for an empty cell. Hard rule: a spanned area must form a **solid rectangle**; L-shapes or gaps make the whole `grid-template-areas` invalid (silently ignored).
END


###### gap vs margin in grid/flex
START
Basic
Why use gap instead of margin for spacing grid/flex items?
Back: **gap** spaces only **between** tracks -- no waste on outer edges, one value. **margin** adds space on all four sides, so gutters double (15+15) and bleed onto container edges. Rule: use `gap` for spacing items inside a grid/flex; reserve `margin` for spacing from things outside the container.
END


## CSS Grid -- Advanced Grid Properties

###### repeat() function
START
Basic
How do you create several same-size grid tracks without typing each one?
Back: `repeat(count, size)`. Size can be any track value (fr, px, %, minmax).
```css
grid-template-columns: repeat(5, 1fr);
grid-template-columns: repeat(2, 2fr) repeat(3, 1fr);
```
END


###### fr unit vs auto
START
Basic
What is the difference between the fr unit and auto for sizing a grid track?
Back: **fr** distributes the **leftover** space by ratio (1fr = one share of what remains). **auto** sizes the track to its **content**. Different jobs: `200px auto 1fr` -- auto hugs content, 1fr soaks up the rest.
END


###### min() max() clamp() minmax()
START
Basic
Compare min(), max(), clamp(), and minmax().
Back: **min(a,b...)** returns the smallest; **max(a,b...)** the largest (both global). **clamp(min, ideal, max)** -- global, sits at ideal, clamps at the bounds, works on any property. **minmax(min, max)** -- grid-only, a track flexes between bounds (no ideal point).
END


###### auto-fit vs auto-fill
START
Basic
What is the difference between auto-fit and auto-fill in repeat()?
Back: Identical when the grid is full. With **fewer items than fit**: **auto-fit** collapses empty tracks so items **stretch to fill** the row (items FIT the space). **auto-fill** keeps empty ghost tracks so items **stay their size** (row FILLed with empties). Mnemonic: FIT = items fit/stretch, FILL = row filled with ghosts. Live demo: https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
END


###### auto vs auto-fit/auto-fill (slot)
START
Basic
In repeat(), what is the difference between auto and auto-fit/auto-fill?
Back: **auto** is a **size** value (track sizes to content). **auto-fit / auto-fill** are **count** values -- they go in the count slot and let the browser compute how many tracks fit. `repeat(4, auto)` = 4 content-sized tracks; `repeat(auto-fit, minmax(250px, 1fr))` = as many >=250px tracks as fit.
END


###### Responsive grid one-liner
START
Basic
What is the standard one-line responsive grid, and how does the browser compute it?
Back: `repeat(auto-fit, minmax(250px, 1fr))`. The browser counts how many columns fit using the **min** (250px = most columns), then grows each up to the **max** (1fr = share leftover space equally). No media queries needed.
END


###### grid-auto-rows
START
Basic
How do you size rows when the row count is dynamic (e.g. auto-fit cards)?
Back: You can't use `grid-template-rows` (that's for a known count). Use `grid-auto-rows: 200px` to size every implicitly-created row, or set height directly on the item.
END


###### Explicit vs implicit grid
START
Basic
What is the difference between the explicit and implicit grid?
Back: **Explicit** = tracks you define with `grid-template-*`. **Implicit** = tracks the browser auto-creates when items need a row/column you didn't define. Referencing a line (e.g. `grid-row: 2 / 4`) creates the implicit tracks to satisfy it -- no need to pre-declare row count. Size implicit tracks with `grid-auto-rows/columns`.
END


###### Grid rows are global across columns
START
Basic
Can different columns in one grid have different numbers of rows?
Back: No. A row line cuts across ALL columns -- rows are global. The column with the most stacked items sets the row count; quieter columns span to match (e.g. a sidebar using `grid-row: 2 / 4` to cover two rows the other column split into).
END


###### Grid alignment: items vs content
START
Basic
What is the difference between justify-items/align-items and justify-content/align-content?
Back: **justify-items / align-items** align each item **inside its own cell** (per-item: justify-self / align-self). **justify-content / align-content** align the whole group of **tracks inside the container** -- only has effect when tracks don't fill it (e.g. `auto` columns, not `1fr`). justify- = horizontal, align- = vertical.
END


###### align-items: stretch vs center
START
Basic
Why does align-items: center stop a grid item from filling its cell?
Back: Default `stretch` makes the item grow to fill its cell's full height (the "auto-growing"). `center` instead sizes the item to its **content** and centers it in the cell -- so it stops filling, even if the cell/row is tall. Want fill = stretch; want centered = center. It shrinks the ITEM, not the cell.
END


###### text-align vs justify-self
START
Basic
When aligning a logo in a grid cell, use text-align or justify-self?
Back: **justify-self** -- it aligns the whole grid item box within its cell regardless of content type (text, img, component). **text-align** only aligns inline content inside the box and is unreliable for a non-text logo. Use justify-self (+ align-self) for a real logo/image.
END
