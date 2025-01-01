import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setcaptainData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
    setcaptainData({ email, password })
    console.log(email, password)
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
          placeholder='captain@gmail.com'
          type="email" />
        <h3>Enter your password</h3>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='bg-white bg-[#eeeeee] rounded px-10 mt-2 mb-5 py-2 border border-black w-full text-lg placeholder:text-base'
          placeholder='captain123@'
          type="text" />
        <button
          className='mt-3 text-white bg-black flex items-center justify-center rounded px-10 py-2 border border-black w-full text-lg'
        >LOGIN</button>
        <p>New here?<Link to='/captain-register' className='text-blue-600'>Create new Account</Link></p>
      </form>
      <div>
        <Link to='/login'
          className='bg-[#CD7F32] flex items-center justify-center rounded mt-5 px-10 py-2 border w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
