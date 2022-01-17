import React from 'react'
import PropTypes from 'prop-types'

const ViewMoreCard = (props) => {
  return (
        <div className='flex p-5 m-3 md:m-2 flex-col justify-center items-start text-left bg-green-400'>
            <div className='name'>
                <h2>{props.company}</h2>
                <h3>{props.product}</h3>
            </div>
            <div className='product--details'>
                <h4>{props.nafdac}</h4>
                <div>
                  <span>
                      Manufacturing Date: <time> {props.date} </time>
                  </span>
                </div>
              <div>
                  <span>
                      Product Category:{props?.category}
                  </span>
              </div>
            </div>
            <button className='bg-white w-full m-2 py-2 px-3 rounded-xl hover:shadow-xl '>View More</button>
        </div>
  )
}

ViewMoreCard.propTypes = {
  company: PropTypes.string,
  date: PropTypes.string,
  product: PropTypes.string,
  nafdac: PropTypes.string,
  category: PropTypes.string
}

export default ViewMoreCard
