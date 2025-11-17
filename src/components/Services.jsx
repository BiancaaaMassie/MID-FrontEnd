import React, { useState, useEffect } from 'react';

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setServicesData(data.services));
  }, []);

  return (
    <section id="services" className="py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;