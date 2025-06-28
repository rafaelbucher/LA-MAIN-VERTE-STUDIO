import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Le header sera ici - on l'intégrera après vos instructions */}
          <div className="h-16 flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900">
              Mon App
            </div>
            <nav className="hidden md:flex space-x-8">
              {/* Navigation sera ici */}
            </nav>
          </div>
        </div>
      </header>

      {/* Contenu principal avec container 1280px */}
      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer (optionnel) */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            © 2025 Mon App. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;