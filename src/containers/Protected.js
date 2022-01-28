import React from 'react'
import { Route, Routes } from 'react-router'
import AdminLogin from '../pages/AdminLogin'
import AuthenticateProduct from '../pages/AuthenticateProduct'
import Dashboard from '../pages/Dashboard'
import NewProduct from '../pages/NewProduct'
import RegisterManufacturer from '../pages/RegisterManufacturer'
import UserViewProduct from '../pages/UserViewProduct'

const Protected = () => {
  return (
        <Routes>
            <Route path="/admin" element={<AdminLogin/>} />
            <Route path="/admin/authenticate" element={<AuthenticateProduct />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/register" element={<NewProduct/>} />
            <Route path="/admin/products" element={<UserViewProduct />} />
            <Route path="/admin/manufacturer/create" element={<RegisterManufacturer />} />
            <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
  )
}

export default Protected
