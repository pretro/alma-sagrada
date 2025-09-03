import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'sv' as Language, name: 'Svenska', flag: '🇸🇪' }
  ];

  return (
    <div className="relative z-50 group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
        <Globe className="w-5 h-5" />
        <span className="hidden sm:inline">{languages.find(lang => lang.code === language)?.flag}</span>
      </button>

      <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
              language === lang.code ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
