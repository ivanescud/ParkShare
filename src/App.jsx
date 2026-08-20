import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { ServicesPage } from './pages/ServicesPage';
import { BenefitsPage } from './pages/BenefitsPage';
import { PublishSpotPage } from './pages/PublishSpotPage';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <AppProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="flex flex-col min-h-screen bg-[#030712] text-slate-100">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explorar" element={<ExplorePage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/beneficios" element={<BenefitsPage />} />
              <Route path="/publicar" element={<PublishSpotPage />} />
              <Route path="/contacto" element={<div className="bg-[#030712]"><ContactForm /></div>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
