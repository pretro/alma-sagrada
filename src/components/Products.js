import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Gem, Leaf, Droplet, Sparkles, Heart, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
const Products = () => {
    const { t } = useLanguage();
    const products = [
        {
            id: 'rose-quartz',
            category: 'crystals', // ← CLAVE FIJA
            price: "$45",
            image: "https://images.pexels.com/photos/13295088/pexels-photo-13295088.jpeg?auto=compress&cs=tinysrgb&w=400",
            icon: Heart,
        },
        {
            id: 'amethyst',
            category: 'crystals', // ← CLAVE FIJA
            price: "$65",
            image: "https://images.pexels.com/photos/10672678/pexels-photo-10672678.jpeg?auto=compress&cs=tinysrgb&w=400",
            icon: Shield,
        },
        {
            id: 'white-sage',
            category: 'herbs', // ← CLAVE FIJA
            price: "$25",
            image: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=400",
            icon: Leaf,
        },
        {
            id: 'rose-water',
            category: 'elixirs', // ← CLAVE FIJA
            price: "$30",
            image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
            icon: Droplet,
        },
        {
            id: 'obsidian-pendant',
            category: 'amulets', // ← CLAVE FIJA
            price: "$55",
            image: "https://images.pexels.com/photos/8346021/pexels-photo-8346021.jpeg?auto=compress&cs=tinysrgb&w=400",
            icon: Gem,
        },
        {
            id: 'new-moon-essence',
            category: 'elixirs', // ← CLAVE FIJA
            price: "$40",
            image: "https://images.pexels.com/photos/3987177/pexels-photo-3987177.jpeg?auto=compress&cs=tinysrgb&w=400",
            icon: Sparkles,
        }
    ];
    // Categorías con CLAVES fijas y textos traducidos
    const categories = [
        { key: 'all', label: t('products.filter.all') },
        { key: 'crystals', label: t('products.filter.crystals') },
        { key: 'herbs', label: t('products.filter.herbs') },
        { key: 'elixirs', label: t('products.filter.elixirs') },
        { key: 'amulets', label: t('products.filter.amulets') },
    ];
    const [selectedCategory, setSelectedCategory] = React.useState('all'); // ← CLAVE, no texto
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);
    return (_jsx("section", { id: "productos", className: "py-20 bg-gradient-to-br from-emerald-50 to-teal-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-slate-800 mb-6", children: [t('products.title'), _jsx("span", { className: "block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent", children: t('products.highlight') })] }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed", children: t('products.description') })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: categories.map((category) => (_jsx("button", { onClick: () => setSelectedCategory(category.key), className: `px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.key
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                            : 'bg-white text-gray-600 hover:bg-emerald-50 shadow-md'}`, children: category.label }, category.key))) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredProducts.map((product) => {
                        const Icon = product.icon;
                        return (_jsxs("div", { className: "bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2", children: [_jsxs("div", { className: "relative h-64 overflow-hidden", children: [_jsx("img", { src: product.image, alt: t(`products.items.${product.id}.name`), className: "w-full h-full object-cover hover:scale-110 transition-transform duration-300" }), _jsx("div", { className: "absolute top-4 left-4", children: _jsx("span", { className: "bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-gray-700", children: t(`products.filter.${product.category}`) }) }), _jsx("div", { className: "absolute top-4 right-4", children: _jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center", children: _jsx(Icon, { className: "w-5 h-5 text-white" }) }) })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-bold text-slate-800 mb-2", children: t(`products.items.${product.id}.name`) }), _jsx("p", { className: "text-gray-600 mb-4 leading-relaxed", children: t(`products.items.${product.id}.description`) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-3xl font-bold text-emerald-600", children: product.price }), _jsx("button", { className: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg", children: t('products.add.cart') })] })] })] }, product.id));
                    }) })] }) }));
};
export default Products;
