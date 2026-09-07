import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Customization() {
  useScrollReveal();

  return (
    <>

<section className="page-hero">
  <div className="wrap" data-stagger>
    <p className="eyebrow reveal">Customization &amp; private label</p>
    <h1 className="text-reveal reveal"><span>We don't just supply — we customize every product to your brand and market.</span></h1>
    <p className="reveal">This is what sets us apart from a standard bulk exporter, and it's built into every order, not offered as an add-on.</p>
  </div>
</section>

<section>
  <div className="wrap">
    <div className="usp-list reveal-stagger">
      <div className="usp-row reveal">
        <span className="usp-num">01</span>
        <div><h3>Private labeling</h3><p>We repack under your own brand — bulk rice into your own 1kg bags, bulk spices into your own retail pouches, and so on.</p></div>
      </div>
      <div className="usp-row reveal">
        <span className="usp-num">02</span>
        <div><h3>Packaging compliance</h3><p>Destination-country required package information is added before the shipment leaves our warehouse, not left for you to sort out on arrival.</p></div>
      </div>
      <div className="usp-row reveal">
        <span className="usp-num">03</span>
        <div><h3>Bulk-to-retail repacking</h3><p>We convert bulk shipments into shelf-ready retail units, so what arrives can go straight onto your shelves.</p></div>
      </div>
      <div className="usp-row reveal">
        <span className="usp-num">04</span>
        <div><h3>Custom order sizing</h3><p>From full wholesale volumes down to smaller retail-scale quantities — the order is sized to your business, not ours.</p></div>
      </div>
    </div>
  </div>
</section>

<section className="value-prop">
  <div className="wrap">
    <h2 className="reveal">Less work on your end, once it arrives.</h2>
    <p className="reveal">Every hour your team would spend repackaging bulk goods or adding compliance labels locally is an hour and a cost we've already handled before the shipment left India. You receive product that's ready to sell, not product that still needs work.</p>
    <Link to="/contact" className="btn cta reveal" style={{ 'marginTop': '22px' }}>Discuss your requirements</Link>
  </div>
</section>

    </>
  );
}
