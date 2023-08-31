import React from "react";
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle } from "../../Config";


const OtherAuth = () => {
    const navigate = useNavigate()

    const googleLoginHandler = () => {
        try {
            loginWithGoogle()
                .then(() => {
                    navigate('/dashboard/expenses')
                })
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <div className="text-content">
                <span>or</span>
            </div>
            <div className='main-item-container'>
                <div className='margin-around content-pill'>
                    <span onClick={googleLoginHandler}>Sign in with <i className="bi bi-google"></i> Google</span>
                </div>
            </div>
        </>
    );
}

export default OtherAuth;