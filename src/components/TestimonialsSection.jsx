import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Alquilo mi cochera de lunes a viernes y gano $230 extras al mes. La IA pone el precio sola y el acceso por LPR es mágico — no tengo que estar presente.",
    author: "Lucía Fernández",
    role: "Propietaria · Palermo, Buenos Aires",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tag: "Propietaria Verificada",
    tagColor: '#00f5a0'
  },
  {
    id: 2,
    quote: "Cargué mi Tesla gratis durante 4 horas mientras trabajé. El parqueo tenía cargador incluido. Jamás volveré a un parqueo normal.",
    author: "David Alarcón",
    role: "Driver EV · Miraflores, Lima",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tag: "Usuario EV Frecuente",
    tagColor: '#fbbf24'
  },
  {
    id: 3,
    quote: "Renté el BMW iX eléctrico por el fin de semana para un viaje de 400km. El propietario fue amable y el proceso fue 100% digital. Increíble experiencia.",
    author: "Mariana Silva",
    role: "Rentadora de Autos · Santiago",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tag: "Renta de Autos",
    tagColor: '#a855f7'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#04080f] relative overflow-hidden">

      <div className="absolute inset-0 cyber-grid opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
            style={{ color: '#00d4ff', borderColor: '#00d4ff30', background: '#00d4ff08' }}>
            <Star className="w-3.5 h-3.5 fill-current" /> Casos de Éxito Reales
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Lo que dicen quienes ya{' '}
            <span className="gradient-green-cyan">cambiaron su movilidad</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glow-card relative bg-[#080d18] border border-slate-800/60 rounded-3xl p-7 flex flex-col justify-between group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: t.tagColor }} />

              <div className="space-y-4">
                {/* TAG */}
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{ color: t.tagColor, background: `${t.tagColor}15`, border: `1px solid ${t.tagColor}30` }}>
                  <CheckCircle2 className="w-3 h-3" /> {t.tag}
                </span>

                {/* STARS */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">"{t.quote}"</p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/60 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border-2"
                  style={{ borderColor: `${t.tagColor}50` }}
                />
                <div>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
