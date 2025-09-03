import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("section", { id: "testimonios", className: "py-20 bg-gradient-to-br from-purple-900 to-indigo-900 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-10 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-10 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" })] }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [t('testimonials.title'), _jsx("span", { className: "block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent", children: t('testimonials.highlight') })] }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed", children: t('testimonials.description') })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(Quote, { className: "w-8 h-8 text-yellow-300 mr-3" }), _jsx("div", { className: "flex", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "w-5 h-5 text-yellow-400 fill-current" }, i))) })] }), _jsxs("p", { className: "text-gray-300 mb-6 leading-relaxed italic", children: ["\"", t(`testimonials.${testimonial.key}.text`), "\""] }), _jsxs("div", { className: "border-t border-white/20 pt-4", children: [_jsx("h4", { className: "text-white font-semibold text-lg", children: t(`testimonials.${testimonial.key}.name`) }), _jsx("p", { className: "text-gray-400 text-sm mb-2", children: t(`testimonials.${testimonial.key}.location`) }), _jsx("span", { className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold", children: t(testimonial.serviceKey) })] })] }, index))) }), _jsx("div", { className: "text-center mt-12", children: _jsx("button", { className: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl", children: t('testimonials.share') }) })] })] }));
};
export default Testimonials;
