import React from 'react';
import { useTranslation } from 'react-i18next';
import Project from '../Project';

const ProjectsSection = ({ id }) => {
  const { t } = useTranslation('projects');

  return (
    <section
      id={id}
      className='min-h-screen bg-primary-dark py-16 md:pt-10 px-4 sm:px-6 lg:px-8'
      aria-label={t('ariaLabels.section')}
    >
      <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
        <h2 className='text-text-light text-2xl sm:text-4xl font-bold mb-16 text-center'>
          {t('sectionTitle')}
        </h2>

        {/* All devices - single column on mobile, two columns on tablet/desktop */}
        <div 
          className='grid sm:grid-cols-2 gap-8'
          aria-label={t('ariaLabels.projectsGrid')}
          role="list"
        >
          {t('projects', { returnObjects: true }).map(project => (
            <div 
              key={project.id}
              role="listitem"
              aria-label={t('ariaLabels.projectItem', { title: project.title })}
            >
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;