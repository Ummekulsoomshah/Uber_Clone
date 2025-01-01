import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [captainData, setcaptainData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
    setuserData({
        firstname, email, password })
    console.log(email, password,firstname)
    setEmail('')
    setPassword('')
    setFirstname('')

  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <img className='w-16 ml-1 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />

      <form onSubmit={(e) => { submitHandler(e) }}>
        <h3 className='text-xl mb-2'>Enter your Full name</h3>
        <div className='flex gap-4'>

          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            className='bg-white bg-[#eeeeee] rounded mt-2 mb-5 px-10 py-2 border border-black w-1/2 text-lg placeholder:text-base'
            placeholder='firstname'
            type="text" />
      
        </div>
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
          placeholder='captain123@' type="text" />
        <button
          className='mt-3 text-white bg-black flex items-center justify-center rounded px-10 py-2 border border-black w-full text-lg'
        >REGISTER</button>
        <p>Already have an Account<Link to='/captain-login' className='text-blue-600'>Sign in here</Link></p>
      </form>
      <div>
        <Link to='/register'
          className='bg-[#CD7F32] flex items-center justify-center rounded mt-5 px-10 py-2 border w-full text-lg placeholder:text-base'
        >Register as a User</Link>
      </div>
    </div>
  )
}

export default CaptainRegister
