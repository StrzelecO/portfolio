import React from 'react';

const ExperienceSection = ({ id }) => {
  const experiences = [
    {
      role: "Helpdesk Intern",
      company: "SGGW CI",
      period: "08.2024",
      description: " Supported the Helpdesk department by handle simple user requests, assist with initial hardware configurations, and perform basic computer equipment servicing."
    },
    {
      role: "C# Developer Intern",
      company: "Centrala ZUS, Warsaw",
      period: "07.2023 - 09.2023",
      description: " Assisted in software development as a C# Developer, primarily by learning development processes and completing a console application project in C#"
    }
  ];

  return (
    <section id={id} className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary-dark mb-12 text-center">Work experience</h2>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-accent-blue pl-6 relative">
              <div className="absolute -left-2.5 top-0 w-4 h-4 bg-accent-blue rounded-full"></div>
              <h3 className="text-xl font-semibold text-primary-dark">{exp.role}</h3>
              <p className="text-accent-teal mb-1">{exp.company} • {exp.period}</p>
              <p className="text-text-gray">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;