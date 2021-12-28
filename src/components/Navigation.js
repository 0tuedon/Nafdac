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
    <nav className='bg-green-800 p-2'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src={Nafdac} alt="Workflow" />
              <img className="hidden lg:block h-8 w-auto" src={Nafdac} alt="Workflow" />
            </div>
            <div className="hidden  sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Register Product</a>
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Search Product</a>
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Verify Product</a>
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">View All Products</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="absolute inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <button type="button" onMouseOver={hoverElement} onMouseOut={hoverElement} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
              </div>
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
