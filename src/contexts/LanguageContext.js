import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
// Importa los archivos de traducción
import es from '../locales/es/es.json';
import en from '../locales/en/en.json';
import sv from '../locales/sv/sv.json';
const LanguageContext = createContext(undefined);
// translations definido FUERA con todos los idiomas
const translations = {
    es,
    en,
    sv
};
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');
    // Función para traducir - VERSIÓN SIMPLE Y FUNCIONAL
    const t = (key) => {
        try {
            const keys = key.split('.');
            let result = translations[language];
            for (const k of keys) {
                if (result !== null && typeof result === 'object' && k in result) {
                    result = result[k];
                }
                else {
                    return key; // Devuelve la key si no encuentra
                }
            }
            return typeof result === 'string' ? result : key;
        }
        catch (error) {
            console.error('Error en traducción:', error);
            return key;
        }
    };
    return (_jsx(LanguageContext.Provider, { value: { language, setLanguage, t }, children: children }));
};
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
