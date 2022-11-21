import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Toggle from '../../components/Toggle/Toggle';
import { ThemeContext } from '../../context';
import HomeBanners from '../../pages/Home/HomeBanners/HomeBanners/HomeBanners';
import './HomeNav.css';
import { BiMenuAltRight } from "@react-icons/all-files/bi/BiMenuAltRight";
import logo from '../../assets/logo/logo.jpg';


const HomeNav = () => {
    const [navBackground, setNavBackground] = useState(false)
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


    return (
        <div className='topBar'>
            <nav className="navbar navbar-expand-sm fixed-top" style={{
                backgroundColor: darkMode ? navBackground ? '#161616' : 'transparent' : navBackground ? '#fff' : 'transparent', boxShadow: navBackground ? "0px 5px 15px rgba(0, 0, 0, 0.1)" : 'none'
            }}>

                {
                    navBackground ?
                        <>


                        </>
                        :
                        <>

                            <div className='homeNavLogoContainer-1'>
                                <NavLink to="/" className="homeNavLogoAndName-1">
                                    <img src={logo} height="60" width="60" alt="logo" className='me-2' />
                                    <h2 className="homeNavName-1" style={{
                                        color: darkMode ? "#fff" :
                                            "#ffbb00 "
                                    }} >STUDIO SPACEJAM</h2>
                                </NavLink>
                            </div>

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



                        </>
                }

                {
                    navBackground ?
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
                                </div>
                            </div>
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