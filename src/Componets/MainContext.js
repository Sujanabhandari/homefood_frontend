import React, { Children } from 'react'
import { createContext, useContext, useState, useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { getUser } from '../utils/regitsterUser';
const HomeContext = createContext(null);

export const useHomeContext = () => 
    useContext(HomeContext);


export default function MainContext({children}) 
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

    const [registerFormState, setRegisterFormState] = useState({
      userName: "",
      email: "",
      profilePic: "",
      password: ""
    });

    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

      const validateToken = async () => {
        console.log("test")
        try {
          const { data, error } = await getUser(token);
          if (error) {
            throw new Error(error.response?.data.error || error.message);
          }
          console.log(data)
          setUser(data);
          setIsAuthenticated(true);
        } catch (error) {  
          console.log(error)
        }
      };
      token && validateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);
    

  return (
    
     <HomeContext.Provider value={{
        isAuthenticated, setIsAuthenticated, setFormState, formState, registerFormState,
        setRegisterFormState, token, setToken, user, setUser
     }}>
        {children}
    </HomeContext.Provider>
  )

}
