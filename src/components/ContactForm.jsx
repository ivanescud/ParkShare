import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, User, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactForm = () => {
  const { addContactMessage } = useApp();

  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Consulta General', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim() || formData.name.trim().length < 3)
      e.name = 'El nombre debe tener al menos 3 caracteres.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      e.email = 'Introduce un correo electrónico válido.';
    if (!formData.message.trim() || formData.message.trim().length < 10)
      e.message = 'El mensaje debe tener al menos 10 caracteres.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        addContactMessage(formData);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: 'Consulta General', message: '' });
      }, 800);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* INFO SIDE */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
              style={{ color: '#00f5a0', borderColor: '#00f5a030', background: '#00f5a008' }}>
              <Sparkles className="w-3.5 h-3.5" /> Contacto & Soporte
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              ¿Quieres registrar tu<br />
              <span className="gradient-green-cyan">cochera o auto?</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Nuestro equipo y asistente de IA están disponibles para ayudarte a integrar rápidamente tu espacio o vehículo a la plataforma.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { icon: <Mail className="w-4 h-4" />, label: 'Email', val: 'hola@parkshare-ai.com', color: '#00f5a0' },
                { icon: <MapPin className="w-4 h-4" />, label: 'Soporte IA', val: 'Respuesta en < 1 minuto', color: '#fbbf24' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-[#080d18]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium">{c.label}</p>
                    <p className="text-sm font-bold text-white">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3 bg-[#080d18] border border-slate-800 rounded-3xl p-8 shadow-2xl">

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 mx-auto animate-bounce" style={{ color: '#00f5a0', filter: 'drop-shadow(0 0 20px #00f5a060)' }} />
                <h3 className="text-2xl font-black text-white">¡Mensaje Enviado!</h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                  Nuestro asistente IA ha recibido tu consulta y te escribirá al correo proporcionado en breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-sm font-bold text-[#030712] transition-all"
                  style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)', boxShadow: '0 0 20px #00f5a040' }}
                >
                  Nuevo Mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="text-xl font-black text-white mb-1">Formulario de Contacto</h3>

                {/* NAME */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Nombre Completo <span style={{ color: '#00f5a0' }}>*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input
                      type="text"
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-[#030712] border rounded-xl text-white text-sm placeholder-slate-700 outline-none transition-all ${
                        errors.name ? 'border-red-500' : 'border-slate-800 focus:border-[#00f5a050]'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Correo Electrónico <span style={{ color: '#00f5a0' }}>*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input
                      type="email"
                      placeholder="tu@correo.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-[#030712] border rounded-xl text-white text-sm placeholder-slate-700 outline-none transition-all ${
                        errors.email ? 'border-red-500' : 'border-slate-800 focus:border-[#00f5a050]'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Tipo de Solicitud</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#030712] border border-slate-800 rounded-xl text-white text-sm outline-none focus:border-[#00f5a050] transition-all"
                  >
                    <option value="Consulta General">Buscar parqueo o auto</option>
                    <option value="Registrar Cochera">Registrar mi cochera</option>
                    <option value="Registrar Auto">Publicar mi auto</option>
                    <option value="Integracion AI">Dudas sobre la IA</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Mensaje <span style={{ color: '#00f5a0' }}>*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-600" />
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos tu consulta o los detalles de tu espacio / vehículo..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-[#030712] border rounded-xl text-white text-sm placeholder-slate-700 outline-none transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-slate-800 focus:border-[#00f5a050]'
                      }`}
                    />
                  </div>
                  {errors.message && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-black text-[#030712] flex items-center justify-center gap-2 transition-all"
                  style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)', boxShadow: '0 0 25px #00f5a040' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#030712] border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
