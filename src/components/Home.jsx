import React, { useState, useEffect } from 'react';

const Home = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setHomeData(data.home));
  }, []);

  if (!homeData) return <div className="py-24 text-center">Loading...</div>;

  return (
    <section id="home" className="py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Hi, I'm <span className="text-rose-500">{homeData.name}</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
        {homeData.title}
      </p>
      <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
        {homeData.bio}
      </p>
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
      >
        Get In Touch
      </button>
    </section>
  );
};

export default Home;