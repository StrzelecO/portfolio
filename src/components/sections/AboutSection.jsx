import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutBlock from '../AboutBlock.jsx';

const AboutSection = ({ id }) => {
  const { t } = useTranslation('about');

  return (
    <section
      id={id}
      className='min-h-screen bg-primary-base py-16 md:pt-10 px-4 sm:px-6 lg:px-8'
      aria-label={t('ariaLabels.section')}
    >
      <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
        <h2 className='text-text-light text-2xl sm:text-4xl font-bold mb-16 text-center'>
          {t('sectionTitle')}
        </h2>

        <div className='grid grid-cols-1 gap-y-8'>
          {/* Who I Am */}
          <AboutBlock 
            title={t('titles.whoIAm')} 
            aria-label={t('ariaLabels.personalDescription')}
          >
            {t('aboutText', { returnObjects: true }).map((text, idx) => (
              <p key={idx} className='text-text-gray mb-4 leading-relaxed'>
                {text}
              </p>
            ))}
          </AboutBlock>

          {/* Grid of 3 columns */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4' aria-label={t('ariaLabels.skillsEducation')}>
            {/* Education */}
            <AboutBlock 
              title={t('titles.education')} 
              dotSize='w-3 h-3' 
              aria-label={t('ariaLabels.education')}
            >
              <ul className='space-y-4 text-sm'>
                {t('education', { returnObjects: true }).map((edu, idx) => (
                  <li key={idx} aria-label={t('ariaLabels.educationItem', { title: edu.title })}>
                    <h4 className='text-accent-blue font-medium'>
                      {edu.title}
                    </h4>
                    <p className='text-text-gray font-light'>{edu.years}</p>
                    <p className='text-text-gray'>{edu.description}</p>
                  </li>
                ))}
              </ul>
            </AboutBlock>

            {/* Technical Skills */}
            <AboutBlock 
              title={t('titles.technicalSkills')} 
              dotSize='w-3 h-3' 
              aria-label={t('ariaLabels.technicalSkills')}
            >
              <ul className='space-y-3 text-sm'>
                {t('technicalSkills', { returnObjects: true }).map((skill, idx) => (
                  <li key={idx} className='flex items-start' aria-label={t('ariaLabels.technicalSkillItem', { skill })}>
                    <span className='text-accent-blue mr-2 leading-[1.6]'>
                      •
                    </span>
                    <span className='text-text-gray'>{skill}</span>
                  </li>
                ))}
              </ul>
            </AboutBlock>

            {/* Additional Skills */}
            <AboutBlock 
              title={t('titles.additionalSkills')} 
              dotSize='w-3 h-3' 
              aria-label={t('ariaLabels.additionalSkills')}
            >
              <div className='space-y-4 text-sm'>
                <div aria-label={t('ariaLabels.languages')}>
                  <h4 className='text-accent-blue font-medium mb-1'>
                    {t('titles.languages')}
                  </h4>
                  <ul className='text-text-gray space-y-1'>
                    {t('additionalSkills.languages', { returnObjects: true }).map((lang, idx) => (
                      <li key={idx} aria-label={t('ariaLabels.languageItem', { lang })}>{lang}</li>
                    ))}
                  </ul>
                </div>
                <div aria-label={t('ariaLabels.certificates')}>
                  <h4 className='text-accent-blue font-medium mb-1'>
                    {t('titles.certificates')}
                  </h4>
                  <ul className='text-text-gray space-y-1'>
                    {t('additionalSkills.certificates', { returnObjects: true }).map((cert, idx) => (
                      <li key={idx} aria-label={t('ariaLabels.certificateItem', { cert })}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AboutBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;