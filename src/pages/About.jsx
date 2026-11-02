import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import HeroBgSlider from '../components/HeroBgSlider';

function CrownIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M5 13l10 8 9-14 9 14 10-8-5 25H10L5 13Z" />
      <path d="M10 38h28" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="7" y="15" width="34" height="25" rx="4" />
      <path d="M17 15v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M7 25h34M21 25v4h6v-4" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 7v33M14 12h20M10 14l-7 15h14L10 14ZM38 14l-7 15h14l-7-15ZM17 40h14" />
      <path d="M24 7l-4 4h8l-4-4Z" />
    </svg>
  );
}

export default function About() {
  useScrollReveal();

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="page-hero">
        <HeroBgSlider />
        <div className="wrap" data-stagger>
          <p className="eyebrow reveal">About us</p>
          <h1 className="text-reveal reveal">
            <span>A decade of exporting Indian products, ready for your shelves.</span>
          </h1>
          <p className="reveal">
            Sri Jothi Traders is a certified export company based in Dindigul,
            Tamil Nadu, India. We source, customize and ship Indian grocery
            products to buyers around the world.
          </p>
        </div>
      </section>

      {/* OUR STORY & JOURNEY */}
      <section className="about-timeline">
        <div className="wrap">
          <div className="timeline-heading">
            <p className="eyebrow reveal">Our story &amp; journey</p>
            <h2 className="reveal">
              Built on trust.<br />
              <span>Growing through it.</span>
            </h2>
            <p className="timeline-intro reveal">
              From our beginnings in Dindigul to serving grocery businesses
              across international markets, every step has been shaped by
              reliable partnerships and a commitment to quality.
            </p>
          </div>

          <div className="timeline-track">
            <article className="timeline-entry reveal">
              <div className="timeline-marker" aria-hidden="true"><span>01</span></div>
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <span className="timeline-label">Where it began</span>
                <h3>A small beginning. A clear purpose.</h3>
                <p>
                  Sri Jothi Traders was founded in Dindigul, Tamil Nadu, with a
                  focus on connecting Indian products with international grocery buyers.
                </p>
              </div>
            </article>

            <article className="timeline-entry reveal">
              <div className="timeline-marker" aria-hidden="true"><span>02</span></div>
              <div className="timeline-year">Early years</div>
              <div className="timeline-content">
                <span className="timeline-label">Trust that travelled</span>
                <h3>Growing through relationships.</h3>
                <p>
                  Our first buyers in the UK and Gulf recommended us to others
                  and returned with repeat orders. Their trust became the
                  foundation for our growth.
                </p>
              </div>
            </article>

            <article className="timeline-entry reveal">
              <div className="timeline-marker" aria-hidden="true"><span>03</span></div>
              <div className="timeline-year">Today</div>
              <div className="timeline-content">
                <span className="timeline-label">Built to deliver</span>
                <h3>More than sourcing. Ready for your shelves.</h3>
                <p>
                  We operate from a 10,000 sq ft warehouse in Dindigul,
                  offering product sourcing, private labelling, repacking and
                  destination-compliant packaging for international buyers.
                </p>
              </div>
            </article>

            <article className="timeline-entry reveal">
              <div className="timeline-marker" aria-hidden="true"><span>04</span></div>
              <div className="timeline-year">Next chapter</div>
              <div className="timeline-content">
                <span className="timeline-label">Expanding our reach</span>
                <h3>Taking trusted partnerships further.</h3>
                <p>
                  We are working towards expanding into the USA, Canada and
                  Australia, bringing our customized export services to more
                  grocery businesses around the world.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="about-facts">
        <div className="wrap facts">
          <p className="eyebrow reveal">At a glance</p>
          <div className="facts-grid reveal-stagger">
            <div className="fact reveal"><b>2015</b><span>Founded in Dindigul, Tamil Nadu</span></div>
            <div className="fact reveal"><b>10,000 sq ft</b><span>Warehouse and preparation facility</span></div>
            <div className="fact reveal"><b>192</b><span>Countries served</span></div>
            <div className="fact reveal"><b>9</b><span>Certifications and registrations</span></div>
            <div className="fact reveal"><b>7</b><span>Product categories</span></div>
            <div className="fact reveal"><b>UK &amp; Gulf</b><span>Where our first buyers came from</span></div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="about-values">
        <div className="wrap">
          <div className="facts-grid reveal-stagger">
            <div className="fact reveal">
              <b>Mission</b>
              <span>To deliver certified, customized Indian products to grocery businesses worldwide, with a reliability our buyers can count on.</span>
            </div>
            <div className="fact reveal">
              <b>Vision</b>
              <span>To be the trusted first choice for Indian grocery exports across the globe.</span>
            </div>
            <div className="fact reveal">
              <b>Values</b>
              <span>Reliability · Quality · Customization · Transparency</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="about-quality">
        <div className="wrap story">
          <p className="eyebrow reveal">Our commitment to quality</p>
          <h2 className="reveal">Standards built into every shipment.</h2>
          <p className="reveal">
            Every order goes through quality checks, export documentation and
            destination-compliant packaging before it leaves our warehouse.
          </p>
          <p className="reveal">
            Our certifications, including FSSAI, APEDA, ISO 22000 and Organic,
            reflect the standards we work to every day.
          </p>
        </div>
      </section>

      {/* LEADERSHIP & GOVERNANCE */}
      <section className="leadership-section">
        <div className="leadership-shell">
          <header className="leadership-heading">
            <p className="leadership-eyebrow">Our company</p>
            <h2>Leadership &amp; Governance</h2>
            <p>Leadership built on vision, responsibility<br className="desktop-break" /> and trust.</p>
          </header>

          <div className="leadership-cards">
            <article className="leader-card leader-card-chair">
              <div className="leader-icon leader-icon-gold"><CrownIcon /></div>
              <h3>Mr. Sritharan</h3>
              <p className="leader-role">Chairman &amp; Founder</p>
              <p className="leader-description">Vision, strategic direction and overall leadership.</p>
            </article>

            <div className="leadership-supporting">
              <article className="leader-card">
                <div className="leader-icon"><BriefcaseIcon /></div>
                <h3>Dr. Gowtham</h3>
                <p className="leader-role">Chief Executive Officer</p>
                <p className="leader-description">Business strategy, management and growth.</p>
              </article>

              <article className="leader-card">
                <div className="leader-icon"><ScaleIcon /></div>
                <h3>Mr. Nandha Kishore</h3>
                <p className="leader-role">Chief Legal Officer</p>
                <p className="leader-description">Legal affairs, contracts and compliance.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE'RE HEADED */}
      <section className="mission">
        <div className="wrap">
          <h2 className="reveal">Where we’re headed</h2>
          <p className="reveal">
            Our next goal is to extend the trust we’ve built with UK and Gulf
            buyers to the USA, Canada and Australia, and around the world to
            become the export partner Indian grocery businesses turn to first,
            wherever they trade.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="callout">
        <div className="wrap">
          <h2 className="reveal">Let’s build a trusted supply partnership.</h2>
          <div className="cta-group reveal">
            <Link to="/company-profile" className="btn on-dark">Download Company Profile</Link>
            <Link to="/products" className="btn on-dark">Company Catalogue</Link>
            <Link to="/contact" className="btn cta">Contact Us →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
