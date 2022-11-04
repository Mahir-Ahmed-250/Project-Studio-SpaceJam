import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import './ServiceAndCompanyCounter.css';

const ServiceAndCompanyCounter = () => {
    return (
        <div className="serviceCounterContainer">
            <div>
                <CountUp end={9} redraw={true} duration={1}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span className='serviceCounterNumber' ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp>
                <h3>Years of Services</h3>
            </div>
            <div className='ms-5'>
                <CountUp end={106} redraw={true} duration={1}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span className='serviceCounterNumber' ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp>
                <h3>Building Consultancy</h3>
            </div>
        </div>
    );
};

export default ServiceAndCompanyCounter;