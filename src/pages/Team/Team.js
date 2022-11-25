import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import { ThemeContext } from '../../context';
import Footer from '../../shared/Footer/Footer';
import Nav from '../../shared/Nav/Nav';
import Navigation from '../Home/Navigation/Navigation';
import './Team.css';

const Team = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('Team.json')
            .then(res => res.json())
            .then(data => setTeams(data))
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
                                    <div className='teamCardTitleContainer' style={{ backgroundColor: darkMode ? "#161616" : "#fff" }}>
                                        <h5 className='teamCardName'>{team.name}</h5>
                                        <p className='teamCardDesignation'>{team.designation}</p>
                                        <p className='teamCardStudy'>{team.study}</p>
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