import React from "react";
import { Route, Routes } from "react-router";

const Main = ()=>
{
    return(
        <Routes>
            <Route path="/" element={<h2>I Am A Big Bot</h2>} />
        </Routes>
    )
}

export default Main