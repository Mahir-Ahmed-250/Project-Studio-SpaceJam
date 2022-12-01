import { collection, onSnapshot, query } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingSkeletonBanner from '../../../adminPanel/components/LoadingSkeletonBanner/LoadingSkeletonBanner';
import { db } from '../../../adminPanel/hooks/useFirebase';
import BannerTitle from '../../../components/BannerTitle/BannerTitle';
import Navigation from '../../../components/Navigation/Navigation';
import Footer from '../../../shared/Footer/Footer';
import Nav from '../../../shared/Nav/Nav';
import Portfolio from '../Portfolio/Portfolio';
import './Portfolio.css';


const Portfolios = () => {
    const [portfolios, setBanners] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        //create the query
        const q = query(collection(db, 'portfolio'))
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
        <>
            <Nav />
            <div className="portfolioContainer">
                <div className="portfolioBannerContainer">
                    <BannerTitle title="PORTFOLIO" />
                </div>
                <div className='portfolios container'>
                    {
                        loading ? <LoadingSkeletonBanner /> : <>
                            <div className="">
                                <Portfolio portfolios={portfolios} />
                            </div>
                        </>
                    }
                </div>
            </div>
            <Navigation />
            <Footer />
        </>

    );
};

export default Portfolios;