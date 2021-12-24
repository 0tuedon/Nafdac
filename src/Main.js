import React from "react";
import { Route, Routes } from "react-router";
import AuthenticateProduct from "./pages/AuthenticateProduct";
import Dashboard from './pages/Dashboard'

const Main = ()=>
{
    return(
        <Routes>
            <Route path="/" element={<h2>I Am A Big Bot</h2>} />
           
            <Route path="*" element={<Protected/>} />
        </Routes>
    )
}

export default Main