import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
// create context 
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    // Theme 
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode')=="true" ? "true": "false");
    useEffect(()=>{
        localStorage.setItem('darkmode', darkMode);
        const localTheme = localStorage.getItem('darkmode');
        console.log("loacl theme: ", localTheme);
        setDarkMode(localTheme);
    },[darkMode])

    const AuthInfo = {
        darkMode, setDarkMode,
    }
    return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
    );
};
// Adding proptypes 
AuthProvider.propTypes ={
    children: PropTypes.node.isRequired,
}
export default AuthProvider;