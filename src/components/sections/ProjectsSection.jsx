import React from 'react';
import { useTranslation } from 'react-i18next';
import Project from '../Project';
import '../../css/ProjectsSection.css'

const ProjectsSection = ({ id }) => {
  const { t } = useTranslation('projects');

  return (
    <section
      id={id}
      className="projects-section"
      aria-label={t('ariaLabels.section')}
    >
      <div className="projects-container">
        <h2 className="projects-title">
          {t('sectionTitle')}
        </h2>

        <div 
          className="projects-grid"
          aria-label={t('ariaLabels.projectsGrid')}
          role="list"
        >
          {t('projects', { returnObjects: true }).map(project => (
            <div 
              key={project.id}
              className="project-item"
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