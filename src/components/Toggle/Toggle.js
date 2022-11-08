import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

import './Toggle.css';


const ToggleSwitch = ({
    checked,
    id,
    disabled,
    ariaInvalid,
    ariaLabelledby,
    onChange,
}) => {

    return (
        <>
            <label className="switch" >
                <input type="checkbox"
                    checked={checked}
                    id={id}
                    className="ToggleSwitch_checkbox"
                    disabled={disabled}
                    onChange={onChange}
                    aria-invalid={ariaInvalid}
                    aria-labelledby={ariaLabelledby}
                />
                <span className="slider round" ></span>
            </label>
        </>
    );
};


const Toggle = () => {

    const [selected1, setSelected1] = React.useState(localStorage.getItem('toggle-switch-1') === 'true');
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <>

            <ToggleSwitch checked={selected1}
                id='toggle-switch-1'
                onChange={
                    (e) => {
                        localStorage.setItem('toggle-switch-1', `${e.target.checked}`);
                        setSelected1(e.target.checked);
                        handleClick()
                    }
                } />


        </>


    );
};

export default Toggle;