import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, setuser } = useContext(UserDataContext)
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    const userData = {
      email: email,
      password: password
    }
    console.log(userData)
    try {
      console.log('before')
      const response = await axios.post(`http://localhost:3000/user/login`, userData);

      console.log('response', response)
      if (response.status === 200) {
        const data = response.data
        console.log(data)
        setuser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    }
    catch (error) {
      console.log('error', error.response.data)
    }
    setEmail('')
    setPassword('')

  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <img className='w-16 ml-1 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />

      <form onSubmit={(e) => { submitHandler(e) }}>
        <h3 className='text-xl mb-2'>Enter your email address</h3>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-full text-lg placeholder:text-base'
          placeholder='user@gmail.com'
          type="email" />
        <h3>Enter your password</h3>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='bg-white bg-[#eeeeee] rounded px-10 mt-2 mb-5 py-2 border border-black w-full text-lg placeholder:text-base'
          placeholder='User123@'
          type="text" />
        <button
          className='mt-3 text-white bg-black flex items-center justify-center rounded px-10 py-2 border border-black w-full text-lg'
        >LOGIN</button>
        <p>New here?<Link to='/register' className='text-blue-600'>Create new Account</Link></p>
      </form>
      <div>
        <Link to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center rounded mt-5 px-10 py-2 border w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
