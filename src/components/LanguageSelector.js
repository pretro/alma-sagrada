import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();
    const languages = [
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'sv', name: 'Svenska', flag: '🇸🇪' }
    ];
    return (_jsxs("div", { className: "relative z-50 group", children: [_jsxs("button", { className: "flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300", children: [_jsx(Globe, { className: "w-5 h-5" }), _jsx("span", { className: "hidden sm:inline", children: languages.find(lang => lang.code === language)?.flag })] }), _jsx("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50", children: languages.map((lang) => (_jsxs("button", { onClick: () => setLanguage(lang.code), className: `w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${language === lang.code ? 'bg-purple-50 text-purple-600' : 'text-gray-700'}`, children: [_jsx("span", { className: "text-lg", children: lang.flag }), _jsx("span", { className: "font-medium", children: lang.name })] }, lang.code))) })] }));
};
export default LanguageSelector;
