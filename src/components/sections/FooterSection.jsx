import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PolicyModal from '../PolicyModal';
import '../../css/FooterSection.css';

const FooterSection = ({ id }) => {
  const [modal, setModal] = useState(null);
  const { t } = useTranslation('footer');

  return (
    <section id={id} className="footer-section">
      <div className="footer-container">
        {/* Footer with legal links */}
        <div className="footer-legal">
          <p className="footer-copyright">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="footer-links">
            <button
              onClick={() => setModal('privacy')}
              className="footer-link"
            >
              {t('footer.privacyPolicy')}
            </button>
            <button
              onClick={() => setModal('cookies')}
              className="footer-link"
            >
              {t('footer.cookiePolicy')}
            </button>
          </div>
          <p className="footer-notice">
            {t('footer.cookieNotice')}
          </p>
        </div>
      </div>

      {modal && <PolicyModal policy={modal} onClose={() => setModal(null)} />}
    </section>
  );
};

export default FooterSection;