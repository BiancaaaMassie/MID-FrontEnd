import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div
          onClick={() => scrollToSection('home')}
          className="text-rose-600 dark:text-rose-300 font-bold text-xl cursor-pointer"
        >
          PersonalPortfolio.
        </div>
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'services', 'portfolio', 'blog'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 capitalize transition-colors"
            >
              {item}
            </button>
          ))}
          {/* Tombol Get In Touch ditambahkan di sini */}
          <button
            onClick={() => scrollToSection('contact')} // 'contact' adalah id di Footer
            className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md text-sm"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;