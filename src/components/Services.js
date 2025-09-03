import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { id: "servicios", className: "py-20 bg-gradient-to-br from-slate-50 to-purple-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-slate-800 mb-6", children: [t('services.title'), _jsx("span", { className: "block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: t('services.highlight') })] }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed", children: t('services.description') })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service, index) => {
                        const Icon = service.icon;
                        return (_jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6", children: _jsx(Icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-2xl font-bold text-slate-800 mb-4", children: t(service.titleKey) }), _jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: t(service.descriptionKey) }), _jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("span", { className: "text-3xl font-bold text-purple-600", children: service.price }), _jsx("span", { className: "text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-sm", children: service.duration })] }), _jsx("button", { className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg", children: t('services.book.now') })] }, index));
                    }) })] }) }));
};
export default Services;
