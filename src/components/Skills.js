import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'Adobe XD',
      icon: 'Xd'
    },
    {
      name: 'Adobe Photoshop',
      icon: 'Ps'
    },
    {
      name: 'Adobe Illustrator',
      icon: 'Ai'
    }
  ];

  // Duplicate skills array for seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="skills">
      <div className="skills-tape-container">
        <div className="skills-tape">
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <span className="icon-text">{skill.icon}</span>
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
