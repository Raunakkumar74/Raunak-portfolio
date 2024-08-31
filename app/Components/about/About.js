import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <img src= "https://i.ibb.co/Ttm1cMC/About-Photo.png" alt='' className='about__img'/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
        I am eager to pursue a dynamic career in IT, leveraging my software development and problem-solving skills for challenging and innovative projects.
        </p>
        <a href='xyz' className='btn' download={"Raunak's Resume"}>Download Resume</a>
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Development
            </h3>
            <span className='skills__number'>90%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>DSA</h3>
            <span className='skills__number'>70%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage DSA'></span>
          </div>
        </div>

      </div>

    </div>
    </div>

    <AboutBox/>

    </section>
  )
}

export default About
