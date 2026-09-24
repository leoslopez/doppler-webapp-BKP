import React from 'react';

const HeaderSection = ({ children, className = '' }) => {
  return (
    <header className={`hero-banner ${className}`.trim()}>
      <div className="dp-container">
        <div className="dp-rowflex">{children}</div>
      </div>
    </header>
  );
};

export default HeaderSection;
