import React from 'react';
import './Websites.css';

const Websites = () => {

    return (
        <div class="all_websites">
            <h2>Web Sites</h2>
            <div class="all_websites_row">
                <div class="all_websites_col_1">
                    <div className='ws_btn'>
                        <a href='https://assurement-12.web.app' alt=''>Live Demo</a>
                        <a>GitHub</a>
                    </div>
                </div>
                <div class="all_websites_col_2">
                    <div className='ws_btn'>
                        <a>Live Demo</a>
                        <a>GitHub</a>
                    </div>
                </div>
                <div class="all_websites_col_3">
                    <div className='ws_btn'>
                        <a>Live Demo</a>
                        <a>GitHub</a>
                    </div>
                </div>
                <div class="all_websites_col_4">
                    <div className='ws_btn'>
                        <a>Live Demo</a>
                        <a>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Websites;