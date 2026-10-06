import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import HeroBgSlider from '../components/HeroBgSlider';

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
            <span>
              A decade of exporting Indian products, ready for your shelves.
            </span>
          </h1>

          <p className="reveal">
            Sri Jothi Traders is a certified export company based in Dindigul,
            Tamil Nadu, India. We source, customize and ship Indian grocery
            products to buyers around the world.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="wrap story">
          <p className="eyebrow reveal">Our story</p>

          <p className="reveal">
            Sri Jothi Traders was founded in 2015 in Dindigul, Tamil Nadu. Our
            first clients in the UK and Gulf recommended us to other buyers,
            and their repeat orders built the business we have today.
          </p>

          <p className="reveal">
            What kept buyers coming back was more than the products; it was
            customization. We built private labeling, repacking and
            destination-compliant packaging into our process, so a client can
            order rice in bulk and receive it ready for their own shelves,
            under their own brand.
          </p>

          <p className="reveal">
            Today we operate from a 10,000 sq ft warehouse in Dindigul and
            hold the certifications overseas buyers look for.
          </p>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="about-facts">
        <div className="wrap facts">
          <p className="eyebrow reveal">At a glance</p>

          <div className="facts-grid reveal-stagger">
            <div className="fact reveal">
              <b>2015</b>
              <span>Founded in Dindigul, Tamil Nadu</span>
            </div>
            <div className="fact reveal">
              <b>10,000 sq ft</b>
              <span>Warehouse and preparation facility</span>
            </div>
            <div className="fact reveal">
              <b>192</b>
              <span>Countries served</span>
            </div>
            <div className="fact reveal">
              <b>9</b>
              <span>Certifications and registrations</span>
            </div>
            <div className="fact reveal">
              <b>7</b>
              <span>Product categories</span>
            </div>
            <div className="fact reveal">
              <b>UK &amp; Gulf</b>
              <span>Where our first buyers came from</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="about-values">
        <div className="wrap">
          <div className="facts-grid reveal-stagger">
            <div className="fact reveal">
              <b>Mission</b>
              <span>
                To deliver certified, customized Indian products to grocery
                businesses worldwide, with a reliability our buyers can count
                on.
              </span>
            </div>
            <div className="fact reveal">
              <b>Vision</b>
              <span>
                To be the trusted first choice for Indian grocery exports
                across the globe.
              </span>
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
              <p>
                Founded Sri Jothi Traders in 2015 and leads the company’s
                export operations.
              </p>
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

      {/* OUR JOURNEY */}
      <section className="about-journey">
        <div className="wrap story">
          <p className="eyebrow reveal">Our journey</p>

          <h2 className="reveal">Built on trust. Growing through it.</h2>

          <div className="journey-list">
            <div className="journey-item reveal">
              <strong>2015</strong>
              <p>Founded in Dindigul, Tamil Nadu.</p>
            </div>

            <div className="journey-item reveal">
              <strong>Early years</strong>
              <p>
                Our first clients in the UK and Gulf placed their trust in us,
                recommended us to other buyers, and returned with repeat
                orders. That word-of-mouth growth, built on reliability,
                became the foundation of the business.
              </p>
            </div>

            <div className="journey-item reveal">
              <strong>Today</strong>
              <p>10,000 sq ft warehouse and full export certifications.</p>
            </div>

            <div className="journey-item reveal">
              <strong>Next</strong>
              <p>
                We are expanding our reach to new markets across the globe,
                starting with the USA, Canada and Australia, to bring the same
                trusted, customized service to more grocery businesses
                everywhere.
              </p>
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
            <Link to="/company-profile" className="btn on-dark">
              Download Company Profile
            </Link>
            <Link to="/products" className="btn on-dark">
              Company Catalogue
            </Link>
            <Link to="/contact" className="btn cta">
              Enquire Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
