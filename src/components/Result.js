import React from 'react'
import PropTypes from 'prop-types'

const Result = props => {
  const { product } = props
  return (
        <section className='mt-3 flex flex-row justify-center items-center '>
            <div className=''>
              <h3>Name: {product?.productName}</h3>
              <h3>Company Name: {product?.owner} </h3>
              <div>
                  <h5>Product Nafdac: {product?.productNafdac} </h5>
                  <h5>Product Category: {product?.productCategory} </h5>
              </div>
              <div><time>Manufacturing Date: {product?.dateOfRegistration}</time></div>
            </div>
        </section>
  )
}

Result.propTypes = {
  product: PropTypes.object
}

export default Result
