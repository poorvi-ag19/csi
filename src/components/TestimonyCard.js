import React from 'react';

function TestimonyCard({ name, quote, image }) {
  return (
    <div className="testimony-card">
      <img src={image} alt={name} />
      <blockquote>“{quote}”</blockquote>
      <p>– {name}</p>
    </div>
  );
}

export default TestimonyCard;
