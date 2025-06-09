import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapSection() {
  return (
    <section className="map-section" data-aos="fade-up">
      <h2>Radiation Hotspots</h2>
      <MapContainer center={[23.7, 86.5]} zoom={6} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[23.7, 86.5]}>
          <Popup>Jaduguda Uranium Mines</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default MapSection;
