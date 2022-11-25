import React from 'react';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import Nav from '../../shared/Nav/Nav';
import './Contact.css';
import { ImLocation } from 'react-icons/im';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { BsClockHistory } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import Navigation from '../Home/Navigation/Navigation';

const Contact = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <>
            <Nav />
            <div className="portfolioContainer">
                <div className="contactBannerContainer">
                    <BannerTitle title="CONTACT US" />
                </div>
                <div className='container'>
                    <h2 className='contact-text-1'>Get in touch with us</h2>
                    <h5 className='contact-text-2'>For information regarding our services, to request a proposal or quote for new projects and for general inquiries and other requests please contact us or schedule a visit at our office. </h5>
                    <div className="row">
                        <div className='col-lg-3 col-md-6 mb-4'>
                            <a href="https://www.google.com/maps/place/Studio+Space+Jam/@23.7442635,90.3686266,17z/data=!3m1!4b1!4m5!3m4!1s0x3755bf5474458835:0x62abf0a66ea3696!8m2!3d23.7442586!4d90.3708153" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: darkMode ? " #fff" : "#161616" }}>
                                <center className="contactCard">  <ImLocation size={80} />
                                    <h3 className='contactCardTitle'>Address</h3>
                                    <h5 className='contactCardDesc'> House:55/D, Road:9/A, Dhanmondi, Dhaka, 1209</h5>
                                </center>
                            </a>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-4'>
                            <a href="mailto:mail.spacejam@gmail.com" style={{ textDecoration: "none", color: darkMode ? " #fff" : "#161616" }}>
                                <center className="contactCard ">  <HiOutlineMailOpen size={80} />
                                    <h3 className='contactCardTitle'>Email</h3>
                                    <h5 className='contactCardDesc'> mail.spacejam@gmail.com</h5>
                                </center>
                            </a>

                        </div>
                        <div className='col-lg-3 col-md-6 mb-4'>
                            <a href="tel:+8801915583555" style={{ textDecoration: "none", color: darkMode ? " #fff" : "#161616" }}>
                                <center className="contactCard ">  <BsPhone size={80} />
                                    <h3 className='contactCardTitle'>Phone No.</h3>
                                    <h5 className='contactCardDesc'> +8801915583555</h5>
                                </center>
                            </a>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-4'>
                            <center className="contactCard ">  <BsClockHistory size={80} />
                                <h3 className='contactCardTitle'>Meeting Hours</h3>
                                <h5 className='contactCardDesc'> Saturday - Thursday (10:00 AM to 6:00 PM)</h5>
                            </center>
                        </div>

                    </div>
                    <hr />
                </div>
                <div className='googleMap'>
                    <iframe
                        src="
      https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.24691735752!2d90.3418337318268!3d23.750736063693605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5474458835%3A0x62abf0a66ea3696!2sSpace%20Jam%20Design%20and%20Construction!5e0!3m2!1sen!2sbd!4v1631447660785!5m2!1sen!2sbd"
                        width="100%" height="550px" frameborder="0" title='google map'></iframe>
                </div>
            </div>
            <Navigation />
        </>
    );
};

export default Contact;