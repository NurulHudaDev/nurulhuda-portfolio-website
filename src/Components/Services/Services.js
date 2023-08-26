import React from 'react';
import './Services.css';
import { useNav } from '../Hooks/useNav';
import { HiCode } from "react-icons/hi";

const Services = () => {

  const servicesRef = useNav('Services')

  return (
    <section ref={servicesRef} id='servicesSection' className='services'>
      <h1>Services</h1>
        <div class="row">
          <div class="course-col">
            <h2>Web Development</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="course-col">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="course-col">
            <h2>Logo Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
    </section>
  );
};

export default Services;