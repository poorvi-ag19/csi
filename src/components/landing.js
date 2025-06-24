import React, { useEffect, useRef, useState } from 'react';
import './landing.css';
import AOS from 'aos';

function Landing() {
  const landingRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentRef = landingRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          AOS.refreshHard();
        }
      },
      { threshold: 0.5 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <section className="landing" ref={landingRef} data-aos="fade-in" data-aos-duration="1500">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Responsive Nav */}
      <nav className={`landing-nav ${menuOpen ? 'show' : ''}`}>
        <ul onClick={handleLinkClick}>
          <li><a href="#about">About</a></li>
          <li><a href="#testimony">Voices</a></li>
          <li><a href="#map">Map</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="overlay" data-aos="zoom-in" data-aos-delay="500">
        <h1 data-aos="fade-up" data-aos-delay="700">The Price of Power</h1>
        <p data-aos="fade-up" data-aos-delay="900">
          India's nuclear ambitions — and the cost paid by its most vulnerable.
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="1100"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          Begin Story
        </button>
      </div>
    </section>
  );
}

export default Landing;
