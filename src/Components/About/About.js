import React from 'react';
import './About.css';
import { useNav } from '../Hooks/useNav';
import BannerImage from '../../images/banner_image1.png'

const About = () => {

  const aboutRef = useNav('About')

  return (
    <section ref={aboutRef} id='aboutSection' className='about'>
      <h1>About</h1>
      <div className='about_container'>
        <div className='about_left_site'>
          <img className='about_image' src={BannerImage} alt="" srcset="" />
        </div>
        <div className='about_right_site'>
          <p>Hello, My name is Nurul Huda. I am a front end developer and graphics designer. My goal is to be a programmer. I have come a long way in that goal.
            I know how important user interface design is for website development. So I have acquired graphic design skills for 2 years.
            My another goal is to satisfy my client through my work</p>
        </div>
      </div>
    </section>
  );
};

export default About;