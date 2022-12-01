import { collection, onSnapshot, query } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { db } from '../../adminPanel/hooks/useFirebase';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import { ThemeContext } from '../../context';
import Footer from '../../shared/Footer/Footer';
import LoadingSkeletonBanner from '../../adminPanel/components/LoadingSkeletonBanner/LoadingSkeletonBanner';
import Nav from '../../shared/Nav/Nav';
import Navigation from '../Home/Navigation/Navigation';
import './Team.css';

const Team = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const [teams, setTeams] = useState([]);
    const [loading2, setLoading2] = useState(false);

    useEffect(() => {
        setLoading2(true)
        //create the query
        const q = query(collection(db, 'team'))
        //create listener
        const counterListenerSubscription = onSnapshot(q, (querySnapShot) => {
            const list = []
            querySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTeams(list)
            setLoading2(false)
        })
        return counterListenerSubscription;
    }, [])

    return (
        <>
            <Nav />
            <div className="">
                <div className="teamBannerContainer">
                    <BannerTitle title="OUR TEAM" />
                </div>
                <div className='teams container'>
                    {
                        loading2 ? <>
                            <LoadingSkeletonBanner />
                        </> : <>
                            <div className="row">

                                {
                                    teams.sort((a, b) => a.serial - b.serial).map(team =>
                                        <div key={team.serial} className='col-lg-4 col-md-6 teamCard'>
                                            <div className="inner">
                                                <img className='teamCardImg' src={team.img} alt="" width="100%" />
                                            </div>
                                            <div className='teamCardTitleContainer' style={{ backgroundColor: darkMode ? "#1f2227" : "#fff" }}>
                                                <h5 className='teamCardName'>{team.name}</h5>
                                                <p className='teamCardDesignation'>{team.designation}</p>
                                                {
                                                    team.study ? <p className='teamCardStudy'>{team.study} <br />
                                                    </p> : <></>
                                                }
                                                {
                                                    team.membership ? <span className='teamCardStudy'>{team.membership}</span> : <></>
                                                }
                                            </div>
                                        </div>)
                                }
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

export default Team;