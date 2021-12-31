/* eslint-disable react/prop-types */
import React from 'react'

const Input = (props) => {
  const { product } = props
  return (
        <>
            <div className='mb-4'>
                <label htmlFor={product.id}></label>
                <input className='shadow appearance-none border rounded w-full py-2
                      px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                    id={product.id} type={product.type} placeholder={product.placeholder} name={product.name} />
            </div>
        </>
  )
}

export default Input
