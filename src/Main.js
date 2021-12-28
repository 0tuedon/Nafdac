import React from 'react'
import { Route, Routes } from 'react-router'
import Protected from './containers/Protected'
import Home from './pages/Home'
const Main = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Protected/>} />
        </Routes>
  )
}

export default Main
