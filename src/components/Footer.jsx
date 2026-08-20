import React from 'react';
import { Link } from 'react-router-dom';
import { ParkingCircle, Zap, Globe, MessageCircle, Share2, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const navGroups = [
    {
      title: 'Plataforma',
      links: [
        { label: 'Inicio', to: '/' },
        { label: 'Buscar Parqueos', to: '/explorar' },
        { label: 'Rentar un Auto', to: '/explorar' },
        { label: 'Servicios IA', to: '/servicios' },
        { label: 'Beneficios', to: '/beneficios' },
      ]
    },
    {
      title: 'Propietarios',
      links: [
        { label: 'Publicar mi Cochera', to: '/publicar' },
        { label: 'Publicar mi Auto', to: '/publicar' },
        { label: 'Tarifas Dinámicas IA', to: '/servicios' },
        { label: 'Dashboard', to: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Términos del Servicio', href: '#' },
        { label: 'Política de Privacidad', href: '#' },
        { label: 'Cobertura & Seguros', href: '#' },
        { label: 'Aviso Legal AI-UX', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-[#030712] border-t" style={{ borderColor: '#00f5a015' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)', boxShadow: '0 0 20px #00f5a040' }}>
                <ParkingCircle className="w-5 h-5 text-[#030712]" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight"
                  style={{ background: 'linear-gradient(90deg,#00f5a0,#00d4ff)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  PARKshare
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <Zap className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-[10px] text-yellow-400 font-bold tracking-widest">EV · AI · P2P</span>
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              La primera red colaborativa de parqueos y alquiler de autos entre particulares, optimizada por inteligencia artificial y enfocada en movilidad eléctrica.
            </p>

            {/* SOCIAL MEDIA LINKS */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Síguenos en Redes Sociales</p>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { name: 'Instagram', label: '@parkshare.app', href: 'https://instagram.com', color: '#e1306c', icon: '📸' },
                  { name: 'Facebook', label: 'ParkShare Global', href: 'https://facebook.com', color: '#1877f2', icon: '👤' },
                  { name: 'Twitter / X', label: '@ParkShareAI', href: 'https://twitter.com', color: '#38bdf8', icon: '🐦' },
                  { name: 'LinkedIn', label: 'ParkShare Inc.', href: 'https://linkedin.com', color: '#0a66c2', icon: '💼' },
                  { name: 'WhatsApp', label: '+507 6000-0000', href: 'https://wa.me/50760000000', color: '#25d366', icon: '💬' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-[#080d18] text-xs text-slate-400 hover:text-white hover:border-[#00f5a050] transition-all"
                  >
                    <span>{s.icon}</span>
                    <span className="font-semibold">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Mail className="w-3.5 h-3.5 text-[#00f5a0]" /> soporte@parkshare-ai.com
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Phone className="w-3.5 h-3.5 text-[#00f5a0]" /> +507 800-PARK (Panamá)
              </div>
            </div>
          </div>

          {/* NAV GROUPS */}
          {navGroups.map((group, gi) => (
            <div key={gi} className="space-y-3">
              <h4 className="text-xs font-black text-white uppercase tracking-widest">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, li) => (
                  <li key={li}>
                    {link.to ? (
                      <Link to={link.to}
                        className="text-sm text-slate-600 hover:text-[#00f5a0] transition-colors flex items-center gap-1 group">
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ) : (
                      <a href={link.href}
                        className="text-sm text-slate-600 hover:text-[#00f5a0] transition-colors flex items-center gap-1 group">
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <p>© {new Date().getFullYear()} PARKshare AI. Todos los derechos reservados. Proyecto Académico Original.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse-neon" />
            React · React Router · Context API · Tailwind CSS v4
          </p>
        </div>

      </div>
    </footer>
  );
};
