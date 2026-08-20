import React, { useState } from 'react';
import { Cpu, ShieldCheck, Sparkles, Zap, Bot, BarChart3, Radio, Navigation, MapPin, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export const ServicesPage = () => {
  const { setSearchQuery, setSelectedCity, userDestinations } = useApp();
  const navigate = useNavigate();

  const [customDestination, setCustomDestination] = useState('');
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAiMatchingAnalysis = (e) => {
    e.preventDefault();
    if (!customDestination.trim()) return;

    setAiAnalyzing(true);
    setAnalysisResult(null);

    // Simulate Google AI Gratis engine processing route & destinations
    setTimeout(() => {
      setAiAnalyzing(false);
      setAnalysisResult({
        destination: customDestination,
        recommendedZone: customDestination.toLowerCase().includes('costa') ? 'Costa del Este' : 'Punta Pacífica',
        reason: `Google AI analizó el tráfico hacia ${customDestination} y tus patrones de destino diarios. Se encontraron 3 cocheras residenciales y 1 auto eléctrico a menos de 150 metros con cargador disponible.`,
        suggestedSpots: [
          "Cochera en Edificio Torre Pacifico – Punta Pacífica",
          "Garaje Privado en Casa Residencial Costa del Este"
        ]
      });
    }, 1200);
  };

  const handleGoToExplore = (zone) => {
    setSelectedCity('Panamá');
    setSearchQuery(zone);
    navigate('/explorar');
  };

  const googleAiFeatures = [
    {
      icon: <Navigation className="w-7 h-7" />, color: '#00f5a0',
      title: "Análisis de Destinos Diarios (Google AI Gratis)",
      desc: "Google AI monitorea tus rutas y lugares habituales (oficina, universidad, casa) y te recomienda los mejores alquileres disponibles exactamente donde los necesitas."
    },
    {
      icon: <Bot className="w-7 h-7" />, color: '#00d4ff',
      title: "Matching Predictivo Personalizado",
      desc: "Recomendación automática basada en la hora aproximada de tu llegada, dimensiones de tu auto y presencia de estaciones de carga eléctrica."
    },
    {
      icon: <BarChart3 className="w-7 h-7" />, color: '#fbbf24',
      title: "Dynamic Pricing Optimizado",
      desc: "Ajuste continuo de precio por hora mediante algoritmos de inteligencia artificial para mantener la tarifa más justa y económica."
    },
    {
      icon: <Radio className="w-7 h-7" />, color: '#a855f7',
      title: "Acceso Automatizado LPR & Smart Gate",
      desc: "Lectura inteligente de placa al llegar al edificio o casa. El portón se abre de forma automática con cero contacto físico."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* HEADER */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border"
            style={{ color: '#00f5a0', borderColor: '#00f5a030', background: '#00f5a008' }}>
            <Sparkles className="w-4 h-4 text-emerald-400" /> Tecnología Google AI (Versión Gratuita)
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Matching de Parqueo por Google AI
            <br />
            <span className="gradient-green-cyan">Analiza tus Destinos Diarios</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Nuestra integración analiza tus trayectos habituales o cualquier lugar específico que indiques para sugerirte las cocheras residenciales y autos disponibles en tiempo real.
          </p>
        </div>

        {/* INTERACTIVE GOOGLE AI DESTINATION DEMO BLOCK */}
        <div className="mb-16 bg-[#080d18] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold text-yellow-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Motor Predictivo en Acción
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Simula una recomendación de Google AI
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prueba ingresando tu lugar habitual de trabajo, universidad o destino específico en <strong className="text-white">Panamá</strong> o cualquier ciudad:
              </p>

              {/* ROUTINE DESTINATIONS QUICK CHIPS */}
              <div className="space-y-2">
                <p className="text-xs text-slate-500 font-bold uppercase">Tus destinos registrados:</p>
                <div className="flex flex-wrap gap-2">
                  {userDestinations.map((dest, i) => (
                    <button
                      key={i}
                      onClick={() => setCustomDestination(dest.name)}
                      className="px-3 py-1.5 rounded-xl border border-slate-800 bg-[#030712] text-slate-300 text-xs hover:border-[#00f5a050] hover:text-[#00f5a0] transition-all flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3 text-[#00f5a0]" />
                      <span>{dest.name}</span>
                      <span className="text-[10px] text-slate-500">({dest.frecuency})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SEARCH INPUT FORM */}
              <form onSubmit={handleAiMatchingAnalysis} className="flex gap-2">
                <div className="flex-1 flex items-center gap-2.5 bg-[#030712] border border-slate-700 rounded-xl px-4 py-3">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                  <input
                    type="text"
                    placeholder="Ej. Costa del Este, Punta Pacífica, Calle 50..."
                    value={customDestination}
                    onChange={(e) => setCustomDestination(e.target.value)}
                    className="w-full bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={aiAnalyzing}
                  className="px-6 py-3 rounded-xl text-sm font-bold text-[#030712] shrink-0 transition-all"
                  style={{ background: 'linear-gradient(135deg,#00f5a0,#00d4ff)', boxShadow: '0 0 20px #00f5a040' }}
                >
                  {aiAnalyzing ? 'Analizando...' : 'Analizar con IA'}
                </button>
              </form>
            </div>

            {/* AI ANALYSIS RESULTS CARD */}
            <div className="lg:col-span-6">
              <div className="bg-[#030712] border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-slate-[#00f5a0] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#00f5a0]" /> Google AI Matching Output
                  </span>
                </div>

                {aiAnalyzing ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-8 h-8 border-2 border-[#00f5a0] border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-xs text-slate-400">Analizando rutas habituales y disponibilidad en Panamá...</p>
                  </div>
                ) : analysisResult ? (
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-slate-500">Destino Evaluado:</span>
                      <h4 className="text-white font-bold text-base">{analysisResult.destination}</h4>
                    </div>

                    <p className="text-xs text-slate-300 bg-indigo-950/40 border border-indigo-500/20 p-3 rounded-xl leading-relaxed">
                      {analysisResult.reason}
                    </p>

                    <div>
                      <p className="text-xs font-bold text-slate-400 mb-2">Cocheras sugeridas encontradas:</p>
                      <div className="space-y-1.5">
                        {analysisResult.suggestedSpots.map((spotName, i) => (
                          <div key={i} className="text-xs text-slate-200 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg flex items-center justify-between">
                            <span>{spotName}</span>
                            <span className="text-[#00f5a0] font-bold">98% Match</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleGoToExplore(analysisResult.recommendedZone)}
                      className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg transition-all"
                    >
                      Ver Opciones Disponibles en {analysisResult.recommendedZone}
                    </button>
                  </div>
                ) : (
                  <div className="py-10 text-center space-y-2">
                    <Navigation className="w-10 h-10 text-slate-700 mx-auto" />
                    <p className="text-xs text-slate-500">
                      Selecciona o escribe un destino arriba para ver la recomendación de Google AI basada en tus viajes.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* AI FEATURES GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {googleAiFeatures.map((f, i) => (
            <div key={i} className="glow-card bg-[#080d18] border border-slate-800/60 rounded-2xl p-7 space-y-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${f.color}15`, border: `1px solid ${f.color}30`, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg leading-snug">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
