import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/PolicyModal.css';

const PolicyModal = ({ policy, onClose }) => {
  const { t } = useTranslation('policies');
  const content = t(policy, { returnObjects: true });

  return (
    <div className="policy-modal-overlay">
      <div className="policy-modal">
        <div className="policy-modal-header">
          <h3 className="policy-modal-title">
            {content.title}
          </h3>
          <button
            onClick={onClose}
            className="policy-modal-close"
            aria-label={t('ariaLabels.closeModal')}
          >
            ✕
          </button>
        </div>
        
        <div className="policy-modal-content">
          {policy === 'privacy' && (
            <>
              <div className="policy-section">
                <strong className="policy-section-heading">{content.content.controller.heading}</strong>
                <p 
                  dangerouslySetInnerHTML={{ __html: content.content.controller.text }} 
                />
              </div>
              
              <div className="policy-section">
                <strong className="policy-section-heading">{content.content.collection.heading}</strong>
                <p>{content.content.collection.text}</p>
              </div>
              
              <div className="policy-section">
                <strong className="policy-section-heading">{content.content.legal.heading}</strong>
                <p>{content.content.legal.text}</p>
              </div>

              <div className="policy-section">
                <strong className="policy-section-heading">{content.content.rights.heading}</strong>
                <p>{content.content.rights.text}</p>
              </div>
            </>
          )}

          {policy === 'cookies' && (
            <>
              <div className="policy-section">
                <strong className="policy-section-heading">{content.content.used.heading}</strong>
                <table className="policy-table">
                  <thead>
                    <tr>
                      {content.content.used.table.headers.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.content.used.table.rows.map((row, index) => (
                      <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.purpose}</td>
                        <td>{row.duration}</td>
                        <td>{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="policy-section">
                <strong className="policy-section-heading">{content.content.managing.heading}</strong>
                <p>{content.content.managing.text}</p>
                <ul className="policy-list">
                  {content.content.managing.browsers.map((browser, index) => (
                    <li key={index}>{browser}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;