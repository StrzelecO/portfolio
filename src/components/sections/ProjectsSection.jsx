import React from 'react';

const ProjectsSection = ({ id }) => {
  const projects = [
    {
      title: "Project A",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias!',
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project B",
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dignissimos fuga repudiandae possimus enim nulla non, atque aut quod.',
      tags: ["TypeScript", "Chart.js", "Firebase"]
    }
  ];

  return (
    <section id={id} className="min-h-screen bg-primary-light pt-20">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary-dark mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary-dark mb-2">{project.title}</h3>
              <p className="text-text-gray mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-primary-base text-text-light text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;