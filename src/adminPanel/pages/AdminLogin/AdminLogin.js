import React from 'react';
import { useState } from 'react';
import Nav from '../../../shared/Nav/Nav';
import './AdminLogin.css';
import logo from '../../../assets/admin/1.png'
import BannerTitle from '../../../components/BannerTitle/BannerTitle';
import Footer from '../../../shared/Footer/Footer';
const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div>
            <Nav />
            <div style={{ paddingTop: "100px" }}>
                <BannerTitle title="ADMIN LOGIN" />
            </div>
            <div className="container loginContainer">

                <div>
                    <img src={logo} alt="" width="100%" />
                </div>
                <div className='loginForm'>
                    <form >
                        <div className="form-outline mb-4">

                            <input type="email" id="form3Example3" className="form-control form-control-lg mb-2 w-100" required
                                placeholder="Admin Email" />
                        </div>

                        <div className="form-outline">
                            <input className="form-control form-control-lg mb-2 w-100" type={passwordShown ? "text" : "password"} required
                                placeholder="Enter a password" />

                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" onClick={togglePassword} />
                            <label className="form-check-label" >
                                Show Password
                            </label>
                        </div>
                        <button className='loginBtn'>LOGIN</button>

                        <div className="text-center text-lg-start mt-4 pt-2">

                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default AdminLogin;