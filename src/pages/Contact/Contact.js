import React from 'react';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import Nav from '../../shared/Nav/Nav';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <Nav />
            <div className="portfolioContainer">
                <div className="contactBannerContainer">
                    <BannerTitle title="CONTACT US" />
                </div>
                <div className='portfolios container'>
                    <div className="">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;