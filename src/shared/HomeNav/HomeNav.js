import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Toggle from '../../components/Toggle/Toggle';
import { ThemeContext } from '../../context';
import HomeBanners from '../../pages/Home/HomeBanners/HomeBanners/HomeBanners';
import './HomeNav.css';
import { BiMenuAltRight } from "react-icons/bi";
import logo from '../../assets/logo/logo.jpg';
import swal from 'sweetalert';
import useFirebase from '../../adminPanel/hooks/useFirebase';
import { FiLogOut } from "react-icons/fi";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";


const HomeNav = () => {
    const [navBackground, setNavBackground] = useState(false)
    const { user, logOut } = useFirebase();

    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)

        }
    }, [])

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleLogout = () => {
        swal("Logout Warning!", "Do you really want to logout?", "warning", {
            buttons: {
                cancel: "NO",
                catch: {
                    text: "YES",
                    value: "catch",
                },
            },
        })
            .then((value) => {
                switch (value) {
                    case "catch":
                        logOut()
                        swal("Well Done!", "You are successfully logged out!", "success");
                        break;
                    default: ;
                }
            });
    }
    const stop = e => {
        e.stopPropagation()
    }
    return (
        <div className='topBar'>
            <nav className="navbar navbar-expand-sm fixed-top" style={{
                backgroundColor: darkMode ? navBackground ? '#161616' : 'transparent' : navBackground ? '#fff' : 'transparent', boxShadow: navBackground ? "0px 5px 15px rgba(0, 0, 0, 0.1)" : 'none'
            }}>

                {
                    !navBackground ?
                        <>

                            <div className='homeNavLogoContainer-1' style={{ background: darkMode ? "#161616" : "#fff" }}>
                                <NavLink to="/" className="homeNavLogoAndName-1">
                                    <img src={logo} height="60" width="60" alt="logo" className='me-2' />
                                    <h2 className="homeNavName-1" style={{
                                        color: darkMode ? "#fff" :
                                            "#ffbb00 "
                                    }} >STUDIO SPACEJAM</h2>
                                </NavLink>
                                <div className='homeSideNav'>
                                    <h5 style={{ marginTop: "20px", marginLeft: "10px" }}>
                                        <NavLink to="/" className="navigation " style={{
                                            textDecoration: "none", color: darkMode ? "#fff" :
                                                "#ffbb00 "
                                        }}> Home </NavLink>
                                    </h5>

                                    <h5 style={{ marginTop: "20px", marginLeft: "10px" }}>
                                        <NavLink to="/team" className="navigation" style={{
                                            textDecoration: "none", color: darkMode ? "#fff" :
                                                "#ffbb00 "
                                        }}> Team </NavLink>
                                    </h5>

                                    <h5 style={{ marginTop: "20px", marginLeft: "10px" }}>
                                        <NavLink to="/portfolio" className="navigation" style={{
                                            textDecoration: "none", color: darkMode ? "#fff" :
                                                "#ffbb00 "
                                        }}> Portfolio</NavLink>
                                    </h5>

                                    <h5 style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "40px" }}>
                                        <NavLink to="/contact" className="navigation" style={{
                                            textDecoration: "none", color: darkMode ? "#fff" :
                                                "#ffbb00 "
                                        }}> Contact </NavLink>
                                    </h5>


                                    <Toggle />

                                </div>

                            </div>

                        </>
                        :
                        <>

                            <div className="container homeNavLogoContainer-3">
                                <div className='logoAndName' >
                                    <NavLink to="/">
                                        <img src={logo} height="60" width="60" alt="logo" className='me-2' />
                                    </NavLink>
                                    <NavLink to="/">
                                        <h5 className='navCompanyName' style={{
                                            color: navBackground && darkMode ? '#fff' : '#ffbb00'
                                        }}>STUDIO SPACEJAM</h5>
                                    </NavLink>
                                </div>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                    <BiMenuAltRight size={40} color="#ffbb00" />
                                </button>

                                <div className="collapse navbar-collapse" id="navbarScroll">
                                    <h5 className='ms-auto navLink'>
                                        <NavLink to="/" className="navigation" style={{ textDecoration: "none", color: navBackground && darkMode ? '#fff' : '#ffbb00' }}> Home </NavLink>
                                    </h5>

                                    <h5 className='navLink'>
                                        <NavLink to="/team" className="navigation" style={{ textDecoration: "none", color: navBackground && darkMode ? '#fff' : '#ffbb00' }}> Team </NavLink>
                                    </h5>
                                    <h5 className='navLink'>
                                        <NavLink to="/portfolio" className="navigation" style={{ textDecoration: "none", color: navBackground && darkMode ? '#fff' : '#ffbb00' }}> Portfolio </NavLink>
                                    </h5>
                                    <h5 className='navLink'>
                                        <NavLink to="/contact" className="navigation" style={{ textDecoration: "none", color: navBackground && darkMode ? '#fff' : '#ffbb00' }}> Contact</NavLink>
                                    </h5>
                                    <Toggle />
                                    {
                                        user ?
                                            <div className="adminLogo">
                                                <div className="nav-item dropdown profileIcon">

                                                    <p className="nav-link  dropdown-toggle" style={{ color: "white" }}
                                                        id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" >

                                                        <img src={logo} width="60" height="60" className="rounded-circle border me-2" alt="" />

                                                    </p>

                                                    <ul className="dropdown-menu profileDropdown"
                                                        onClick={stop}
                                                        aria-labelledby="navbarDropdownMenuLink">
                                                        <NavLink to="/admin/homeBanner"
                                                            style={{ textDecoration: "none" }}
                                                        >

                                                            <p style={{ cursor: "pointer" }} className="dropdown-item" >
                                                                <RiNumber1 className='me-1' />Home Banner</p>
                                                        </NavLink>
                                                        <NavLink to="/admin/counter"
                                                            style={{ textDecoration: "none" }}
                                                        >

                                                            <p style={{ cursor: "pointer" }} className="dropdown-item" >
                                                                <RiNumber2 className='me-1' />Service Counter</p>
                                                        </NavLink>
                                                        <NavLink to="/admin/homePortfolio"
                                                            style={{ textDecoration: "none" }}
                                                        >

                                                            <p style={{ cursor: "pointer" }} className="dropdown-item" >
                                                                <RiNumber3 className='me-1' />Home Portfolio</p>
                                                        </NavLink>
                                                        <NavLink to="/admin/team"
                                                            style={{ textDecoration: "none" }}
                                                        >

                                                            <p style={{ cursor: "pointer" }} className="dropdown-item" >
                                                                <RiNumber4 className='me-1' />Team</p>
                                                        </NavLink>
                                                        <NavLink to="/admin/portfolio"
                                                            style={{ textDecoration: "none" }}
                                                        >

                                                            <p style={{ cursor: "pointer" }} className="dropdown-item" >
                                                                <RiNumber5 className='me-1' />Portfolio</p>
                                                        </NavLink>
                                                        <p style={{ cursor: "pointer" }} className="dropdown-item" onClick={handleLogout}>
                                                            <FiLogOut className='me-1' />Log Out</p>

                                                    </ul>
                                                </div>

                                            </div>
                                            : <>
                                            </>
                                    }
                                </div>
                            </div>



                        </>
                }

                {
                    navBackground ?
                        <>

                        </> :
                        <>
                            <div className="container homeNavLogoContainer-2">
                                <div className='logoAndName' >
                                    <NavLink to="/">
                                        <img src={logo} height="60" width="60" alt="logo" className='me-2' />
                                    </NavLink>
                                    <NavLink to="/">
                                        <h5 className='navCompanyName' style={{
                                            color: navBackground && darkMode ? '#fff' : '#ffbb00'
                                        }}>STUDIO SPACEJAM</h5>
                                    </NavLink>
                                </div>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                    <BiMenuAltRight size={40} color="#ffbb00" />
                                </button>

                                <div className="collapse navbar-collapse" id="navbarScroll">
                                    <h5 className='ms-auto navLink'>
                                        <NavLink to="/" className="navigation" style={{ textDecoration: "none", color: navBackground && darkMode ? '#fff' : '#ffbb00' }}> Home </NavLink>
                                    </h5>

                                    <h5 className='navLink'>
                                        <NavLink to="/team" className="navigation" style={{ textDecoration: "none", color: navBackground && darkMode ? '#fff' : '#ffbb00' }}> Team </NavLink>
                                    </h5>
                                    <h5 className='navLink'>
                                        <NavLink to="/portfolio" className="navigation" style={{ textDecoration: "none", color: navBackground && darkMode ? '#fff' : '#ffbb00' }}> Portfolio </NavLink>
                                    </h5>
                                    <h5 className='navLink'>
                                        <NavLink to="/contact" className="navigation" style={{ textDecoration: "none", color: navBackground && darkMode ? '#fff' : '#ffbb00' }}> Contact</NavLink>
                                    </h5>
                                    <Toggle />

                                </div>
                            </div>
                        </>
                }

            </nav>
            <HomeBanners />
        </div>

    );
};

export default HomeNav;