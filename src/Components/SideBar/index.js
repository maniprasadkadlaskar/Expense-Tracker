import React, { useState } from 'react'
// import { onAuthStateChanged } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { logout } from '../../Config'
// import { auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
    
    const navigate = useNavigate()
    const [activeMenu , setActiveMenu] = useState('menu')
    const [icon , setIcon] = useState('bi bi-chevron-down')

    const logoutHandler = () => {
        logout()
        navigate('/')
    }

    const menuHandler = () => {
        if(activeMenu === 'menu') {
            setActiveMenu('active-menu') 
            setIcon('bi bi-chevron-up')
        }
        else {
            setActiveMenu('menu')
            setIcon('bi bi-chevron-down')
        }
    }

    return (
        // side-bar 
        <div className='sidebar'>
            <div className='content-header'>
                <span>Dashboard</span>
            </div>
            <div className='component-align'>
                <div>
                    <span>{localStorage.getItem('email')}</span>
                </div>
                <div className='dropdown-menu' onClick={menuHandler}>
                    <span><i className={icon}></i></span>
                </div>
            </div>
            <div className={activeMenu}>
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