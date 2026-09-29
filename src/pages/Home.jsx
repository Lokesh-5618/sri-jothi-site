import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const RANGE_PRODUCTS = [
  { title: <>Grains<br />&amp; Staples</>, desc: 'Rice, wheat, sugar and everyday staples for wholesale and retail supply.' },
  { title: <>Spices<br />&amp; Masalas</>, desc: 'Whole spices and blends.' },
  { title: <>Oils &amp;<br />Coconut</>, desc: 'Bulk and retail-ready formats.' },
  { title: <>Snacks<br />&amp; FMCG</>, desc: 'Demand-led products for your market.' },
];

const MARKETS = [
  { name: 'United Kingdom', flag: '🇬🇧', status: 'Established', ports: 'Felixstowe · Southampton · London Gateway' },
  { name: 'Gulf', flag: '🇦🇪', status: 'Established', ports: 'Jebel Ali · Sohar · Hamad' },
  { name: 'United States', flag: '🇺🇸', status: 'Priority', ports: 'Los Angeles · New York · Savannah' },
  { name: 'Canada', flag: '🇨🇦', status: 'Expansion', ports: 'Vancouver · Montreal · Halifax' },
  { name: 'Australia', flag: '🇦🇺', status: 'Expansion', ports: 'Sydney · Melbourne · Brisbane' },
];

// Duplicated so the CSS marquee loop is seamless (it scrolls exactly one
// copy's width, then the second identical copy picks up invisibly).
const LOOPED_RANGE_PRODUCTS = [...RANGE_PRODUCTS, ...RANGE_PRODUCTS];


const HERO_SLIDES = [
  { label: 'Image 1' },
  { label: 'Image 2' },
  { label: 'Image 3' },
  { label: 'Image 4' },
];

const MARQUEE_ITEMS = [
  'RICE', 'FRUITS', 'SPICES', 'MASALAS', 'DAL', 'FLOUR',
  'KITCHEN ESSENTIALS', 'COCONUT', 'DAIRY', 'SNACKS', 'FMCG',
];
const LOOPED_MARQUEE = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

const CAPS = [
  {
    num: '01',
    title: 'Source',
    short: 'Find the right Indian products and trusted suppliers for your requirement.',
    icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></>,
    more: 'We shortlist verified suppliers in Dindigul and across India, compare samples and pricing, and match you with the right producers for your volumes and quality standards.',
    link: '/products',
    linkLabel: 'Explore our products',
  },
  {
    num: '02',
    title: 'Customize',
    short: 'Private label, pack size and market-specific product preparation.',
    icon: <path d="M12 3v18M3 12h18M7.5 7.5l9 9M16.5 7.5l-9 9" />,
    more: 'Put your brand on the product. We handle label design inputs, pack sizes, and formulation tweaks so the product fits your destination market.',
    link: '/customization',
    linkLabel: 'How customization works',
  },
  {
    num: '03',
    title: 'Prepare',
    short: 'Quality checks, documentation, packaging and destination compliance.',
    icon: <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></>,
    more: 'Every batch goes through quality checks, export-grade packaging and the paperwork your destination requires, so shipments clear without surprises.',
    link: '/certifications',
    linkLabel: 'View certifications',
  },
  {
    num: '04',
    title: 'Export',
    short: 'Coordinated handover to logistics and shipment tracking to your market.',
    icon: <path d="M5 12h14M12 5l7 7-7 7" />,
    more: 'We coordinate freight, port handover and tracking, and keep you updated until your goods arrive in the UK, Gulf, US, Canada or Australia.',
    link: '/contact',
    linkLabel: 'Start an enquiry',
  },
];

const REVIEWS = [
  { name: 'Buyer Name', role: 'Distributor · United Kingdom', text: 'Placeholder review. Replace with a real customer testimonial about quality and reliability.' },
  { name: 'Buyer Name', role: 'Wholesaler · UAE', text: 'Placeholder review. Replace with a real customer testimonial about communication and shipping.' },
  { name: 'Buyer Name', role: 'Retail Chain · Canada', text: 'Placeholder review. Replace with a real customer testimonial about private label support.' },
  { name: 'Buyer Name', role: 'Importer · Australia', text: 'Placeholder review. Replace with a real customer testimonial about documentation and compliance.' },
  { name: 'Buyer Name', role: 'Brand Owner · United States', text: 'Placeholder review. Replace with a real customer testimonial about sourcing quality.' },
];
const LOOPED_REVIEWS = [...REVIEWS, ...REVIEWS];

const VALUE_POINTS = [
  { title: 'Trusted suppliers', text: 'Verified producers in Dindigul and across India, checked before we work with them.' },
  { title: 'Private label ready', text: 'Your brand, pack size and specs, handled from one place.' },
  { title: 'Export-grade quality', text: 'Quality checks, packaging and documentation on every shipment.' },
  { title: 'One point of contact', text: 'From first brief to final delivery, one team keeps you updated.' },
];

export default function Home() {
  useScrollReveal();

  const [slide, setSlide] = useState(0);
  const [activeCap, setActiveCap] = useState(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (activeCap === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setActiveCap(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeCap]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Journey Scroll Animation — real scroll-jacking.
    // Desktop: page scroll is frozen the instant the journey box reaches the
    // top of the viewport. Wheel/touch/keyboard input then drives the story
    // progress directly (no page movement at all) until it hits 0% or 100%,
    // at which point scroll is released and the page continues normally.
    // Small screens keep the old lightweight pass-through animation, since
    // hard-locking scroll on touch devices is a bad, janky experience there.
    const jpath = document.getElementById('jpath');
    const journeyScroll = document.querySelector('.journey-scroll');
    const jtruck = document.getElementById('jtruck');
    const jship = document.getElementById('jship');
    const jfill = document.getElementById('journeyProgressFill');
    const jstage = document.getElementById('journeyStage');
    const jstatus = document.getElementById('jstatus');
    const jwords = [...document.querySelectorAll('.journey-word')];

    let cleanupJourney = () => {};

    if (jpath && journeyScroll) {
      const len = jpath.getTotalLength();
      jpath.style.strokeDasharray = len;

      const STAGE_LABELS = ['01 · Source', '02 · Prepare', '03 · Ship', '04 · Deliver'];
      const STATUS_HTML = [
        'Dindigul<b>Ready to dispatch</b>',
        'Dindigul<b>Packed &amp; quality checked</b>',
        'At sea<b>Crossing to your market</b>',
        'Arriving<b>Ready for handover</b>',
      ];

      function render(p) {
        jpath.style.strokeDashoffset = len * (1 - p);
        if (jfill) jfill.style.width = (p * 100) + '%';

        const truckP = Math.min(p / 0.55, 1);
        const shipP = Math.min(Math.max((p - 0.44) / 0.56, 0), 1);

        const a = jpath.getPointAtLength(len * truckP);
        const b = jpath.getPointAtLength(Math.min(len, len * truckP + 0.8));
        const ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;

        if (jtruck) {
          jtruck.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${ang})`);
          jtruck.style.opacity = 1 - shipP;
        }

        const sh = jpath.getPointAtLength(len * (0.44 + shipP * 0.56));
        if (jship) {
          jship.setAttribute('transform', `translate(${sh.x} ${sh.y})`);
          jship.style.opacity = shipP;
        }

        const idx = p < 0.42 ? 0 : p < 0.48 ? 1 : p < 0.9 ? 2 : 3;
        jwords.forEach((w, i) => w.classList.toggle('active', i === idx));
        if (jstage) jstage.textContent = STAGE_LABELS[idx];
        if (jstatus) jstatus.innerHTML = STATUS_HTML[idx];
      }

      if (reduceMotion) {
        render(1);
      } else if (window.innerWidth <= 1050) {
        // --- Small screens: simple pass-through, no locking ---
        let ticking = false;
        const updatePassThrough = () => {
          const rect = journeyScroll.getBoundingClientRect();
          const vh = window.innerHeight;
          const start = vh * 0.85;
          const end = vh * 0.15;
          const range = start - end + rect.height;
          const p = Math.min(Math.max((start - rect.top) / range, 0), 1);
          render(p);
          ticking = false;
        };
        const onScroll = () => {
          if (!ticking) { requestAnimationFrame(updatePassThrough); ticking = true; }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updatePassThrough);
        updatePassThrough();
        cleanupJourney = () => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', updatePassThrough);
        };
      } else {
        // --- Desktop: hard scroll-lock ---
        let progress = 0;
        let locked = false;
        let lastScrollY = window.scrollY;
        let lastTop = journeyScroll.getBoundingClientRect().top;
        let rafId = null;

        render(0);

        const lockScroll = () => {
          if (locked) return;
          locked = true;
          document.documentElement.style.overflow = 'hidden';
          document.body.style.overflow = 'hidden';
        };
        const unlockScroll = () => {
          if (!locked) return;
          locked = false;
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        };

        const onWheel = (e) => {
          if (!locked) return;
          e.preventDefault();
          progress = Math.min(Math.max(progress + e.deltaY / 2200, 0), 1);
          render(progress);
          if (progress >= 1 && e.deltaY > 0) unlockScroll();
          else if (progress <= 0 && e.deltaY < 0) unlockScroll();
        };

        let touchY = 0;
        const onTouchStart = (e) => { touchY = e.touches[0].clientY; };
        const onTouchMove = (e) => {
          if (!locked) return;
          e.preventDefault();
          const y = e.touches[0].clientY;
          const delta = touchY - y;
          touchY = y;
          progress = Math.min(Math.max(progress + delta / 900, 0), 1);
          render(progress);
          if (progress >= 1 && delta > 0) unlockScroll();
          else if (progress <= 0 && delta < 0) unlockScroll();
        };

        const onKeyDown = (e) => {
          if (!locked) return;
          if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
            e.preventDefault();
            progress = Math.min(progress + 0.08, 1);
            render(progress);
            if (progress >= 1) unlockScroll();
          } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            progress = Math.max(progress - 0.08, 0);
            render(progress);
            if (progress <= 0) unlockScroll();
          }
        };

        const checkEntry = () => {
          if (locked) return;
          const rect = journeyScroll.getBoundingClientRect();
          const scrollingDown = window.scrollY > lastScrollY;
          lastScrollY = window.scrollY;

          const prevTop = lastTop;
          const curTop = rect.top;
          lastTop = curTop;

          // Detect the boundary being crossed between the last frame and this
          // one, rather than requiring the scroll to land inside a tiny pixel
          // window — normal/fast scrolling easily jumps past a fixed-pixel
          // check in a single frame, which silently skipped the lock before.
          const crossedDown = prevTop > 0 && curTop <= 0;
          const crossedUp = prevTop < 0 && curTop >= 0;
          const atBoundary = Math.abs(curTop) < 1;

          if (scrollingDown && progress < 1 && (crossedDown || (atBoundary && curTop <= 0))) {
            window.scrollBy(0, curTop);
            lockScroll();
          } else if (!scrollingDown && progress > 0 && (crossedUp || (atBoundary && curTop >= 0))) {
            window.scrollBy(0, curTop);
            lockScroll();
          }
        };

        const onScroll = () => {
          if (rafId) return;
          rafId = requestAnimationFrame(() => { checkEntry(); rafId = null; });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('keydown', onKeyDown);

        cleanupJourney = () => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('wheel', onWheel);
          window.removeEventListener('touchstart', onTouchStart);
          window.removeEventListener('touchmove', onTouchMove);
          window.removeEventListener('keydown', onKeyDown);
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        };
      }
    }

    return () => {
      cleanupJourney();
    };
  }, []);

  return (
    <>

      <section className="hero">
        <div className="hero-slider" aria-roledescription="carousel">
          <div className="hero-slider-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
            {HERO_SLIDES.map((s, i) => (
              <div className="hero-slide" key={i} aria-hidden={i !== slide}>
                <span>{s.label} · placeholder</span>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="live-dot"></span>Indian export partner &middot; Est. 2015</div>
          <h1><span className="line"><span className="word">Your</span> <span className="word">gateway</span></span> <span className="line"><span className="word">to</span> <span className="word"><em>India.</em></span></span></h1>
          <p className="hero-intro">We source, prepare and move Indian products for buyers worldwide &mdash; from trusted suppliers in Dindigul to your market.</p>
          <div className="hero-actions"><Link className="btn dark" to="/contact">Start an enquiry</Link><a className="btn light" href="#products">Explore products</a></div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="wrap intro-grid">
          <div className="index-num reveal">01</div>
          <div>
            <div className="eyebrow kicker reveal">Who we are</div>
            <h2 className="display text-reveal reveal" data-stagger><span>More than a supplier.</span><span>A route into India.</span></h2>
            <p className="body-copy reveal">Sri Jothi Traders connects international wholesalers, distributors and private-label buyers with Indian products. We handle sourcing, customization, packaging and export preparation from one place.</p>
            <Link className="btn light reveal" style={{ 'marginTop': '30px' }} to="/about">Our story &rarr;</Link>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {LOOPED_MARQUEE.map((item, i) => (
            <span key={i} aria-hidden={i >= MARQUEE_ITEMS.length}>{item}</span>
          ))}
        </div>
      </div>
      <section className="section dark-section" id="export">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow reveal">What we do</div><h2 className="display text-reveal reveal" data-stagger><span>From the first product brief</span><span>to the final shipment.</span></h2></div>
          <div className="cap-grid" data-stagger>
            {CAPS.map((c, i) => (
              <article
                className="cap reveal"
                key={c.num}
                role="button"
                tabIndex={0}
                onClick={() => setActiveCap(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCap(i);
                  }
                }}
              >
                <span className="cap-num">{c.num}</span>
                <div className="cap-icon"><svg viewBox="0 0 24 24">{c.icon}</svg></div>
                <h3>{c.title}</h3>
                <p>{c.short}</p>
                <div className="cap-arrow"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow reveal">Our range</div><h2 className="display text-reveal reveal" data-stagger><span>Indian products, prepared</span><span>for your market.</span></h2></div>

          <div className="products-carousel reveal">
            <div className="products-track">
              {LOOPED_RANGE_PRODUCTS.map((p, i) => (
                <article className="product" key={i} aria-hidden={i >= RANGE_PRODUCTS.length}>
                  <div className="product-art"></div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <Link className="btn dark reveal" style={{ 'marginTop': '28px' }} to="/products">See all seven categories &rarr;</Link>
        </div>
      </section>

      <section className="section statement">
        <div className="wrap statement-inner">
          <div className="eyebrow reveal">Private label</div>
          <h2 className="text-reveal reveal" data-stagger><span>Your brand.</span><span className="accent">Our sourcing.</span></h2>
          <p className="reveal">Build a product around your brand, pack size and destination requirements without managing multiple suppliers in India.</p>
          <Link className="btn light reveal" to="/customization">How customization works &rarr;</Link>
        </div>
      </section>

      {/* <section className="section journey" id="journey">
        <div className="wrap journey-copy">
          <div><div className="eyebrow reveal">Export in motion</div><h2 className="display text-reveal reveal" data-stagger><span>Watch the shipment</span><span>move to your market.</span></h2></div>
        </div>
        <div className="journey-scroll">
          <div className="journey-pin">
            <div className="wrap">
              <div className="journey-visual">
                <div className="jstatus" id="jstatus">Dindigul<b>Ready to dispatch</b></div>
                <svg className="journey-svg" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid meet">
                  <path className="jline-glow" d="M100 330 C300 190 420 370 610 260 S900 110 1090 220" />
                  <path id="jpath" className="jline" d="M100 330 C300 190 420 370 610 260 S900 110 1090 220" />
                  <circle className="jdot" cx="100" cy="330" r="7" /><circle className="jdot" cx="610" cy="260" r="6" /><circle className="jdot" cx="1090" cy="220" r="6" />
                  <g id="jtruck"><rect className="jtruck" x="-28" y="-14" width="38" height="20" rx="3" /><path className="jtruck" d="M10 -8h14l9 9v5H10z" /><circle cx="-17" cy="8" r="4" fill="#171a18" /><circle cx="20" cy="8" r="4" fill="#171a18" /></g>
                  <g id="jship" opacity="0"><path className="jship" d="M-55 5h100l-12 18h-72z" /><rect className="jtruck" x="-35" y="-15" width="22" height="18" /><rect className="jtruck" x="-9" y="-15" width="22" height="18" /><rect className="jtruck" x="17" y="-15" width="22" height="18" /></g>
                  <text className="jlabel" x="85" y="365">DINDIGUL</text><text className="jlabel" x="580" y="295">PORT</text><text className="jlabel" x="1040" y="185">YOUR MARKET</text>
                </svg>
                <div className="journey-stage" id="journeyStage">01 · Source</div>
                <div className="journey-progress-track"><div className="journey-progress-fill" id="journeyProgressFill"></div></div>
              </div>
              <div className="journey-words"><div className="journey-word active">Source</div><div className="journey-word">Prepare</div><div className="journey-word">Ship</div><div className="journey-word">Deliver</div></div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section markets" id="markets">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow reveal">Where we go</div><h2 className="display text-reveal reveal" data-stagger><span>India to wherever</span><span>you need it.</span></h2></div>
          <div className="markets-grid" data-stagger>
            {MARKETS.map((market) => (
              <div className="market-card blur-reveal" key={market.name}>
                <div className="market-card-top">
                  <span className="market-flag" aria-hidden="true">{market.flag}</span>
                  <span className="market-status">{market.status}</span>
                </div>
                <h3>{market.name}</h3>
                <p className="market-ports">{market.ports}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="wrap">
          <div className="eyebrow">Let's move something</div>
          <h2 className="text-reveal reveal" data-stagger><span>Tell us what you need.</span><span><em>We'll take it from India.</em></span></h2>
          <div className="contact-row">
            <p className="reveal">For B2B supply, private label or a custom sourcing requirement, start a conversation with the Sri Jothi team.</p>
            <Link className="btn cta reveal" to="/contact">Start an enquiry &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">Reviews</div>
            <h2 className="display text-reveal reveal" data-stagger><span>What buyers say</span><span>about working with us.</span></h2>
          </div>
        </div>
        <div className="reviews-carousel">
          <div className="reviews-track">
            {LOOPED_REVIEWS.map((r, i) => (
              <figure className="review-card" key={i} aria-hidden={i >= REVIEWS.length}>
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>{r.text}</blockquote>
                <figcaption><b>{r.name}</b><span>{r.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section why" id="why">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">Why Sri Jothi</div>
            <h2 className="display text-reveal reveal" data-stagger><span>Our value to you.</span></h2>
          </div>
          <div className="why-grid" data-stagger>
            {VALUE_POINTS.map((v, i) => (
              <div className="why-item reveal" key={v.title}>
                <span className="why-num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeCap !== null && (
        <div className="cap-modal-overlay" onClick={() => setActiveCap(null)}>
          <div
            className="cap-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="capModalTitle"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="cap-modal-close" aria-label="Close" onClick={() => setActiveCap(null)}>&times;</button>
            <span className="cap-modal-num">{CAPS[activeCap].num}</span>
            <h3 id="capModalTitle">{CAPS[activeCap].title}</h3>
            <p>{CAPS[activeCap].more}</p>
            <Link className="btn dark" to={CAPS[activeCap].link} onClick={() => setActiveCap(null)}>
              {CAPS[activeCap].linkLabel} &rarr;
            </Link>
          </div>
        </div>
      )}

    </>
  );
}
