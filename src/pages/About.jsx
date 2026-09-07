import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();

  return (
    <>

<section className="page-hero">
  <div className="wrap" data-stagger>
    <p className="eyebrow reveal">About us</p>
    <h1 className="text-reveal reveal"><span>A decade of trusted trade, built one order at a time.</span></h1>
    <p className="reveal">No investors, no shortcuts — just a family-run export business that grew because buyers kept coming back.</p>
  </div>
</section>

<section>
  <div className="wrap story">
    <p className="reveal">Sri Jothi Traders was founded in 2015 in Dindigul, Tamil Nadu. There was no marketing budget and no international sales team — the business grew because early clients in the UK and Gulf told other buyers, and those buyers placed repeat orders.</p>
    <p className="reveal">What kept them coming back wasn't just the products, it was customization. While most exporters ship bulk goods and leave the rest to the buyer, we built private labeling, repackaging, and destination-compliant packaging directly into our process. A client can order rice in bulk and receive it ready for their own shelves, under their own brand.</p>
    <p className="reveal">Today we operate from a 10,000 sq ft warehouse in Dindigul, hold the major certifications overseas buyers look for, and are working toward the same trusted relationships in the USA, Canada, and Australia that we've built in the UK and Gulf.</p>
  </div>
</section>

<section>
  <div className="wrap facts">
    <p className="eyebrow reveal">At a glance</p>
    <div className="facts-grid reveal-stagger">
      <div className="fact reveal"><b>2015</b><span>Founded in Dindigul, Tamil Nadu</span></div>
      <div className="fact reveal"><b>10,000 sq ft</b><span>Warehouse and preparation facility</span></div>
      <div className="fact reveal"><b>UK &amp; Gulf</b><span>Current export markets, expanding further</span></div>
    </div>
  </div>
</section>

<section className="mission">
  <div className="wrap">
    <h2 className="reveal">Where we're headed</h2>
    <p className="reveal">Our goal over the next phase is straightforward: extend the same trust we've built with UK and Gulf buyers into the USA, Canada, and Australia, and become the export partner Indian grocery businesses turn to first — wherever in the world they're trading.</p>
  </div>
</section>

    </>
  );
}
