import React from 'react';
import { Sun, Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-full flex items-center justify-center">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-purple-300 bg-clip-text text-transparent">
                  {t('brand.name')}
                </h3>
                <p className="text-gray-300">{t('brand.slogan')}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li><a href="#servicios" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('services.card.reading.title')}</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('services.card.cacao.title')}</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('services.card.vision.title')}</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('services.card.cleansing.title')}</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('services.card.crystals.title')}</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t('footer.links')}</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('nav.home')}</a></li>
              <li><a href="#rituales" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('nav.rituals')}</a></li>
              <li><a href="#productos" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('nav.products')}</a></li>
              <li><a href="#testimonios" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('nav.testimonials')}</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">{t('nav.contact')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4 text-pink-400" />
              <span>{t('footer.made.with.love')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;