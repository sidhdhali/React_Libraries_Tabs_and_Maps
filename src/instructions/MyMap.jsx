import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

function MyMap() {
  useEffect(() => {
    const map = L.map('map', {
      center: [48.3715, 10.8978], // Center on Augsburg
      zoom: 13
    });

    // Add a tile layer (you can use any map tile provider here)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return () => {
      // Cleanup code if needed
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default MyMap;
