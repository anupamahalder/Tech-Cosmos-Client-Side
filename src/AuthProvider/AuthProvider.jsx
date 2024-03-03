import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// create context 
export const AuthContext = createContext(null);
// create google provider 
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    // Theme 
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode')=="true" ? "true": "false");
    useEffect(()=>{
        localStorage.setItem('darkmode', darkMode);
        const localTheme = localStorage.getItem('darkmode');
        //console.log("loacal saved theme: ", localTheme);
        setDarkMode(localTheme);
    },[darkMode]);
    // declare a state to store value of loading 
    const [loading, setLoading] = useState(true);
    //declare state to hold value of user
    const [user, setUser] = useState(null);

    // create user with email and password 
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email and password 
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in/ login with google provider
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);
    }
    // set an observer 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setLoading(false);
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    },[])
    // log out 
    const logOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const AuthInfo = {
        darkMode, setDarkMode,
        createUser, signInUser,
        signInWithGoogle, logOutUser,
        loading, user,
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