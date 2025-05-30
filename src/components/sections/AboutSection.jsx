import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutBlock from '../AboutBlock.jsx';
import '../../css/AboutSection.css';

const AboutSection = ({ id }) => {
  const { t } = useTranslation('about');

  return (
    <section
      id={id}
      className="about-section"
      aria-label={t('ariaLabels.section')}
    >
      <div className="about-section-container">
        <h2 className="about-section-title">
          {t('sectionTitle')}
        </h2>

        <div className="about-content-grid">
          {/* Who I Am */}
          <AboutBlock 
            title={t('titles.whoIAm')} 
            aria-label={t('ariaLabels.personalDescription')}
          >
            {t('aboutText', { returnObjects: true }).map((text, idx) => (
              <p key={idx} className="paragraph">
                {text}
              </p>
            ))}
          </AboutBlock>

          {/* Grid of 3 columns */}
          <div className="about-subgrid" aria-label={t('ariaLabels.skillsEducation')}>
            {/* Education */}
            <AboutBlock 
              title={t('titles.education')} 
              dotSize="small" 
              aria-label={t('ariaLabels.education')}
            >
              <ul className="education-list">
                {t('education', { returnObjects: true }).map((edu, idx) => (
                  <li key={idx} aria-label={t('ariaLabels.educationItem', { title: edu.title })}>
                    <h4 className="education-title">
                      {edu.title}
                    </h4>
                    <p className="education-years">{edu.years}</p>
                    <p className="education-description">{edu.description}</p>
                  </li>
                ))}
              </ul>
            </AboutBlock>

            {/* Technical Skills */}
            <AboutBlock 
              title={t('titles.technicalSkills')} 
              dotSize="small" 
              aria-label={t('ariaLabels.technicalSkills')}
            >
              <ul className="skill-list">
                {t('technicalSkills', { returnObjects: true }).map((skill, idx) => (
                  <li key={idx} className="skill-item" aria-label={t('ariaLabels.technicalSkillItem', { skill })}>
                    <span className="skill-bullet">•</span>
                    <span className="skill-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </AboutBlock>

            {/* Additional Skills */}
            <AboutBlock 
              title={t('titles.additionalSkills')} 
              dotSize="small" 
              aria-label={t('ariaLabels.additionalSkills')}
            >
              <div className="skill-category">
                <div aria-label={t('ariaLabels.languages')}>
                  <h4 className="skill-category-title">
                    {t('titles.languages')}
                  </h4>
                  <ul className="language-list">
                    {t('additionalSkills.languages', { returnObjects: true }).map((lang, idx) => (
                      <li key={idx} aria-label={t('ariaLabels.languageItem', { lang })}>{lang}</li>
                    ))}
                  </ul>
                </div>
                <div aria-label={t('ariaLabels.certificates')}>
                  <h4 className="skill-category-title">
                    {t('titles.certificates')}
                  </h4>
                  <ul className="certificate-list">
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