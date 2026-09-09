import React from 'react';

// Placeholder sliding background for the green page-hero sections.
// Swap the `slides` array's labels/images for real photography when ready —
// to use real images, replace the <span> content with an <img src="..." /> in each .phb-slide.
const slides = [1, 2, 3, 4];

export default function HeroBgSlider() {
  return (
    <div className="page-hero-bg" aria-hidden="true">
      <div className="phb-track">
        {[...slides, ...slides].map((n, i) => (
          <div className="phb-slide" key={i}>
            <span>Image {n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
