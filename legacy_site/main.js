/* ============================================================
   Sri Jothi Traders — Shared JavaScript
   Single file for all pages
   ============================================================ */

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- mobile nav ---- */
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      drawer.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    }));
  }

  /* ---- active nav link ---- */
  document.querySelectorAll('.navlinks a').forEach(a => {
    if (a.dataset.page && a.dataset.page === document.body.dataset.page) {
      a.classList.add('active');
    }
  });

  /* ---- scroll progress bar (single handler) ---- */
  const progressBar = document.getElementById('scroll-progress');
  let progressTicking = false;
  function updateProgress() {
    if (progressBar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    }
    progressTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!progressTicking) { requestAnimationFrame(updateProgress); progressTicking = true; }
  }, { passive: true });
  updateProgress();

  /* ---- reveal on scroll, with per-group stagger ---- */
  const revealEls = document.querySelectorAll('.reveal,.text-reveal');
  if (reduceMotion) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    document.querySelectorAll('[data-stagger]').forEach(group => {
      [...group.children].forEach((el, i) => el.style.setProperty('--i', i));
    });
    // Also handle .reveal-stagger groups (used on inner pages)
    document.querySelectorAll('.reveal-stagger').forEach(group => {
      [...group.children].forEach((el, i) => el.style.setProperty('--i', i));
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: .14, rootMargin: '0px 0px -60px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---- floating enquiry CTA ---- */
  const floatCta = document.querySelector('.float-enquire');
  if (floatCta) {
    const toggleFloat = () => floatCta.classList.toggle('show', window.scrollY > 180);
    toggleFloat();
    window.addEventListener('scroll', toggleFloat, { passive: true });
  }

  /* ---- smooth anchor scrolling ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }));

  /* ---- card pointer tilt (desktop only, skip reduced motion) ---- */
  if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.product,.product-card,.cert-card,.tile,.usp-row,.fact').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `translateY(-5px) rotateX(${(-y * 1.2).toFixed(2)}deg) rotateY(${(x * 1.2).toFixed(2)}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  /* ---- page-hero parallax (inner pages) ---- */
  if (!reduceMotion) {
    const hero = document.querySelector('.page-hero');
    if (hero) {
      let heroTicking = false;
      function parallax() {
        const r = hero.getBoundingClientRect();
        const y = Math.max(-40, Math.min(40, -r.top * .06));
        hero.style.setProperty('--hero-shift', y + 'px');
        heroTicking = false;
      }
      hero.style.setProperty('transform', 'translate3d(0,var(--hero-shift,0),0)');
      window.addEventListener('scroll', () => {
        if (!heroTicking) { requestAnimationFrame(parallax); heroTicking = true; }
      }, { passive: true });
    }
  }

  /* ---- contact page: B2B / B2C conditional note ---- */
  const purposeSelect = document.getElementById('purpose');
  if (purposeSelect) {
    const b2bNote = document.getElementById('b2b-note');
    const b2cNote = document.getElementById('b2c-note');
    function toggleNotes() {
      const val = purposeSelect.value;
      if (b2bNote) b2bNote.style.display = val === 'b2b' ? 'block' : 'none';
      if (b2cNote) b2cNote.style.display = val === 'b2c' ? 'block' : 'none';
    }
    purposeSelect.addEventListener('change', toggleNotes);
    toggleNotes();
  }

})();
