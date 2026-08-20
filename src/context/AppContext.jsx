import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const initialParkingSpots = [
  {
    id: 1,
    type: 'parking',
    title: "Cochera en Edificio Torre Pacifico – Punta Pacífica",
    propertyType: "Apartamento / Edificio",
    address: "Calle Isaac Hanono Missri, Subsuelo 2",
    city: "Panamá",
    zone: "Punta Pacífica",
    lat: 8.9774,
    lng: -79.5085,
    pricePerHour: 3.50,
    pricePerDay: 22.00,
    spaceType: "Edificio Residencial (Techado 24/7)",
    hasEV: true,
    evPorts: 2,
    security: ["LPR Automático", "CCTV 360°", "Portón Smart", "Seguridad 24hs"],
    rating: 4.9,
    reviewsCount: 142,
    owner: { name: "Carlos Mendoza (Dpto 12B)", verified: true, avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" },
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80",
    aiMatchScore: 98,
    aiReason: "Recomendado por Google AI según tus viajes diarios a la zona bancaria y hospitales de Punta Pacífica.",
    availableNow: true,
    featured: true
  },
  {
    id: 2,
    type: 'parking',
    title: "Garaje Privado en Casa Residencial Costa del Este",
    propertyType: "Casa Particular",
    address: "Av. Costa del Este, Garaje Principal",
    city: "Panamá",
    zone: "Costa del Este",
    lat: 9.0092,
    lng: -79.4678,
    pricePerHour: 2.80,
    pricePerDay: 18.00,
    spaceType: "Casa Particular (Garaje Techado)",
    hasEV: true,
    evPorts: 1,
    security: ["Portón Eléctrico", "Cámara de Seguridad", "Sensor de Movimiento"],
    rating: 4.8,
    reviewsCount: 89,
    owner: { name: "Elena Ramos (Residente)", verified: true, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80" },
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
    aiMatchScore: 95,
    aiReason: "Google AI detectó tu rutina de trabajo en Costa del Este y reservó esta casa particular con cargador EV Tipo 2.",
    availableNow: true,
    featured: false
  },
  {
    id: 3,
    type: 'parking',
    title: "Estacionamiento Reservado en Casa San Francisco",
    propertyType: "Casa Particular",
    address: "Calle 50, Garaje Privado",
    city: "Panamá",
    zone: "San Francisco",
    lat: 8.9866,
    lng: -79.5165,
    pricePerHour: 3.00,
    pricePerDay: 20.00,
    spaceType: "Casa Particular (Cochera Cubierta)",
    hasEV: true,
    evPorts: 3,
    security: ["App de Control", "IA Monitoreo", "Sensor Presencia"],
    rating: 4.95,
    reviewsCount: 198,
    owner: { name: "Mateo Gómez", verified: true, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" },
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    aiMatchScore: 99,
    aiReason: "Google AI ubica este espacio en tu ruta habitual de restaurantes y oficinas de Calle 50.",
    availableNow: true,
    featured: true
  },
  {
    id: 4,
    type: 'parking',
    title: "Cochera Subterránea PH Ocean Two – Costa del Este",
    propertyType: "Apartamento / Edificio",
    address: "Paseo del Mar, Subsuelo Dpto 14A",
    city: "Panamá",
    zone: "Costa del Este",
    lat: 9.0065,
    lng: -79.4621,
    pricePerHour: 4.00,
    pricePerDay: 25.00,
    spaceType: "Edificio Residencial (Subterráneo)",
    hasEV: true,
    evPorts: 2,
    security: ["Acceso Biométrico", "Reconocimiento LPR", "Vigilancia 24/7"],
    rating: 4.97,
    reviewsCount: 211,
    owner: { name: "Sofía Valenzuela (Dueña)", verified: true, avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
    aiMatchScore: 97,
    aiReason: "Frecuentas esta zona por las tardes. Google AI sugiere este parqueo privado residencial.",
    availableNow: true,
    featured: false
  },
  {
    id: 5,
    type: 'parking',
    title: "Estacionamiento Privado Edificio Horizon – Palermo",
    propertyType: "Apartamento / Edificio",
    address: "Av. Del Libertador 2450, Subsuelo 1",
    city: "Buenos Aires",
    zone: "Palermo",
    lat: -34.5802,
    lng: -58.4114,
    pricePerHour: 3.50,
    pricePerDay: 22.00,
    spaceType: "Edificio Residencial (Techado 24/7)",
    hasEV: true,
    evPorts: 2,
    security: ["LPR Automático", "CCTV 360°", "Seguridad 24hs"],
    rating: 4.9,
    reviewsCount: 142,
    owner: { name: "Carlos Mendoza", verified: true, avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" },
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80",
    aiMatchScore: 98,
    aiReason: "Cochera privada residencial con cargador Tesla rápido.",
    availableNow: true,
    featured: true
  }
];

const initialCars = [
  {
    id: 101,
    type: 'car',
    title: "Tesla Model 3 – Eléctrico Particular",
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    seats: 5,
    isElectric: true,
    range: "560 km",
    pricePerDay: 75.00,
    pricePerHour: 12.00,
    city: "Panamá",
    zone: "Punta Pacífica",
    lat: 8.9774,
    lng: -79.5085,
    rating: 4.9,
    reviewsCount: 87,
    owner: { name: "Andrés Vega (Particular)", verified: true, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    features: ["Autopilot", "Supercharger Access", "Full Electric"],
    aiReason: "Google AI sugiere este vehículo eléctrico particular ubicado a 3 min de tu destino actual.",
    availableNow: true,
    featured: true
  },
  {
    id: 102,
    type: 'car',
    title: "BMW iX – SUV Eléctrico de Lujo",
    brand: "BMW",
    model: "iX xDrive50",
    year: 2024,
    seats: 5,
    isElectric: true,
    range: "630 km",
    pricePerDay: 120.00,
    pricePerHour: 18.00,
    city: "Panamá",
    zone: "Costa del Este",
    lat: 9.0092,
    lng: -79.4678,
    rating: 5.0,
    reviewsCount: 43,
    owner: { name: "Patricia Solano (Particular)", verified: true, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    features: ["iDrive 8", "Carga Rápida 200kW", "AWD"],
    aiReason: "Coche eléctrico de lujo para tus traslados de negocios recomendados por Google AI.",
    availableNow: true,
    featured: true
  },
  {
    id: 103,
    type: 'car',
    title: "Toyota RAV4 Hybrid – Familiar Particular",
    brand: "Toyota",
    model: "RAV4 Hybrid",
    year: 2023,
    seats: 5,
    isElectric: false,
    range: "780 km",
    pricePerDay: 55.00,
    pricePerHour: 9.00,
    city: "Panamá",
    zone: "San Francisco",
    lat: 8.9866,
    lng: -79.5165,
    rating: 4.7,
    reviewsCount: 134,
    owner: { name: "José Herrera (Particular)", verified: true, avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&q=80" },
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80",
    features: ["Híbrido 2.5L", "AWD", "Apple CarPlay"],
    aiReason: "Perfecto para trayectos familiares urbanos detectados en tu agenda.",
    availableNow: true,
    featured: false
  }
];

export const AppProvider = ({ children }) => {
  const [parkingSpots] = useState(initialParkingSpots);
  const [cars] = useState(initialCars);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Panamá');
  const [userDestinations] = useState([
    { name: "Oficina Central - Costa del Este", frecuency: "Diario (8:30 AM)" },
    { name: "Multiplaza Mall - San Francisco", frecuency: "3 veces / semana" },
    { name: "Hospital Punta Pacífica", frecuency: "Frecuente" }
  ]);
  const [savedItems, setSavedItems] = useState([]);
  const [bookingModalItem, setBookingModalItem] = useState(null);
  const [contactMessages, setContactMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('parking'); // 'parking' | 'cars'

  const getFilteredListings = () => {
    const source = activeTab === 'parking' ? parkingSpots : cars;
    return source.filter(item => {
      const matchesCity = selectedCity === 'Todas' || item.city.toLowerCase() === selectedCity.toLowerCase();
      const matchesSearch = !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.zone?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.aiReason?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesSearch;
    });
  };

  const toggleSave = (id) => {
    setSavedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const addContactMessage = (msg) => {
    setContactMessages(prev => [{ ...msg, id: Date.now(), timestamp: new Date().toLocaleString() }, ...prev]);
  };

  return (
    <AppContext.Provider value={{
      parkingSpots,
      cars,
      searchQuery,
      setSearchQuery,
      selectedCity,
      setSelectedCity,
      userDestinations,
      savedItems,
      toggleSave,
      bookingModalItem,
      setBookingModalItem,
      addContactMessage,
      contactMessages,
      activeTab,
      setActiveTab,
      getFilteredListings
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
