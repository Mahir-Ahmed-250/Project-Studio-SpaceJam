import React, { useContext, useState } from 'react';
import BannerTitle from '../../../components/BannerTitle/BannerTitle';
import Nav from '../../../shared/Nav/Nav';
import logo from '../../../assets/admin/2.png';
import './AdminHome.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context';

const AdminHome = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);
    const [isHovering5, setIsHovering5] = useState(false);

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
    const handleMouseEnter5 = () => {
        setIsHovering5(true);
    };

    const handleMouseLeave5 = () => {
        setIsHovering5(false);
    };
    return (
        <div >
            <Nav />
            <div className="container " style={{ paddingTop: "10%" }}>
                <BannerTitle title="ADMIN PANEL" />
                <div className='adminHomeContainer'>
                    <div>
                        <img src={logo} alt="" width="100%" height="100%" />
                    </div>
                    <div className='container pb-5'>

                        <div className='row'>
                            <div className="col-lg-6 col-md-6">
                                <Link to="/admin/homeBanner" style={{ textDecoration: "none" }}>
                                    <div className="homeNavigation"
                                        style={{
                                            color: darkMode || isHovering1 ? "#fff" : "#161616"
                                        }}
                                        onMouseEnter={handleMouseEnter1}
                                        onMouseLeave={handleMouseLeave1}
                                    >
                                        <h2 className="homeNavigationTitle">Home Banner</h2>
                                        <h5 className="homeNavigationText">Upload & Delete Home Banner Here</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <Link to="/admin/homePortfolio" style={{ textDecoration: "none" }}>
                                    <div className="homeNavigation" style={{
                                        color: darkMode || isHovering2 ? "#fff" : "#161616"
                                    }}
                                        onMouseEnter={handleMouseEnter2}
                                        onMouseLeave={handleMouseLeave2}>
                                        <h2 className="homeNavigationTitle">Home Portfolio</h2>
                                        <h5 className="homeNavigationText">Upload, Edit, Delete Home Portfolio Here</h5>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <Link to="/admin/portfolio" style={{ textDecoration: "none" }}>
                                    <div className="portfolioNavigation" style={{
                                        color: darkMode || isHovering3 ? "#fff" : "#161616"
                                    }}
                                        onMouseEnter={handleMouseEnter3}
                                        onMouseLeave={handleMouseLeave3}>
                                        <h2 className="homeNavigationTitle">Portfolio</h2>
                                        <h5 className="homeNavigationText">Upload, Edit, Delete Portfolio Here</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link to="/admin/counter" style={{ textDecoration: "none" }}>
                                    <div className="homeNavigation" style={{
                                        color: darkMode || isHovering4 ? "#fff" : "#161616"
                                    }}
                                        onMouseEnter={handleMouseEnter4}
                                        onMouseLeave={handleMouseLeave4}>
                                        <h2 className="homeNavigationTitle"> Counter</h2>
                                        <h5 className="homeNavigationText">Update Service & Consultancy Here</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link to="/admin/team" style={{ textDecoration: "none" }}>
                                    <div className="teamNavigation" style={{
                                        color: darkMode || isHovering5 ? "#fff" : "#161616"
                                    }}
                                        onMouseEnter={handleMouseEnter5}
                                        onMouseLeave={handleMouseLeave5}>
                                        <h2 className="homeNavigationTitle">Team</h2>
                                        <h5 className="homeNavigationText">Upload, Edit, Delete Team member Here</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;