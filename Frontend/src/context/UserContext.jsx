import React, { createContext, useState } from 'react'
export const UserDataContext = createContext()

const UserContextState = ({ children }) => {
    const [user,setuser] =useState( {
            firstname:"",
      email:"",
      password:""
    })
    return (
        <div>
            <UserDataContext.Provider value={{user,setuser}}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContextState
