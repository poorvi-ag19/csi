import React from 'react';
import './landing.css';

function Landing() {
  return (
    <section className="landing">
      <div className="overlay">
        <h1>The Price of Power</h1>
        <p>India's nuclear ambitions — and the cost paid by its most vulnerable.</p>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
        >
          Begin Story
        </button>
      </div>
    </section>
  );
}

export default Landing;
