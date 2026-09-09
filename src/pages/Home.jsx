import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const RANGE_PRODUCTS = [
  { title: <>Grains<br />&amp; Staples</>, desc: 'Rice, wheat, sugar and everyday staples for wholesale and retail supply.' },
  { title: <>Spices<br />&amp; Masalas</>, desc: 'Whole spices and blends.' },
  { title: <>Oils &amp;<br />Coconut</>, desc: 'Bulk and retail-ready formats.' },
  { title: <>Snacks<br />&amp; FMCG</>, desc: 'Demand-led products for your market.' },
];

export default function Home() {
  useScrollReveal();
  const [productSlide, setProductSlide] = useState(0);

  const goPrev = () => setProductSlide((s) => (s - 1 + RANGE_PRODUCTS.length) % RANGE_PRODUCTS.length);
  const goNext = () => setProductSlide((s) => (s + 1) % RANGE_PRODUCTS.length);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Hero Transport Animation
    const hero = document.querySelector('.hero');
    const heroTransport = document.getElementById('heroTransport');
    const heroTruck = document.getElementById('heroTruck');
    const heroPlane = document.getElementById('heroPlane');
    const heroShip = document.getElementById('heroShip');

    let heroTick = false;
    let heroListener;
    let resizeListener;

    if (hero && heroTransport && !reduceMotion) {
      function updateHeroTransport() {
        const range = Math.max(hero.offsetHeight, 1);
        const p = Math.min(Math.max(window.scrollY / range, 0), 1);
        const base = -35 + p * 270;
        const r = heroTransport.clientWidth * 0.43;

        const place = (el, offset, radius) => {
          const a = (base + offset) * Math.PI / 180;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius;
          if (el) el.style.transform = `translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) rotate(${a * 180 / Math.PI + 90}deg)`;
        };

        place(heroTruck, 0, r);
        place(heroPlane, 120, r * 0.82);
        place(heroShip, 240, r * 0.66);
        heroTick = false;
      }

      heroListener = () => {
        if (!heroTick) {
          requestAnimationFrame(updateHeroTransport);
          heroTick = true;
        }
      };

      resizeListener = updateHeroTransport;

      window.addEventListener('scroll', heroListener, { passive: true });
      window.addEventListener('resize', resizeListener);
      updateHeroTransport();
    }

    // Journey Scroll Animation
    const jpath = document.getElementById('jpath');
    const journeyScroll = document.querySelector('.journey-scroll');
    const jtruck = document.getElementById('jtruck');
    const jship = document.getElementById('jship');
    const jfill = document.getElementById('journeyProgressFill');
    const jstage = document.getElementById('journeyStage');
    const jstatus = document.getElementById('jstatus');
    const jwords = [...document.querySelectorAll('.journey-word')];

    let journeyTick = false;
    let journeyListener;
    let journeyResizeListener;
    let journeyWheelListener;
    let journeyProgress = 0;
    let journeyLocked = false;
    let journeyLockY = 0;
    let journeyLockReady = false;

    if (jpath && journeyScroll && !reduceMotion) {
      const len = jpath.getTotalLength();
      jpath.style.strokeDasharray = len;

      function renderJourney(p) {
        p = Math.min(Math.max(p, 0), 1);

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

        if (jstage) jstage.textContent = ['01 · Source', '02 · Prepare', '03 · Ship', '04 · Deliver'][idx];
        if (jstatus) {
          jstatus.innerHTML = ['Dindigul<b>Ready to dispatch</b>', 'Dindigul<b>Packed &amp; quality checked</b>', 'At sea<b>Crossing to your market</b>', 'Arriving<b>Ready for handover</b>'][idx];
        }
      }

      function getJourneyLockY() {
        return window.scrollY + journeyScroll.getBoundingClientRect().top;
      }

      function updateJourney() {
        if (!journeyScroll || !jpath) return;

        // Keep the existing scroll-driven behavior when the Journey is not pinned.
        const total = journeyScroll.offsetHeight - window.innerHeight;
        if (total <= 40 || !journeyLocked) {
          const rect = journeyScroll.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          let p;

          if (total > 40) {
            p = Math.min(Math.max(-rect.top / total, 0), 1);
          } else {
            const start = viewportHeight * 0.85;
            const end = viewportHeight * 0.15;
            const range = start - end + rect.height;
            p = Math.min(Math.max((start - rect.top) / range, 0), 1);
          }

          journeyProgress = p;
          renderJourney(p);
        }

        journeyTick = false;
      }

      function requestJourneyUpdate() {
        if (!journeyTick) {
          requestAnimationFrame(updateJourney);
          journeyTick = true;
        }
      }

      function enterJourneyLock(startProgress = 0) {
        const total = journeyScroll.offsetHeight - window.innerHeight;
        if (total <= 40) return false;

        journeyLockY = getJourneyLockY();
        journeyProgress = Math.min(Math.max(startProgress, 0), 1);
        journeyLocked = true;
        journeyLockReady = true;
        window.scrollTo(0, journeyLockY);
        renderJourney(journeyProgress);
        return true;
      }

      function leaveJourneyLock(direction) {
        journeyLocked = false;
        journeyLockReady = false;

        // Release the page at the end of the Journey. The normal document
        // scroll then continues from the exact end of the pinned track.
        const total = journeyScroll.offsetHeight - window.innerHeight;
        const destination = direction > 0
          ? journeyLockY + Math.max(total, 0)
          : journeyLockY;

        window.scrollTo(0, destination);
        requestJourneyUpdate();
      }

      journeyListener = () => {
        if (journeyLocked) {
          window.scrollTo(0, journeyLockY);
          return;
        }

        const total = journeyScroll.offsetHeight - window.innerHeight;
        if (total > 40) {
          const top = journeyScroll.getBoundingClientRect().top;
          if (top <= 0 && window.scrollY < getJourneyLockY() + total) {
            journeyLockY = getJourneyLockY();
          }
        }

        requestJourneyUpdate();
      };

      journeyWheelListener = (event) => {
        const total = journeyScroll.offsetHeight - window.innerHeight;
        if (total <= 40) return;

        const delta = event.deltaY;
        if (!delta) return;

        if (!journeyLocked) {
          const lockY = getJourneyLockY();
          const atJourneyStart = window.scrollY >= lockY - 1 && window.scrollY <= lockY + 1;
          const atJourneyEnd = window.scrollY >= lockY + total - 1;

          if ((delta > 0 && atJourneyStart) || (delta < 0 && atJourneyEnd)) {
            event.preventDefault();
            if (!journeyLockReady) enterJourneyLock(delta > 0 ? 0 : 1);
          } else {
            return;
          }
        } else {
          event.preventDefault();
        }

        if (!journeyLocked) return;

        // One wheel pixel equals one pixel of the original pinned scroll
        // distance, so the Journey takes the same amount of scrolling as before.
        journeyProgress += delta / total;

        if (journeyProgress >= 1) {
          journeyProgress = 1;
          renderJourney(1);
          leaveJourneyLock(1);
        } else if (journeyProgress <= 0) {
          journeyProgress = 0;
          renderJourney(0);
          leaveJourneyLock(-1);
        } else {
          renderJourney(journeyProgress);
          window.scrollTo(0, journeyLockY);
        }
      };

      journeyResizeListener = () => {
        if (journeyLocked) {
          journeyLockY = getJourneyLockY();
          window.scrollTo(0, journeyLockY);
          renderJourney(journeyProgress);
        } else {
          updateJourney();
        }
      };

      window.addEventListener('scroll', journeyListener, { passive: true });
      window.addEventListener('wheel', journeyWheelListener, { passive: false });
      window.addEventListener('resize', journeyResizeListener);
      updateJourney();

    } else if (jpath) {
      jpath.style.strokeDashoffset = 0;
      if (jship) {
        jship.style.opacity = 1;
        jship.setAttribute('transform', 'translate(1090 220)');
      }
      if (jtruck) jtruck.style.opacity = 0;
    }

    return () => {
      if (heroListener) window.removeEventListener('scroll', heroListener);
      if (resizeListener) window.removeEventListener('resize', resizeListener);
      if (journeyListener) window.removeEventListener('scroll', journeyListener);
      if (journeyWheelListener) window.removeEventListener('wheel', journeyWheelListener);
      if (journeyResizeListener) window.removeEventListener('resize', journeyResizeListener);
    };
  }, []);

  return (
    <>

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="live-dot"></span>Indian export partner &middot; Est. 2015</div>
            <h1><span className="line"><span className="word">Your</span> <span className="word">gateway</span></span><span className="line"><span className="word">to</span> <span className="word"><em>India.</em></span></span></h1>
            <p className="hero-intro">We source, prepare and move Indian products for buyers worldwide &mdash; from trusted suppliers in Dindigul to your market.</p>
            <div className="hero-actions"><Link className="btn dark" to="/contact">Start an enquiry</Link><a className="btn light" href="#products">Explore products</a></div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-transport" id="heroTransport">
              <div className="hero-orbit hero-orbit-a"></div><div className="hero-orbit hero-orbit-b"></div><div className="hero-orbit hero-orbit-c"></div>
              <div className="hero-transport-glow"></div>
              <div className="hero-vehicle hero-truck" id="heroTruck"><svg viewBox="-32 -18 72 38"><rect x="-29" y="-14" width="39" height="20" rx="3" /><path d="M10 -9h14l9 9v6H10z" /><circle cx="-18" cy="9" r="4" /><circle cx="20" cy="9" r="4" /></svg></div>
              <div className="hero-vehicle hero-plane" id="heroPlane"><svg viewBox="-28 -18 58 36"><path d="M-25 2L24 -6L2 2L24 10L-25 4L-12 2Z" /><path d="M-3 1L-12 -14L-8 1Z" /></svg></div>
              <div className="hero-vehicle hero-ship" id="heroShip"><svg viewBox="-46 -22 92 44"><path d="M-40 4h76L24 17h-50z" /><rect x="-23" y="-11" width="17" height="14" rx="1" /><rect x="-3" y="-11" width="17" height="14" rx="1" /><rect x="17" y="-11" width="10" height="14" rx="1" /></svg></div>
              <div className="hero-transport-center"></div>
            </div>
          </div>
        </div>
        <div className="scroll-cue"><i></i></div>
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

      <div className="marquee"><div className="marquee-track"><span>RICE</span><span>SPICES</span><span>MASALAS</span><span>COCONUT</span><span>DAIRY</span><span>SNACKS</span><span>FMCG</span><span>RICE</span><span>SPICES</span><span>MASALAS</span><span>COCONUT</span><span>DAIRY</span><span>SNACKS</span><span>FMCG</span></div></div>

      <section className="section dark-section" id="export">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow reveal">What we do</div><h2 className="display text-reveal reveal" data-stagger><span>From the first product brief</span><span>to the final shipment.</span></h2></div>
          <div className="cap-grid" data-stagger>
            <article className="cap reveal">
              <span className="cap-num">01</span>
              <div className="cap-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg></div>
              <h3>Source</h3>
              <p>Find the right Indian products and trusted suppliers for your requirement.</p>
              <div className="cap-arrow"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg></div>
            </article>
            <article className="cap reveal">
              <span className="cap-num">02</span>
              <div className="cap-icon"><svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18M7.5 7.5l9 9M16.5 7.5l-9 9" /></svg></div>
              <h3>Customize</h3>
              <p>Private label, pack size and market-specific product preparation.</p>
              <div className="cap-arrow"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg></div>
            </article>
            <article className="cap reveal">
              <span className="cap-num">03</span>
              <div className="cap-icon"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg></div>
              <h3>Prepare</h3>
              <p>Quality checks, documentation, packaging and destination compliance.</p>
              <div className="cap-arrow"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg></div>
            </article>
            <article className="cap reveal">
              <span className="cap-num">04</span>
              <div className="cap-icon"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>
              <h3>Export</h3>
              <p>Coordinated handover to logistics and shipment tracking to your market.</p>
              <div className="cap-arrow"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow reveal">Our range</div><h2 className="display text-reveal reveal" data-stagger><span>Indian products, prepared</span><span>for your market.</span></h2></div>

          <div className="products-carousel reveal">
            <div className="products-track" style={{ transform: `translateX(-${productSlide * 100}%)` }}>
              {RANGE_PRODUCTS.map((p, i) => (
                <article className="product" key={i}>
                  <div className="product-art"></div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="carousel-controls reveal">
            <button type="button" className="carousel-btn" onClick={goPrev} aria-label="Previous product category">
              <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <div className="carousel-dots">
              {RANGE_PRODUCTS.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  className={`carousel-dot ${i === productSlide ? 'active' : ''}`}
                  onClick={() => setProductSlide(i)}
                  aria-label={`Go to product ${i + 1}`}
                />
              ))}
            </div>
            <button type="button" className="carousel-btn" onClick={goNext} aria-label="Next product category">
              <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>

          <Link className="btn dark reveal" style={{ 'marginTop': '28px' }} to="/products">See all seven categories &rarr;</Link>
        </div>
      </section>

      <section className="section statement">
        <div className="wrap statement-inner">
          <div className="eyebrow reveal">Private label</div>
          <h2 className="text-reveal reveal" data-stagger><span>Your brand.</span><span className="accent">Our sourcing.</span></h2>
          <p className="reveal">Build a product around your brand, pack size and destination requirements without managing multiple suppliers in India.</p>
          <Link className="btn light reveal" style={{ 'marginTop': '30px' }} to="/customization">How customization works &rarr;</Link>
        </div>
      </section>

      <section className="section journey" id="journey">
        <div className="wrap journey-copy">
          <div><div className="eyebrow reveal">Export in motion</div><h2 className="display text-reveal reveal" data-stagger><span>Watch the shipment</span><span>move to your market.</span></h2></div>
          <p className="journey-note reveal">Keep scrolling. The route builds from sourcing to preparation, port and final delivery.</p>
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
      </section>

      <section className="section markets" id="markets">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow reveal">Where we go</div><h2 className="display text-reveal reveal" data-stagger><span>India to wherever</span><span>you need it.</span></h2></div>
          <div className="market-list" data-stagger>
            <div className="market reveal"><span className="market-num">01</span><h3>United Kingdom</h3><b>Established</b></div>
            <div className="market reveal"><span className="market-num">02</span><h3>Gulf</h3><b>Established</b></div>
            <div className="market reveal"><span className="market-num">03</span><h3>United States</h3><b>Priority</b></div>
            <div className="market reveal"><span className="market-num">04</span><h3>Canada</h3><b>Expansion</b></div>
            <div className="market reveal"><span className="market-num">05</span><h3>Australia</h3><b>Expansion</b></div>
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

    </>
  );
}
