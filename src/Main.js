import React from 'react'
import { Route, Routes } from 'react-router'
import Protected from './containers/Protected'
import Home from './pages/Home'
import LoginAccount from './pages/LoginAccount'
import NewProduct from './pages/NewProduct'
import SearchProduct from './pages/SearchProduct'
import ShowAuthenitcateProduct from './pages/ShowAuthenitcateProduct'
import UserViewProduct from './pages/UserViewProduct'

const Main = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LoginAccount />} />
            <Route path="/user/register" element={<NewProduct/>} />
            <Route path="/products/verify" element={<ShowAuthenitcateProduct/>} />
            <Route path="/products/search" element={<SearchProduct />} />
            <Route path="/user/products" element={<UserViewProduct />} />
            <Route path="*" element={<Protected/>} />
        </Routes>
  )
}

export default Main
