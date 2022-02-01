import React, { useState } from 'react'
import Button1 from '../components/Buttons'
import Input from '../components/Input'
import { ManufacturerAdd } from '../utils/data/ManufacturerAdd'

const RegisterManufacturer = () => {
  const [addManufacturer, setAddManufacturer] = useState({})
  console.log(addManufacturer)
  return (
        <div className='flex flex-row justify-center item-center'>
      <div className='w-2/4'>
        {ManufacturerAdd.map(data => <Input state={setAddManufacturer} onChange={() => {}} key={data.key} product={data} />)}
        <Button1 text="Create Manufacturer" onClick={() => { }} />
      </div>
        </div>
  )
}

export default RegisterManufacturer
