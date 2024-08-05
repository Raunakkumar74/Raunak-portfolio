
import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className='home container' id='home'>
   <div className='intro'>
    <img src= "https://i.ibb.co/DR2y1yw/Profile.png" height={145} width={160} alt='' className='home__img'/>
    <h1 className='home__name'>Raunak kumar</h1>
    <span className='home__education'>
    I am a Full-Stack Developer
    </span>

    <HeaderSocials/>

    <a href='#contact' className='btn'>Hire Me</a>
    <ScrollDown/>
   </div>

   <Shapes/>

   </section> 
  )
}

export default Home
