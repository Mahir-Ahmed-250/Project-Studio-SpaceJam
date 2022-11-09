import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BannerTitle from '../../../components/BannerTitle/BannerTitle';
import Portfolio from '../Portfolio/Portfolio';
import './Portfolio.css';

const Portfolios = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch('Portfolio.json')
            .then(res => res.json())
            .then(data => setPortfolios(data))
    }, [])


    return (<>

        <div className="portfolioContainer">

            <div className="portfolioBannerContainer">
                <BannerTitle title="PORTFOLIO" />
            </div>
            <div className='portfolios container'>
                <div className="">
                    <Portfolio portfolios={portfolios} />
                </div>
            </div>
        </div>
    </>

    );
};

export default Portfolios;