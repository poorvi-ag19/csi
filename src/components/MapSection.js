import React from 'react';
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
  return (
    <section className="map-section" data-aos="fade-up">
      <h2>Radiation Hotspots</h2>
      <MapContainer center={[23.7, 86.5]} zoom={6} style={{ height: '400px', width: '100%' }}>
      <TileLayer
  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
/>

        <Marker position={[23.7, 86.5]} icon={customIcon}>
          <Popup>Jaduguda Uranium Mines</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default MapSection;

