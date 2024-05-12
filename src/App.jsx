import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Login from './components/login_register/Login'
import Register from './components/login_register/Register'
import Notfound from './components/404/Notfound'
import Account from './components/account/Account'
import { Logout } from './components/login_register/Logout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='account' element={<Account />} />
        <Route path='*' element={<Notfound />} />

      </Routes>
    </>
  )
}

export default App
