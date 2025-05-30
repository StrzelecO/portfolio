import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/ExperienceSection.css';

const ExperienceSection = ({ id }) => {
  const { t } = useTranslation('experience');

  return (
    <section 
      id={id} 
      className="experience-section"
      aria-label={t('ariaLabels.section')}
    >
      <div className="experience-container">
        <h2 className="experience-title">
          {t('sectionTitle')}
        </h2>

        <div 
          className="experience-list"
          aria-label={t('ariaLabels.experienceList')}
        >
          {t('experiences', { returnObjects: true }).map((exp, index) => (
            <div
              key={index}
              className="experience-item"
              role="article"
              aria-label={t('ariaLabels.experienceItem', { company: exp.company })}
            >
              <div 
                className="experience-marker"
                aria-hidden="true"
              ></div>
              <div 
                className="experience-card"
                aria-labelledby={`exp-heading-${index}`}
              >
                <h3 
                  id={`exp-heading-${index}`}
                  className="experience-role"
                >
                  {exp.role}
                </h3>
                <p 
                  className="experience-company"
                  aria-label={t('ariaLabels.companyInfo', { company: exp.company, period: exp.period })}
                >
                  {exp.company} • {exp.period}
                </p>
                <p 
                  className="experience-description"
                  aria-label={t('ariaLabels.jobDescription')}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;