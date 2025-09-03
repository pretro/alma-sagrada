import React from 'react';
import { Moon, Sun, Compass, Feather, Italic as Crystal, Flower2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Moon,
      titleKey: "services.card.reading.title",
      descriptionKey: "services.card.reading.desc",
      price: "$80",
      duration: "60 min"
    },
    {
      icon: Sun,
      titleKey: "services.card.cacao.title",
      descriptionKey: "services.card.cacao.desc",
      price: "$60",
      duration: "90 min"
    },
    {
      icon: Compass,
      titleKey: "services.card.vision.title",
      descriptionKey: "services.card.vision.desc",
      price: "$200",
      duration: "4 horas"
    },
    {
      icon: Feather,
      titleKey: "services.card.cleansing.title",
      descriptionKey: "services.card.cleansing.desc",
      price: "$90",
      duration: "75 min"
    },
    {
      icon: Crystal,
      titleKey: "services.card.crystals.title",
      descriptionKey: "services.card.crystals.desc",
      price: "$70",
      duration: "60 min"
    },
    {
      icon: Flower2,
      titleKey: "services.card.floral.title",
      descriptionKey: "services.card.floral.desc",
      price: "$50",
      duration: "45 min"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('services.title')}
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('services.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{t(service.titleKey)}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{t(service.descriptionKey)}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-purple-600">{service.price}</span>
                  <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-sm">{service.duration}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg">
                  {t('services.book.now')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;