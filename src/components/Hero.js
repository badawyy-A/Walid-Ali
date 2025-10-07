import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import './Hero.css';
import me from '../assets/mee.png';


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-greeting">Hi I am</p>
          <h1 className="hero-name">Walid Ali</h1>
          <h2 className="hero-title">graphic designer</h2>
          
          <div className="hero-social">
            <a href="https://www.instagram.com/iamwalidali/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="hero-buttons">
            <a className="btn-primary" href="#contact">Hire Me</a>
            <button className="btn-secondary">Download CV</button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Experiences</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Project done</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-container">
            <div className='circle'></div>
            <img src={me} alt="Walid Ali" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
