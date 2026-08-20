import React, { useState } from 'react';
import { PlusCircle, CheckCircle2, DollarSign, Car, ParkingCircle, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export const PublishSpotPage = () => {
  const { registerNewListing } = useApp() || {};
  const navigate = useNavigate();
  const [publishType, setPublishType] = useState('parking'); // 'parking' | 'car'
  const [published, setPublished] = useState(false);

  const [parkingForm, setParkingForm] = useState({
    ownerName: '', title: '', city: 'Buenos Aires', zone: 'Palermo',
    address: '', pricePerHour: '3.00', pricePerDay: '20.00',
    type: 'Techado 24/7', hasEV: false, evPorts: 1
  });

  const [carForm, setCarForm] = useState({
    ownerName: '', brand: '', model: '', year: '2023', seats: '5',
    isElectric: false, range: '', pricePerDay: '60.00', pricePerHour: '10.00',
    city: 'Buenos Aires', zone: 'Palermo'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPublished(true);
    setTimeout(() => navigate('/explorar'), 2500);
  };

  return (
    <div className="min-h-screen bg-[#030712] cyber-grid py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
            style={{ color: '#fbbf24', borderColor: '#fbbf2430', background: '#fbbf2408' }}>
            <DollarSign className="w-3.5 h-3.5" /> Genera Ingresos Extra
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Publica tu cochera o auto
          </h1>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            La IA gestiona automáticamente el precio, el acceso y la calidad. Tú solo defines la disponibilidad.
          </p>
        </div>

        {/* PUBLISH TYPE SELECTOR */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setPublishType('parking')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-black border transition-all ${
              publishType === 'parking' ? 'border-[#00f5a0] text-[#030712]' : 'border-slate-800 text-slate-500 bg-transparent hover:border-slate-700'
            }`}
            style={publishType === 'parking' ? { background: 'linear-gradient(135deg,#00f5a0,#00d4ff)', boxShadow: '0 0 25px #00f5a040' } : {}}
          >
            <ParkingCircle className="w-5 h-5" />
            Publicar mi Cochera
          </button>
          <button
            onClick={() => setPublishType('car')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-black border transition-all ${
              publishType === 'car' ? 'border-[#a855f7] text-white' : 'border-slate-800 text-slate-500 bg-transparent hover:border-slate-700'
            }`}
            style={publishType === 'car' ? { background: 'linear-gradient(135deg,#a855f7,#ec4899)', boxShadow: '0 0 25px #a855f740' } : {}}
          >
            <Car className="w-5 h-5" />
            Publicar mi Auto
          </button>
        </div>

        {/* FORM */}
        <div className="bg-[#080d18] border border-slate-800 rounded-3xl p-8 shadow-2xl">
          {published ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 mx-auto animate-bounce"
                style={{ color: '#00f5a0', filter: 'drop-shadow(0 0 20px #00f5a060)' }} />
              <h2 className="text-2xl font-black text-white">¡Publicado con Éxito!</h2>
              <p className="text-slate-400 text-sm">
                Tu {publishType === 'parking' ? 'cochera' : 'auto'} fue validado por la IA y ya está disponible en la plataforma.
              </p>
            </div>
          ) : publishType === 'parking' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-black text-white mb-2">Detalles del Estacionamiento</h3>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Tu Nombre" placeholder="Carlos Mendoza" required
                  value={parkingForm.ownerName}
                  onChange={v => setParkingForm({...parkingForm, ownerName: v})} />
                <Field label="Título del Anuncio" placeholder="Cochera privada en torre residencial" required
                  value={parkingForm.title}
                  onChange={v => setParkingForm({...parkingForm, title: v})} />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <SelectField label="Ciudad" value={parkingForm.city} onChange={v => setParkingForm({...parkingForm, city: v})}
                  options={['Buenos Aires','Lima','Medellín','Santiago']} />
                <Field label="Zona / Barrio" placeholder="Palermo" value={parkingForm.zone}
                  onChange={v => setParkingForm({...parkingForm, zone: v})} />
                <SelectField label="Tipo de Espacio" value={parkingForm.type} onChange={v => setParkingForm({...parkingForm, type: v})}
                  options={['Techado 24/7','Subterráneo Premium','Garaje Privado en Casa']} />
              </div>

              <Field label="Dirección Exacta" placeholder="Av. Santa Fe 1420, Sótano" required
                value={parkingForm.address}
                onChange={v => setParkingForm({...parkingForm, address: v})} />

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Precio/Hora ($ USD)" type="number" step="0.5" value={parkingForm.pricePerHour}
                  onChange={v => setParkingForm({...parkingForm, pricePerHour: v})} />
                <Field label="Precio/Día ($ USD)" type="number" step="1" value={parkingForm.pricePerDay}
                  onChange={v => setParkingForm({...parkingForm, pricePerDay: v})} />
              </div>

              {/* EV TOGGLE */}
              <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-[#030712]">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-white font-bold text-sm">¿Tienes cargador eléctrico (EV)?</p>
                    <p className="text-slate-500 text-xs">Los parqueos con cargador EV ganan hasta 40% más</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setParkingForm({...parkingForm, hasEV: !parkingForm.hasEV})}
                  className="relative w-12 h-6 rounded-full transition-all"
                  style={{ background: parkingForm.hasEV ? 'linear-gradient(135deg,#fbbf24,#f97316)' : '#1e293b' }}
                >
                  <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${parkingForm.hasEV ? 'left-7' : 'left-1'}`} />
                </button>
              </div>

              {parkingForm.hasEV && (
                <SelectField label="Número de Puertos EV" value={String(parkingForm.evPorts)}
                  onChange={v => setParkingForm({...parkingForm, evPorts: parseInt(v)})}
                  options={['1','2','3','4']} />
              )}

              <SubmitBtn color="#00f5a0" label="Publicar mi Cochera" />
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-black text-white mb-2">Detalles del Vehículo</h3>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Tu Nombre" placeholder="Juan Pérez" required
                  value={carForm.ownerName}
                  onChange={v => setCarForm({...carForm, ownerName: v})} />
                <Field label="Marca" placeholder="Tesla, BMW, Toyota..." required
                  value={carForm.brand}
                  onChange={v => setCarForm({...carForm, brand: v})} />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <Field label="Modelo" placeholder="Model 3, iX, RAV4..." required
                  value={carForm.model}
                  onChange={v => setCarForm({...carForm, model: v})} />
                <Field label="Año" type="number" placeholder="2023" value={carForm.year}
                  onChange={v => setCarForm({...carForm, year: v})} />
                <Field label="Asientos" type="number" placeholder="5" value={carForm.seats}
                  onChange={v => setCarForm({...carForm, seats: v})} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Precio/Hora ($ USD)" type="number" step="0.5" value={carForm.pricePerHour}
                  onChange={v => setCarForm({...carForm, pricePerHour: v})} />
                <Field label="Precio/Día ($ USD)" type="number" step="1" value={carForm.pricePerDay}
                  onChange={v => setCarForm({...carForm, pricePerDay: v})} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <SelectField label="Ciudad" value={carForm.city} onChange={v => setCarForm({...carForm, city: v})}
                  options={['Buenos Aires','Lima','Medellín','Santiago']} />
                <Field label="Zona / Barrio" placeholder="Palermo" value={carForm.zone}
                  onChange={v => setCarForm({...carForm, zone: v})} />
              </div>

              {/* ELECTRIC TOGGLE */}
              <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-[#030712]">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-white font-bold text-sm">¿El auto es eléctrico o híbrido?</p>
                    <p className="text-slate-500 text-xs">Los vehículos eléctricos se rentan hasta 60% más rápido</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCarForm({...carForm, isElectric: !carForm.isElectric})}
                  className="relative w-12 h-6 rounded-full transition-all"
                  style={{ background: carForm.isElectric ? 'linear-gradient(135deg,#fbbf24,#f97316)' : '#1e293b' }}
                >
                  <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${carForm.isElectric ? 'left-7' : 'left-1'}`} />
                </button>
              </div>

              {carForm.isElectric && (
                <Field label="Autonomía (km)" placeholder="560 km por carga" value={carForm.range}
                  onChange={v => setCarForm({...carForm, range: v})} />
              )}

              <SubmitBtn color="#a855f7" label="Publicar mi Auto" textWhite />
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

// ── MICRO COMPONENTS ──
const Field = ({ label, placeholder, required, type = 'text', step, value, onChange }) => (
  <div>
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{label}</label>
    <input
      type={type}
      step={step}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-700 outline-none focus:border-slate-600 transition-colors"
    />
  </div>
);

const SelectField = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{label}</label>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-slate-600 transition-colors"
    >
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

const SubmitBtn = ({ color, label, textWhite = false }) => (
  <button
    type="submit"
    className="w-full py-4 rounded-2xl text-sm font-black flex items-center justify-center gap-2 transition-all"
    style={{
      background: color === '#00f5a0'
        ? 'linear-gradient(135deg,#00f5a0,#00d4ff)'
        : 'linear-gradient(135deg,#a855f7,#ec4899)',
      boxShadow: `0 0 25px ${color}40`,
      color: textWhite ? 'white' : '#030712'
    }}
  >
    <PlusCircle className="w-5 h-5" />
    {label}
  </button>
);
