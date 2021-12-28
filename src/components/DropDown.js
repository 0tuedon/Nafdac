import React from 'react'
import '../styles/components/DropDown.css'
const DropDown = () => {
  return (
        <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Register Product</a>

                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Search Product</a>

                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Verify Product</a>

                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">View All Products</a>
            </div>
        </div>
  )
}

export default DropDown
