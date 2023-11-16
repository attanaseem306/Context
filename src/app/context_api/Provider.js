'use client'
import React, { createContext, useState } from 'react'

export const user = createContext();

const Provider = ({children}) => {
    const [login , setLogin] = useState('login');
  return (
    <div>
      <user.Provider value={{login , setLogin}}>
        {children}
      </user.Provider>
    </div>
  )
}

export default Provider
