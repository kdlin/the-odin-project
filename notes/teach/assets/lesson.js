/* Shared lesson helpers for guitar-mastery.
   1) Persists any [data-persist] checkbox (with an id) to localStorage.
   2) Apple-style scroll-reveal: fades/slides elements in as they enter view. */
(function () {
  'use strict';

  function persistChecklists() {
    var boxes = document.querySelectorAll('[data-persist] input[type="checkbox"]');
    for (var i = 0; i < boxes.length; i++) {
      (function (cb) {
        if (!cb.id) return;
        var key = 'gm:' + cb.id;
        if (localStorage.getItem(key) === '1') cb.checked = true;
        cb.addEventListener('change', function () {
          localStorage.setItem(key, cb.checked ? '1' : '0');
        });
      })(boxes[i]);
    }
  }

  function scrollReveal() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var sel = '.lesson h2, .lesson h3, .lesson p, .lesson .hero-met, .lesson .callout, ' +
              '.lesson .loop, .lesson .tasks, .lesson .notes, .lesson .embed, ' +
              '.lesson .source, .lesson .ask, .lesson footer';
    var els = document.querySelectorAll(sel);
    if (reduce || !('IntersectionObserver' in window)) { return; }
    for (var i = 0; i < els.length; i++) els[i].classList.add('reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    for (var j = 0; j < els.length; j++) io.observe(els[j]);
  }

  function init() { persistChecklists(); scrollReveal(); }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
