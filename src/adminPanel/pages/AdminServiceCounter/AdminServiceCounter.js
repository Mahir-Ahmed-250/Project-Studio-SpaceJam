import React from 'react';
import Nav from '../../../shared/Nav/Nav';
import './AdminServiceCounter.css';

const AdminServiceCounter = () => {
    return (
        <>
            <Nav />
            <div className='container '>
                <form className='adminServiceCounterContainer' >
                    <div className="form-outline mb-4">
                        <p className='serviceLabel'>Years of Services</p>
                        <input type="number" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            required
                            placeholder="Years of Services" />
                    </div>

                    <div className="form-outline">
                        <p className='serviceLabel'>Building Consultancy</p>
                        <input type="number" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            required
                            placeholder="Building Consultancy" />
                    </div>
                    <button className='loginBtn'>Update</button>

                    <div className="text-center text-lg-start mt-4 pt-2">

                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminServiceCounter;