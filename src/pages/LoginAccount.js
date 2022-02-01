
import React, { useState } from 'react'
import axios from 'axios'
import { LoginArray } from '../utils/data/LoginInput'
import Input from '../components/Input'
import Button1 from '../components/Buttons'
import { useNavigate } from 'react-router'
const LoginAccount = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({})
  const submit = (e) => {
    e.preventDefault()
    axios.post('https://nafdac-backend.herokuapp.com/api/manufacturer/login', login)
      .then(res => {
        console.log(res)
        navigate('/')
      }

      )
      .catch(err => {
        console.log(err)
        navigate('/login')
      }

      )
  }
  console.log(login)
  return (
        <div className="flex p-9 justify-center items-center">
            <form>
                {LoginArray.map(data => <Input onChange={() => {}} addProduct={setLogin} key={data.key} product={data}/>)}
                <Button1 onClick={submit} class="w-full px-2 py-1 text-lg" text="Login"/>
            </form>
        </div>
  )
}

export default LoginAccount
