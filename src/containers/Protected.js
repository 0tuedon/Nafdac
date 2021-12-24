import React from 'react'
import { Route, Routes } from 'react-router';
import AuthenticateProduct from '../pages/AuthenticateProduct';
import Dashboard from '../pages/Dashboard';
import RegisterProduct from '../pages/RegisterProduct'
import UserViewProduct from '../pages/UserViewProduct'

const Protected = () => {

    return (
        <Routes>
            <Route path="/user/authenticate" element={<AuthenticateProduct />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/register" element={<RegisterProduct />} />
            <Route path="/user/products" element={<UserViewProduct />} />
        </Routes>
    )
}

export default Protected;
