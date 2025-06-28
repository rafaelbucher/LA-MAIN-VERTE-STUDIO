import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Work' },
    { path: '/services', label: 'Services' },
    { path: '/a-propos', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/ressources', label: 'Studios' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation principale */}
      <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50 py-4">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="font-primary font-bold leading-tight hover:opacity-80 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex flex-col">
                  <span className="text-xl text-green-600 font-bold italic">
                    LA MAIN VERTE
                  </span>
                  <span className="text-md text-black text-green-600 font-light">
                    STUDIO
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation desktop + Menu burger mobile */}
            <div className="flex items-center">
              {/* Navigation desktop - visible uniquement sur desktop */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-primary text-sm transition-colors ${
                      isActive(item.path)
                        ? 'text-black font-medium'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Toggle dark/light mode */}
                <button
                  className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors ml-4"
                  aria-label="Toggle theme"
                >
                  <div className="w-8 h-4 bg-gray-200 rounded-full relative">
                    <div className="w-3 h-3 bg-black rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                  </div>
                </button>
              </div>

              {/* Bouton menu burger - MOBILE UNIQUEMENT À DROITE */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200 relative z-60"
                aria-label="Menu principal"
              >
                <div className="relative w-5 h-5">
                  <span className={`absolute block h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
                  }`} />
                  <span className={`absolute block h-0.5 w-5 bg-current transform transition duration-300 ease-in-out translate-y-1.5 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`absolute block h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 translate-y-1.5' : 'translate-y-3'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile full viewport - seulement visible quand ouvert */}
        {isMenuOpen && (
          <div className="md:hidden fixed w-full h-full border-b border-black bg-black text-white transform transition-transform duration-300 ease-in-out top-0 z-50 py-4">
            {/* Header du menu mobile avec logo et bouton close */}
            <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
              {/* Logo repositionné dans le menu */}
              <Link 
                to="/" 
                className="font-primary font-bold leading-tight hover:opacity-80 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex flex-col">
                  <span className="text-xl text-white font-bold italic">
                    LA MAIN VERTE
                  </span>
                  <span className="text-md text-green-600 font-light">
                    STUDIO
                  </span>
                </div>
              </Link>

              {/* Bouton close stylé */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Fermer le menu"
              >
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <span className="absolute block h-0.5 w-4 bg-white transform rotate-45" />
                  <span className="absolute block h-0.5 w-4 bg-white transform -rotate-45" />
                </div>
              </button>
            </div>

            {/* Contenu du menu */}
            <div className="px-6 pt-8 space-y-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-primary text-2xl py-4 transition-all duration-200 transform ${
                    isActive(item.path)
                      ? 'text-white font-medium translate-x-4 border-l-2 border-white pl-6'
                      : 'text-gray-300 hover:text-white hover:translate-x-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 80}ms`
                  }}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Toggle mobile avec couleurs inversées */}
              <div className="pt-8 border-t border-gray-700">
                <button
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors py-3"
                  aria-label="Toggle theme"
                >
                  <div className="w-10 h-5 bg-gray-600 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                  </div>
                  <span className="font-primary text-lg">Theme</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Overlay pour fermer le menu en cliquant à côté */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>

      {/* Spacer pour compenser la nav fixe */}
      <div className="h-28"></div>
    </>
  );
};

export default Nav;