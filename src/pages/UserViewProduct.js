import React from 'react'
import ViewMoreCard from '../components/ViewMoreCard'

const UserViewProduct = () => {
  return (
        <div className='md:flex m-3 flex-row justify-between'>
          <ViewMoreCard/>
          <ViewMoreCard />
          <ViewMoreCard />
        </div>
  )
}

export default UserViewProduct
