import React from 'react'
import logo from '../../logo.png'

const NavBar = () => {

    return (
        // page-nav-bar 
        <nav className='navbar'>
            <a href='/'>
                <span className='brand-logo'><img src={logo} alt='logo'/></span>
                <span className='brand-name'>Expense Tracker</span>
            </a>
        </nav>
    )
}

export default NavBar