import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import HeroBgSlider from '../components/HeroBgSlider';

export default function About() {
  useScrollReveal();
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return undefined;

    const entries = Array.from(timeline.querySelectorAll('.timeline-entry'));
    if (!(window.IntersectionObserver)) {
      timeline.classList.add('timeline-in-view');
      entries.forEach((entry) => entry.classList.add('timeline-active'));
      return undefined;
    }

    const sectionObserver = new IntersectionObserver((observations) => {
      observations.forEach((observation) => {
        if (observation.isIntersecting) {
          timeline.classList.add('timeline-in-view');
          sectionObserver.unobserve(observation.target);
        }
      });
    }, { threshold: 0.12 });

    sectionObserver.observe(timeline);

    const entryObserver = new IntersectionObserver((observations) => {
      observations.forEach((observation) => {
        if (observation.isIntersecting) {
          observation.target.classList.add('timeline-active');
          entryObserver.unobserve(observation.target);
        }
      });
    }, { threshold: 0.22, rootMargin: '0px 0px -8% 0px' });

    entries.forEach((entry) => entryObserver.observe(entry));

    return () => {
      sectionObserver.disconnect();
      entryObserver.disconnect();
    };
  }, []);

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

      {/* OUR STORY & JOURNEY — COMBINED TIMELINE */}
      <section className="about-timeline" ref={timelineRef}>
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

      {/* TEAM */}
      <section className="team">
        <div className="wrap">
          <p className="eyebrow reveal">Our team</p>
          <h2 className="reveal">The people behind every shipment.</h2>
          <div className="team-grid reveal-stagger">
            <div className="team-card reveal">
              <div className="team-avatar" aria-hidden="true"></div>
              <h3>Sritharan Perumal</h3>
              <span>Founder &amp; Managing Director</span>
              <p>Founded Sri Jothi Traders in 2015 and leads the company’s export operations.</p>
            </div>
            <div className="team-card reveal">
              <div className="team-avatar" aria-hidden="true"></div>
              <h3>Gowtham</h3>
              <span>[Your role]</span>
              <p>[One line on what you handle.]</p>
            </div>
            <div className="team-card reveal">
              <div className="team-avatar" aria-hidden="true"></div>
              <h3>[Brother’s name]</h3>
              <span>[His role]</span>
              <p>[One line on what he handles.]</p>
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
