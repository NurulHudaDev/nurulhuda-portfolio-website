import React from 'react';
import './Home.css';
import { useNav } from '../Hooks/useNav';
import BannerImage from '../../images/banner_image1.png'
import BannerImage2 from '../../images/banner_image2.png'
import { Button } from 'react-scroll';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Home = () => {

  const homeRef = useNav("Home")

  return (
    <div ref={homeRef} id='homeSection' className='banner'>
      <div className='banner_overlay'>
        <div className='top_banner'>
          <div data-aos="zoom-out-right" className='banner_left_site'>
            <div>
              <h1 className='name'>I'M NURUL HUDA</h1>
              <h2 className='title'>Front-end web developer & <br /> Graphic Designer</h2>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className='resume_cv_btn'>
                <button className='resume_btn'>Resume</button>
                <button className='cv_btn'>CV</button>
              </div>
            </div>
            <div className='social_icon'>
              <a href='https://www.facebook.com/nurulhuda.dav' alt=''><FaFacebookSquare /></a>
              <a href='https://www.instagram.com/nurulhuda_dev/' alt=''><FaInstagramSquare /></a>
              <a href='' alt=''><FaTwitterSquare /></a>
              <a href='https://www.linkedin.com/in/nurul-huda-d/' alt=''><FaLinkedin /></a>
              <a href='https://github.com/NurulHudaDev' alt=''><FaGithubSquare /></a>
            </div>
          </div>
          <div className='banner_right_site'>
            <img data-aos="zoom-out-left" className='banner_image' src={BannerImage2} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;