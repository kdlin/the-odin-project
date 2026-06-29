/* Course manifest the toolbar's "Lessons" panel renders. Fullstack JS track
   + CSS review lessons. Modules with no file show "Coming soon". */
window.GM_COURSE = {
  title: "Fullstack JS -- Build & Ship",
  modules: [
    { n: 0, title: "The Plan", lessons: [
      { title: "Fullstack Roadmap (read first)", file: "0003-fullstack-roadmap.html" }
    ]},
    { n: 1, title: "Stage 1: JavaScript", lessons: [
      { title: "JS Mental Model + Modern Syntax", file: "0004-js-mental-model.html" },
      { title: "Functions, Closures & this", file: null },
      { title: "Arrays, Objects & Iteration", file: null },
      { title: "Async JS (promises, async/await, fetch)", file: null },
      { title: "The DOM & Events", file: null }
    ]},
    { n: 2, title: "Stage 2: React", lessons: [ { title: "Coming as you reach it", file: null } ]},
    { n: 3, title: "Stage 3: Node + Express", lessons: [ { title: "Coming as you reach it", file: null } ]},
    { n: 4, title: "Stage 4: Postgres + Prisma", lessons: [ { title: "Coming as you reach it", file: null } ]},
    { n: 5, title: "Stage 5: Auth + Deploy", lessons: [ { title: "Coming as you reach it", file: null } ]},
    { n: 9, title: "Reference", lessons: [
      { title: "HTML + CSS Refresher", file: "0002-html-css-refresher.html" },
      { title: "CSS Grid Review", file: "0001-css-grid-review.html" }
    ]}
  ]
};
