import React from 'react';
import { useTranslation } from 'react-i18next';

const ExperienceSection = ({ id }) => {
  const { t } = useTranslation('experience');

  return (
    <section 
      id={id} 
      className='min-h-screen bg-primary-base py-16 md:pt-10 px-4 sm:px-6 lg:px-8'
      aria-label={t('ariaLabels.section')}
    >
      <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
        <h2 className='text-text-light text-3xl sm:text-4xl font-bold mb-16 text-center'>
          {t('sectionTitle')}
        </h2>

        <div 
          className='space-y-6 sm:space-y-8 max-w-3xl mx-auto'
          aria-label={t('ariaLabels.experienceList')}
        >
          {t('experiences', { returnObjects: true }).map((exp, index) => (
            <div
              key={index}
              className='border-l-4 border-accent-blue pl-4 sm:pl-6 relative group'
              role="article"
              aria-label={t('ariaLabels.experienceItem', { company: exp.company })}
            >
              <div 
                className='absolute -left-2 sm:-left-2.5 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-accent-blue rounded-full
                          transition-all duration-300 transform 
                          group-hover:scale-140'
                aria-hidden="true"
              ></div>
              <div 
                className="bg-primary-dark border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
                aria-labelledby={`exp-heading-${index}`}
              >
                <h3 
                  id={`exp-heading-${index}`}
                  className='text-lg sm:text-xl font-semibold text-text-light group-hover:text-accent-blue'
                >
                  {exp.role}
                </h3>
                <p 
                  className='text-sm sm:text-base text-accent-teal mb-1'
                  aria-label={t('ariaLabels.companyInfo', { company: exp.company, period: exp.period })}
                >
                  {exp.company} • {exp.period}
                </p>
                <p 
                  className='text-sm sm:text-base text-text-gray'
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