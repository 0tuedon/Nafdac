import React, { useEffect, useState } from 'react'
import ViewMoreCard from '../components/ViewMoreCard'
import { Loading } from '../components/Loading'
import axios from 'axios'

const UserViewProduct = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(product)
  useEffect(() => {
    setLoading(true)
    axios.get('http://nafdac-backend.herokuapp.com/products',
      {
        headers:
      { 'Access-Control-Allow-Origin': '*' }
      })
      .then(res => {
        setLoading(false)
        setProduct(res.data.product)
      })
      .catch(err => {
        setLoading(false)
        console.error(err)
      })
    return () => {
      setProduct([])
    }
  }, [])
  return (
        <div className='md:flex m-3 flex-row justify-between'>
        {loading && <Loading/>}
          {product.map((data, index) =>
            <ViewMoreCard
            key={index}
            product={data.productName}
            company={data.owner}
            nafdac={data.productNafdac}
            category={data.productType}
            date={data.dateofRegistration}
            id={data.id}
            />
          )}
        </div>
  )
}

export default UserViewProduct
