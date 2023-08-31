import React from 'react'
import { useNavigate } from 'react-router-dom'

const ExpenseCard = ({ expenseData , deleteHandler }) => {

    // To get month name 
    const getMonthName = (month) => {
        const months = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']
        return months[month]
    }

    // Initialize navigate 
    const navigate = useNavigate()

    // Route to edit page 
    const navigateTo = () => {
        navigate(`/dashboard/edit-expense/${expenseData.id}`)    
    }

    // Delete expense event handler 
    const deleteClickHandler = () => {
        if(window.confirm('Do you want to delete ?'))
            deleteHandler(expenseData.id)
    }

    return (
        // expense-card 
        <div className='component-content'>
            <div className='sub-container'>
                <div className='box-pill'>
                    <div>{getMonthName(new Date(expenseData.date).getMonth())}</div>
                    <div>{new Date(expenseData.date).getDate()}</div>
                    <div>{new Date(expenseData.date).getFullYear()}</div>
                </div>
                <div className='content-header'>
                    <span>{expenseData.title}</span>
                </div>
            </div>
            <div className='sun-container text-description'>
                <p>{expenseData.description}</p>
            </div>
            <div className='sub-container float-right'>
                <div className='content-pill'>
                    <span>{expenseData.amount} INR</span>
                </div>
                <div className='content-pill' onClick={navigateTo}>
                    <span><i className="bi bi-pencil-fill"></i> Edit</span>
                </div>
                <div className='content-pill' onClick={deleteClickHandler}>
                    <span><i className="bi bi-trash3-fill"></i> Delete</span>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default ExpenseCard