import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setPortfolioData(data.portfolio));
  }, []);

  return (
    <section id="portfolio" className="py-16 bg-rose-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
      Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioData.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              {/* Render tag hanya jika project.tags ada dan bukan kosong */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;