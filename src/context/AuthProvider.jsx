import React, {createContext, useEffect, useState} from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
import {setLocalStorage} from '../utils/LocalStorage'

export const AuthContext=createContext()


const AuthProvider = ({children}) => {
  
  
  const[userData,setUserData]=useState(null)
  
  useEffect(()=>{
    if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      setLocalStorage()
    }
    const {employees}=getLocalStorage()
    setUserData(employees)
  },[])

  return (
    <div>
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
