import React from 'react';
import './GalleryBlockSection.css';
import 'aos/dist/aos.css';

const galleryData = [
  {
    title: 'Jaduguda’s Silence',
    description: "Jaduguda was once like any other village — full of chatter, festivals, and quiet routines. Today, things feel different. The sounds have faded, and so have the crowds. What remains is a strange calm, shaped by years of change. Somewhere between progress and pause, the village carries a story few notice — but one that still quietly matters.",
    image: '/images/pic2.jpg',
  },
  {
    title: 'Radiation in the Soil',
    description: 'The land that once sustained entire communities now shows signs of decline. Radiation has compromised the soil, leaving many fields infertile and livelihoods uncertain. Farmers face growing challenges as traditional farming becomes increasingly difficult, with each season marked by declining yields and rising concern.',
     image: '/images/pic1.jpg',
  },
  {
    title: 'The Forgotten Children',
    description: 'In communities surrounding the mines, reports have noted a higher incidence of birth defects and chronic health conditions among children. These patterns are often associated with prolonged environmental exposure and limited access to healthcare services..',
    image: '/images/pic3.jpg',
  },
  
  {
    title: 'Toxic Waters',
    description: 'The rivers that once sustained entire communities have turned into lifelines of poison. Contaminated by unchecked mining waste, these waters no longer nourish — they infect. Every sip, every bath, every drop is a gamble with illness, turning a symbol of life into a slow, silent threat.',
    image: '/images/water2.jpg',
  },
  {
    title: 'The Cost of Power',
    description: 'Behind the advancement of nuclear infrastructure lie communities affected by displacement, health concerns, and environmental degradation. The pursuit of national development often comes with trade-offs — ones that impact everyday lives in ways not always seen or acknowledged.',
    image: '/images/labour.jpg',
  },
  {
    title: 'Still They Rise',
    description: 'In the aftermath of disruption, communities continue to endure. Despite facing health challenges, relocation, and limited support, many individuals persist with quiet strength and determination — navigating daily life with dignity and resolve.',
    image: '/images/pic7.jpg',
  },
];

function GalleryBlockSection() {
  return (
    <section id="gallery">
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
    </section>
  );
}

export default GalleryBlockSection;
