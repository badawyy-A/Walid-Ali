import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Change header style on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section on scroll
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // offset for header height
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click on nav links
  const handleClick = (id) => {
    setActiveSection(id);
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">WA</div>
        <nav className="nav">
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleClick('home')}
          >
            Home
          </a>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => handleClick('skills')}
          >
            Services
          </a>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleClick('about')}
          >
            About me
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleClick('projects')}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleClick('contact')}
          >
            Contact me
          </a>
        </nav>
        <a className="cta-button" href="#contact">
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Header;
