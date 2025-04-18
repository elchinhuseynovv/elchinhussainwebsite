import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu, activeSection, scrollToSection }) => {
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'music', label: 'Music' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLogoClick = () => {
    setIsLogoAnimating(true);
    scrollToSection('home');
    
    // Reset animation after it completes
    setTimeout(() => {
      setIsLogoAnimating(false);
    }, 1500);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div 
              className="flex items-center cursor-pointer transform transition-transform duration-300 active:scale-95"
              onClick={handleLogoClick}
            >
              <div className={`relative ${isLogoAnimating ? 'logo-sparkle' : ''}`}>
                <div className="logo-container h-10 w-10 mr-3">
                  <img 
                    src="/alien-logo.png" 
                    alt="Alien Logo" 
                    className={`w-full h-full object-contain ${isLogoAnimating ? 'logo-pulse' : ''}`}
                  />
                  {isLogoAnimating && (
                    <>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <span className="sparkle-overlay"></span>
                    </>
                  )}
                </div>
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white">
                ELCHIN HUSSAIN
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm uppercase tracking-wider hover:text-electric-blue transition-colors ${
                      activeSection === item.id ? 'text-electric-blue font-medium' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 border-b border-gray-800">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 text-sm uppercase tracking-wider hover:text-electric-blue transition-colors ${
                      activeSection === item.id ? 'text-electric-blue font-medium' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;