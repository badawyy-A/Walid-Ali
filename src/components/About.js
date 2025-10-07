import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              A graphic designer, the visual storyteller of the digital age, transforms 
              imagination into imagery and emotion into design. With three years of 
              experience mastering Photoshop and Adobe Illustrator, they craft 
              captivating social media ads that breathe life into brands and capture 
              the pulse of modern audiences.
            </p>
            <p>
              Their canvas is not confined to paper — it's the ever-evolving digital 
              space where color, typography, and composition converge to speak 
              louder than words. Each design is a narrative, each layout a reflection of 
              creativity fused with strategy.
            </p>
            <p>
              With every pixel placed and gradient balanced, they orchestrate 
              harmony between aesthetics and message, turning abstract ideas into 
              visuals that inspire, engage, and persuade. In this visual atelier, they are 
              both artist and architect — shaping the identity of companies, one 
              striking design at a time.
            </p>
            <button className="btn-download">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
