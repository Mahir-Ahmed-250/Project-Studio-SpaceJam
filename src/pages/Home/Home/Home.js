import React from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import HomeBanners from '../HomeBanners/HomeBanners/HomeBanners';
import ServiceAndCompanyCounter from '../ServiceAndCompanyCounter/ServiceAndCompanyCounter';
import Video from '../Video/Video';

const Home = () => {
    return (
        <>
            <HomeBanners />
            <ServiceAndCompanyCounter />
            <AboutCompany />
            <Video />
        </>
    );
};

export default Home;