import React from "react"
import SideBar from "../Components/SideBar"
import { Outlet } from 'react-router-dom'

const Expense = () => {

    return (
        // user-dashboard 
        <div className='container'>
            <SideBar/>
            <Outlet/>
        </div>
    )
}

export default Expense