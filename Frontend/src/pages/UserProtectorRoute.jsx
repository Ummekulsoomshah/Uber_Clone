import React from 'react'
import { useNavigate } from 'react-router-dom'
const UserProtectorRoute = ({ children }) => {
    const token=localStorage.getItem('token')
    const navigat = useNavigate()
    if (!token) {
        navigat('/login')
    }
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectorRoute
