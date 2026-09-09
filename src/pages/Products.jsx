import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import HeroBgSlider from '../components/HeroBgSlider';

export default function Products() {
  useScrollReveal();

  return (
    <>

<section className="page-hero">
  <HeroBgSlider />
  <div className="wrap" data-stagger>
    <p className="eyebrow reveal">Products</p>
    <h1 className="text-reveal reveal"><span>Seven categories, sourced and prepared to order.</span></h1>
    <p className="reveal">We don't list individual SKUs — tell us your market and volume, and we'll put together a catalogue and quote for exactly what you need.</p>
  </div>
</section>

<section>
  <div className="wrap">
    <div className="product-grid reveal-stagger">
      <div className="product-card reveal">
        <div><h3>Grains &amp; staples</h3><p>Rice, wheat, and sugar sourced in bulk or prepared for retail.</p></div>
        <span className="tag">Request a quote</span>
      </div>
      <div className="product-card reveal">
        <div><h3>Spices &amp; masala</h3><p>Authentic Indian spices and blends, whole or ground to spec.</p></div>
        <span className="tag">Request a quote</span>
      </div>
      <div className="product-card reveal">
        <div><h3>Edible oils</h3><p>Bulk and retail-ready cooking oils for grocery and food service.</p></div>
        <span className="tag">Request a quote</span>
      </div>
      <div className="product-card reveal">
        <div><h3>Coconut products</h3><p>Coconut oil, desiccated coconut, and related coconut goods.</p></div>
        <span className="tag">Request a quote</span>
      </div>
      <div className="product-card reveal">
        <div><h3>Fresh fruits (seasonal)</h3><p>Seasonal Indian fruit exports, subject to availability.</p></div>
        <span className="tag">Request a quote</span>
      </div>
      <div className="product-card reveal">
        <div><h3>Kitchenware &amp; machines</h3><p>Traditional and modern Indian kitchenware and small equipment.</p></div>
        <span className="tag">Request a quote</span>
      </div>
      <div className="product-card reveal">
        <div><h3>Seasonal FMCG items</h3><p>A rotating range of Indian FMCG products based on demand.</p></div>
        <span className="tag">Request a quote</span>
      </div>
      <div className="product-card highlight reveal">
        <div><h3>Not seeing what you need?</h3><p>If it's an Indian FMCG product, there's a good chance we can source it.</p></div>
        <span className="tag">Ask us</span>
      </div>
    </div>
  </div>
</section>

<section className="callout">
  <div className="wrap">
    <h2 className="reveal">We don't just supply — we customize every product to your brand and market.</h2>
    <p className="reveal">Private labeling, destination-compliant packaging, and bulk-to-retail repacking, all handled before your order ships.</p>
    <Link to="/customization" className="btn cta reveal">See how customization works</Link>
  </div>
</section>

    </>
  );
}
