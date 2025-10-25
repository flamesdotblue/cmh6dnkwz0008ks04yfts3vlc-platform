import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReelShowcase from './components/ReelShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <ReelShowcase />
      <Footer />
    </div>
  );
}

export default App;
