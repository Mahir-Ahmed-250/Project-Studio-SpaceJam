import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context';
import './AdminNavigation.css';

const AdminNavigation = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <>
            <center className='adminNavContainer container' >
                <Link to='/admin' className='adminNav' style={{ color: darkMode ? "#fff" : "#161616" }}> Home</Link>
                <Link to='/admin/homeBanner' className='adminNav' style={{ color: darkMode ? "#fff" : "#161616" }}> Home Banner</Link>
                <Link to='/admin/homePortfolio' className='adminNav' style={{ color: darkMode ? "#fff" : "#161616" }}>Home Portfolio</Link>
                <Link to='/admin/portfolio' className='adminNav' style={{ color: darkMode ? "#fff" : "#161616" }}>Portfolio </Link>
                <Link to='/admin/counter' className='adminNav' style={{ color: darkMode ? "#fff" : "#161616" }}> Counter</Link>
                <Link to='/admin/team' className='adminNav' style={{ color: darkMode ? "#fff" : "#161616" }}> Team</Link>
            </center>
        </>
    );
};

export default AdminNavigation;