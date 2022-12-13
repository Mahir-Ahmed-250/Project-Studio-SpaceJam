import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavigation = () => {
    return (
        <>
            <center>
                <Link to='/admin'> Home</Link>
                <Link to='/admin/homeBanner'> Home Banner</Link>
                <Link to='/admin/homePortfolio'>Home Portfolio</Link>
                <Link to='/admin/portfolio'>Portfolio </Link>
                <Link to='/admin/counter'> Counter</Link>
                <Link to='/admin/team'> Team</Link>
            </center>
        </>
    );
};

export default AdminNavigation;