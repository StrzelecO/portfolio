import React from 'react';

const AboutSection = ({ id }) => {
  return (
<section id={id} className="min-h-screen bg-white pt-20">
  <div className="container mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold text-primary-dark mb-12 text-center">About me</h2>
    
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-xl font-semibold text-primary-dark mb-4">A few words</h3>
        <p className="text-text-gray mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat obcaecati labore ex nobis quo, odio corrupti enim alias unde!
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-primary-dark mb-4">Skills</h3>
        <ul className="space-y-3">
          {['React', 'Java Script', 'Tailwind CSS', 'Node.js'].map((skill) => (
            <li key={skill} className="flex items-center">
              <span className="w-2 h-2 bg-accent-teal rounded-full mr-3"></span>
              <span className="text-primary-dark">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutSection;