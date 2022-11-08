import React, { useContext } from 'react';
import './Footer.css';
import logo from '../../assets/logo/logo.jpg'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context';

const Footer = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footerContainer' style={{
            backgroundColor: darkMode ? '#26272b' : '#161616', color: "#fff"
        }}>
            <div className="footerItems">
                <div className="footerItem">
                    <img src={logo} width="70px" height="70px" alt="" />
                    <h3 className='footerCompanyName'  >STUDIO <br />
                        SPACEJAM</h3>
                </div>
                <div className="footerItem2">
                    <h5 className='footerItemTitle' >OUR COMPANY</h5>
                    <Link to="/" >Home</Link> <br />
                    <Link to="/team" >Team</Link> <br />
                    <Link to="/portfolio">Portfolio</Link> <br />
                    <Link to="/contact">Contact</Link>

                </div>
                <div className="footerItem2">
                    <h5 className='footerItemTitle'>Contact Us</h5>
                    <a href="tel:+8801915583555">+8801915583555</a><br />
                    <a href="mailto:mail.spacejam@gmail.com">mail.spacejam@gmail.com</a> <br />
                    <a href="https://www.google.com/maps/place/Studio+Space+Jam/@23.7442635,90.3686266,17z/data=!3m1!4b1!4m5!3m4!1s0x3755bf5474458835:0x62abf0a66ea3696!8m2!3d23.7442586!4d90.3708153" rel="noreferrer" target="_blank">
                        House:55/D, Road:9/A, Dhanmondi, Dhaka, 1209
                    </a>
                </div>

            </div>
            <center><hr className='w-75' />
                <p>Copyright © {year}. All Rights Reserved by <a href='https://studiospacejam.com' rel="noreferrer">Studio SpaceJam</a> <br /> <br />Design & Developed by <a href="https://mahirsportfolio2.netlify.app" rel="noreferrer" target="_blank">Mahir</a> </p>
            </center>
        </div>

    );
};

export default Footer;