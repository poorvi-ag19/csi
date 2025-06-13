import React from 'react';
import './GalleryBlockSection.css';
import 'aos/dist/aos.css';

const galleryData = [
  {
    title: 'Jaduguda’s Silence',
    description: 'Once a thriving village — now reduced to ruins.',
    image: '/images/pic2.jpg',
  },
  {
    title: 'Radiation in the Soil',
    description: 'Contaminated farmlands that can no longer feed.',
    image: '/images/pic1.jpg',
  },
  {
    title: 'The Forgotten Children',
    description: 'Birth defects have become part of the local landscape.',
    image: '/images/pic3.jpg',
  },
  {
    title: 'Empty Classrooms',
    description: 'Where the echo of learning has been replaced by silence.',
    image: '/images/class.jpg',
  },
  {
    title: 'Toxic Waters',
    description: 'Rivers that once gave life now carry decay.',
    image: '/images/water2.jpg',
  },
  {
    title: 'The Cost of Power',
    description: 'Progress, measured in suffering.',
    image: '/images/labour.jpg',
  },
  {
    title: 'Still They Rise',
    description: 'Despite it all, the human spirit endures.',
    image: '/images/pic7.jpg',
  },
];

function GalleryBlockSection() {
  return (
    <div className="gallery-block-wrapper">
      {galleryData.map((item, index) => (
        <div
          className={`gallery-block-card ${index % 2 !== 0 ? 'reverse' : ''}`}
          key={index}
          data-aos="fade-up"
        >
          <img src={item.image} alt={item.title} className="gallery-block-image" />
          <div className="gallery-block-text">
            <h2 className="gallery-block-title">{item.title}</h2>
            <p className="gallery-block-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GalleryBlockSection;
