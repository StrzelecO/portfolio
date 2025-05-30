import React from 'react';
import '../css/AboutBlock.css';

const AboutBlock = ({ title, dotSize = 'small', children }) => {
  const getDotSizeClass = () => {
    switch(dotSize) {
      case 'medium': return 'about-block-dot--medium';
      case 'large': return 'about-block-dot--large';
      default: return 'about-block-dot--small';
    }
  };

  return (
    <div className="about-block">
      <div className="about-block-header">
        <div className={`about-block-dot ${getDotSizeClass()}`} />
        <h3 className="about-block-title">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default AboutBlock;