import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;