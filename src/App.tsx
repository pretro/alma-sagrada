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
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <ErrorBoundary>
          <Header />
          <Hero />
          <Services />
          <Rituals />
          <Products />
          <Testimonials />
          <Contact />
          <Footer />
        </ErrorBoundary>
      </div>
    </LanguageProvider>
  );
}

export default App;

// ErrorBoundary para mostrar errores en pantalla
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 text-red-600">
          <h1>Error al cargar la app:</h1>
          <pre>{String(this.state.error)}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}
