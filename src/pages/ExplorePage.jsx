import React, { useState } from 'react';
import { Search, MapPin, Sparkles, Zap, BatteryCharging, Car, ParkingCircle, Star, CheckCircle2, X, Map, Grid } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { InteractiveMap } from '../components/InteractiveMap';

export const ExplorePage = () => {
  const {
    searchQuery, setSearchQuery,
    selectedCity, setSelectedCity,
    getFilteredListings,
    activeTab, setActiveTab,
    setBookingModalItem, bookingModalItem
  } = useApp();

  const [evOnly, setEvOnly] = useState(false);
  const [viewMode, setViewMode] = useState('both'); // 'both' | 'grid' | 'map'
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const rawListings = getFilteredListings();
  const listings = evOnly
    ? rawListings.filter(item => item.hasEV || item.isElectric)
    : rawListings;

  const confirmReservation = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingModalItem(null);
      setBookingSuccess(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#030712] cyber-grid">

      {/* ── TOP FILTER BAR ── */}
      <div className="sticky top-16 z-40 bg-[#030712]/95 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-3">

            {/* MODE TABS */}
            <div className="flex rounded-xl border border-slate-800 overflow-hidden">
              <button
                onClick={() => setActiveTab('parking')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all ${
                  activeTab === 'parking' ? 'text-[#030712]' : 'text-slate-500 hover:text-white bg-transparent'
                }`}
                style={activeTab === 'parking' ? { background: 'linear-gradient(135deg,#00f5a0,#00d4ff)' } : {}}
              >
                <ParkingCircle className="w-4 h-4" /> Parqueos
              </button>
              <button
                onClick={() => setActiveTab('car')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all ${
                  activeTab === 'car' ? 'text-white' : 'text-slate-500 hover:text-white bg-transparent'
                }`}
                style={activeTab === 'car' ? { background: 'linear-gradient(135deg,#a855f7,#ec4899)' } : {}}
              >
                <Car className="w-4 h-4" /> Autos
              </button>
            </div>

            {/* SEARCH */}
            <div className="flex-1 min-w-[180px] flex items-center gap-2 bg-[#080d18] border border-slate-800 rounded-xl px-3 py-2">
              <Search className="w-4 h-4 text-slate-600 shrink-0" />
              <input
                type="text"
                placeholder="Buscar por ciudad, zona, modelo..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-slate-600 outline-none"
              />
            </div>

            {/* CITY SELECT */}
            <select
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              className="bg-[#080d18] border border-slate-800 text-slate-300 text-sm rounded-xl px-3 py-2 outline-none font-bold"
            >
              <option value="Panamá">🇵🇦 Panamá (Default)</option>
              <option value="Todas">Todas las ciudades</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Lima">Lima</option>
              <option value="Medellín">Medellín</option>
              <option value="Santiago">Santiago</option>
            </select>

            {/* EV FILTER */}
            <button
              onClick={() => setEvOnly(!evOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                evOnly
                  ? 'border-yellow-400 text-[#030712]'
                  : 'border-slate-800 text-slate-500 hover:border-yellow-400/50 hover:text-yellow-400 bg-transparent'
              }`}
              style={evOnly ? { background: 'linear-gradient(135deg,#fbbf24,#f97316)', boxShadow: '0 0 20px #fbbf2440' } : {}}
            >
              <Zap className="w-4 h-4" fill={evOnly ? 'currentColor' : 'none'} />
              Solo EV / Eléctrico
            </button>

            {/* VIEW MODE TOGGLE */}
            <div className="flex rounded-xl border border-slate-800 p-1 gap-1 bg-[#080d18]">
              <button
                onClick={() => setViewMode('both')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === 'both' ? 'bg-slate-700 text-white' : 'text-slate-500'}`}
                title="Ver Mapa + Tarjetas"
              >
                Mapa + Lista
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === 'grid' ? 'bg-slate-700 text-white' : 'text-slate-500'}`}
                title="Ver Solo Lista"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === 'map' ? 'bg-slate-700 text-white' : 'text-slate-500'}`}
                title="Ver Solo Mapa"
              >
                <Map className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT (MAP + GRID) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
              <span>{activeTab === 'parking' ? 'Estacionamientos Disponibles' : 'Autos para Rentar'}</span>
              <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                Google AI Matching Active
              </span>
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Mostrando resultados para <strong className="text-white">{selectedCity}</strong> ({listings.length} ubicaciones encontradas)
            </p>
          </div>
        </div>

        {/* INTERACTIVE LEAFLET MAP SECTION */}
        {(viewMode === 'both' || viewMode === 'map') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold flex items-center gap-1.5 text-white">
                <Map className="w-4 h-4 text-[#00f5a0]" /> Mapa Interactivo de Ubicaciones en {selectedCity}
              </span>
              <span>Haz clic en un marcador para ver detalles</span>
            </div>
            <InteractiveMap items={listings} onSelectSpot={(spot) => setBookingModalItem(spot)} />
          </div>
        )}

        {/* CARDS GRID SECTION */}
        {(viewMode === 'both' || viewMode === 'grid') && (
          listings.length === 0 ? (
            <div className="text-center py-20 space-y-4 bg-[#080d18] rounded-3xl border border-slate-800">
              <div className="text-5xl">🔍</div>
              <h3 className="text-xl font-bold text-white">Sin resultados en {selectedCity}</h3>
              <p className="text-slate-500 text-sm">Prueba seleccionando "Todas las ciudades" o limpiando el filtro de búsqueda.</p>
              <button onClick={() => { setSearchQuery(''); setSelectedCity('Todas'); setEvOnly(false); }}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-[#030712]"
                style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)' }}>
                Limpiar Filtros
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {listings.map(item => (
                <ItemCard key={item.id} item={item} onBook={() => setBookingModalItem(item)} />
              ))}
            </div>
          )
        )}

      </div>

      {/* ── BOOKING MODAL ── */}
      {bookingModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(3,7,18,0.9)', backdropFilter: 'blur(12px)' }}>
          <div className="bg-[#080d18] border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative"
            style={{ boxShadow: '0 0 60px #00f5a010, 0 30px 80px rgba(0,0,0,0.8)' }}>

            {bookingSuccess ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 mx-auto animate-bounce"
                  style={{ color: '#00f5a0', filter: 'drop-shadow(0 0 20px #00f5a060)' }} />
                <h3 className="text-xl font-black text-white">¡Reserva Confirmada!</h3>
                <p className="text-slate-400 text-sm">
                  Tu acceso digital para <strong>{bookingModalItem.title}</strong> fue enviado a tu dispositivo.
                </p>
              </div>
            ) : (
              <form onSubmit={confirmReservation} className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <h3 className="text-base font-black text-white">
                    {bookingModalItem.type === 'parking' ? 'Reservar Parqueo' : 'Rentar Auto'}
                  </h3>
                  <button type="button" onClick={() => setBookingModalItem(null)}
                    className="text-slate-600 hover:text-white transition-colors p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-3 bg-[#030712] rounded-xl border border-slate-800">
                  <p className="font-bold text-white text-sm">{bookingModalItem.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{bookingModalItem.address || bookingModalItem.city}</p>
                  {(bookingModalItem.hasEV || bookingModalItem.isElectric) && (
                    <span className="inline-flex items-center gap-1 mt-2 text-[11px] font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-2 py-0.5 rounded-full">
                      <Zap className="w-3 h-3 fill-current" /> EV Compatible
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-500 font-bold uppercase mb-1 block">Fecha de Inicio</label>
                    <input type="date" defaultValue="2026-08-21" required
                      className="w-full bg-[#030712] border border-slate-800 rounded-xl p-2.5 text-xs text-white outline-none" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 font-bold uppercase mb-1 block">
                      {bookingModalItem.type === 'parking' ? 'Duración' : 'Días'}
                    </label>
                    <select className="w-full bg-[#030712] border border-slate-800 rounded-xl p-2.5 text-xs text-white outline-none">
                      {bookingModalItem.type === 'parking' ? (
                        <>
                          <option>2 Horas</option>
                          <option>4 Horas</option>
                          <option>Día completo</option>
                        </>
                      ) : (
                        <>
                          <option>1 Día</option>
                          <option>2 Días</option>
                          <option>1 Semana</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {bookingModalItem.type === 'parking' && (
                  <div>
                    <label className="text-xs text-slate-500 font-bold uppercase mb-1 block">Placa del Vehículo</label>
                    <input type="text" placeholder="Ej. ABC-1234" required
                      className="w-full bg-[#030712] border border-slate-800 rounded-xl p-2.5 text-xs text-white outline-none" />
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-sm">
                  <span className="text-slate-500">Total estimado:</span>
                  <span className="text-xl font-black"
                    style={{ color: '#00f5a0', textShadow: '0 0 20px #00f5a060' }}>
                    ${bookingModalItem.type === 'parking'
                      ? (bookingModalItem.pricePerHour * 2).toFixed(2)
                      : bookingModalItem.pricePerDay.toFixed(2)}
                  </span>
                </div>

                <button type="submit"
                  className="w-full py-3.5 rounded-xl font-black text-sm text-[#030712] transition-all"
                  style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)', boxShadow: '0 0 25px #00f5a040' }}>
                  {bookingModalItem.type === 'parking' ? 'Pagar & Recibir Acceso LPR' : 'Confirmar Reserva del Auto'}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

// ── CARD COMPONENT ──
const ItemCard = ({ item, onBook }) => {
  const isParking = item.type === 'parking';
  const hasEV = item.hasEV || item.isElectric;

  return (
    <div className={`${hasEV ? 'glow-card-ev' : isParking ? 'glow-card' : 'glow-card-car'} bg-[#080d18] border border-slate-800/70 rounded-3xl overflow-hidden flex flex-col transition-all duration-300`}>

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-[#080d18]/30 to-transparent" />

        {/* TOP BADGES */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {hasEV && (
            <span className="flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-full"
              style={{ background: '#030712/90', border: '1px solid #fbbf2460', color: '#fbbf24', boxShadow: '0 0 15px #fbbf2430', backdropFilter: 'blur(8px)' }}>
              <Zap className="w-3 h-3 fill-current" />
              {isParking ? `${item.evPorts} Cargador${item.evPorts > 1 ? 'es' : ''} EV` : 'Eléctrico'}
            </span>
          )}
          {item.featured && (
            <span className="text-[11px] font-black px-2.5 py-1 rounded-full"
              style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)', color: '#030712' }}>
              ⭐ Destacado
            </span>
          )}
        </div>

        {/* AI SCORE */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl"
          style={{ background: 'rgba(3,7,18,0.9)', border: '1px solid #00f5a030', backdropFilter: 'blur(8px)' }}>
          <Sparkles className="w-3.5 h-3.5" style={{ color: '#00f5a0' }} />
          <span className="text-xs font-black" style={{ color: '#00f5a0' }}>{item.aiMatchScore}% Match</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow space-y-3">

        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-1">
            <MapPin className="w-3 h-3 text-emerald-400" /> {item.city} · {item.zone}
          </div>
          <h3 className="text-white font-bold text-base leading-snug line-clamp-1">{item.title}</h3>
        </div>

        {/* AI REASON */}
        <div className="text-xs text-slate-400 leading-relaxed px-3 py-2 rounded-xl border border-slate-800/60 bg-[#030712]/60 flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#00f5a0] shrink-0 mt-0.5" />
          <span>{item.aiReason}</span>
        </div>

        {/* CAR FEATURES or SECURITY */}
        <div className="flex flex-wrap gap-1.5">
          {(isParking ? item.security : item.features)?.slice(0, 3).map((f, i) => (
            <span key={i} className="text-[11px] text-slate-400 border border-slate-800 px-2 py-0.5 rounded-lg bg-slate-900/40">
              {f}
            </span>
          ))}
        </div>

        {/* RATING + PRICE + BOOK */}
        <div className="flex items-center justify-between pt-2 mt-auto border-t border-slate-800/60">
          <div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-bold text-sm">{item.rating}</span>
              <span className="text-slate-600 text-xs">({item.reviewsCount})</span>
            </div>
            <div className="mt-0.5">
              <span className="text-xl font-black text-white">${item.pricePerDay}</span>
              <span className="text-xs text-slate-600"> / día</span>
            </div>
          </div>

          <button
            onClick={onBook}
            className="px-4 py-2.5 rounded-xl text-sm font-black text-[#030712] transition-all"
            style={{
              background: isParking ? 'linear-gradient(135deg,#00f5a0,#00d4ff)' : 'linear-gradient(135deg,#a855f7,#ec4899)',
              boxShadow: isParking ? '0 0 15px #00f5a040' : '0 0 15px #a855f740',
              color: isParking ? '#030712' : 'white'
            }}
          >
            {isParking ? 'Reservar' : 'Rentar'}
          </button>
        </div>

      </div>
    </div>
  );
};
