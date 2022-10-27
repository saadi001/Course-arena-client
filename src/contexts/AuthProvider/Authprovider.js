import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Authprovider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const providerLogin = () =>{
          setLoading(true);
          return signInWithPopup(auth, provider)
     }

     const githubPopup = () =>{
          setLoading(true)
          return signInWithPopup(auth, githubProvider)
     }

     const createUser = (email, password) =>{
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const signIn = (email, password) =>{
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     const updateUserProfile = (profile) =>{
          return updateProfile(auth.currentUser, profile);
     }

     const logOut = () =>{
          return signOut(auth);
     }

     useEffect(()=>{
          const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
               console.log('current user is: ', currentUser)
               setUser(currentUser);
               setLoading(false);
          })
          return ()=>{
               unsubscribe();
          }
},[])

     const authInfo = {user, loading, providerLogin, githubPopup, logOut,createUser, signIn,setUser,updateUserProfile,setLoading};
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default Authprovider;
