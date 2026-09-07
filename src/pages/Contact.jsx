import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();

  return (
    <>

<section className="page-hero">
  <div className="wrap" data-stagger>
    <p className="eyebrow reveal">Contact &amp; enquiry</p>
    <h1 className="text-reveal reveal"><span>Tell us what you're looking to import.</span></h1>
    <p className="reveal">Whether you're a wholesaler placing a bulk order or a grocery store after a product list, reach us however's easiest.</p>
  </div>
</section>

<section>
  <div className="wrap contact-grid">
    <div className="reveal">
      <h2 className="contact-side-head">Three ways to reach us</h2>
      <div className="channels">
        <div className="channel"><div><b>WhatsApp</b>Fastest for quick questions</div><a className="btn dark" href="https://wa.me/910000000000" target="_blank" rel="noopener">Chat now</a></div>
        <div className="channel"><div><b>Email</b>enquiries@srijothitraders.com</div><a className="btn dark" href="mailto:enquiries@srijothitraders.com">Email us</a></div>
        <div className="channel"><div><b>Enquiry form</b>Best for detailed requirements</div><a className="btn dark" href="#enquiry-form">Use form</a></div>
      </div>
      <p className="placeholder-note" style={{ 'marginTop': '20px' }}>WhatsApp number and email are placeholders — swap in the real business contact details.</p>
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
        <select id="purpose">
          <option value="" selected disabled>Select one</option>
          <option value="b2b">B2B — wholesale / retail buying</option>
          <option value="b2c">B2C — personal grocery order</option>
        </select>
      </div>
      <div id="b2b-note" className="cond-note">Thanks — for wholesale and retail enquiries, our team will follow up with details on how we work together and next steps. Pricing and terms are discussed directly once we understand your requirements.</div>
      <div id="b2c-note" className="cond-note">Thanks — for personal orders, please list the specific products and quantities you're after in the message box below, and we'll get back to you.</div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Products, approximate quantity, destination country..."></textarea>
      </div>
      <button className="form-submit" type="submit" onclick="event.preventDefault(); this.textContent='Sent — we\'ll be in touch';">Send enquiry</button>
      <p className="form-note">This is a design preview — the form doesn't send anywhere yet. Once live, submissions should route to the business email and trigger a WhatsApp notification.</p>
    </form>
  </div>
</section>

    </>
  );
}
