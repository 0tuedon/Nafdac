import React, { useState } from 'react'
import axios from 'axios'
import Input from '../components/Input'
const ShowAuthenitcateProduct = () => {
  const [value, setValue] = useState('')
  const [product, setProduct] = useState({})
  const [show, setShow] = useState(false)
  const onChange = (search) => {
    setValue(search)
  }
  const authenticate =
  {
    name: 'username',
    key: 1,
    placeholder: 'Enter Nafdac No',
    id: 'Nafdac',
    type: 'text'
  }
  const onSubmit = (e) => {
    console.log(value)
    e.preventDefault()
    axios.get('http://nafdac-backend.herokuapp.com/product', {
      params: {
        Nafdac: value
      }
    })
      .then(res => {
        console.log(res)
        setProduct(res.data.product)
        setShow(true)
      }).catch(err => {
        console.log(err)
      })
  }
  return (
        <div>
      <div>
        <h1 className=' text-4xl sm:text-6xl font-semibold text-center'> Check Verification</h1>
      </div>
      <section className='w-full mt-4 flex justify-center'>
        <div className='form-control w-full max-w-lg'>
          <form onSubmit={onSubmit} className='bg-green-700 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <Input key={authenticate.key} value={value} onChange={onChange} product={authenticate} />
            <div className=' text-center mt-3'>
              <button className='bg-white hover:bg-gray-300 w-full active:bg-gray-700 text-green-700 font-bold py-2 px-4 rounded focus:outline-none focusshadow-outline' type="submit">Check Verification</button>
            </div>
          </form>
        </div>
      </section>
      {show ? <h1> {product?.isVerfied ? 'Verified' : 'Not Verified'} </h1> : null} <h1></h1>
    </div>
  )
}

export default ShowAuthenitcateProduct
