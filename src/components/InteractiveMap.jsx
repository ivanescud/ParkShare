import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Zap, Star } from 'lucide-react';

// Custom Map Marker Icon using SVG Data URI
const createCustomIcon = (isEV, isCar) => {
  const color = isEV ? '#fbbf24' : isCar ? '#a855f7' : '#00f5a0';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="${color}" stroke="#030712" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="#030712"/></svg>`;
  return L.divIcon({
    html: svg,
    className: 'custom-leaflet-marker',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -32]
  });
};

export const InteractiveMap = ({ items, onSelectSpot }) => {
  // Center map on Panama if Panama items exist, else fallback
  const panamaCenter = [8.985, -79.495];

  return (
    <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
      <MapContainer
        center={panamaCenter}
        zoom={12}
        scrollWheelZoom={false}
        className="w-full h-full z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {items.map((spot) => {
          if (!spot.lat || !spot.lng) return null;
          const isEV = spot.hasEV || spot.isElectric;
          const isCar = spot.type === 'car';

          return (
            <Marker
              key={spot.id}
              position={[spot.lat, spot.lng]}
              icon={createCustomIcon(isEV, isCar)}
            >
              <Popup className="custom-leaflet-popup">
                <div className="p-2 bg-[#080d18] text-white rounded-xl space-y-2 max-w-[200px]">
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-bold text-xs leading-tight text-white">{spot.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{spot.zone}, {spot.city}</p>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-xs">
                    <span className="font-black text-[#00f5a0]">${spot.pricePerDay}/día</span>
                    <button
                      onClick={() => onSelectSpot(spot)}
                      className="px-2 py-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded text-[10px]"
                    >
                      Ver / Reservar
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* MAP LEGEND OVERLAY */}
      <div className="absolute bottom-4 right-4 z-20 bg-[#030712]/90 backdrop-blur-md border border-slate-800 px-3 py-2 rounded-xl text-[11px] flex gap-3 text-slate-300">
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#00f5a0]" /> Parqueo</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" /> Carga EV ⚡</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]" /> Auto</span>
      </div>
    </div>
  );
};
