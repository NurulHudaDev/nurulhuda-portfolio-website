import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Summary.css'
import { Col, Row } from 'react-bootstrap';
const Summary = () => {
    return (
        <div className='summary-banner'>
            <div className='banner_overlay'>
                <Row className='row_summary'>
                            <Col className='col_summary'>
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
                            </Col>
                            <Col className='col_summary'>
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
                            </Col>
                            <Col className='col_summary'>
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
                            </Col>
                </Row>
            </div>
        </div >
    );
};

export default Summary;