import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setSkillsData(data.skills));
  }, []);

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Programming Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">{skill.name}</span>
            </div>
            <div className="w-full bg-gray-200 h-2.5 rounded-full">
              <div
                className="bg-rose-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;