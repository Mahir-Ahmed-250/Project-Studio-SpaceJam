import React, { useContext, useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo/logo.jpg'
import { ThemeContext } from '../../context';
import { ImLocation } from 'react-icons/im';
import { Modal } from 'react-bootstrap';

const Footer = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const today = new Date();
    const year = today.getFullYear();
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <div style={{
            backgroundColor: darkMode ? '#2d3239' : '#131313', color: "#fff"
        }} className="pb-5">
            <center style={{ paddingTop: "80px" }}>      <hr className='w-75 divider' /></center>
            <div className="container">

                <div className="row">

                    <div className="col-md-4 footerItem">
                        <img src={logo} width="70px" height="70px" alt="" />
                        <h3 className='footerCompanyName'  >STUDIO <br />
                            SPACEJAM</h3>
                    </div>
                    <div className="col-md-4 footerItem2">
                        <div>
                            <h3 className='footerItemTitle'>Contact Us</h3>
                            <a href="tel:+8801755333933" style={{ textDecoration: 'none', fontSize: "18px", color: "#fff" }}>Phone: +8801755333933</a>
                            <br />
                            <br />
                            <a href="mailto:mail.spacejam@gmail.com" style={{ textDecoration: 'none', fontSize: "18px", color: "#fff" }}>Email: mail.spacejam@gmail.com</a>
                            <br />
                            <br />
                            <h5>Meeting Hours</h5>
                            <p>Saturday - Thursday (10:00 AM to 6:00 PM)</p>
                        </div>
                    </div>
                    <div className="col-md-4 footerItem3">

                        <h3 className='footerItemTitle'>Our Location</h3>
                        <a className='footerAddress' href="https://www.google.com/maps/place/Studio+Space+Jam/@23.7442635,90.3686266,17z/data=!3m1!4b1!4m5!3m4!1s0x3755bf5474458835:0x62abf0a66ea3696!8m2!3d23.7442586!4d90.3708153" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: darkMode ? " #fff" : "#fff" }}>House:55/D, Road:9/A, Dhanmondi, Dhaka, 1209</a>
                        <p ></p>
                        {values.map((v, idx) => (
                            <span className='polygon' >
                                <ImLocation size={80} key={idx} onClick={() => handleShow(v)} />
                            </span>

                        ))}
                        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} >
                            <Modal.Header closeButton />
                            <iframe

                                src="
                                    https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.24691735752!2d90.3418337318268!3d23.750736063693605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5474458835%3A0x62abf0a66ea3696!2sSpace%20Jam%20Design%20and%20Construction!5e0!3m2!1sen!2sbd!4v1631447660785!5m2!1sen!2sbd"
                                width="100%" height="100%" frameborder="0" title='google map'></iframe>

                        </Modal>
                    </div>

                </div>

            </div>

            <center>
                <hr className='w-75 divider' />
            </center>
            <div className="container copyRightAndDesign">
                <div>
                    <p>Copyright © {year}. All Rights Reserved by <a href='https://studiospacejam.com' rel="noreferrer">Studio SpaceJam</a>
                    </p>
                </div>
                <div>
                    <p> Designed by <a href="https://www.facebook.com/imtiaz.ahmad.fami" rel="noreferrer" target="_blank">Imtiaz</a> & Developed by <a href="https://mahirsportfolio2.netlify.app" rel="noreferrer" target="_blank">Mahir</a></p>
                    <p>   </p>
                </div>
            </div>


        </div >

    );
};

export default Footer;