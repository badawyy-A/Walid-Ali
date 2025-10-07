import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">WA</div>
        <nav className="nav">
          <a href="#home" className="active">Home</a>
          <a href="#skills">Services</a>
          <a href="#about">About me</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact me</a>
        </nav>
        <a className="cta-button" href="#contact">Hire Me</a>
      </div>
    </header>
  );
};

export default Header;
