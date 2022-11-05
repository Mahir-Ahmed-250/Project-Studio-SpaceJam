import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

import './Toggle.css';

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <label class="switch" >
            <input type="checkbox" onClick={handleClick} />
            <span class="slider round"></span>
        </label>

    );
};

export default Toggle;