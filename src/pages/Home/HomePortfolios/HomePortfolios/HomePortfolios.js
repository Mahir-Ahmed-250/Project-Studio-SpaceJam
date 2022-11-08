import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";
import './HomePortfolio.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Autoplay } from 'swiper';
import Title from '../../../../components/Title/Title';
import { Link } from 'react-router-dom';
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const HomePortfolios = () => {

    const [portfolios, setBanners] = useState([]);
    useEffect(() => {
        fetch('HomePortfolio.json')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])
    return (
        <div className='container homePortfolioContainer'>
            <Title title="PORTFOLIO" />
            <Swiper

                slidesPerView={1}
                spaceBetween={30}


                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{

                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                }}
                effect={"coverflow"}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                centeredSlidesBounds={true}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 3.5,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true
                }}
                onPaginationShow={false}
                modules={[Autoplay]}
                className="mySwiper"
                style={{ height: "400px", marginTop: "50px" }}
            >
                {
                    portfolios.map(portfolio =>

                        <SwiperSlide key={portfolio.serial} >
                            <Link to="portfolio">
                                <img src={portfolio.img} style={{ height: "400px" }} className="bannerImg" alt="" />
                            </Link>
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </div >
    );
};

export default HomePortfolios;