/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext({})

export function UserContextProvider({children})
{
    const [user,setUser] = useState(null);
    const [ready,setReady] = useState(false)
    useEffect(()=>{
        if(!user)
        {
          axios.get('/user-profile').then(({data})=>{
             setUser(data)
             setReady(true)
          })
        
        }
    },[])
    return (
        <userContext.Provider value={{user,setUser,ready}}>
            {children}
        </userContext.Provider>
    )
}