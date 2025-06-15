import React, { useEffect, useRef } from 'react';
import './landing.css';
import AOS from 'aos';

function Landing() {
  const landingRef = useRef();

  useEffect(() => {
    const currentRef = landingRef.current;

  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          AOS.refreshHard(); 
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (currentRef) {
        observer.observe(currentRef);
      }
    

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="landing" ref={landingRef} data-aos="fade-in" data-aos-duration="1500">
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
      <div className="developer-credit">Developed by Poorvi Agarwal</div>
    </section>
  );
}

export default Landing;
