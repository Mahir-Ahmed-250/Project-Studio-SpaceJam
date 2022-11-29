import { collection, onSnapshot, query } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { db } from '../../../adminPanel/hooks/useFirebase';
import './ServiceAndCompanyCounter.css';

const ServiceAndCompanyCounter = () => {
    const [counters, setCounters] = useState([]);
    useEffect(() => {
        //create the query
        const q = query(collection(db, 'serviceCounter'))
        //create listener
        const counterListenerSubscription = onSnapshot(q, (querySnapShot) => {
            const list = []
            querySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setCounters(list)

        })
        return counterListenerSubscription;
    }, [])

    return (
        <div className="serviceCounterContainer">
            <div>
                {
                    counters.map(counter => <CountUp key={counter.id} end={counter.service} redraw={true} duration={1}>
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
                    counters.map(counter => <CountUp key={counter.id} end={counter.building} redraw={true} duration={1}>
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