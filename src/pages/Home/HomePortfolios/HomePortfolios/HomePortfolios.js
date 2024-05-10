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
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../../../adminPanel/hooks/useFirebase';
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const HomePortfolios = () => {
    const [portfolios, setBanners] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        //create the query
        const q = query(collection(db, 'homePortfolio'))
        //create listener
        const portfolioListenerSubscription = onSnapshot(q, (querySnapShot) => {
            const list = []
            querySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setBanners(list)
            setLoading(false)
        })
        return portfolioListenerSubscription;
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
                    portfolios.sort((a, b) => a.serial - b.serial).map(portfolio =>

                        <SwiperSlide key={portfolio.serial} >

                            <img src={portfolio.img} className="bannerImg homePortfolioImg" alt="" />

                        </SwiperSlide>
                    )
                }


            </Swiper>
            <center>
                <Link to="/portfolio"> <button className="moreBtn">SHOW MORE</button></Link>
            </center>
        </div >
    );
};

export default HomePortfolios;