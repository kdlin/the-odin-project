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
