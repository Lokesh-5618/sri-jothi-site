import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import HeroBgSlider from '../components/HeroBgSlider';

// TODO: swap these placeholder images for real product photography.
const products = [
  {
    num: '01',
    title: 'Grains & staples',
    desc: 'Rice, wheat, and sugar sourced in bulk or prepared for retail.',
    img: 'https://placehold.co/800x800/dbe9d2/174635?text=Grains+%26+Staples',
  },
  {
    num: '02',
    title: 'Spices & masala',
    desc: 'Authentic Indian spices and blends, whole or ground to spec.',
    img: 'https://placehold.co/800x800/c3dcba/174635?text=Spices+%26+Masala',
  },
  {
    num: '03',
    title: 'Edible oils',
    desc: 'Bulk and retail-ready cooking oils for grocery and food service.',
    img: 'https://placehold.co/800x800/dbe9d2/174635?text=Edible+Oils',
  },
  {
    num: '04',
    title: 'Coconut products',
    desc: 'Coconut oil, desiccated coconut, and related coconut goods.',
    img: 'https://placehold.co/800x800/c3dcba/174635?text=Coconut+Products',
  },
  {
    num: '05',
    title: 'Fresh fruits (seasonal)',
    desc: 'Seasonal Indian fruit exports, subject to availability.',
    img: 'https://placehold.co/800x800/dbe9d2/174635?text=Fresh+Fruits',
  },
  {
    num: '06',
    title: 'Kitchenware & machines',
    desc: 'Traditional and modern Indian kitchenware and small equipment.',
    img: 'https://placehold.co/800x800/c3dcba/174635?text=Kitchenware',
  },
  {
    num: '07',
    title: 'Seasonal FMCG items',
    desc: 'A rotating range of Indian FMCG products based on demand.',
    img: 'https://placehold.co/800x800/dbe9d2/174635?text=FMCG+Items',
  },
];

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

            {products.map((product) => (
              <div className="product-card reveal" key={product.title}>
                <div className="product-card-body">
                  <span className="product-card-num">{product.num}</span>
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  <span className="tag">
                    Request a quote
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </div>
                <div className="product-card-media">
                  <img src={product.img} alt={product.title} loading="lazy" />
                </div>
              </div>
            ))}

            <div className="product-card highlight reveal">
              <div className="product-card-body">
                <span className="product-card-num">08</span>
                <h3>Not seeing what you need?</h3>
                <p>If it's an Indian FMCG product, there's a good chance we can source it.</p>
                <span className="tag">
                  Ask us
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </div>
              <div className="product-card-media">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
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
