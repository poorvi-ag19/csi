// src/ScrollGallery.js
import React from 'react';
import './ScrollGallery.css';

const data = [
  {
    title: 'Jaduguda’s Silence',
    text: 'Once a thriving village — now reduced to ruins.',
    image: '/images/pic1.jpg',
  },
  {
    title: 'Radiation in the Soil',
    text: 'Contaminated farmlands that can no longer feed.',
    image: '/images/pic2.jpg',
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
    image: '/images/pic5.jpg',
  },
  {
    title: 'The Cost of Power',
    text: 'Progress, measured in suffering.',
    image: '/images/pic6.jpg',
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
      {data.map((item, index) => (
        <div className="gallery-section" key={index}>
          <img src={item.image} alt={item.title} />
          <div className="caption">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollGallery;
