import React, { Children } from 'react'

import { createContext, useContext, useState } from 'react';

const HomeContext = createContext(null);

export const useHomeContext = () => 
    useContext(HomeContext);


export default function MainContext({isAuthenticated, setToken,setIsAuthenticated, logout, children}) 
{
    
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        quantity: "",
        image: "",
        price: "",
        timeSlot: "",
        address: "",
        specials: [],
        categories: ""
    });
    

  return (
    
     <HomeContext.Provider value={{
        isAuthenticated, setIsAuthenticated, setToken, setFormState, formState
     }}>
        {children}
    </HomeContext.Provider>
  )
}
