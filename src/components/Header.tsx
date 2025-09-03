import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Leaf, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-visible z-40">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <Star className="absolute top-4 left-10 w-4 h-4 text-yellow-300 animate-pulse" />
        <Moon className="absolute top-6 right-20 w-6 h-6 text-blue-300 opacity-60" />
        <Leaf className="absolute bottom-4 left-32 w-5 h-5 text-green-300 opacity-40" />
      </div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-full flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-purple-300 bg-clip-text text-transparent">
                {t('brand.name')}
              </h1>
              <p className="text-sm text-gray-300">{t('brand.slogan')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="hover:text-yellow-300 transition-colors duration-300">{t('nav.home')}</a>
            <a href="#servicios" className="hover:text-yellow-300 transition-colors duration-300">{t('nav.services')}</a>
            <a href="#rituales" className="hover:text-yellow-300 transition-colors duration-300">{t('nav.rituals')}</a>
            <a href="#productos" className="hover:text-yellow-300 transition-colors duration-300">{t('nav.products')}</a>
            <a href="#testimonios" className="hover:text-yellow-300 transition-colors duration-300">{t('nav.testimonials')}</a>
            <a href="#contacto" className="hover:text-yellow-300 transition-colors duration-300">{t('nav.contact')}</a>
            <LanguageSelector />
          </nav>

          {/* Mobile menu and language selector */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="hover:text-yellow-300 transition-colors duration-300 py-2">{t('nav.home')}</a>
              <a href="#servicios" className="hover:text-yellow-300 transition-colors duration-300 py-2">{t('nav.services')}</a>
              <a href="#rituales" className="hover:text-yellow-300 transition-colors duration-300 py-2">{t('nav.rituals')}</a>
              <a href="#productos" className="hover:text-yellow-300 transition-colors duration-300 py-2">{t('nav.products')}</a>
              <a href="#testimonios" className="hover:text-yellow-300 transition-colors duration-300 py-2">{t('nav.testimonials')}</a>
              <a href="#contacto" className="hover:text-yellow-300 transition-colors duration-300 py-2">{t('nav.contact')}</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
