import { createContext,useEffect,useState,useContext } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    singnInWithPopup
} from 'firebase/auth'
import {auth}from'../firebase'

const userAuthContext=createContext();

export function UserAuthContextProvider({children}){
    const[user,setUser]=useState("")
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
        return signOut(auth)
    }
    function googleSignIn(){
        const googleAuthProvider=new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }
    useEfffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            
        }
    }
}

