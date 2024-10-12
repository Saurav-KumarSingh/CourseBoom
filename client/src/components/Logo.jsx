import React from 'react';
import logoImage from '../assets/logo.png'; 

const Logo = ({ className = '' }) => {
  return (
    <div>
      <img className={className} src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
