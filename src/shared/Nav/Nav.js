import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg';
import './Nav.css';
import { BiMenuAltRight } from "@react-icons/all-files/bi/BiMenuAltRight";

const Nav = () => {
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
    return (
        <nav class="navbar navbar-expand-md fixed-top" style={{
            transition: '.35s ease-in-out', backgroundColor: navBackground ? '#fff' : 'transparent', boxShadow: navBackground ? "0px 5px 15px rgba(0, 0, 0, 0.1)" : 'none'
        }}>
            <div class="container ">
                <div className='logoAndName'>
                    <NavLink to="/">
                        <img src={logo} height="60" width="60" alt="logo" className='me-2' />
                    </NavLink>
                    <NavLink to="/">
                        <h5 className='navCompanyName' style={{
                            color: navBackground ? '#161616' : '#fff'
                        }}>STUDIO SPACEJAM</h5>
                    </NavLink>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <BiMenuAltRight size={40} color="#161616" />
                </button>

                <div class="collapse navbar-collapse" id="navbarScroll">
                    <h5 className='ms-auto navLink' style={{
                        color: navBackground ? '#161616' : '#fff'
                    }}>Home</h5>
                    <h5 className='navLink' style={{
                        color: navBackground ? '#161616' : '#fff'
                    }}>Team</h5>
                    <h5 className='navLink' style={{
                        color: navBackground ? '#161616' : '#fff'
                    }}>Portfolio</h5>
                    <h5 className='navLink' style={{
                        color: navBackground ? '#161616' : '#fff'
                    }}>Contact</h5>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default Nav;