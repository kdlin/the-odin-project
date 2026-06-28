/* Reference glossary for the floating bar's "Reference" button (searchable).
   CSS Grid terms. Load BEFORE toolbar.js. One tight sentence per def. */
window.GM_GLOSSARY = {
  title: "Reference",
  groups: [
    { title: "Structure", entries: [
      { term: "track", aka: "row/column", def: "One full row or column -- the strip between two adjacent grid lines." },
      { term: "line", aka: "grid line", def: "A divider between/around tracks; numbered from 1; what you position items on." },
      { term: "cell", def: "One row track crossing one column track -- the smallest grid unit." },
      { term: "gap", aka: "gutter", def: "Space between tracks only (no waste on outer edges)." }
    ]},
    { title: "Sizing units", entries: [
      { term: "fr", aka: "fraction", def: "A share of the leftover space; splits remaining room by ratio." },
      { term: "auto", def: "Sizes a track to its content (not leftover space)." },
      { term: "minmax()", def: "Grid-only: a track flexes between a min and max size." },
      { term: "clamp()", def: "Global: sits at an ideal value, clamps to min/max at the bounds." },
      { term: "repeat()", def: "Generates multiple tracks: repeat(count, size)." }
    ]},
    { title: "Dynamic count", entries: [
      { term: "auto-fit", def: "Count keyword: empty tracks collapse so items stretch to fill the row." },
      { term: "auto-fill", def: "Count keyword: empty ghost tracks stay; items keep their size." },
      { term: "grid-auto-rows", def: "Sizes implicitly-created rows when the count is dynamic." }
    ]},
    { title: "Placement & alignment", entries: [
      { term: "grid-area", def: "Shorthand for row-start/col-start/row-end/col-end, OR a name for template-areas." },
      { term: "grid-template-areas", def: "Maps the layout as a picture using named areas on the container." },
      { term: "justify-items", def: "Aligns each item inside its cell along the horizontal (inline) axis." },
      { term: "align-items", def: "Aligns each item inside its cell along the vertical (block) axis; default stretch." },
      { term: "justify-content", def: "Aligns the whole group of tracks within the container (only if they don't fill it)." }
    ]}
  ]
};
