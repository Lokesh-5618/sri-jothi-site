import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Certifications() {
  useScrollReveal();

  return (
    <>

<section className="page-hero">
  <div className="wrap" data-stagger>
    <p className="eyebrow reveal">Certifications</p>
    <h1 className="text-reveal reveal"><span>Compliance you can verify, explained in plain terms.</span></h1>
    <p className="reveal">Overseas buyers don't always recognize Indian certification names, so here's what each one actually means for your order.</p>
  </div>
</section>

<section aria-label="Certification details">
  <div className="wrap">
    <h2 className="eyebrow reveal" style={{ 'marginBottom': '28px' }}>Our certifications</h2>
    <div className="cert-grid reveal-stagger">
      <div className="cert-card reveal">
        <div className="cert-badge"></div>
        <h3>FSSAI</h3>
        <p>India's Food Safety and Standards Authority license — confirms food products meet national safety standards.</p>
        <div className="cert-num">Certificate no. — to be added</div>
      </div>
      <div className="cert-card reveal">
        <div className="cert-badge"></div>
        <h3>APEDA</h3>
        <p>Agricultural &amp; Processed Food Products Export Development Authority registration — required for exporting scheduled agricultural products from India.</p>
        <div className="cert-num">Certificate no. — to be added</div>
      </div>
      <div className="cert-card reveal">
        <div className="cert-badge"></div>
        <h3>RCMC</h3>
        <p>Registration-Cum-Membership Certificate — confirms registration with the relevant export promotion council.</p>
        <div className="cert-num">Certificate no. — to be added</div>
      </div>
      <div className="cert-card reveal">
        <div className="cert-badge"></div>
        <h3>Spice Board registration</h3>
        <p>Registration with India's Spices Board, required for exporting spice products internationally.</p>
        <div className="cert-num">Certificate no. — to be added</div>
      </div>
      <div className="cert-card reveal">
        <div className="cert-badge"></div>
        <h3>MSME</h3>
        <p>Registration as a Micro, Small &amp; Medium Enterprise under the Government of India.</p>
        <div className="cert-num">Certificate no. — to be added</div>
      </div>
      <div className="cert-card reveal">
        <div className="cert-badge"></div>
        <h3>FIEO membership</h3>
        <p>Membership with the Federation of Indian Export Organisations, India's apex export promotion body.</p>
        <div className="cert-num">Certificate no. — to be added</div>
      </div>
      <div className="cert-card reveal">
        <div className="cert-badge"></div>
        <h3>ISO / FSSC 22000</h3>
        <p>International quality and food safety management system certification.</p>
        <div className="cert-num">Certificate no. — to be added</div>
      </div>
      <div className="cert-card reveal">
        <div className="cert-badge"></div>
        <h3>Organic certification</h3>
        <p>Confirms eligible products meet recognized organic farming and processing standards.</p>
        <div className="cert-num">Certificate no. — to be added</div>
      </div>
      <div className="cert-card reveal">
        <div className="cert-badge"></div>
        <h3>Coconut export registration</h3>
        <p>Registration specific to exporting coconut-derived products from India.</p>
        <div className="cert-num">Certificate no. — to be added</div>
      </div>
    </div>
    <p className="placeholder-note reveal" style={{ 'marginTop': '32px' }}>Badge artwork and certificate numbers are placeholders — swap in the real certificate files and numbers once shared.</p>
  </div>
</section>

    </>
  );
}
