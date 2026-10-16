import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import HeroBgSlider from '../components/HeroBgSlider';

// Placeholder image sets for now. Replace these URLs with real product photography later.
const products = [
  {
    num: '01',
    title: 'Grains & staples',
    desc: 'Rice, wheat, and sugar sourced in bulk or prepared for retail.',
    images: [
      'https://placehold.co/800x800/dbe9d2/174635?text=Grains+%26+Staples+1',
      'https://placehold.co/800x800/c3dcba/174635?text=Grains+%26+Staples+2',
      'https://placehold.co/800x800/e9dfd2/174635?text=Grains+%26+Staples+3',
    ],
  },
  {
    num: '02',
    title: 'Spices & masala',
    desc: 'Authentic Indian spices and blends, whole or ground to spec.',
    images: [
      'https://placehold.co/800x800/c3dcba/174635?text=Spices+%26+Masala+1',
      'https://placehold.co/800x800/e9dfd2/174635?text=Spices+%26+Masala+2',
      'https://placehold.co/800x800/dbe9d2/174635?text=Spices+%26+Masala+3',
    ],
  },
  {
    num: '03',
    title: 'Edible oils',
    desc: 'Bulk and retail-ready cooking oils for grocery and food service.',
    images: [
      'https://placehold.co/800x800/dbe9d2/174635?text=Edible+Oils+1',
      'https://placehold.co/800x800/e9dfd2/174635?text=Edible+Oils+2',
      'https://placehold.co/800x800/c3dcba/174635?text=Edible+Oils+3',
    ],
  },
  {
    num: '04',
    title: 'Coconut products',
    desc: 'Coconut oil, desiccated coconut, and related coconut goods.',
    images: [
      'https://placehold.co/800x800/c3dcba/174635?text=Coconut+Products+1',
      'https://placehold.co/800x800/dbe9d2/174635?text=Coconut+Products+2',
      'https://placehold.co/800x800/e9dfd2/174635?text=Coconut+Products+3',
    ],
  },
  {
    num: '05',
    title: 'Fresh fruits (seasonal)',
    desc: 'Seasonal Indian fruit exports, subject to availability.',
    images: [
      'https://placehold.co/800x800/dbe9d2/174635?text=Fresh+Fruits+1',
      'https://placehold.co/800x800/e9dfd2/174635?text=Fresh+Fruits+2',
      'https://placehold.co/800x800/c3dcba/174635?text=Fresh+Fruits+3',
    ],
  },
  {
    num: '06',
    title: 'Kitchenware & machines',
    desc: 'Traditional and modern Indian kitchenware and small equipment.',
    images: [
      'https://placehold.co/800x800/c3dcba/174635?text=Kitchenware+1',
      'https://placehold.co/800x800/dbe9d2/174635?text=Kitchenware+2',
      'https://placehold.co/800x800/e9dfd2/174635?text=Kitchenware+3',
    ],
  },
  {
    num: '07',
    title: 'Seasonal FMCG items',
    desc: 'A rotating range of Indian FMCG products based on demand.',
    images: [
      'https://placehold.co/800x800/dbe9d2/174635?text=FMCG+Items+1',
      'https://placehold.co/800x800/c3dcba/174635?text=FMCG+Items+2',
      'https://placehold.co/800x800/e9dfd2/174635?text=FMCG+Items+3',
    ],
  },
];

function ProductImageSlider({ images, title }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || images.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [images]);

  return (
    <div className="product-card-media product-image-slider" aria-label={`${title} image gallery`}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${title} — placeholder view ${index + 1}`}
          className={`product-slide${index === activeImage ? ' is-active' : ''}`}
          loading={index === 0 ? 'eager' : 'lazy'}
          aria-hidden={index !== activeImage}
        />
      ))}
      <div className="product-slide-dots" aria-hidden="true">
        {images.map((image, index) => (
          <span key={image} className={index === activeImage ? 'is-active' : ''} />
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <HeroBgSlider />
        <div className="wrap" data-stagger>
          <p className="eyebrow reveal">Products</p>
          <h1 className="text-reveal reveal">
            <span>A wide range of Indian products, sourced and prepared to order.</span>
          </h1>
          <p className="reveal">
            Explore our main categories below. Tell us your market and required
            volumes, and we’ll prepare a tailored catalogue and quotation,
            including products not listed here.
          </p>
        </div>
      </section>

      {/* PRODUCT LISTING */}
      <section>
        <div className="wrap">
          <div className="product-grid reveal-stagger">
            {products.map((product) => (
              <div className="product-card reveal" key={product.title}>
                <div className="product-card-body">
                  <span className="product-card-num">{product.num}</span>
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  <Link className="tag" to="/contact">
                    Request a quote
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                </div>
                <ProductImageSlider images={product.images} title={product.title} />
              </div>
            ))}

            <div className="product-card highlight reveal">
              <div className="product-card-body">
                <span className="product-card-num">08</span>
                <h3>Not seeing what you need?</h3>
                <p>If it's an Indian FMCG product, there's a good chance we can source it.</p>
                <Link className="tag" to="/contact">
                  Ask us
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>
              <div className="product-card-media product-card-media-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION BANNER */}
      <section className="callout">
        <div className="wrap">
          <h2 className="reveal">Want it under your own brand?</h2>
          <p className="reveal">
            Your label, your pack size, your packaging. We prepare every order
            exactly as you ask, according to your country’s requirements,
            before it leaves India.
          </p>
          <Link to="/customization" className="btn cta reveal">
            See How Customization Works →
          </Link>
        </div>
      </section>
    </>
  );
}
