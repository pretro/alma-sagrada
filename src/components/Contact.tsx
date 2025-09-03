import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('contact.title')}
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t('contact.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('contact.info.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{t('contact.location')}</h4>
                    <p className="text-gray-600">Av. Espiritual 123, Col. Sagrada, CDMX</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{t('contact.phone')}</h4>
                    <p className="text-gray-600">+52 55 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{t('contact.email')}</h4>
                    <p className="text-gray-600">contacto@almasagrada.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{t('contact.hours')}</h4>
                    <p className="text-gray-600">{t('contact.schedule')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('contact.booking.title')}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </button>
                <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Online
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('contact.form.title')}</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.name.label')}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.phone.label')}</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.form.phone.placeholder')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.email.label')}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder={t('contact.form.email.placeholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.service.label')}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300">
                <option value="">{t('contact.form.service.placeholder')}</option>
                <option value="reading">{t('contact.form.service.options.reading')}</option>
                <option value="cacao">{t('contact.form.service.options.cacao')}</option>
                <option value="vision">{t('contact.form.service.options.vision')}</option>
                <option value="cleansing">{t('contact.form.service.options.cleansing')}</option>
                <option value="crystals">{t('contact.form.service.options.crystals')}</option>
                <option value="floral">{t('contact.form.service.options.floral')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.message.label')}</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={t('contact.form.message.placeholder')}
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;