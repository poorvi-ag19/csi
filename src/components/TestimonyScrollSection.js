import React from 'react';
import './TestimonyScrollSection.css';


const testimonies = [
  {
    name: 'Ramesh Mahato',
    quote: 'We used to grow crops here. Now, nothing survives.',
    image: '/images/mine1.jpg'
  },
  {
    name: 'Sunita Devi',
    quote: 'My children cough all night. No doctor visits us.',
    image: '/images/mine2.jpg'
  },
  {
    name: 'Lakhan Bhuiyan',
    quote: 'Once a land of water — now only poison flows.',
    image: '/images/mine3.jpg'
  },
  {
    name: 'Kamla Kumari',
    quote: 'The mines took our jobs, homes and peace.',
    image: '/images/mine4.jpg'
  },
  {
    name: 'Anil Oraon',
    quote: 'Every day we wake to dust and disease.',
    image: '/images/mine5.png'
  },
  {
    name: 'Gita Soren',
    quote: 'Even the animals have fled this place.',
    image: '/images/mine6.jpg'
  }
];

function TestimonyScrollSection() {
    return (
      <div className="testimony-scroll-section">
        <div className="testimony-scroll-container">
          <div className="testimony-scroll-wrapper">
            {[...testimonies, ...testimonies].map((item, index) => (
              <div className="testimony-scroll-card" key={index}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default TestimonyScrollSection;