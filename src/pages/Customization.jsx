import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import HeroBgSlider from '../components/HeroBgSlider';

const STORY_STEPS = [
  {
    num: '01',
    title: 'Private labeling',
    text: 'Your brand, your label design.',
    imageLabel: 'Private label packaging',
  },
  {
    num: '02',
    title: 'Custom pack sizes',
    text: 'From bulk to retail-ready packs.',
    imageLabel: 'Custom pack sizes',
  },
  {
    num: '03',
    title: 'Compliant packaging',
    text: 'Prepared to your country’s requirements.',
    imageLabel: 'Packaging & compliance',
  },
  {
    num: '04',
    title: 'Bulk-to-retail repacking',
    text: 'Ready to sell on arrival.',
    imageLabel: 'Bulk to retail',
  },
];

const HOW_IT_WORKS = [
  {
    num: '01',
    title: 'Share your requirements',
    text: 'Your products, brand, pack sizes and destination.',
  },
  {
    num: '02',
    title: 'Confirm specifications',
    text: 'We agree the details and prepare the quotation.',
  },
  {
    num: '03',
    title: 'Design approval',
    text: 'We share the label and packaging design, and you approve it before production.',
  },
  {
    num: '04',
    title: 'Preparation and quality check',
    text: 'Repacking, labeling and compliance checks.',
  },
  {
    num: '05',
    title: 'Shipment and tracking',
    text: 'Documentation, dispatch and tracking until arrival.',
  },
];

export default function Customization() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <HeroBgSlider />

        <div className="wrap" data-stagger>
          <p className="eyebrow reveal">
            Customization &amp; private label
          </p>

          <h1 className="text-reveal reveal">
            <span>Prepared exactly the way your market needs it.</span>
          </h1>

          <p className="reveal">
            Private labeling, destination-compliant packaging and
            bulk-to-retail repacking, all handled before your order ships.
          </p>

          <div className="reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link to="/contact" className="btn cta">
              Discuss Your Requirements
            </Link>

            <Link to="/contact" className="btn light">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Customization capabilities */}
      <section className="custom-story">
        <div className="wrap">
          <div className="custom-story-intro reveal">
            <span className="eyebrow">Customization &amp; private label</span>

            <h2>
              Prepared for your market,
              <br />
              <em>ready to sell.</em>
            </h2>

            <p>
              We handle the preparation between sourcing and shipment,
              so your products arrive ready for the way your market sells them.
            </p>
          </div>

          <div className="custom-story-list">
            {STORY_STEPS.map((step, i) => (
              <article
                className={`custom-story-item ${
                  i % 2 === 1 ? 'reverse' : ''
                }`}
                key={step.num}
              >
                <div className="custom-story-media reveal">
                  <div className="custom-image-placeholder">
                    <span>{step.imageLabel}</span>
                    <small>Image placeholder</small>
                  </div>
                </div>

                <div className="custom-story-copy reveal">
                  <span className="custom-story-num">
                    {step.num}
                  </span>

                  <div
                    className="custom-story-line"
                    aria-hidden="true"
                  ></div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section how-it-works">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">How it works</div>

            <h2
              className="display text-reveal reveal"
              data-stagger
            >
              <span>From your requirements</span>
              <span>to shipment.</span>
            </h2>
          </div>

          <div className="how-it-works-grid">
            {HOW_IT_WORKS.map((step) => (
              <article
                className="how-it-works-item reveal"
                key={step.num}
              >
                <span className="custom-story-num">
                  {step.num}
                </span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lower body */}
      <section className="value-prop">
        <div className="wrap">
          <h2 className="reveal">
            We take care of the preparation, so it’s delivered ready for your shelves.
          </h2>

          <p className="reveal">
            Private labeling, repacking and compliant packaging are completed
            in India before shipment, so your order reaches you ready for your
            market.
          </p>

          <Link
            to="/contact"
            className="btn cta reveal"
            style={{ marginTop: '22px' }}
          >
            Discuss Your Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
