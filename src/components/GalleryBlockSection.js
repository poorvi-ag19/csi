import React from 'react';
import './GalleryBlockSection.css';
import 'aos/dist/aos.css';

const galleryData = [
  {
    title: 'Jaduguda’s Silence',
    description: 'Once alive with laughter, tradition, and the rhythm of rural life, Jaduguda now stands in eerie stillness. The hum of geiger counters has replaced the chatter of children, and cracked walls echo stories of loss. Beneath this silence lies a haunting truth — a village sacrificed in the name of progress.',
    image: '/images/pic2.jpg',
  },
  {
    title: 'Radiation in the Soil',
    description: 'The land that once nourished generations now breeds only fear. Beneath the surface, radiation seeps deep into the soil, poisoning crops and dreams alike. Farmers watch helplessly as their fields, once fertile, turn barren — a silent tragedy where every harvest is a gamble with life.',
     image: '/images/pic1.jpg',
  },
  {
    title: 'The Forgotten Children',
    description: 'Children born near the mines suffer from severe birth defects and chronic illnesses — innocent lives shaped by a toxic legacy. Their pain goes unheard, their existence overlooked, as they quietly bear the cost of a disaster they never chose.',
    image: '/images/pic3.jpg',
  },
  
  {
    title: 'Toxic Waters',
    description: 'The rivers that once sustained entire communities have turned into lifelines of poison. Contaminated by unchecked mining waste, these waters no longer nourish — they infect. Every sip, every bath, every drop is a gamble with illness, turning a symbol of life into a slow, silent threat.',
    image: '/images/water2.jpg',
  },
  {
    title: 'The Cost of Power',
    description: 'Beneath the glow of progress lies a trail of unseen suffering. The price paid for nuclear ambition is not just monetary — it is human. Entire communities are sacrificed, their health, homes, and futures compromised, all in the name of national development. This is power, but at what cost?',
    image: '/images/labour.jpg',
  },
  {
    title: 'Still They Rise',
    description: 'In the shadow of devastation, resilience takes root. Despite illness, displacement, and neglect, the people refuse to be defined by their suffering. They rise — with strength forged in struggle, voices unbroken, and a will to survive that no fallout can silence.',
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
