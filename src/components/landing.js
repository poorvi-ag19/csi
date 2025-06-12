import React from 'react';
import './landing.css';

function Landing() {
  return (
    <section className="landing" data-aos="fade-in" data-aos-duration="1500">
      <div className="overlay" data-aos="zoom-in" data-aos-delay="500">
        <h1 data-aos="fade-up" data-aos-delay="700">The Price of Power</h1>
        <p data-aos="fade-up" data-aos-delay="900">
          India's nuclear ambitions — and the cost paid by its most vulnerable.
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="1100"
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
