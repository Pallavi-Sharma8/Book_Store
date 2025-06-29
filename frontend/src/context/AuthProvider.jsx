import React, { createContext, use } from 'react'
import { useState, useContext } from 'react';
export const AuthContext = createContext();
export default function AuthProvider({children}) {
  const userInfo = localStorage.getItem("userInfo");
  const[user, setUser] = useState(userInfo ? JSON.parse(userInfo) : undefined);
  return (
   <AuthContext.Provider value={[user, setUser]}>
    {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);
