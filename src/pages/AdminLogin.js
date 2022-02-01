
import React from 'react'
import { LoginArray } from '../utils/data/LoginInput'
import { useNavigate } from 'react-router'
import Input from '../components/Input'
import Button1 from '../components/Buttons'
const AdminLogin = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/admin/dashboard')
  }
  return (
        <div className="flex p-9 justify-center items-center">
            <form>
                {LoginArray.map(data => <Input key={data.key} product={data} />)}
                <Button1 class="w-full px-2 py-1 text-lg" text="Login" onClick={onClick} />
            </form>
        </div>
  )
}

export default AdminLogin
