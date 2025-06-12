import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Landing from './components/landing';
import ScrollSection from './components/scrollSection';
import TestimonyCard from './components/TestimonyCard';
import MapSection from './components/MapSection';
import ScrollGallery from './components/ScrollGallery';
import './App.css';

import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="app-container">
      <Landing />

      <section className="content-section" data-aos="fade-up">
        <ScrollSection
          title="Contaminated Rivers"
          text="Local communities now suffer from skin disorders and organ damage due to radiation."
          image="/images/river.jpg"
        />
      </section>

      <section className="content-section" data-aos="fade-left">
        <TestimonyCard
          name="Sita Devi"
          quote="We used to bathe in the river. Now we’re scared to even touch it."
          image="/images/sita devi.jpg"
        />
      </section>

      <section className="map-section" data-aos="fade-up">
        <MapSection />
      </section>

      <section className="gallery-section" data-aos="fade-up">
        <landing/>
        <ScrollGallery />

      </section>
    </main>
  );
}

export default App;
