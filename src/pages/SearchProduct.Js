import React from 'react'
import Input from '../components/Input'

const SearchProduct = () => {
  const Search =
    {
      name: 'product',
      key: 1,
      placeholder: 'Enter Nafdac No or Name',
      id: 'product',
      type: 'text'
    }
  return (
      <>
          <div>
              <h1 className=' text-4xl sm:text-6xl font-semibold text-center'> Search Product</h1>
          </div>
          <section className='w-full mt-4 flex justify-center'>
              <div className='form-control w-full max-w-lg'>
                  <form className='bg-green-700 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                      <Input key={Search.key} product={Search} />
                      <div className=' text-center mt-3'>
                          <button className='bg-white hover:bg-gray-300 w-full active:bg-gray-700 text-green-700 font-bold py-2 px-4 rounded focus:outline-none focusshadow-outline' type="button">Search Product</button>
                      </div>
                  </form>
              </div>
          </section>
      </>
  )
}

export default SearchProduct
