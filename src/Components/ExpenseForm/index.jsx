import React from "react"
import { useEffect, useState } from "react"
import { fetchDataById, postData, updateData } from "../../Config"
import { useParams , useNavigate } from "react-router-dom"

const ExpenseForm = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [formType , setFormType] = useState()

    // Initial load 
    useEffect(() => {
        if(params.operation === 'add-expense') {
            setFormType('Add')
        }
        else {
            setFormType('Edit')
            fetchDataById(params.id , setFormData)
        }
    },[])

    const [formData , setFormData] = useState({
        title : '',
        description : '',
        amount : 0,
        date : new Date().toLocaleDateString('en-CA')
    })

    // Updating form field state 
    const inputHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })

    }

    // Form submission 
    const submitHandler = (e) => {
        e.preventDefault()
        formType === 'Add' ? postData(formData) : updateData(formData)
        navigate('/dashboard/expenses')
    }

    // Reset form fields 
    const resetHandler = () => {
        setFormData({
            title : '',
            description : '',
            amount : 0,
            date : ''
        })
    }

    return (
        // expense-form 
        <div className='main-content-container'>
            <div className='main-header'>
                <div className='content-header'>
                    <span>{formType} Expense</span>
                </div>
            </div>

            <div className='main-content'>
                <form className='form-content content-header' onSubmit={submitHandler} onReset={resetHandler}>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            value= {formData.title}
                            placeholder='Enter Title'
                            onChange={inputHandler}
                            required />
                    </div>
                    <div>
                        <label htmlFor='description'>Description</label>
                        <textarea
                            id='description'
                            name='description'
                            value={formData.description}
                            placeholder='Enter Description'
                            onChange={inputHandler}
                            required />
                    </div>
                    <div>
                        <label htmlFor='amount'>Amount</label>
                        <input
                            type='number'
                            min='0'
                            id='amount'
                            name='amount'
                            value={formData.amount}
                            placeholder='Enter Amount'
                            onChange={inputHandler}
                            required />
                    </div>
                    <div>
                        <label htmlFor='date'>Date</label>
                        <input
                            type='date'
                            id='date'
                            name='date'
                            value={formData.date}
                            onChange={inputHandler}
                            required />
                    </div>

                    <div className='form-buttons'>
                        <button type='submit' className='action-pill text-content'>{formType}</button>
                        <button type='reset' className='action-pill text-content'>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ExpenseForm