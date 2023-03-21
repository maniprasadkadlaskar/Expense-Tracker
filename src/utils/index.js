import React, { useEffect, useState } from "react"
import { Outlet , useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase-config"

const PrivateRoutes = () => {
    const [user , setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth , (currentUser) => {
            currentUser ? setUser(currentUser) : navigate('/signin' , { replace : true });
        });
    } , []);

    return (
        user ? <Outlet /> : <div className="middle-content">Please wait...</div>
    )
}

export default PrivateRoutes