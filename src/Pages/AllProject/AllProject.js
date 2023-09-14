import React from 'react';
import './AllProject.css';

const AllProject = () => {

    return (
        <section class="all_project">
            <h2>All Project</h2>
            <div class="all_project_row">
                <div class="all_project_col_1">
                    <div className='ws_btn'>
                        <a href='https://assurement-12.web.app' alt=''>Live Demo</a>
                        <a>GitHub</a>
                    </div>
                </div>
                <div class="all_project_col_2">
                    <div className='ws_btn'>
                        <a>Live Demo</a>
                        <a>GitHub</a>
                    </div>
                </div>
                <div class="all_project_col_3">
                    <div className='ws_btn'>
                        <a>Live Demo</a>
                        <a>GitHub</a>
                    </div>
                </div>
                <div class="all_project_col_4">
                    <div className='ws_btn'>
                        <a>Live Demo</a>
                        <a>GitHub</a>
                    </div>
                </div>
                <div class="web_design_col_1">
                    <div className='ws_btn'>
                        <a>Live Preview</a>
                    </div>
                </div>
                <div class="web_design_col_2">
                    <div className='ws_btn'>
                        <a>Live Preview</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllProject;