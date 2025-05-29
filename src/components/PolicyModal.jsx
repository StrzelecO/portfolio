import React from 'react';
import { useTranslation } from 'react-i18next';

const PolicyModal = ({ policy, onClose }) => {
  const { t } = useTranslation('policies');
  const content = t(policy, { returnObjects: true });

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      <div
        className='bg-primary-dark rounded-lg max-w-md w-full  p-6 max-h-[80vh] overflow-y-auto'
        style={{
          boxShadow: '0 0 0 100vmax rgba(0, 0, 0, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-text-light text-lg font-bold'>
            {content.title}
          </h3>
          <button
            onClick={onClose}
            className='text-text-gray hover:text-white hover:cursor-pointer'
            aria-label={t('ariaLabels.closeModal')}
          >
            ✕
          </button>
        </div>
        
        <div className='text-sm text-text-gray'>
          {policy === 'privacy' && (
            <>
              <p className="mb-2"><strong>{content.content.controller.heading}</strong></p>
              <p 
                className="mb-4" 
                dangerouslySetInnerHTML={{ __html: content.content.controller.text }} 
              />
              
              <p className="mb-2"><strong>{content.content.collection.heading}</strong></p>
              <p className="mb-4">{content.content.collection.text}</p>
              
              <p className="mb-2"><strong>{content.content.legal.heading}</strong></p>
              <p className="mb-4">{content.content.legal.text}</p>

              <p className="mb-2"><strong>{content.content.rights.heading}</strong></p>
              <p className="">{content.content.rights.text}</p>
            </>
          )}

          {policy === 'cookies' && (
            <>
              <p className="mb-2"><strong>{content.content.used.heading}</strong></p>
              <table className="w-full mb-4">
                <thead>
                  <tr className="border-b text-center">
                    {content.content.used.table.headers.map((header, index) => (
                      <th key={index} className="py-2 px-2">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.content.used.table.rows.map((row, index) => (
                    <tr key={index} className="border-b text-center">
                      <td className="py-2 px-2">{row.name}</td>
                      <td className="py-2 px-2">{row.purpose}</td>
                      <td className="py-2 px-2">{row.duration}</td>
                      <td className="py-2 px-2">{row.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <p className="mb-2"><strong>{content.content.managing.heading}</strong></p>
              <p>{content.content.managing.text}</p>
              <ul className="list-disc pl-5 mt-2">
                {content.content.managing.browsers.map((browser, index) => (
                  <li key={index}>{browser}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;