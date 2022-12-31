import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../Config'

const SignIn = () => {

    const navigate = useNavigate()

    const [formData , setFormData] = useState({
        email : '',
        password : ''
    })

    const [error , setError] = useState('')

    const inputHandler = (e) => {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        login(formData.email , formData.password)
        .then((data) => {
            if(data.status === 'ok') navigate('/dashboard/expenses')
        })
        .catch(err => setError(err.message))
        resetHandler()
    }

    const resetHandler = () => {
        setFormData({
            email : '',
            password : ''
        })
    }

    return (
        <div className="content-container">
            <div className="content-header">
                <span>Sign In</span>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <input 
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={inputHandler}
                    placeholder='Email'/>
                </div>
                <div>
                    <input
                    type='password'
                    name='password' 
                    value={formData.password}
                    onChange={inputHandler}
                    placeholder='Password'/>
                </div>
                <div className='text-content text-red'>
                    <span>{error}</span>
                </div>
                <div className='form-buttons'>
                    <button type='submit' className='action-pill text-content'>Sign in</button>
                </div>
                <div className='text-content'>
                    <span>Don't have account ? </span>
                    <Link to='/signup'>Click here</Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn