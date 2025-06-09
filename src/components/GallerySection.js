import React from 'react';

const imageList = [
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg',
  'pic6.jpg',
  'pic7.jpg',
  'pic1.png',
];

function GallerySection() {
  return (
    <section className="gallery-section">
      <h2>Visual Evidence</h2>
      <div className="gallery-grid">
        {imageList.map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt={`Gallery ${index}`}
            className="gallery-img"
          />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
