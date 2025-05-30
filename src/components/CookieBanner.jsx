import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/CookieBanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const { t, i18n } = useTranslation(['cookies', 'common']);

  const setCookie = (name, value, days = 30) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !getCookie('cookie_consent')) {
      setShowBanner(true);
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language]);

  useEffect(() => {
    const handleLanguageChange = (lang) => {
      if (showBanner) {
        setSelectedLanguage(lang);
      }
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [showBanner, i18n]);

  const handleAccept = () => {
    setCookie('cookie_consent', 'accepted');
    setCookie('i18n_lang', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookie('cookie_consent', 'declined');
    if (getCookie('i18n_lang')) {
      setCookie('i18n_lang', '', -1);
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-heading"
      aria-describedby="cookie-banner-description"
      className="cookie-banner"
    >
      <div className="cookie-banner-container">
        <div>
          <h2 id="cookie-banner-heading" className="sr-only">
            {t('banner.title')}
          </h2>
          <p
            id="cookie-banner-description"
            className="cookie-banner-message"
          >
            {t('banner.description')}
          </p>
        </div>

        <div className="cookie-banner-buttons">
          <button
            onClick={handleDecline}
            className="cookie-banner-button cookie-banner-decline"
            aria-label={t('banner.ariaLabels.decline')}
          >
            {t('banner.decline')}
          </button>
          <button
            onClick={handleAccept}
            className="cookie-banner-button cookie-banner-accept"
            aria-label={t('banner.ariaLabels.accept')}
          >
            {t('banner.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;