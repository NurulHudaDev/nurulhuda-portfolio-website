import React from 'react';
import './Projects.css';
import { useNav } from '../Hooks/useNav';
import { Route, Routes } from 'react-router-dom';
import UiUxDesigns from '../../Pages/UiUxDesigns/UiUxDesigns';
import AllProject from '../../Pages/AllProject/AllProject';
import AllProjectLink from '../../Pages/AllProjectLink/AllProjectLink';
import Websites from '../../Pages/Websites/Websites';
import AllLogos from '../../Pages/AllLogos/AllLogos';
const Projects = () => {

  const projectsRef = useNav('Projects')

  return (
    <div className='projects' ref={projectsRef} id='projectsSection'>
      <h1>Projects</h1>
      <AllProjectLink></AllProjectLink>
    {/* <Routes>
        <Route path='/all_projects' element={<AllProject />}></Route>
        <Route path='/full_stack_websites' element={<Websites />}></Route>
        <Route path='/ui_ux_designs' element={<UiUxDesigns />}></Route>
        <Route path='/logo_designs' element={<AllLogos />}></Route>
      </Routes> */}
    </div>
  );
};

export default Projects;