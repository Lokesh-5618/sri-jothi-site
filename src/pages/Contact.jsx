import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import HeroBgSlider from '../components/HeroBgSlider';

export default function Contact() {
  useScrollReveal();

  return (
    <>
      <section className="page-hero">
        <HeroBgSlider />
        <div className="wrap" data-stagger>
          <p className="eyebrow reveal">Contact &amp; enquiry</p>
          <h1 className="text-reveal reveal">
            <span>Tell us what you're looking to import.</span>
          </h1>
          <p className="reveal">
            Whether you're a wholesaler placing a bulk order or a grocery store after a product list, reach us however's easiest.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="wrap contact-grid">
          <div className="reveal">
            <h2 className="contact-side-head">Three ways to reach us</h2>

            <div className="channels">
              <div className="channel">
                <div><b>WhatsApp</b>Fastest for quick questions</div>
                <a className="btn dark" href="https://wa.me/919994919107" target="_blank" rel="noopener noreferrer">
                  Chat now
                </a>
              </div>

              <div className="channel">
                <div><b>Email</b>enquiries@srijothitraders.com</div>
                <a className="btn dark" href="mailto:enquiries@srijothitraders.com">
                  Email us
                </a>
              </div>

              <div className="channel">
                <div><b>Enquiry form</b>Best for detailed requirements</div>
                <a className="btn dark" href="#enquiry-form">
                  Use form
                </a>
              </div>
            </div>

            <p className="placeholder-note" style={{ marginTop: '20px' }}>
              Sri Jothi Traders<br />
              2/8A, Vellabommanpatti, Dindigul, Tamil Nadu 624802, India
            </p>
          </div>

          <form id="enquiry-form">
            <div>
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" required />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required />
            </div>

            <div>
              <label htmlFor="purpose">What's this enquiry for?</label>
              <select id="purpose" defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="b2b">B2B — wholesale / retail buying</option>
                <option value="b2c">B2C — personal grocery order</option>
              </select>
            </div>

            <div id="b2b-note" className="cond-note">
              Thanks — for wholesale and retail enquiries, our team will follow up with details on how we work together and next steps. Pricing and terms are discussed directly once we understand your requirements.
            </div>

            <div id="b2c-note" className="cond-note">
              Thanks — for personal orders, please list the specific products and quantities you're after in the message box below, and we'll get back to you.
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Products, approximate quantity, destination country..." />
            </div>

            <button
              className="form-submit"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                event.currentTarget.textContent = "Sent — we'll be in touch";
              }}
            >
              Send enquiry
            </button>

            <p className="form-note">
              This is a design preview — the form doesn't send anywhere yet. Once live, submissions should route to the business email and trigger a WhatsApp notification.
            </p>
          </form>
        </div>
      </section>

      <section className="contact-location">
        <div className="wrap">
          <div className="contact-location-head reveal">
            <div>
              <div className="eyebrow">Find us</div>
              <h2>Our base in Dindigul.</h2>
            </div>
            <p>
              Visit or reach out to the Sri Jothi Traders team at our Dindigul location.
            </p>
          </div>

          <div className="contact-map reveal">
            <iframe
              title="Sri Jothi Traders location map"
              src="https://www.google.com/maps?q=Sri%20Jothi%20Traders%2C%202%2F8A%2C%20Vellabommanpatti%2C%20Dindigul%2C%20Tamil%20Nadu%20624802%2C%20India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="contact-address reveal">
            <div>
              <span className="contact-address-label">Address</span>
              <p>
                2/8A, Vellabommanpatti,<br />
                Dindigul, Tamil Nadu 624802,<br />
                India
              </p>
            </div>

            <a
              className="btn light"
              href="https://www.google.com/maps/search/?api=1&query=Sri+Jothi+Traders%2C+2%2F8A%2C+Vellabommanpatti%2C+Dindigul%2C+Tamil+Nadu+624802%2C+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
