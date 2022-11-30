import React from 'react';
import styles from './AdminTitle.module.css';

const AdminTitle = ({ title }) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
        </>
    );
};

export default AdminTitle;