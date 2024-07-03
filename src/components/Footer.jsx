import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      const isFooterVisible = windowHeight + window.scrollY >= documentHeight;
      setIsFixed(isFooterVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`fixed-footer ${isFixed ? 'fixed' : ''}`}>
      <p>&copy; 2024 Mi portafolio Kerly Santos</p>
    </footer>
  );
};

export default Footer;
