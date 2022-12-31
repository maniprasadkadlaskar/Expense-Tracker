import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './Pages/home'
import Expense from './Pages/expense'
import Expenses from './Components/Expenses'
import ExpenseForm from './Components/ExpenseForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Components/Authentication/signup'
import SignIn from './Components/Authentication/signin'
import PrivateRoutes from './utils'

const App = () => {

  return (
    // app routes 
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path='dashboard' element={<Expense />}>
            <Route path='expenses' element={<Expenses />} />
            <Route path=':operation' element={<ExpenseForm />} />
            <Route path=':operation/:id' element={<ExpenseForm />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
