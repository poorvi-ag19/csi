import React from 'react';
import './RotatingImageGallery.css';

const imageData = [
  { src: '/images/scroll1.jpeg', alt: 'Image 1' },
  { src: '/images/scroll2.jpg', alt: 'Image 2' },
  { src: '/images/scroll3.jpeg', alt: 'Image 3' },
  { src: '/images/scroll4.jpeg', alt: 'Image 4' },
  { src: '/images/scroll5.webp', alt: 'Image 5' },
  { src: '/images/scroll6.jpg', alt: 'Image 6' },
];

function RotatingImageGallery() {
  return (
    <div className="rotating-gallery-wrapper">
      <div className="rotating-gallery">
        {imageData.map((img, index) => (
          <div className="gallery-image" key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RotatingImageGallery;
