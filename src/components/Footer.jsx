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
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Síguenos en Redes Sociales</p>
              <div className="flex flex-wrap items-center gap-2">
                
                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-800 bg-[#080d18] text-xs font-semibold text-slate-300 hover:text-[#00f5a0] hover:border-[#00f5a050] hover:bg-[#00f5a008] transition-all group"
                >
                  <svg className="w-4 h-4 text-pink-500 group-hover:text-[#00f5a0] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                {/* FACEBOOK */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-800 bg-[#080d18] text-xs font-semibold text-slate-300 hover:text-[#00d4ff] hover:border-[#00d4ff50] hover:bg-[#00d4ff08] transition-all group"
                >
                  <svg className="w-4 h-4 text-cyan-400 group-hover:text-[#00d4ff] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-800 bg-[#080d18] text-xs font-semibold text-slate-300 hover:text-[#a855f7] hover:border-[#a855f750] hover:bg-[#a855f708] transition-all group"
                >
                  <svg className="w-4 h-4 text-purple-400 group-hover:text-[#a855f7] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/50760000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-800 bg-[#080d18] text-xs font-semibold text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group"
                >
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>

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
