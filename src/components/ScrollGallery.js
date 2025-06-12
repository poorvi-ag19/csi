import React from 'react';
import './ScrollGallery.css';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'Jaduguda’s Silence',
    text: 'Once a thriving village — now reduced to ruins.',
    image: '/images/pic2.jpg',
  },
  {
    title: 'Radiation in the Soil',
    text: 'Contaminated farmlands that can no longer feed.',
    image: '/images/pic1.jpg',
  },
  {
    title: 'The Forgotten Children',
    text: 'Birth defects have become part of the local landscape.',
    image: '/images/pic3.jpg',
  },
  {
    title: 'Empty Classrooms',
    text: 'Where the echo of learning has been replaced by silence.',
    image: '/images/pic4.jpg',
  },
  {
    title: 'Toxic Waters',
    text: 'Rivers that once gave life now carry decay.',
    image: '/images/water2.jpg',
  },
  {
    title: 'The Cost of Power',
    text: 'Progress, measured in suffering.',
    image: '/images/labour.jpg',
  },
  {
    title: 'Still They Rise',
    text: 'Despite it all, the human spirit endures.',
    image: '/images/pic7.jpg',
  },
];

function ScrollGallery() {
  return (
    <div className="gallery-wrapper">
      <div className="horizontal-gallery">
        {data.map((item, index) => (
          <div className="gallery-card" key={index} data-aos="fade-up">
            <div className="parallax-container">
              <img src={item.image} alt={item.title} className="parallax-img" />
            </div>
            <div className="caption">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollGallery;
