
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
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="text-xl sm:text-2xl font-bold text-red-600">
            Pren Cuisine
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-red-600 p-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 animate-fade-in shadow-lg">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left py-2 px-2 hover:bg-red-50 rounded-md"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left py-2 px-2 hover:bg-red-50 rounded-md"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left py-2 px-2 hover:bg-red-50 rounded-md"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left py-2 px-2 hover:bg-red-50 rounded-md"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left py-2 px-2 hover:bg-red-50 rounded-md"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-left py-2 px-2 hover:bg-red-50 rounded-md"
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
