import React, { useEffect, useState } from 'react';
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import './HomeBanners.css';

SwiperCore.use([Navigation]);


const HomeBanners = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch('HomeBanner.json')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])

    return (
        <>
            <Swiper
                slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true}
                effect={"fade"}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >

                {
                    banners.map(banner =>
                        <SwiperSlide key={banner.serial} >
                            <img src={banner.img1} className="bannerImg" alt="" />
                        </SwiperSlide>)
                }

            </Swiper>

        </>
    );
};

export default HomeBanners;