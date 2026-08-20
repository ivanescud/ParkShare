import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Search, MapPin, ChevronRight, ShieldCheck, Car, ParkingCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection = () => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, setActiveTab } = useApp();
  const [mode, setMode] = useState('parking'); // 'parking' | 'car'

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveTab(mode);
    navigate('/explorar');
  };

  const aiSuggestions = {
    parking: [
      { label: '⚡ Cargador EV', value: 'eléctrico' },
      { label: '🛡️ Seguridad 24/7', value: 'seguridad' },
      { label: '🏙️ Zona Financiera', value: 'financiero' },
    ],
    car: [
      { label: '⚡ Tesla Model 3', value: 'Tesla' },
      { label: '🔋 SUV Eléctrico', value: 'eléctrico' },
      { label: '🚗 Familia Híbrido', value: 'híbrido' },
    ]
  };

  return (
    <section className="relative overflow-hidden bg-[#030712] cyber-grid min-h-[92vh] flex items-center">

      {/* BACKGROUND GLOW ORBS */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00f5a0, transparent)' }} />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Copy + Search */}
          <div className="space-y-8">

            {/* EYEBROW BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest"
              style={{ borderColor: '#00f5a050', background: '#00f5a008', color: '#00f5a0' }}>
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Plataforma Urbana · Parqueos & Autos Eléctricos</span>
            </div>

            {/* HEADING */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="text-white">Parquea o</span>{' '}
              <span className="gradient-green-cyan neon-green">
                arrienda
              </span>
              <br />
              <span className="text-white">en la ciudad.</span>
              <br />
              <span className="text-slate-500 font-light text-4xl sm:text-5xl">
                Con carga{' '}
              </span>
              <span className="gradient-yellow-orange" style={{ fontSize: 'inherit' }}>⚡ eléctrica.</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Conectamos conductores que necesitan parqueo seguro con propietarios de cocheras en edificios. <strong className="text-white">Y también puedes rentar autos eléctricos</strong> directamente de sus dueños.
            </p>

            {/* DUAL MODE SEARCH */}
            <div className="bg-[#0a0f1a] border border-slate-800 rounded-2xl p-2 shadow-2xl">

              {/* MODE TOGGLE */}
              <div className="flex gap-1 p-1 bg-slate-900/50 rounded-xl mb-3">
                <button
                  onClick={() => setMode('parking')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    mode === 'parking'
                      ? 'bg-[#030712] text-[#00f5a0] shadow-lg'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                  style={mode === 'parking' ? { boxShadow: '0 0 20px #00f5a020' } : {}}
                >
                  <ParkingCircle className="w-4 h-4" />
                  Buscar Parqueo
                </button>
                <button
                  onClick={() => setMode('car')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    mode === 'car'
                      ? 'bg-[#030712] text-[#a855f7] shadow-lg'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                  style={mode === 'car' ? { boxShadow: '0 0 20px #a855f720' } : {}}
                >
                  <Car className="w-4 h-4" />
                  Rentar un Auto
                </button>
              </div>

              {/* SEARCH ROW */}
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="flex-1 flex items-center gap-2.5 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-3 focus-within:border-[#00f5a050] transition-colors">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                  <input
                    type="text"
                    placeholder={mode === 'parking' ? '¿En qué ciudad buscas parqueo?' : '¿Qué auto buscas? (Tesla, SUV...)'}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl text-sm font-bold text-[#030712] shrink-0 flex items-center gap-2 transition-all btn-ev-glow"
                  style={{ background: mode === 'parking' ? 'linear-gradient(135deg,#00f5a0,#00d4ff)' : 'linear-gradient(135deg,#a855f7,#ec4899)', boxShadow: mode === 'parking' ? '0 0 20px #00f5a040' : '0 0 20px #a855f740' }}
                >
                  <Search className="w-4 h-4" />
                  <span className={mode === 'car' ? 'text-white' : ''}>Buscar</span>
                </button>
              </form>

              {/* AI CHIPS */}
              <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap gap-2 items-center">
                <span className="text-xs text-slate-600 font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> IA sugiere:
                </span>
                {aiSuggestions[mode].map((s, i) => (
                  <button
                    key={i}
                    onClick={() => { setSearchQuery(s.value); setActiveTab(mode); navigate('/explorar'); }}
                    className="text-xs px-2.5 py-1 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 bg-slate-900/60 transition-all"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TRUST STATS */}
            <div className="flex flex-wrap items-center gap-6">
              {[
                { val: '1,200+', label: 'Parqueos Verificados', color: '#00f5a0' },
                { val: '340+', label: 'Autos Disponibles', color: '#a855f7' },
                { val: '98%', label: 'Estaciones EV', color: '#fbbf24' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-xl font-black" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: Hero Visual Cards */}
          <div className="hidden lg:block relative">

            {/* MAIN PARKING IMAGE */}
            <div className="relative rounded-3xl overflow-hidden border border-[#00f5a020] shadow-2xl animate-float"
              style={{ boxShadow: '0 0 60px #00f5a015, 0 30px 80px rgba(0,0,0,0.7)' }}>
              <img
                src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=700&q=80"
                alt="Parqueo Privado Moderno"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />

              {/* EV BADGE OVERLAY */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl"
                style={{ background: '#030712/90', border: '1px solid #fbbf2460', boxShadow: '0 0 20px #fbbf2430', backdropFilter: 'blur(8px)' }}>
                <Zap className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-xs font-bold text-yellow-400">Carga EV disponible</span>
              </div>

              {/* MATCH SCORE */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{ background: 'rgba(3,7,18,0.9)', border: '1px solid #00f5a030', backdropFilter: 'blur(8px)' }}>
                <Sparkles className="w-4 h-4 text-[#00f5a0]" />
                <span className="text-sm font-black text-[#00f5a0]">99% Match AI</span>
              </div>
            </div>

            {/* CAR CARD FLOATING */}
            <div className="absolute -bottom-6 -left-8 w-56 rounded-2xl overflow-hidden border border-[#a855f730] shadow-2xl"
              style={{ boxShadow: '0 0 40px #a855f720, 0 20px 50px rgba(0,0,0,0.8)' }}>
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=400&q=80"
                alt="Tesla Eléctrico"
                className="w-full h-32 object-cover"
              />
              <div className="bg-[#0a0f1a] p-3 border-t border-[#a855f730]">
                <div className="text-xs text-[#a855f7] font-bold flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" /> Tesla Model 3
                </div>
                <div className="text-white font-black text-base mt-0.5">$75 / día</div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>

      </div>
    </section>
  );
};
