import React, { useState } from 'react'
import Input from '../components/Input'
import axios from 'axios'
import Result from '../components/Result'

const SearchProduct = () => {
  const [value, setValue] = useState('')
  const [product, setProduct] = useState({})
  const onChange = (search) => {
    setValue(search)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    axios.get('https://nafdac-backend.herokuapp.com/product', {
      params: {
        Nafdac: value
      }
    })
      .then(res => {
        console.log(res)
        setProduct(res.data.product)
      }).catch(err => {
        console.log(err)
      })
  }
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
                  <form onSubmit={onSubmit} className='bg-green-700 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                      <Input key={Search.key}
                      value={value}
                      onChange={onChange} product={Search} />
                      <div className=' text-center mt-3'>
                          <button type="submit" className='bg-white hover:bg-gray-300 w-full active:bg-gray-700 text-green-700 font-bold py-2 px-4 rounded focus:outline-none focusshadow-outline'>Search Product</button>
                      </div>
                  </form>
              </div>
          </section>
          <Result
              product={product}
          />
      </>
  )
}

export default SearchProduct
