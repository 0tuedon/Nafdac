/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import HoverProfile from './HoverProfile'
import DropDown from './DropDown'
import Nafdac from '../assets/image/nafdac.png'
const Navigation = () => {
  //   const [showHamburger,setHamburger] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [hover, setHover] = useState(false)
  const hoverElement = () => {
    setHover(!hover)
  }
  return (
    <nav className='bg-green-700 p-1'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* <img className="block md:hidden h-8 w-auto" src={Nafdac} alt="NAFDAC LOGO" /> */}
              <img className="hidden lg:block h-8 w-auto" src={Nafdac} alt="NAFDAC LOGO" />
            </div>
            <div className="hidden  md:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="/user/register" className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Register Product</a>
                <a href='/products/search' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Search Product</a>
                <a href="/products/verify" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Verify Product</a>
                <a href="/user/products/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">View All Products</a>
                <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-x-0 left-0 md:right-0 flex items-center md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="absolute inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              {hover && <HoverProfile />}
            </div>
            {hover && <HoverProfile />}
          </div>
        </div>
      </div>
      {isOpen && <DropDown/>}
    </nav>
  )
}

export default Navigation
