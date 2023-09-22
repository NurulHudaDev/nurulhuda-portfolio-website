import React from 'react';
import './AllProject.css';
import laptop_parts from '../../images/laptop_parts.png';
import doctors_portal from '../../images/doctors_portal.png';
import laptop_sellers from '../../images/laptop_sellers.png';

const AllProject = () => {

  return (
    // <section className="container">
    //     <h2>All Project</h2>
    //     <div class="all_project_row">
    //         <div class="all_project_col_1">
    //             <div className='ws_btn'>
    //                 <a href='https://assurement-12.web.app' alt=''>Live Demo</a>
    //                 <a>GitHub</a>
    //             </div>
    //         </div>
    //         <div class="all_project_col_2">
    //             <div className='ws_btn'>
    //                 <a>Live Demo</a>
    //                 <a>GitHub</a>
    //             </div>
    //         </div>
    //         <div class="all_project_col_3">
    //             <div className='ws_btn'>
    //                 <a>Live Demo</a>
    //                 <a>GitHub</a>
    //             </div>
    //         </div>
    //         <div class="all_project_col_4">
    //             <div className='ws_btn'>
    //                 <a>Live Demo</a>
    //                 <a>GitHub</a>
    //             </div>
    //         </div>
    //         <div class="web_design_col_1">
    //             <div className='ws_btn'>
    //                 <a>Live Preview</a>
    //             </div>
    //         </div>
    //         <div class="web_design_col_2">
    //             <div className='ws_btn'>
    //                 <a>Live Preview</a>
    //             </div>
    //         </div>
    //     </div>
    // </section>

    //     <section class="facilitise">
    //     <h2>All Project</h2>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    //     <div class="facilitise-row">
    //       <div class="facilitise-col">
    //         <img src={laptop_parts} />
    //       </div>
    //       <div class="facilitise-col">
    //         <img src={doctors_portal} />
    //       </div>
    //       <div class="facilitise-col">
    //         <img src={laptop_sellers} />
    //       </div>
    //     </div>
    // </section>

    <div className='all_Project'>
      <h2 className='all_Project_titel'>All Projects</h2>
      <div className='container'>
        <div data-aos="fade-up" className='box box1'>
          <div className='ws_btn22'>
            <a href='https://assurement-12.web.app' alt=''>Live Demo</a>
            <a>GitHub</a>
          </div>
        </div>
        <div data-aos="fade-up" className='box box2'>
          <div className='ws_btn22'>
            <a href='https://assurement-12.web.app' alt=''>Live Demo</a>
            <a>GitHub</a>
          </div>
        </div>
        <div data-aos="fade-up" className='box box3'>
          <div className='ws_btn22'>
            <a href='https://assurement-12.web.app' alt=''>Live Demo</a>
            <a>GitHub</a>
          </div>
        </div>
        <div data-aos="fade-up" className='box box4'>
          <div className='ws_btn22'>
            <a href='https://assurement-12.web.app' alt=''>Live Demo</a>
            <a>GitHub</a>
          </div>
        </div>
        <div data-aos="fade-up" className='box box5'>
          <div className='ws_btn22'>
            <a href='https://assurement-12.web.app' alt=''>Live Demo</a>
            <a>GitHub</a>
          </div>
        </div>
        <div data-aos="fade-up" className='box box6'>
          <div className='ws_btn22'>
            <a href='https://assurement-12.web.app' alt=''>Live Demo</a>
            <a>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProject;