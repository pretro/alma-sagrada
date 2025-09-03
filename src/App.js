import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Rituals from './components/Rituals';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
    return (_jsx(LanguageProvider, { children: _jsx("div", { className: "min-h-screen", children: _jsxs(ErrorBoundary, { children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Services, {}), _jsx(Rituals, {}), _jsx(Products, {}), _jsx(Testimonials, {}), _jsx(Contact, {}), _jsx(Footer, {})] }) }) }));
}
export default App;
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { className: "p-10 text-red-600", children: [_jsx("h1", { children: "Error al cargar la app:" }), _jsx("pre", { children: String(this.state.error) })] }));
        }
        return this.props.children;
    }
}
