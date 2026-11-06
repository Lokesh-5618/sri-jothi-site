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
  { name: 'United Kingdom', flagCode: 'GB', flagFile: 'gb.jpg', flagUrl: 'https://flagcdn.com/w160/gb.jpg', status: 'Established', ports: 'Felixstowe · Southampton · London Gateway' },
  { name: 'Gulf', flagCode: 'AE', flagFile: 'ae.jpg', flagUrl: 'https://flagcdn.com/w160/ae.jpg', status: 'Established', ports: 'Jebel Ali · Sohar · Hamad' },
  { name: 'United States', flagCode: 'US', flagFile: 'us.jpg', flagUrl: 'https://flagcdn.com/w160/us.jpg', status: 'Priority', ports: 'Los Angeles · New York · Savannah' },
  { name: 'Canada', flagCode: 'CA', flagFile: 'ca.jpg', flagUrl: 'https://flagcdn.com/w160/ca.jpg', status: 'Expansion', ports: 'Vancouver · Montreal · Halifax' },
  { name: 'Australia', flagCode: 'AU', flagFile: 'au.jpg', flagUrl: 'https://flagcdn.com/w160/au.jpg', status: 'Expansion', ports: 'Sydney · Melbourne · Brisbane' },
];

const LOOPED_RANGE_PRODUCTS = [...RANGE_PRODUCTS, ...RANGE_PRODUCTS];

const HERO_SLIDES = [
  { label: 'Export sourcing', image: '/images/hero-export-1.jpg' },
  { label: 'Product preparation', image: '/images/hero-export-2.jpg' },
  { label: 'Global delivery', image: '/images/hero-export-3.jpg' },
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
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    document.body.classList.add('home-page-active');
    return () => document.body.classList.remove('home-page-active');
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
          if (!ticking) {
            requestAnimationFrame(updatePassThrough);
            ticking = true;
          }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updatePassThrough);
        updatePassThrough();
        cleanupJourney = () => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', updatePassThrough);
        };
      } else {
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
          rafId = requestAnimationFrame(() => {
            checkEntry();
            rafId = null;
          });
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

    return () => cleanupJourney();
  }, []);

  return (
    <>
      <section className="hero" aria-label="Sri Jothi Traders introduction">
        <div className="hero-slider" aria-roledescription="carousel" aria-label="Export imagery">
          <div className="hero-slider-track" style={{ transform: `translate3d(-${activeHeroSlide * 100}%, 0, 0)` }}>
            {HERO_SLIDES.map((slide, index) => (
              <div
                className={`hero-slide${index === activeHeroSlide ? ' is-active' : ''}`}
                key={slide.image}
                aria-hidden={index !== activeHeroSlide}
                style={{ '--hero-image': `url("${slide.image}")` }}
              >
                <span className="hero-slide-label">{slide.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-footer">
          <div className="hero-footer-main">
            <div className="hero-footer-heading">
              <div className="eyebrow hero-eyebrow"><span className="live-dot"></span>Indian export partner &middot; Est. 2015</div>
              <h1>Your gateway<br />to India.</h1>
            </div>
            <p className="hero-intro">We source, prepare and move Indian products for buyers worldwide &mdash; from trusted suppliers in Dindigul to your market.</p>
            <div className="hero-actions">
              <Link className="btn dark" to="/contact">Contact us <span aria-hidden="true">↗</span></Link>
              <a className="btn light" href="#products">Explore products</a>
            </div>
          </div>

          <div className="hero-services" aria-label="Our export services">
            <div className="hero-service">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 28 9.5v13L16 29 4 22.5v-13L16 3Z"/><path d="m4.5 9.7 11.5 6.5 11.5-6.5M16 16.2V29M10 6.3l12 6.6"/></svg>
              <span>Sourcing from trusted Indian suppliers</span>
            </div>
            <div className="hero-service">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 8h17v15H3zM20 13h5l4 5v5h-9z"/><circle cx="9" cy="25" r="2.5"/><circle cx="24" cy="25" r="2.5"/></svg>
              <span>Preparation &amp; export, end to end</span>
            </div>
            <div className="hero-service">
              <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13"/><path d="M3 16h26M16 3c4 4 6 8.5 6 13s-2 9-6 13c-4-4-6-8.5-6-13s2-9 6-13Z"/></svg>
              <span>Delivery to global buyers</span>
            </div>
          </div>

          <div className="hero-pagination" role="group" aria-label="Choose hero slide">
            {HERO_SLIDES.map((slide, index) => (
              <button
                className={index === activeHeroSlide ? 'is-active' : ''}
                type="button"
                key={slide.image}
                aria-label={`Show slide ${index + 1}: ${slide.label}`}
                aria-pressed={index === activeHeroSlide}
                onClick={() => setActiveHeroSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="wrap">
          <div className="home-section-head">
            <div className="section-number reveal">01</div>
            <div className="eyebrow reveal">Who we are</div>
            <h2 className="display text-reveal reveal" data-stagger>
              <span>More than a supplier.</span>{' '}
              <span>A route into India.</span>
            </h2>
          </div>
          <p className="body-copy reveal">Sri Jothi Traders connects international wholesalers, distributors and private-label buyers with Indian products. We handle sourcing, customization, packaging and export preparation from one place.</p>
          <Link className="btn light reveal" style={{ marginTop: '30px' }} to="/about">Our story &rarr;</Link>
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
          <div className="home-section-head">
            <div className="section-number reveal">02</div>
            <div className="eyebrow reveal">What we do</div>
            <h2 className="display text-reveal reveal" data-stagger>
              <span>From the first product brief</span>{' '}
              <span>to the final shipment.</span>
            </h2>
          </div>
          <div className="cap-grid" data-stagger>
            {CAPS.map((c, i) => (
              <article className="cap reveal" key={c.num} tabIndex={0} style={{ '--i': i }} aria-label={`${c.title}: ${c.short}`}>
                <span className="cap-num">{c.num}</span>
                <div className="cap-icon"><svg viewBox="0 0 24 24">{c.icon}</svg></div>
                <h3>{c.title}</h3>
                <p className="cap-short">{c.short}</p>
                <div className="cap-details">
                  <p>{c.more}</p>
                  <Link className="cap-detail-link" to={c.link}>{c.linkLabel} <span aria-hidden="true">↗</span></Link>
                </div>
                <div className="cap-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="wrap">
          <div className="home-section-head">
            <div className="section-number reveal">03</div>
            <div className="eyebrow reveal">Our range</div>
            <h2 className="display text-reveal reveal" data-stagger>
              <span>Indian products, prepared</span>{' '}
              <span>for your market.</span>
            </h2>
          </div>
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
          <Link className="btn dark reveal" style={{ marginTop: '28px' }} to="/products">See all seven categories &rarr;</Link>
        </div>
      </section>

      <section className="section statement">
        <div className="wrap">
          <div className="home-section-head">
            <div className="section-number reveal">04</div>
            <div className="eyebrow reveal">Private label</div>
            <h2 className="display text-reveal reveal" data-stagger>
              <span>Your brand.</span>{' '}
              <span className="accent">Our sourcing.</span>
            </h2>
          </div>
          <p className="body-copy reveal">Build a product around your brand, pack size and destination requirements without managing multiple suppliers in India.</p>
          <Link className="btn light reveal" to="/customization">How customization works &rarr;</Link>
        </div>
      </section>

      <section className="section markets" id="markets">
        <div className="wrap">
          <div className="home-section-head">
            <div className="section-number reveal">05</div>
            <div className="eyebrow reveal">Where we go</div>
            <h2 className="display text-reveal reveal" data-stagger>
              <span>India to wherever you need it.</span>
            </h2>
          </div>
          <div className="markets-carousel reveal" aria-label="Our international markets">
            <div className="markets-carousel-track">
              {[...MARKETS, ...MARKETS].map((market, index) => (
                <article
                  className="country-market-card"
                  key={`${market.name}-${index}`}
                  aria-hidden={index >= MARKETS.length}
                >
                  <div className="country-market-flag">
                    <img src={market.flagUrl} alt={`${market.name} flag`} loading="lazy" />
                  </div>
                  <h3 className="country-market-title">{market.name}</h3>
                  <div className="country-market-ports-label">Major Ports</div>
                  <div className="country-market-ports-row">
                    <svg className="country-market-ship" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <path d="M5 18.5h22l-3.1 6.1a3 3 0 0 1-2.7 1.6H10.8a3 3 0 0 1-2.7-1.6L5 18.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                      <path d="M9 18.5v-7h14v7M13 11.5V7.8h6v3.7M3.5 28c2.1-1.3 3.5-1.3 5.6 0 2.1 1.3 3.5 1.3 5.6 0 2.1-1.3 3.5-1.3 5.6 0 2.1 1.3 3.5 1.3 5.6 0 1.1-.7 2-.9 3.1-.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="country-market-ports">{market.ports}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section why" id="why">
        <div className="wrap">
          <div className="home-section-head">
            <div className="section-number reveal">06</div>
            <div className="eyebrow reveal">Why Sri Jothi</div>
            <h2 className="display text-reveal reveal" data-stagger>
              <span>Why buyers choose</span>{' '}
              <span>Sri Jothi Traders.</span>
            </h2>
          </div>
          <div className="why-grid" data-stagger>
            {VALUE_POINTS.map((v, i) => (
              <article className="why-item reveal" key={v.title} style={{ '--i': i }}>
                <span className="why-num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="wrap">
          <div className="home-section-head">
            <div className="section-number reveal">07</div>
            <div className="eyebrow reveal">Reviews</div>
            <h2 className="display text-reveal reveal" data-stagger>
              <span>What buyers say</span>{' '}
              <span>about working with us.</span>
            </h2>
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

      <section className="section contact-section" id="contact">
        <div className="wrap">
          <div className="home-section-head">
            <div className="section-number reveal">08</div>
            <div className="eyebrow reveal">Let's move something</div>
            <h2 className="display text-reveal reveal" data-stagger>
              <span>Tell us what you need.</span>{' '}
              <span><em>We'll take it from India.</em></span>
            </h2>
          </div>
          <div className="contact-row">
            <p className="reveal">For B2B supply, private label or a custom sourcing requirement, start a conversation with the Sri Jothi team.</p>
            <Link className="btn cta reveal" to="/contact">Start an enquiry &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
