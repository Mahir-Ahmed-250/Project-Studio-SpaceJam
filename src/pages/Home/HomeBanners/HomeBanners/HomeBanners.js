import React, { useEffect, useState } from 'react';
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import './HomeBanners.css';
import { db } from '../../../../adminPanel/hooks/useFirebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import loadingImg from '../../../../assets/loading/1.gif';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
SwiperCore.use([Navigation]);

const HomeBanners = () => {
    // const [banners, setBanners] = useState([]);
    // useEffect(() => {
    //     fetch('HomeBanner.json')
    //         .then(res => res.json())
    //         .then(data => setBanners(data))
    // }, [])

    // const [imageUrls, setImageUrls] = useState([]);
    // const imagesListRef = ref(storage, "homeBanner/");
    // useEffect(() => {
    //     listAll(imagesListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageUrls((prev) => [...prev, url]);
    //             });
    //         });
    //     });
    // }, [imagesListRef]);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        //create the query
        const q = query(collection(db, 'homeBanner'))
        //create listener
        const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
            const list = []
            querySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setBanners(list)
            setLoading(false)
        })
        return bannerListenerSubscription;
    }, [])
    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };
    return (
        <div>
            {
                loading ? <>

                    <img style={{ width: "100%", height: "100vh" }} src={loadingImg} alt="" />


                </> : <>

                    <Swiper
                        slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true}
                        effect={"fade"}
                        spaceBetween={50} onSwiper={(swiper) => setSwiperRef(swiper)}
                        navigation={false}
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
                                <SwiperSlide key={banner.id}>
                                    <img src={banner.img} className="bannerImg" alt="" />
                                </SwiperSlide>)
                        }

                    </Swiper>

                    <GrFormPrevious onClick={prevHandler} className="bannerBtnPrev" size={50} />
                    <GrFormNext onClick={nextHandler} className="bannerBtnNext" size={50} />


                </>
            }

        </div>
    );
};

export default HomeBanners;