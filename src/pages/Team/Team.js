import { collection, onSnapshot, query } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { db } from '../../adminPanel/hooks/useFirebase';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import { ThemeContext } from '../../context';
import Footer from '../../shared/Footer/Footer';
import Nav from '../../shared/Nav/Nav';
import Navigation from '../Home/Navigation/Navigation';
import './Team.css';

const Team = () => {
    const [teams, setTeams] = useState([]);


    useEffect(() => {
        //create the query
        const q = query(collection(db, 'team'))
        //create listener
        const counterListenerSubscription = onSnapshot(q, (querySnapShot) => {
            const list = []
            querySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTeams(list)

        })
        return counterListenerSubscription;
    }, [])

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <>
            <Nav />
            <div className="">
                <div className="teamBannerContainer">
                    <BannerTitle title="OUR TEAM" />
                </div>
                <div className='teams container'>
                    <div className="row">

                        {
                            teams.map(team =>
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
                </div>
            </div>
            <Navigation />
            <Footer />
        </>
    );
};

export default Team;