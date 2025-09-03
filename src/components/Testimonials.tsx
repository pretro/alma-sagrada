import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      key: "maria",
      rating: 5,
      serviceKey: "testimonials.maria.service"
    },
    {
      key: "carlos",
      rating: 5,
      serviceKey: "testimonials.carlos.service"
    },
    {
      key: "ana",
      rating: 5,
      serviceKey: "testimonials.ana.service"
    },
    {
      key: "roberto",
      rating: 5,
      serviceKey: "testimonials.roberto.service"
    },
    {
      key: "luisa",
      rating: 5,
      serviceKey: "testimonials.luisa.service"
    },
    {
      key: "diego",
      rating: 5,
      serviceKey: "testimonials.diego.service"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('testimonials.title')}
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              {t('testimonials.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-yellow-300 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{t(`testimonials.${testimonial.key}.text`)}"
              </p>
              
              <div className="border-t border-white/20 pt-4">
                <h4 className="text-white font-semibold text-lg">
                  {t(`testimonials.${testimonial.key}.name`)}
                </h4>
                <p className="text-gray-400 text-sm mb-2">
                  {t(`testimonials.${testimonial.key}.location`)}
                </p>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {t(testimonial.serviceKey)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
            {t('testimonials.share')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;