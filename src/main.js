import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // tailwind styles
import { LanguageProvider } from './contexts/LanguageContext';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(LanguageProvider, { children: _jsx(App, {}) }) }));
