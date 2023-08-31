import React from "react"
import { useNavigate } from 'react-router-dom'
import { auth } from "../firebase-config"

const Home = () => {
    const navigate = useNavigate()

    const authHandler = () => {
        auth.currentUser ? navigate('/dashboard/expenses') : navigate('/signin')
    }

    return (
        // home-page 
        <div className='content-container'>
            <div className='main-text-content'>
                <span>
                    Expense Tracker is human expenses tracking web application. This application helps user to track his day today expenses.
                </span>
            </div>
            <div className='action-pill margin-around' onClick={authHandler}>
                <span>Dashboard</span>
            </div>
        </div>
    )
}

export default Home