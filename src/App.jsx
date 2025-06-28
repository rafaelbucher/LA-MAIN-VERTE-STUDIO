import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Import des pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import CasClientsPage from './pages/CasClientsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Nav />
        
        {/* Container principal avec max-width 1280px */}
        <main className="flex-1">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/cas-clients" element={<CasClientsPage />} />
              <Route path="/ressources" element={<ResourcesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;