import React from 'react';
import { useState } from 'react';
import Nav from '../../../shared/Nav/Nav';
import './AdminLogin.css';
import logo from '../../../assets/admin/1.png'
import BannerTitle from '../../../components/BannerTitle/BannerTitle';
import Footer from '../../../shared/Footer/Footer';
import useFirebase from '../../hooks/useFirebase';
import loadingImg from '../../../assets/logo/logo.png';
import AdminTitle from '../../components/AdminTitle/AdminTitle';

const AdminLogin = () => {
    const { loginUser, loading } = useFirebase();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = event => {
        const result = event.target.value;
        setEmail(result)
    }
    const handlePassword = event => {
        const result = event.target.value;
        setPassword(result)
    }

    const handleLogin = e => {
        e.preventDefault()
        loginUser(email, password)
    }

    return (
        <>
            {
                loading ? <>
                    <div className='loading-gif' >
                        <img src={loadingImg} alt="" />
                    </div>
                </> : <div>
                    <Nav />
                    <div style={{ paddingTop: "100px" }}>


                        <div className="container">
                            <BannerTitle title="ADMIN LOGIN" />
                            <div className='loginContainer'>
                                <div>
                                    <img src={logo} alt="" width="100%" />
                                </div>
                                <div className='loginForm'>
                                    <form onSubmit={handleLogin}>
                                        <div className="form-outline mb-4">

                                            <input type="email" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                                                onChange={handleEmail}
                                                required
                                                placeholder="Admin Email" />
                                        </div>

                                        <div className="form-outline">
                                            <input className="form-control form-control-lg mb-2 w-100" type={passwordShown ? "text" : "password"} required
                                                onChange={handlePassword}
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


                        </div>

                    </div>
                    <Footer />
                </div>

            }</>
    );
};

export default AdminLogin;