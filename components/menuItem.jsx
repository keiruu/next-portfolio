import React from 'react'

const MenuItem = ({ targetId, menuText }) => {
  const scrollToSection = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSection} className='custom-underline text-xs lg:text-base'>{menuText}</button>
  );
};

export default MenuItem;
