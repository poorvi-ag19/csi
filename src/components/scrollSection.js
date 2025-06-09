import React from 'react';

function ScrollSection({ title, text, image }) {
  return (
    <section className="scroll-section">
      <img src={image} alt={title} />
      <div className="scroll-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default ScrollSection;
