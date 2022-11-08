import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import styles from './BannerTitle.module.css';

const BannerTitle = ({ title }) => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <>
            <h2 style={{ color: darkMode ? "#fff" : "#ffbb00" }} className={styles.title}>{title}</h2>
        </>
    );
};

export default BannerTitle;