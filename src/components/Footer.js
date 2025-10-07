import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>WA</h2>
        </div>

        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact me</a>
        </nav>

        <div className="footer-social">
          <a href="https://www.instagram.com/iamwalidali/" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </div>

        <div className="footer-contact">
          <a href="mailto:iamwalidali@gmail.com">
            <Mail size={18} />
            iamwalidali@gmail.com
          </a>
          <a href="tel:+201020636171">
            <Phone size={18} />
            +20 10 20636171
          </a>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>Designed by @Walid_Ali</p>
      </div>
    </footer>
  );
};

export default Footer;
