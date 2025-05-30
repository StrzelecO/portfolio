import React from 'react';
import { useTranslation } from 'react-i18next';
import CVphoto from '/assets/cv_pic.webp'; 
import CV_PL from '/assets/CV_Oliwia_Strzelec_PL.pdf';
import CV_EN from '/assets/CV_Oliwia_Strzelec_EN.pdf';
import LanguageSwitcher from '../LanguageSwitcher';
import '../../css/HeaderSection.css';

const HeaderSection = () => {
  const { t, i18n } = useTranslation('header');
  
  const handleDownloadCV = () => {
    const cvFile = i18n.language === 'pl' ? CV_PL : CV_EN;
    window.open(cvFile, '_blank');
  };

  return (
    <section
      id="header"
      className="header-section"
      aria-label={t('ariaLabels.section')}
    >
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>

      <div className="header-container">
        {/* Photo */}
        <div className="header-photo-container">
          <div className="photo-wrapper">
            <div className="profile-photo">
              <img
                src={CVphoto}
                alt={t('ariaLabels.photo')}
                aria-label={t('ariaLabels.photo')}
              />
            </div>
            <div
              className="photo-frame"
              aria-hidden="true"
            ></div>
          </div>
        </div>

        {/* Text and button */}
        <div className="header-content">
          <h1 className="header-title">
            <span>{t('name')}</span>
            <span className="header-surname">{t('surname')}</span>
          </h1>

          <h2 className="header-subtitle">
            {t('title')}
          </h2>

          <p className="header-description">
            {t('description')}
          </p>

          <button
            onClick={handleDownloadCV}
            className="download-btn"
            aria-label={t('ariaLabels.cvButton')}
          >
            {t('downloadCv')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;