import { collection, doc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import Nav from '../../../shared/Nav/Nav';
import AdminTitle from '../../components/AdminTitle/AdminTitle';
import { db } from '../../hooks/useFirebase';
import './AdminServiceCounter.css';

const AdminServiceCounter = ({ counter }) => {

    const [service, setService] = useState(counter.documents[0].fields.service.stringValue);
    const [building, setBuilding] = useState(counter.documents[0].fields.building.stringValue);


    const handleService = (e) => {
        const result = e.target.value;
        setService(result)
    }
    const handleBuilding = (e) => {
        const result = e.target.value;
        setBuilding(result)
    }

    const onClickUpdate = async () => {

        const counterRef = doc(db, "serviceCounter", "2PxfhAtXgpqLjZGMDgYd")
        try {
            await updateDoc(counterRef, {
                service: service,
                building: building,

            })
            setService(service);
            setBuilding(building)

            swal("Well Done!", "You have successfully Updated the Counter!", "success", {
                buttons: {
                    cancel: "Cancel",
                    catch: {
                        text: "Go to Home",
                        value: "catch",
                    },
                },
            })
                .then((value) => {
                    switch (value) {
                        case "catch":
                            window.location.href = '/'
                            break;
                        default: ;
                    }
                });

        }

        catch (err) {
            console.log('err--->', err)
        }
    }

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
        <>
            <Nav />
            <div className='container '>

                <div className='adminServiceCounterContainer' >

                    <AdminTitle title="Service & Consultancy Counter" />
                    <div className="form-outline mb-4">
                        <p className='serviceLabel'>Years of Services</p>
                        {
                            counters.map(counter => <div key={counter.id}>
                                <input type="number" id="form3Example3" className="form-control form-control-lg mb-2 w-25"
                                    onChange={handleService}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    required
                                    defaultValue={counter.service}
                                    placeholder="Years of Services" />

                            </div>
                            )

                        }
                    </div>

                    {
                        counters.map(counter => <div key={counter.id}>
                            <p className='serviceLabel'>Building Consultancy</p>

                            <input type="number" id="form3Example3" className="form-control form-control-lg mb-2 w-25"
                                onChange={handleBuilding}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                required
                                defaultValue={counter.building}
                                placeholder="Building Consultancy" />
                        </div>
                        )
                    }
                    <button className='loginBtn' onClick={onClickUpdate}>Update</button>
                </div>
            </div>
        </>
    );
};

export default AdminServiceCounter;