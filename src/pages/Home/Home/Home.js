import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import Footer from '../../../shared/Footer/Footer';
import HomeNav from '../../../shared/HomeNav/HomeNav';
import AboutCompany from '../AboutCompany/AboutCompany';
import HomePortfolios from '../HomePortfolios/HomePortfolios/HomePortfolios';

import ServiceAndCompanyCounter from '../ServiceAndCompanyCounter/ServiceAndCompanyCounter';
import Video from '../Video/Video';

const Home = () => {
    return (
        <>
            <HomeNav />
            <ServiceAndCompanyCounter />
            <AboutCompany />
            <Video />
            <HomePortfolios />
            <Navigation />
            <Footer />
        </>
    );
};

export default Home;