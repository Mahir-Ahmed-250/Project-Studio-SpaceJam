import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import './ServiceAndCompanyCounter.css';

const ServiceAndCompanyCounter = () => {
    const [counters, setCounters] = useState([]);
    useEffect(() => {
        fetch('Counter.json')
            .then(res => res.json())
            .then(data => setCounters(data))
    }, [])
    return (
        <div className="serviceCounterContainer">
            <div>
                {
                    counters.filter(name => name.name === "service").map(counter => <CountUp key={counter.serial} end={counter.year} redraw={true} duration={1}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='serviceCounterNumber' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>)
                }
                <h3>Years of Services</h3>
            </div>
            <div className='ms-5'>
                {
                    counters.filter(name => name.name === "building").map(counter => <CountUp key={counter.serial} end={counter.year} redraw={true} duration={1}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='serviceCounterNumber' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>)
                }
                <h3>Building Consultancy</h3>
            </div>
        </div>
    );
};

export default ServiceAndCompanyCounter;