import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavigation.css';

const AdminNavigation = () => {
    return (
        <>
            <center className='adminNavContainer'>
                <Link to='/admin' className='adminNav'> Home</Link>
                <Link to='/admin/homeBanner' className='adminNav'> Home Banner</Link>
                <Link to='/admin/homePortfolio' className='adminNav'>Home Portfolio</Link>
                <Link to='/admin/portfolio' className='adminNav'>Portfolio </Link>
                <Link to='/admin/counter' className='adminNav'> Counter</Link>
                <Link to='/admin/team' className='adminNav'> Team</Link>
            </center>
        </>
    );
};

export default AdminNavigation;