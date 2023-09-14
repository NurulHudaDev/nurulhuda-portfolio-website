import React from 'react';
import './UiUxDesigns.css';
import london from '../../images/london.jpg';
import new_work from '../../images/new_work.jpg';
import ostliya from '../../images/ostliya.jpg';

const UiUxDesigns = () => {

    return (
        <section class="web_design_projects">
            <h2>UI UX Designs</h2>
            <div className='web_design_row'>
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

export default UiUxDesigns;