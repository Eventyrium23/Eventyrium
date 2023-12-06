import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Location = () => {
  const mapStyle = {
    width: "100%",
    height: "500px",
  };

  const defaultCenter = [51.505, -0.09]; // Default center coordinates

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={mapStyle}
        className="rounded-md overflow-hidden"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={defaultCenter}>
          <Popup>
            A pretty map! <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;