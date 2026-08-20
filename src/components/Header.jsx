import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Zap, Menu, X, Car, ParkingCircle, ChevronRight } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/explorar', label: 'Explorar' },
    { path: '/servicios', label: 'Servicios IA' },
    { path: '/beneficios', label: 'Beneficios' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/95 backdrop-blur-xl border-b border-[#00f5a020]'
          : 'bg-[#030712]/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* ── LOGO ── */}
          <RouterLink to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00f5a0, #00d4ff)', boxShadow: '0 0 20px #00f5a050' }}>
              <ParkingCircle className="w-5 h-5 text-[#030712] font-black" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="font-black text-lg tracking-tight"
                style={{ background: 'linear-gradient(90deg,#00f5a0,#00d4ff)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                PARK<span className="font-light">share</span>
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <Zap className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" />
                <span className="text-[9px] text-yellow-400 font-bold tracking-widest uppercase">EV Ready</span>
              </div>
            </div>
          </RouterLink>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label }) => (
              <RouterLink
                key={path}
                to={path}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(path)
                    ? 'text-[#00f5a0]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive(path) && (
                  <span className="absolute inset-0 rounded-lg bg-[#00f5a010] border border-[#00f5a030]" />
                )}
                <span className="relative">{label}</span>
              </RouterLink>
            ))}
          </nav>

          {/* ── CTA BUTTONS ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <RouterLink
              to="/publicar"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-[#a855f7] border border-[#a855f740] hover:border-[#a855f7] hover:bg-[#a855f710] transition-all"
            >
              <Car className="w-4 h-4" />
              <span>Alquila tu Carro</span>
            </RouterLink>

            <RouterLink
              to="/explorar"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-[#030712] transition-all"
              style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)', boxShadow: '0 0 20px #00f5a040' }}
            >
              <span>Buscar Parqueo</span>
              <ChevronRight className="w-4 h-4" />
            </RouterLink>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* ── MOBILE DROPDOWN ── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712] border-t border-[#00f5a020] px-4 py-4 space-y-1">
          {navLinks.map(({ path, label }) => (
            <RouterLink
              key={path}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(path) ? 'text-[#00f5a0] bg-[#00f5a010]' : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              {label}
            </RouterLink>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t border-slate-900">
            <RouterLink
              to="/publicar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-semibold text-[#a855f7] border border-[#a855f740]"
            >
              Alquila tu Carro
            </RouterLink>
            <RouterLink
              to="/explorar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-bold text-[#030712]"
              style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)' }}
            >
              Buscar Parqueo
            </RouterLink>
          </div>
        </div>
      )}
    </header>
  );
};
