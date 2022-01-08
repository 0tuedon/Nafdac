import React from 'react'

const ViewMoreCard = () => {
  return (
        <div className='flex p-5 m-3 md:m-2 flex-col justify-center items-start text-left bg-green-400'>
            <div className='name'>
                <h2>Company Name</h2>
                <h3>Product Name</h3>
            </div>
            <div className='product--details'>
                <h4>Nafac No</h4>
                <div>
                  <span>
                      Manufacturing Date:
                      <time>21st October 2022</time>
                  </span>
                </div>
              <div>
                  <span>
                      Manufacturing Date:
                      <time>21st October 2022</time>
                  </span>
              </div>
            </div>
            <button className='bg-white w-full m-2 py-2 px-3 rounded-xl hover:shadow-xl '>View More</button>
        </div>
  )
}
export default ViewMoreCard
