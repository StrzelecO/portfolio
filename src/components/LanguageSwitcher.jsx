import { useTranslation } from 'react-i18next';
import { changeLanguageWithLoading } from '../i18n';
import { useState } from 'react';
import '../css/LanguageSwitcher.css'

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isChanging, setIsChanging] = useState(false);

  const handleLanguageChange = async lng => {
    if (i18n.language === lng || isChanging) return;

    setIsChanging(true);
    try {
      await changeLanguageWithLoading(lng);
      const hasConsent = document.cookie.includes('cookie_consent=accepted');
      if (hasConsent) {
        document.cookie = `i18n_lang=${lng}; path=/; max-age=${
          30 * 24 * 60 * 60
        }; SameSite=Lax`;
      }
    } finally {
      setIsChanging(false);
    }
  };

  const handleKeyDown = (e, lng) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLanguageChange(lng);
    }
  };

  return (
    <div className="language-switcher">
      {['en', 'pl'].map(lng => (
        <button
          key={lng}
          onClick={() => handleLanguageChange(lng)}
          onKeyDown={e => handleKeyDown(e, lng)}
          disabled={isChanging}
          aria-label={`Change language to ${lng.toUpperCase()}`}
          aria-current={i18n.language === lng}
          className={`
            language-btn
            ${i18n.language === lng ? 'language-btn-active' : 'language-btn-inactive'}
          `}
        >
          {lng.toUpperCase()}
          {i18n.language === lng && (
            <span className="active-indicator" />
          )}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;