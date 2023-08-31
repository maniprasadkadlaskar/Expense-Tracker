import React from 'react'
import { useEffect, useState } from 'react'
import ExpenseCard from '../ExpenseCard'
import { deleteData, fetchData, fetchFilteredData } from '../../Config'

const Expenses = () => {

    const [expenseDataList , setExpenseDataList] = useState([])

    // To calculate total amount 
    const getTotal = () => {
        let sum = 0
        expenseDataList.forEach((e) => {
            sum += parseInt(e.amount)
        })

        return sum
    }

    // To delete a expense 
    const deleteHandler = (id) => {
        deleteData(id)
        fetchData(setExpenseDataList)
    }

    // To filter the data 
    const filterData = (e) => {
        fetchFilteredData(setExpenseDataList , e.target.value)
    }

    // Initial load 
    useEffect(() => {
        fetchData(setExpenseDataList)
    },[])

    return (
        // expense-cards grid 
        <div className='main-content-container'>
            <div className='main-header'>
                <div className='content-header'>
                    <span>Expenses</span>
                </div>
                <div className='content-pill'>
                    <span>{getTotal()} INR</span>
                </div>
            </div>

            <div className='main-content'>
                <div>
                    <input 
                        type="search" 
                        name="search" 
                        id="search"
                        placeholder='Search expense'
                        className='search-box'
                        onChange={filterData}
                    />
                </div>
                {expenseDataList.length !== 0 ? expenseDataList.map((expenseData , index) => <ExpenseCard key={index} expenseData={expenseData} deleteHandler={deleteHandler}/>) 
                : ( <div className='middle-content'>No data found</div> )}
            </div>
        </div>
    )
}

export default Expenses