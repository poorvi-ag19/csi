import React, { useState } from 'react';
import './TestimonyScrollSection.css';

const testimonies = [
  {
    name: 'Ramesh Mahato',
    quote:
      'We used to grow crops here. Now, nothing survives. The soil, once life-giving, has turned hostile, laced with radioactive remnants that choke roots before they can bloom. What was once a symbol of sustenance is now a graveyard for hope,and heritage.',
    image: '/images/mine1.jpg',
  },
  {
    name: 'Sunita Devi',
    quote:
      'My children cough all night. No doctor visits us. In Jaduguda’s shadow, children are born into silence and sickness. With no access to care and no one listening, they grow up carrying the invisible weight of a poisoned land.',
    image: '/images/mine2.jpg',
  },
  {
    name: 'Lakhan Bhuiyan',
    quote:
      'Once a land of flowing life, now a stream of slow death — the waters, once sacred, now carry only sorrow and sickness.',
    image: '/images/mine3.jpg',
  },
  {
    name: 'Kamla Kumari',
    quote:
      'We once grew crops to feed our families — now, even weeds refuse to grow. The mines didn’t just take the land — they stripped away our work, our homes, and any sense of peace we had left.',
    image: '/images/mine4.jpg',
  },
  {
    name: 'Anil Oraon',
    quote:
      'Every day begins with the same choking dust and creeping illness. What was once home has become a slow, silent battlefield.',
    image: '/images/mine5.png',
  },
  {
    name: 'Gita Soren',
    quote:
      'Even the animals no longer roam like before — their cries have faded. Where life once thrived, now silence and sickness spread.',
    image: '/images/mine6.jpg',
  },
];

function TestimonyCard({ image, name, quote }) {
  const [expanded, setExpanded] = useState(false);
  const shortQuote = quote.length > 150 ? quote.slice(0, 150) + '...' : quote;

  return (
    <div className="testimony-scroll-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{expanded ? quote : shortQuote}</p>
      {quote.length > 150 && (
        <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}

function TestimonyScrollSection() {
  return (
    <section id="testimony">
      <div className="testimony-scroll-section">
        <div className="testimony-scroll-container">
          <div className="testimony-scroll-wrapper">
            {[...testimonies, ...testimonies].map((item, index) => (
              <TestimonyCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonyScrollSection;
