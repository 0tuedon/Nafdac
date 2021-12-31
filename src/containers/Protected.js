import React from 'react'
import { Route, Routes } from 'react-router'
import AuthenticateProduct from '../pages/AuthenticateProduct'
import Dashboard from '../pages/Dashboard'
import NewProduct from '../pages/NewProduct'
import UserViewProduct from '../pages/UserViewProduct'

const Protected = () => {
  return (
        <Routes>
            <Route path="/user/authenticate" element={<AuthenticateProduct />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/register" element={<NewProduct/>} />
            <Route path="/user/products" element={<UserViewProduct />} />
            <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
  )
}

export default Protected
