import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Summary.css'
const Summary = () => {
    return (
        <section className='summary-banner'>
            <div className='summary-banner-overlay'>
                <div className='container_summary'>
                    <div className='row_summary'>
                        <div>
                            <div>
                                <h2 className='counter'>
                                    <CountUp start={0} end={28}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h2>
                                <div className='summary_counter'>
                                    <h4>Web Development projects</h4>
                                    <hr className='bg-white mt-4' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='counter'>
                                    <CountUp start={0} end={2}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h2>
                                <div className='summary_counter'>
                                <h4>UI/UX Designs</h4>
                                <hr className='bg-white mt-4' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='counter'>
                                    <CountUp start={0} end={205}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h2>
                                <div className='summary_counter'>
                                <h4>Logo Design</h4>
                                <hr className='bg-white mt-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Summary;