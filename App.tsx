import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Bolidai from './components/Bolidai';
import Services from './components/Services';
import News from './components/News';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Bolidai />
      <Services />
      <News />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;