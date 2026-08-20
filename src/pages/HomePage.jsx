import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactForm } from '../components/ContactForm';
import { Zap, ArrowRight, ParkingCircle, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <main>
      {/* HERO */}
      <HeroSection />

      {/* QUICK STATS STRIP */}
      <div className="border-y border-slate-900 bg-[#04080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-around gap-6 text-center">
            {[
              { val: '1,200+', label: 'Cocheras Verificadas', color: '#00f5a0' },
              { val: '340+', label: 'Autos Disponibles', color: '#a855f7' },
              { val: '820+', label: 'Estaciones EV ⚡', color: '#fbbf24' },
              { val: '4.9★', label: 'Calificación Media', color: '#00d4ff' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-black" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs text-slate-600 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <BenefitsSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* DUAL CTA BANNER */}
      <section className="py-20 bg-[#04080f] relative overflow-hidden border-t border-slate-900">
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, #00f5a008 0%, transparent 60%)' }} />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Empieza hoy.
            <br />
            <span className="gradient-green-cyan">Gratis.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Únete a la primera red colaborativa de estacionamientos y autos particulares con inteligencia artificial y soporte para carga eléctrica.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/explorar"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-black text-[#030712] transition-all"
              style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)', boxShadow: '0 0 30px #00f5a040' }}>
              <ParkingCircle className="w-5 h-5" />
              <span>Buscar Parqueo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/explorar"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-black text-white transition-all border border-[#a855f740] hover:border-[#a855f7]"
              style={{ background: 'linear-gradient(135deg,#a855f720,#ec489910)', boxShadow: '0 0 30px #a855f720' }}>
              <Car className="w-5 h-5 text-[#a855f7]" />
              <span>Rentar un Auto</span>
            </Link>
            <Link to="/publicar"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-black text-yellow-400 border border-yellow-400/30 hover:border-yellow-400/60 transition-all"
              style={{ background: '#fbbf2408' }}>
              <Zap className="w-5 h-5 fill-current" />
              <span>Publicar mi Espacio o Auto</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactForm />
    </main>
  );
};
