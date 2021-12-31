/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Input from '../components/Input'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { ProductArray } from '../utils/data/ProductInput'

const NewProduct = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [error, setError] = useState(false)
  const increase = (c) => {
    if (c === 0) {
      setPageNumber(prev => {
        if (prev >= 4) {
          setError(true)
          return prev
        } else {
          setError(false)
          return prev + 1
        }
      })
    } else {
      setPageNumber(prev => {
        if (prev <= 1) {
          setError(true)
          return 1
        } else {
          setError(false)
          return prev - 1
        }
      })
    }
  }
  const filteredArrayProduct = ProductArray.slice((pageNumber * 5) - 5, pageNumber * 5)
  return (
        <div>
            <div>
                <h1 className=' text-4xl sm:text-6xl font-semibold text-center'> Create A New Product</h1>
            </div>
            <section className='w-full mt-4 flex justify-center'>
                <div className='form-control w-full max-w-lg'>
                    <form className='bg-green-700 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                      {filteredArrayProduct.map(product => <Input key={product.key} product={product}/>)}
                      <div className='text-center text-gray-300 text-xl'>
                          <span>{pageNumber} / 4</span>
                      </div>
                      <div className=' text-center mt-3'>
                          <button className='bg-white hover:bg-gray-300 w-full active:bg-gray-700 text-green-700 font-bold py-2 px-4 rounded focus:outline-none focusshadow-outline' type="button">Create Product</button>
                      </div>
                    </form>
                    <div className='flex justify-center'>
                      <div onClick={increase} className={'bg-black cursor-pointer  rounded-full text-green-700 p-3 mr-4 text-4xl'}>
                            <AiOutlineCaretLeft/>
                        </div>
            <div onClick={increase.bind(this, 0)} className={pageNumber === 4 ? 'cursor-not-allowed bg-black rounded-full p-3 text-green-700 ml-3 text-4xl' : 'bg-black cursor-pointer rounded-full p-3 text-green-700 ml-3 text-4xl'}>
                            <AiOutlineCaretRight />
                        </div>

                    </div>
                </div>
            </section>
        </div>
  )
}

export default NewProduct
