import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from '../firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,
onAuthStateChanged,
signOut
} from 'firebase/auth'
const Context=createContext()


export function Usercontext({children}) {
    const [user,setUser]=useState({})
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
        })
        return ()=>{
            unsubscribe()
        }
    },[]);
  return (
    <Context.Provider value={{user,login,signup,logout}}>
      {children}
    </Context.Provider>
  )
}
export function useUserAuth(){
    return useContext(Context)
}

