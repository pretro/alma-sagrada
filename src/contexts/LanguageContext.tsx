import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

// Importa los archivos de traducción
import es from '../locales/es/es.json';
import en from '../locales/en/en.json';
import sv from '../locales/sv/sv.json';

export type Language = 'es' | 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// translations definido FUERA con todos los idiomas
const translations = {
  es,
  en,
  sv
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Función para traducir - VERSIÓN SIMPLE Y FUNCIONAL
  const t = (key: string): string => {
    try {
      const keys = key.split('.');
      let result: any = translations[language];
  
      for (const k of keys) {
        if (result !== null && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          return key; // Devuelve la key si no encuentra
        }
      }
  
      return typeof result === 'string' ? result : key;
    } catch (error) {
      console.error('Error en traducción:', error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};