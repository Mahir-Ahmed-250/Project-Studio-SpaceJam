import React, { useEffect, useState } from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';

const HomeBanners = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch('HomeBanner.json')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])

    return (
        <>
            {
                banners.map(banner => <HomeBanner key={banner.serial} banner={banner} />)
            }
        </>
    );
};

export default HomeBanners;