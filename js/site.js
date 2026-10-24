/* =====================================================
   ALPHA MEDIA DESIGNS — shared page behaviour
   Reads settings from /js/config.js (window.AMD_CONFIG)
   ===================================================== */
(function () {
  'use strict';

  var cfg = window.AMD_CONFIG || {};

  /* ---------- Footer year (static fallback stays in the HTML) ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Booking buttons ----------
     Any <a data-booking> keeps its fallback href (the contact form)
     until BOOKING_URL is filled in; then every one points at the link. */
  if (cfg.BOOKING_URL) {
    document.querySelectorAll('[data-booking]').forEach(function (a) {
      a.setAttribute('href', cfg.BOOKING_URL);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /* ---------- Email address ----------
     <a data-email> gets the mailto link and the visible address. */
  if (cfg.CONTACT_EMAIL) {
    document.querySelectorAll('[data-email]').forEach(function (a) {
      a.setAttribute('href', 'mailto:' + cfg.CONTACT_EMAIL);
      a.textContent = cfg.CONTACT_EMAIL;
    });
  }

  /* ---------- Work gallery (homepage) ---------- */
  var workSection = document.getElementById('work');
  var workGrid    = document.getElementById('workGrid');
  var samples     = Array.isArray(cfg.WORK_SAMPLES) ? cfg.WORK_SAMPLES : [];
  if (workSection && workGrid && samples.length) {
    samples.forEach(function (s) {
      var item  = document.createElement('figure');
      item.className = 'work-item';

      var media = document.createElement('div');
      media.className = 'work-media';
      if (s.type === 'video') {
        var v = document.createElement('video');
        v.src = s.src;
        if (s.poster) v.poster = s.poster;
        v.controls = true;
        v.muted = true;
        v.playsInline = true;
        v.preload = 'metadata';
        media.appendChild(v);
      } else {
        var img = document.createElement('img');
        img.src = s.src;
        img.alt = s.alt || s.title || '';
        img.loading = 'lazy';
        media.appendChild(img);
      }
      item.appendChild(media);

      var cap = document.createElement('figcaption');
      cap.className = 'work-caption';
      if (s.title) {
        var strong = document.createElement('strong');
        strong.textContent = s.title;
        cap.appendChild(strong);
      }
      cap.appendChild(document.createTextNode(s.caption || ''));
      item.appendChild(cap);

      workGrid.appendChild(item);
    });
    workSection.removeAttribute('hidden');
    document.querySelectorAll('[data-work-nav]').forEach(function (li) {
      li.removeAttribute('hidden');
    });
  }

  /* ---------- Testimonials (homepage, off until real quotes arrive) ---------- */
  var tmpl   = document.getElementById('testimonials-template');
  var anchor = document.getElementById('testimonials-anchor');
  if (cfg.SHOW_TESTIMONIALS && tmpl && anchor && 'content' in tmpl) {
    anchor.parentNode.insertBefore(tmpl.content.cloneNode(true), anchor);
  }

  /* ---------- Fade-in on scroll ---------- */
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- First-touch UTM attribution (unchanged logic) ---------- */
  var UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  var STORAGE_KEY = 'amd_attribution';

  function parseUrlParams() {
    var params = {};
    var search = window.location.search.substring(1);
    if (!search) return params;
    search.split('&').forEach(function (pair) {
      var eq = pair.indexOf('=');
      if (eq > 0) {
        try {
          params[decodeURIComponent(pair.substring(0, eq))] = decodeURIComponent(pair.substring(eq + 1));
        } catch (e) {}
      }
    });
    return params;
  }

  function readStored() {
    try { var raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : null; }
    catch (e) { return null; }
  }

  function writeStored(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch (e) {}
  }

  function setField(name, value) {
    var el = document.querySelector('input[name="' + name + '"]');
    if (el) el.value = value || '';
  }

  function runAttribution() {
    var urlParams = parseUrlParams();
    var hasAnyUtm = UTM_PARAMS.some(function (k) { return urlParams[k]; });
    var stored = readStored();

    if (hasAnyUtm && !stored) {
      var attribution = {
        first_seen: new Date().toISOString(),
        landing_page: window.location.pathname || '/',
        referrer: document.referrer || ''
      };
      UTM_PARAMS.forEach(function (k) { attribution[k] = urlParams[k] || ''; });
      writeStored(attribution);
      stored = attribution;
    }

    if (stored) {
      UTM_PARAMS.forEach(function (k) { setField(k, stored[k]); });
      setField('referrer', stored.referrer);
      setField('landing_page', stored.landing_page);
      setField('first_seen', stored.first_seen);
    }
  }

  runAttribution();
})();
