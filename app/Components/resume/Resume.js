import React from 'react';
import './Resume.css';
import Data from './Data';
import Card from './Card';
import SkillsTools from './SkillsTools';

const Resume = () => {
  return (
    <section className='resume container section' id='resume'>
      <h2 className='section__title'>
        Education & Skills
      </h2>

      <div className='resume__container grid'>
        <div className='timeline grid'>
          {Data.map((val, id) => {
            if (val.category === 'education') {
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              );
            }
            return null;
          })}
        </div>
        <div className='timeline grid'>
          <SkillsTools />
        </div>
      </div>
    </section>
  );
}

export default Resume;
