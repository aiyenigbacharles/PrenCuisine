
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-red-600">
            Pren Cuisine
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-red-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
