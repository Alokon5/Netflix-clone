import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth,db } from '../services/fireBase';
import { doc,setDoc } from "firebase/firestore";
import { createContext, useState, useEffect, useContext } from "react";




export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
        });
        return () => unsubscribe();
    }, []);

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
          
        setDoc(doc(db, 'users' ,email),{
            favShows:[],
        })
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    return <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}

