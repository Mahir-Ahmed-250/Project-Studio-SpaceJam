import React from 'react';
import Nav from '../../../shared/Nav/Nav';
import HomeBanners from '../HomeBanners/HomeBanners/HomeBanners';
import ServiceAndCompanyCounter from '../ServiceAndCompanyCounter/ServiceAndCompanyCounter';

const Home = () => {
    return (
        <>
            <Nav />
            <HomeBanners />
            <ServiceAndCompanyCounter />
        </>
    );
};

export default Home;