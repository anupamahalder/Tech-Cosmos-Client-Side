import { createContext, useState } from "react";
import PropTypes from 'prop-types';
// create context 
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    // Theme 
    const [darkMode, setDarkMode] = useState(false);

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