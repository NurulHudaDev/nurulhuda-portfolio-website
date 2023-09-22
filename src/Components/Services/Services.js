import React from 'react';
import './Services.css';
import { useNav } from '../Hooks/useNav';
import { FaCode, FaPager, FaPenNib } from "react-icons/fa6";

const Services = () => {

  const servicesRef = useNav('Services')

  return (
    <div ref={servicesRef} id='servicesSection' className='services'>
      <h1>Services</h1>
      <div class="row">
        <div data-aos="fade-up" class="course-col">
          <div className='icon-title'>
          <div className='icon'><FaCode /></div>
          <h2>Web Development</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div data-aos="fade-up" class="course-col">
        <div className='icon-title'>
          <div className='icon'><FaPager /></div>
          <h2>UI/UX Design</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div data-aos="fade-up" class="course-col">
        <div className='icon-title'>
          <div className='icon'><FaPenNib /></div>
          <h2>Logo Design</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;