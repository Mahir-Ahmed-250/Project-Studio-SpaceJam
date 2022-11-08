import { useEffect } from "react";
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const data = window.localStorage.getItem('theme')
const INITIAL_STATE = { darkMode: JSON.parse(data) };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };

        default:
            return state
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
    // useEffect(() => {

    //     dispatch(JSON.parse(data))
    // }, [])

    useEffect(() => {

        window.localStorage.setItem("theme", JSON.stringify(state.darkMode))
    }, [state])
    return (
        <ThemeContext.Provider value={{ state, dispatch }
        }>{props.children}</ThemeContext.Provider>
    )

}