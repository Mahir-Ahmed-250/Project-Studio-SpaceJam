import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import { ThemeContext } from '../../../context';
import './Navigation.css';

const Navigation = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHovering1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHovering1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovering2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovering2(false);
    };
    const handleMouseEnter3 = () => {
        setIsHovering3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovering3(false);
    };
    const handleMouseEnter4 = () => {
        setIsHovering4(true);
    };

    const handleMouseLeave4 = () => {
        setIsHovering4(false);
    };
    return (
        <div className='container'>
            <Title title="WATCH MORE" />
            <div className='row'>
                <div className="col-lg-3 col-md-6">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="homeNavigation" style={{
                            color: darkMode || isHovering1 ? "#fff" : "#161616"
                        }}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <h2 className="homeNavigationTitle">Home</h2>
                            <h5 className="homeNavigationText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, inventore?</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <Link to="/team" style={{ textDecoration: "none" }}>
                        <div className="teamNavigation" style={{
                            color: darkMode || isHovering2 ? "#fff" : "#161616"
                        }}
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}>
                            <h2 className="homeNavigationTitle">Team</h2>
                            <h5 className="homeNavigationText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, inventore?</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <Link to="/portfolio" style={{ textDecoration: "none" }}>
                        <div className="portfolioNavigation" style={{
                            color: darkMode || isHovering3 ? "#fff" : "#161616"
                        }}
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}>
                            <h2 className="homeNavigationTitle">Portfolio</h2>
                            <h5 className="homeNavigationText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, inventore?</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <div className="homeNavigation" style={{
                            color: darkMode || isHovering4 ? "#fff" : "#161616"
                        }}
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}>
                            <h2 className="homeNavigationTitle">Contact</h2>
                            <h5 className="homeNavigationText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, inventore?</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;