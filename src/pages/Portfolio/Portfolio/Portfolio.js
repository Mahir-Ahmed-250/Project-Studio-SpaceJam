import React from 'react';
import './Portfolio.css';
import { useState } from 'react';



const Portfolio = ({ portfolio }) => {

    const { original } = portfolio

    return (
        <div className='col-md-4 mt-3'>
            <img className='s' src={original} alt="" width="100%" />
        </div>
    );
};

export default Portfolio;