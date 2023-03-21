import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../Config'
import { auth } from '../../firebase-config'

const SideBar = () => {
    
    const [activeMenu , setActiveMenu] = useState('menu')
    const [icon , setIcon] = useState('bi bi-list')

    const logoutHandler = () => {
        logout()
    }

    const menuHandler = () => {
        if(activeMenu === 'menu') {
            setActiveMenu('active-menu') 
            setIcon('bi bi-x-lg')
        }
        else {
            setActiveMenu('menu')
            setIcon('bi bi-list')
        }
    }

    return (
        // side-bar 
        <div className='sidebar'>
            <div>
                <div className='dropdown-menu' onClick={menuHandler}>
                    <span><i className={icon}></i></span>
                </div>
                <div className='content-header'>
                    <span>Dashboard</span>
                </div>
            </div>
            <div className={activeMenu}>
                <div>
                    <span>{auth.currentUser.email}</span>
                </div>
                <div className='action-pill margin-around' onClick={logoutHandler}>
                    <span>Log out</span>
                </div>
                <div className='margin-around' onClick={menuHandler}>
                    <Link to='expenses' className='action-pill'><span>Expenses</span></Link>
                </div>
                <div className='margin-around' onClick={menuHandler}>
                    <Link to='add-expense' className='action-pill'><span>Add Expense</span></Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar