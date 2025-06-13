import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Landing from './components/landing';
import GalleryBlockSection from './components/GalleryBlockSection';

import MapSection from './components/MapSection';
import TestimonyScrollSection from './components/TestimonyScrollSection';

import './App.css';

import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,   
      mirror: true,  
    });
  }, []);
  

  return (
    <main className="app-container">
      <Landing />

      <section className="content-section" data-aos="fade-up">
        <TestimonyScrollSection />
      </section>
      

      

      <section className="map-section" data-aos="fade-up">
        <MapSection />
      </section>

      <section className="gallery-section" data-aos="fade-up">
        <landing/>
        
        <GalleryBlockSection />
        

      </section>
    </main>
  );
}

export default App;
