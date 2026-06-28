/* Floating tool bar + right-side "On this page" rail for guitar-mastery lessons.
   Bar (bottom-center frosted pill):
     - Lessons: navigate modules / other lessons (from window.GM_COURSE).
     - Metronome / Tuner: reusable widgets (window.GM.mountMetronome / mountTuner).
   Rail (right edge, Resend-docs style): jump within the current page, with scrollspy.
   Drop <script src="../assets/course.js"> then <script src="../assets/toolbar.js">. */
(function () {
  'use strict';

  function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  function ensureIds() {
    var heads = document.querySelectorAll('.lesson h2');
    for (var i = 0; i < heads.length; i++) {
      if (!heads[i].id) heads[i].id = slug(heads[i].textContent) || ('sec-' + i);
    }
    return heads;
  }

  /* ---------- Lessons panel (course navigation) ---------- */
  function buildLessons() {
    var c = window.GM_COURSE || { modules: [] };
    var cur = location.pathname.split('/').pop();
    var wrap = document.createElement('div');
    wrap.className = 'gm-course';
    c.modules.forEach(function (m) {
      var grp = document.createElement('div');
      grp.className = 'gm-mod';
      var h = document.createElement('div');
      h.className = 'gm-mod-h';
      h.innerHTML = '<span class="gm-mod-n">M' + m.n + '</span>' + m.title;
      grp.appendChild(h);
      if (m.lessons && m.lessons.length) {
        m.lessons.forEach(function (l) {
          var el = document.createElement(l.file ? 'a' : 'span');
          var isCur = l.file && l.file === cur;
          el.className = 'gm-les' + (isCur ? ' current' : '') + (l.file ? '' : ' soon');
          if (l.file) el.href = l.file;
          el.textContent = l.title;
          grp.appendChild(el);
        });
      } else {
        var s = document.createElement('span');
        s.className = 'gm-les soon';
        s.textContent = 'Coming soon';
        grp.appendChild(s);
      }
      wrap.appendChild(grp);
    });
    return wrap;
  }

  /* ---------- Reference / glossary panel (symbols + terms, searchable) ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>]/g, function (c) {
      return c === '&' ? '&amp;' : c === '<' ? '&lt;' : '&gt;';
    });
  }
  function buildGlossary() {
    var g = window.GM_GLOSSARY || { groups: [] };
    var wrap = document.createElement('div');
    wrap.className = 'gm-gloss';

    var search = document.createElement('input');
    search.className = 'gm-gloss-search';
    search.type = 'search';
    search.setAttribute('autocomplete', 'off');
    search.placeholder = 'Search symbols & terms…';
    wrap.appendChild(search);

    var list = document.createElement('div');
    list.className = 'gm-gloss-list';
    (g.groups || []).forEach(function (grp) {
      var section = document.createElement('div');
      section.className = 'gm-gloss-group';
      var h = document.createElement('div');
      h.className = 'gm-gloss-group-h';
      h.textContent = grp.title || '';
      section.appendChild(h);
      (grp.entries || []).forEach(function (e) {
        var item = document.createElement('div');
        item.className = 'gm-gloss-item';
        var head = '<span class="gm-gloss-term">' + esc(e.term) + '</span>';
        if (e.aka) head += ' <span class="gm-gloss-aka">' + esc(e.aka) + '</span>';
        item.innerHTML = head + ' <span class="gm-gloss-def">' + esc(e.def) + '</span>';
        item._hay = ((e.term || '') + ' ' + (e.aka || '') + ' ' + (e.def || '')).toLowerCase();
        section.appendChild(item);
      });
      list.appendChild(section);
    });
    wrap.appendChild(list);

    var empty = document.createElement('div');
    empty.className = 'gm-gloss-empty';
    empty.textContent = 'No matches.';
    empty.style.display = 'none';
    wrap.appendChild(empty);

    search.addEventListener('input', function () {
      var q = search.value.trim().toLowerCase();
      var anyAll = false;
      var groups = list.querySelectorAll('.gm-gloss-group');
      for (var i = 0; i < groups.length; i++) {
        var any = false;
        var items = groups[i].querySelectorAll('.gm-gloss-item');
        for (var j = 0; j < items.length; j++) {
          var show = !q || items[j]._hay.indexOf(q) !== -1;
          items[j].style.display = show ? '' : 'none';
          if (show) { any = true; anyAll = true; }
        }
        groups[i].style.display = any ? '' : 'none';
      }
      empty.style.display = anyAll ? 'none' : 'block';
    });
    return wrap;
  }

  /* ---------- the bar ---------- */
  function buildBar() {
    var root = document.createElement('div');
    root.className = 'gm-tools';
    var glossBtn = window.GM_GLOSSARY
      ? '<span class="gm-sep"></span><button class="gm-btn" data-tool="glossary" aria-expanded="false"><span class="gm-ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.5" y2="16.5"></line></svg></span>Reference</button>'
      : '';
    root.innerHTML =
      '<div class="gm-panel" role="dialog" aria-modal="false" aria-label="Lesson tools">' +
        '<div class="gm-panel-head"><span class="gm-panel-title"></span>' +
        '<button class="gm-close" aria-label="Close">✕</button></div>' +
        '<div class="gm-panel-body"></div>' +
      '</div>' +
      '<div class="gm-bar" role="toolbar" aria-label="Lesson tools">' +
        '<button class="gm-btn" data-tool="lessons" aria-expanded="false"><span class="gm-ic">☰</span>Lessons</button>' +
        glossBtn +
      '</div>';
    document.body.appendChild(root);

    var panel = root.querySelector('.gm-panel');
    var titleEl = root.querySelector('.gm-panel-title');
    var bodyEl = root.querySelector('.gm-panel-body');
    var closeBtn = root.querySelector('.gm-close');
    var btns = root.querySelectorAll('.gm-btn');

    var cache = {};
    var active = null;
    var TITLES = { lessons: 'Lessons', glossary: 'Reference', metronome: 'Metronome', tuner: 'Tuner' };

    function content(tool) {
      if (cache[tool]) return cache[tool];
      var node;
      if (tool === 'lessons') {
        node = buildLessons();
        node.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
      } else if (tool === 'glossary') {
        node = buildGlossary();
      } else if (tool === 'metronome') {
        node = document.createElement('div');
        node.setAttribute('data-metronome', '');
        node.setAttribute('data-bpm', '70');
        if (window.GM && window.GM.mountMetronome) window.GM.mountMetronome(node);
      } else if (tool === 'tuner') {
        node = document.createElement('div');
        if (window.GM && window.GM.mountTuner) window.GM.mountTuner(node);
      }
      cache[tool] = node;
      return node;
    }

    function open(tool) {
      if (active === tool) { close(); return; }
      if (cache.tuner && cache.tuner._gmStop) cache.tuner._gmStop();
      active = tool;
      titleEl.textContent = TITLES[tool] || '';
      bodyEl.innerHTML = '';
      bodyEl.appendChild(content(tool));
      panel.classList.add('open');
      if (tool === 'glossary') {
        var gs = bodyEl.querySelector('.gm-gloss-search');
        if (gs) setTimeout(function () { gs.focus(); }, 60);
      }
      for (var i = 0; i < btns.length; i++) {
        var on = btns[i].getAttribute('data-tool') === tool;
        btns[i].classList.toggle('active', on);
        btns[i].setAttribute('aria-expanded', on ? 'true' : 'false');
      }
    }
    function close() {
      if (cache.tuner && cache.tuner._gmStop) cache.tuner._gmStop();
      active = null;
      panel.classList.remove('open');
      for (var i = 0; i < btns.length; i++) { btns[i].classList.remove('active'); btns[i].setAttribute('aria-expanded', 'false'); }
    }

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () { open(this.getAttribute('data-tool')); });
    }
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && active) close(); });
    document.addEventListener('click', function (e) { if (active && !root.contains(e.target)) close(); });
  }

  /* ---------- right rail: On this page ---------- */
  function buildRail() {
    var heads = ensureIds();
    if (heads.length < 2) return;
    var rail = document.createElement('nav');
    rail.className = 'gm-rail';
    rail.setAttribute('aria-label', 'On this page');
    rail.innerHTML = '<div class="gm-rail-h">On this page</div>';
    var byId = {};
    for (var i = 0; i < heads.length; i++) {
      var a = document.createElement('a');
      a.href = '#' + heads[i].id;
      a.textContent = heads[i].textContent;
      a.className = 'gm-rail-a';
      rail.appendChild(a);
      byId[heads[i].id] = a;
    }
    document.body.appendChild(rail);

    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          for (var id in byId) byId[id].classList.remove('active');
          if (byId[en.target.id]) byId[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-12% 0px -70% 0px', threshold: 0 });
    for (var j = 0; j < heads.length; j++) io.observe(heads[j]);
  }

  function init() { buildBar(); buildRail(); }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
