import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, pass) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    const login = (email, pass) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    const googleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        })
        return () => unsubscribe();
    }, [])


    const authInfo = {
        user,
        isLoading,
        createUser,
        login,
        googleLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;