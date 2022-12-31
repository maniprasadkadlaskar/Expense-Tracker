import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import { loginWithGoogle, initialAuth } from "../Config"

const Home = () => {
    const navigate = useNavigate()

    const googleLoginHandler = () => {
        try{
            loginWithGoogle()
            .then(() => {
                navigate('/dashboard/expenses')
            })
        }
        catch (err) {
            console.log(err.message)
        }
    }

    const authHandler = () => {
        initialAuth() ? navigate('/dashboard/expenses') : navigate('/signin')
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
            <div className='main-item-container option-container'>
                <div className='margin-around'>
                    <Link className='action-pill' to='/signup'><span>Sign up</span></Link>
                </div>
                <div className='margin-around'>
                    <Link className='action-pill' to='/signin'><span>Sign in</span></Link>
                </div>
                <div className='margin-around action-pill' onClick={googleLoginHandler}>
                    <span><i className="bi bi-google"></i> Google</span>
                </div>
            </div>
        </div>
    )
}

export default Home