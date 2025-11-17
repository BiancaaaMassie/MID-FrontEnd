import React, { useState, useEffect } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setAboutData(data.about));
  }, []);

  if (!aboutData) return <div className="py-16 text-center">Loading...</div>;

  return (
    <section id="about" className="py-16 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-shrink-0">
        <img
          src={aboutData.image}
          alt="Profile"
          className="rounded-full w-64 h-64 object-cover border-4 border-rose-200"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 mb-4">
          {aboutData.paragraph1}
        </p>
        <p className="text-gray-600">
          {aboutData.paragraph2}
        </p>
      </div>
    </section>
  );
};

export default About;