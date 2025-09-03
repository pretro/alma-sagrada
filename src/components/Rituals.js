import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flame, Waves, Wind, Mountain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
const Rituals = () => {
    const { t } = useLanguage();
    // === DEBUG CRÍTICO (opcional, puedes quitarlo luego) ===
    console.log('🔍 === DEBUG RITUALS ===');
    console.log('Traducción rituals.title:', t('rituals.title'));
    console.log('Traducción rituals.title.highlight:', t('rituals.title.highlight'));
    console.log('Traducción rituals.description:', t('rituals.description'));
    console.log('Traducción rituals.water.title:', t('rituals.water.title'));
    console.log('Traducción rituals.water.desc:', t('rituals.water.desc'));
    console.log('Traducción rituals.water.benefit1:', t('rituals.water.benefit1'));
    const rituals = [
        {
            labelKey: "rituals.fire.label",
            icon: Flame,
            titleKey: "rituals.fire.title",
            descriptionKey: "rituals.fire.desc",
            benefits: [
                "rituals.fire.benefit1",
                "rituals.fire.benefit2",
                "rituals.fire.benefit3"
            ],
            color: "from-red-500 to-orange-500",
            bgColor: "from-red-50 to-orange-50"
        },
        {
            labelKey: "rituals.water.label",
            icon: Waves,
            titleKey: "rituals.water.title",
            descriptionKey: "rituals.water.desc",
            benefits: [
                "rituals.water.benefit1",
                "rituals.water.benefit2",
                "rituals.water.benefit3"
            ],
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-50 to-cyan-50"
        },
        {
            labelKey: "rituals.air.label",
            icon: Wind,
            titleKey: "rituals.air.title",
            descriptionKey: "rituals.air.desc",
            benefits: [
                "rituals.air.benefit1",
                "rituals.air.benefit2",
                "rituals.air.benefit3"
            ],
            color: "from-gray-500 to-slate-500",
            bgColor: "from-gray-50 to-slate-50"
        },
        {
            labelKey: "rituals.earth.label",
            icon: Mountain,
            titleKey: "rituals.earth.title",
            descriptionKey: "rituals.earth.desc",
            benefits: [
                "rituals.earth.benefit1",
                "rituals.earth.benefit2",
                "rituals.earth.benefit3"
            ],
            color: "from-green-500 to-emerald-500",
            bgColor: "from-green-50 to-emerald-50"
        }
    ];
    return (_jsxs("section", { id: "rituales", className: "py-20 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" }), _jsx("div", { className: "absolute bottom-20 right-10 w-48 h-48 bg-pink-500/10 rounded-full blur-xl" })] }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [t('rituals.title'), _jsx("span", { className: "block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent", children: t('rituals.highlight') })] }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed", children: t('rituals.description') })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: rituals.map((ritual, index) => {
                            const Icon = ritual.icon;
                            return (_jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20", children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsx("div", { className: `w-16 h-16 bg-gradient-to-br ${ritual.color} rounded-2xl flex items-center justify-center mr-4`, children: _jsx(Icon, { className: "w-8 h-8 text-white" }) }), _jsx("div", { children: _jsx("h3", { className: "text-2xl font-bold text-white", children: t(ritual.titleKey) }) })] }), _jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: t(ritual.descriptionKey) }), _jsxs("div", { className: "mb-8", children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: t('rituals.benefits') }), _jsx("ul", { className: "space-y-2", children: ritual.benefits.map((benefitKey, benefitIndex) => (_jsxs("li", { className: "flex items-center text-gray-300", children: [_jsx("div", { className: "w-2 h-2 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full mr-3" }), t(benefitKey)] }, benefitIndex))) })] }), _jsx("button", { className: `w-full bg-gradient-to-r ${ritual.color} text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl`, children: t('rituals.participate') })] }, index));
                        }) })] })] }));
};
export default Rituals;
