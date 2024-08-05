import React, { useState } from 'react';
import SkillsData from './SkillsData';

const SkillsTools = () => {
  const [active, setActive] = useState('skills');

  const toggleActive = (section) => {
    setActive(section);
  };

  return (
    <div className="skills-tools-section">
      <div className="skills-toggle" data-toggle-box>
        <button
          className={active === 'skills' ? 'toggle-btn active' : 'toggle-btn'}
          data-toggle-btn
          onClick={() => toggleActive('skills')}
        >
          Skills
        </button>
        <button
          className={active === 'tools' ? 'toggle-btn active' : 'toggle-btn'}
          data-toggle-btn
          onClick={() => toggleActive('tools')}
        >
          Tools
        </button>
      </div>

      <div className="skills-box">
        <ul className={active === 'skills' ? 'skills-list active' : 'skills-list'}>
          {SkillsData.filter(item => item.category === 'skills').map((skill) => (
            <li key={skill.id}>
              <div className="skill-card">
                <div className="tooltip">{skill.title}</div>
                <div className="card-icon">
                  <img src={skill.imgSrc} alt={`${skill.title} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className={active === 'tools' ? 'tools-list active' : 'tools-list'}>
          {SkillsData.filter(item => item.category === 'tools').map((tool) => (
            <li key={tool.id}>
              <div className="skill-card">
                <div className="tooltip">{tool.title}</div>
                <div className="card-icon">
                  <img src={tool.imgSrc} alt={`${tool.title} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsTools;


