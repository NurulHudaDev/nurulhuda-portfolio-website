import React, { useState } from 'react';
import './Skills.css';
import { useNav } from '../Hooks/useNav';
import { FaAngleDown, FaAngleUp, FaCode, FaPager, FaPenNib } from "react-icons/fa6";

const Skills = () => {

  const skillsRef = useNav('Skills')

  const [showModel1, setShowModel1] = useState(false);

  const Progress1 = () => {
    return (
      <div className='experoence_section' id='about1'>
        <div className='container2'>
          <div className='experience_items'>
            <div className='experience_item'>
              <div className='experience_info'>
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div className='progress_line' data-percent='90%'>
                <span style={{ width: '90%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div className='progress_line' data-percent='80%'>
                <span style={{ width: '80%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>Bootstrap</p>
                <p>70%</p>
              </div>
              <div className='progress_line' data-percent='70%'>
                <span style={{ width: '70%' }}></span>
              </div>
            </div>
            <div className='experience_item'>
              <div className='experience_info'>
                <p>Tailwind CSS</p>
                <p>80%</p>
              </div>
              <div className='progress_line' data-percent='80%'>
                <span style={{ width: '80%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>React JS</p>
                <p>80%</p>
              </div>
              <div className='progress_line' data-percent='80%'>
                <span style={{ width: '80%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>Firebase</p>
                <p>40%</p>
              </div>
              <div className='progress_line' data-percent='40%'>
                <span style={{ width: '40%' }}></span>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    )


  }

  const [showModel2, setShowModel2] = useState(false);

  const Progress2 = () => {

    return (
      <div className='experoence_section' id='about2'>
        <div className='container2'>
          <div className='experience_items'>
            <div className='experience_item'>
              <div className='experience_info'>
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div className='progress_line' data-percent='90%'>
                <span style={{ width: '90%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div className='progress_line' data-percent='80%'>
                <span style={{ width: '80%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>Bootstrap</p>
                <p>70%</p>
              </div>
              <div className='progress_line' data-percent='70%'>
                <span style={{ width: '70%' }}></span>
              </div>
            </div>
            <div className='experience_item'>
              <div className='experience_info'>
                <p>Tailwind CSS</p>
                <p>80%</p>
              </div>
              <div className='progress_line' data-percent='80%'>
                <span style={{ width: '80%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>React JS</p>
                <p>80%</p>
              </div>
              <div className='progress_line' data-percent='80%'>
                <span style={{ width: '80%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>Firebase</p>
                <p>40%</p>
              </div>
              <div className='progress_line' data-percent='40%'>
                <span style={{ width: '40%' }}></span>
              </div>
            </div>

          </div>
        </div>
       
      </div>
    )


  }
  const [showModel3, setShowModel3] = useState(false);

  const Progress3 = () => {
    return (
      <div className='experoence_section' id='about3'>
        <div className='container2'>
          <div className='experience_items'>
            <div className='experience_item'>
              <div className='experience_info'>
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div className='progress_line' data-percent='90%'>
                <span style={{ width: '90%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div className='progress_line' data-percent='80%'>
                <span style={{ width: '80%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>Bootstrap</p>
                <p>70%</p>
              </div>
              <div className='progress_line' data-percent='70%'>
                <span style={{ width: '70%' }}></span>
              </div>
            </div>
            <div className='experience_item'>
              <div className='experience_info'>
                <p>Tailwind CSS</p>
                <p>80%</p>
              </div>
              <div className='progress_line' data-percent='80%'>
                <span style={{ width: '80%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>React JS</p>
                <p>80%</p>
              </div>
              <div className='progress_line' data-percent='80%'>
                <span style={{ width: '80%' }}></span>
              </div>
            </div>

            <div className='experience_item'>
              <div className='experience_info'>
                <p>Firebase</p>
                <p>40%</p>
              </div>
              <div className='progress_line' data-percent='40%'>
                <span style={{ width: '40%' }}></span>
              </div>
            </div>

          </div>
        </div>
       
      </div>
    )


  }

  return (
    <section ref={skillsRef} id='skillsSection' className='skills1'>
      <h1>Skills</h1>
      <div className='skills88888888888'>
        <div class="course-col22">
          <div className='skills_title'>
            <h2 className='skills_progress22'>Front-End Development</h2>
            <a className='model_btn' onClick={() => setShowModel1(true)}><FaAngleDown /></a>
            <a className='model_btn' onClick={() => setShowModel1(false)}><FaAngleUp /></a>
          </div>
          {showModel1 && <Progress1 />}
        </div>
        <div class="course-col22">
          <div className='skills_title'>
          <h2 className='skills_progress22'>Back-End Development</h2>
          <a className='model_btn' onClick={() => setShowModel2(true)}><FaAngleDown /></a>
          <a className='model_btn' onClick={() => setShowModel2(false)}><FaAngleUp /></a>
          </div>
          {showModel2 && <Progress2 />}
        </div>
        <div class="course-col22">
          <div className='skills_title'>
          <h2 className='skills_progress22'>Graphics Design</h2>
          <a className='model_btn' onClick={() => setShowModel3(true)}><FaAngleDown /></a>
          <a className='model_btn' onClick={() => setShowModel3(false)}><FaAngleUp /></a>
          </div>
          {showModel3 && <Progress3 />}
        </div>
      </div>
    </section>
  );
};

export default Skills;