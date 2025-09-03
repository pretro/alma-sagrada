import React from 'react';
import { Sparkles, Heart, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-green-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-blue-300 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <span className="block bg-gradient-to-r from-yellow-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              {t('hero.highlight')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              {t('hero.cta.primary')}
            </button>
            <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              {t('hero.cta.secondary')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('hero.card1.title')}</h3>
              <p className="text-gray-300">{t('hero.card1.desc')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Leaf className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('hero.card2.title')}</h3>
              <p className="text-gray-300">{t('hero.card2.desc')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('hero.card3.title')}</h3>
              <p className="text-gray-300">{t('hero.card3.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;