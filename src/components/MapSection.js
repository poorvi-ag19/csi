import React from 'react';
import './MapSection.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function MapSection() {
  const center = [23.7, 86.5];
  return (
    <section id="map" className="map-section" data-aos="fade-up">
  <h2>Radiation Hotspots</h2>
  <div className="map-container-wrapper">
    <MapContainer center={center} zoom={8} style={{ height: '400px', width: '100%' }} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap contributors & CARTO'
      />
      <Marker position={[23.7, 86.5]} icon={customIcon}>
        <Popup>Jaduguda Uranium Mines</Popup>
      </Marker>
    </MapContainer>

    <div className="floating-info-box">
      <h3>Jaduguda Uranium Mines</h3>
      <p><strong>Latitude:</strong> 23.7° N</p>
      <p><strong>Longitude:</strong> 86.5° E</p>
      <p>
        One of India's oldest uranium mines, nestled in the forests of Jharkhand. Once a promise of energy—now a region battling radiation’s unseen toll.
      </p>
    </div>
  </div>
</section>

  );
}

export default MapSection;

