import React from "react"
import { Outlet , Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    return (
        localStorage.getItem('uid') ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default PrivateRoutes