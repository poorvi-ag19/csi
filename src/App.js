import React, { useEffect } from 'react';
import Landing from './components/landing';
import ScrollSection from './components/scrollSection';
import TestimonyCard from './components/TestimonyCard';
import MapSection from './components/MapSection';
import './App.css';

import ScrollGallery from './components/ScrollGallery';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="app-container">
      <Landing />

      <section className="content-section">
        <ScrollSection
          title="Contaminated Rivers"
          text="Local communities now suffer from skin disorders and organ damage due to radiation."
          image="/images/river.jpg"
        />
      </section>

      <section className="content-section">
        <TestimonyCard
          name="Sita Devi"
          quote="We used to bathe in the river. Now we’re scared to even touch it."
          image="/images/sita.jpg"
        />
      </section>

      <section className="map-section">
        <MapSection />
      </section>

      <div>
      <Landing />
      <ScrollGallery />
    </div>
    </main>
  );
}

export default App;