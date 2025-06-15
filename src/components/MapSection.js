import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapSection.css';

// Fix default marker icon issue in Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Component to handle zoom animation
function FlyToLocation({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 5); // initial center
    setTimeout(() => {
      map.flyTo(center, 12, {
        duration: 2,
      });
    }, 1000);
  }, [map, center]);

  return null;
}

function MapSection() {
  const center = [23.7, 86.5]; // Jaduguda Uranium Mines

  return (
    <section className="map-section" data-aos="fade-up">
      <h2>Radiation Hotspots</h2>
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: '400px', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <FlyToLocation center={center} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>Jaduguda Uranium Mines</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default MapSection;
