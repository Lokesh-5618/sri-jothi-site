import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import HeroBgSlider from '../components/HeroBgSlider';

const STORY_STEPS = [
  {
    num: '01',
    title: 'Private labeling',
    text: 'We repack under your own brand — bulk rice into your own 1kg bags, bulk spices into your own retail pouches, and so on.',
    imageLabel: 'Private label packaging',
  },
  {
    num: '02',
    title: 'Packaging compliance',
    text: 'Destination-country required package information is added before the shipment leaves our warehouse, not left for you to sort out on arrival.',
    imageLabel: 'Packaging & compliance',
  },
  {
    num: '03',
    title: 'Bulk-to-retail repacking',
    text: 'We convert bulk shipments into shelf-ready retail units, so what arrives can go straight onto your shelves.',
    imageLabel: 'Bulk to retail',
  },
  {
    num: '04',
    title: 'Custom order sizing',
    text: 'From full wholesale volumes down to smaller retail-scale quantities — the order is sized to your business, not ours.',
    imageLabel: 'Custom order sizing',
  },
];

export default function Customization() {
  useScrollReveal();

  return (
    <>
      <section className="page-hero">
        <HeroBgSlider />
        <div className="wrap" data-stagger>
          <p className="eyebrow reveal">Customization &amp; private label</p>
          <h1 className="text-reveal reveal">
            <span>We don't just supply — we customize every product to your brand and market.</span>
          </h1>
          <p className="reveal">
            This is what sets us apart from a standard bulk exporter, and it's built into every order, not offered as an add-on.
          </p>
        </div>
      </section>

      <section className="custom-story">
        <div className="wrap">
          <div className="custom-story-intro reveal">
            <span className="eyebrow">How we add value</span>
            <h2>From bulk product to<br /><em>your finished product.</em></h2>
            <p>
              We handle the work between sourcing and shelf — so your product arrives closer to the way your customer will actually buy it.
            </p>
          </div>

          <div className="custom-story-list">
            {STORY_STEPS.map((step, i) => (
              <article
                className={`custom-story-item ${i % 2 === 1 ? 'reverse' : ''}`}
                key={step.num}
              >
                <div className="custom-story-media reveal">
                  <div className="custom-image-placeholder">
                    <span>{step.imageLabel}</span>
                    <small>Image placeholder</small>
                  </div>
                </div>

                <div className="custom-story-copy reveal">
                  <span className="custom-story-num">{step.num}</span>
                  <div className="custom-story-line" aria-hidden="true"></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="value-prop">
        <div className="wrap">
          <h2 className="reveal">Less work on your end, once it arrives.</h2>
          <p className="reveal">
            Every hour your team would spend repackaging bulk goods or adding compliance labels locally is an hour and a cost we've already handled before the shipment left India. You receive product that's ready to sell, not product that still needs work.
          </p>
          <Link to="/contact" className="btn cta reveal" style={{ marginTop: '22px' }}>
            Discuss your requirements
          </Link>
        </div>
      </section>
    </>
  );
}
