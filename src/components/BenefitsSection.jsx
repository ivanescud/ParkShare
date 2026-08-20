import React from 'react';
import { Zap, ShieldCheck, DollarSign, Clock, Cpu, Lock, Building2, Smartphone, BatteryCharging } from 'lucide-react';
import parkingLotImg from '../assets/Parking_lot.jpg';

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-[#030712] cyber-grid relative overflow-hidden">

      {/* GLOW BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#00f5a050] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#00d4ff30] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
            style={{ color: '#00f5a0', borderColor: '#00f5a030', background: '#00f5a008' }}>
            <Zap className="w-3.5 h-3.5" /> Ventajas & Características
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Todo lo que necesitas
            <br />
            <span className="gradient-green-cyan">en un solo lugar</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Desde encontrar parqueo seguro hasta rentar el auto eléctrico perfecto — con IA que optimiza cada decisión.
          </p>
        </div>

        {/* EV BANNER — FEATURED */}
        <div className="mb-12 rounded-3xl overflow-hidden border relative"
          style={{ borderColor: '#fbbf2430', background: 'linear-gradient(135deg, #0a0a00 0%, #1a1000 50%, #0a0a00 100%)' }}>
          <div className="absolute inset-0 opacity-30"
            style={{ background: 'radial-gradient(ellipse at 30% 50%, #fbbf2420, transparent 60%)' }} />
          <div className="relative grid md:grid-cols-2 gap-0 items-center">
            <div className="p-8 sm:p-12 space-y-5">
              <div className="flex items-center gap-2 text-yellow-400 text-sm font-bold uppercase tracking-widest">
                <Zap className="w-5 h-5 fill-current animate-pulse-neon" />
                <span>ÉNFASIS EN CARGA ELÉCTRICA</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                El futuro es
                <span className="gradient-yellow-orange"> eléctrico</span>.
                <br />Nosotros lo habilitamos.
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Más del <strong className="text-yellow-400">68% de nuestros parqueos</strong> incluyen estaciones de carga EV compatibles con Tesla, J1772, CHAdeMO y CCS2. Llega con la batería vacía, sal con el 100%.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { val: '3 tipos', label: 'Conectores compatibles', icon: '🔌' },
                  { val: '18 min', label: 'Carga rápida DC', icon: '⚡' },
                  { val: 'Gratis', label: 'Con reserva del parqueo', icon: '🎁' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div className="text-lg font-black text-yellow-400">{s.val}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-56 md:h-full min-h-[280px]">
              <img
                src={parkingLotImg}
                alt="Estación de carga eléctrica"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a00] via-transparent to-transparent" />
              <div className="absolute top-1/2 right-6 -translate-y-1/2 text-center">
                <BatteryCharging className="w-16 h-16 mx-auto mb-2 animate-pulse-neon" style={{ color: '#fbbf24', filter: 'drop-shadow(0 0 20px #fbbf2480)' }} />
                <div className="text-yellow-400 font-black text-sm">EV Charging</div>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Clock className="w-6 h-6" />, color: '#00f5a0',
              title: 'Reserva en Segundos',
              desc: 'Asegura tu espacio de parqueo o reserva un auto antes de salir de casa. Sin filas, sin estrés.'
            },
            {
              icon: <DollarSign className="w-6 h-6" />, color: '#00d4ff',
              title: 'Hasta 50% Más Barato',
              desc: 'Cocheras residenciales y autos particulares a precios muy por debajo del mercado tradicional.'
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />, color: '#a855f7',
              title: 'Seguridad Verificada',
              desc: 'Todos los espacios y vehículos pasan verificación con IA. Propietarios con identidad confirmada.'
            },
            {
              icon: <Cpu className="w-6 h-6" />, color: '#fbbf24',
              title: 'Precios Dinámicos IA',
              desc: 'Nuestros algoritmos ajustan tarifas en tiempo real según demanda de zona para maximizar tu ahorro.'
            },
            {
              icon: <Building2 className="w-6 h-6" />, color: '#00f5a0',
              title: 'Ingresos Pasivos',
              desc: 'Propietarios ganan hasta $300/mes alquilando cocheras vacías. La IA gestiona todo automáticamente.'
            },
            {
              icon: <Smartphone className="w-6 h-6" />, color: '#00d4ff',
              title: 'Control por App & LPR',
              desc: 'Apertura automática del portón con reconocimiento de placa. Sin llaves, sin tarjetas, sin fricción.'
            },
          ].map((b, i) => (
            <div
              key={i}
              className="glow-card bg-[#080d18] border border-slate-800/60 rounded-2xl p-6 space-y-3 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${b.color}15`, border: `1px solid ${b.color}30`, color: b.color }}>
                {b.icon}
              </div>
              <h3 className="text-white font-bold text-base">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
