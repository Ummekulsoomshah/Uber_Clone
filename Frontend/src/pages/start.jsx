import React from 'react'
import {Link} from 'react-router-dom'

const start = () => {
  return (
    <div>
    <div className="bg-cover bg-bottom bg-[url(https://media.gettyimages.com/id/526811099/vector/traffic-lights.jpg?s=1024x1024&w=gi&k=20&c=QJeMAIwrNVz6lMGzEjjvW6i914TFsgmHmfRHkLB-6fM=)] h-screen pt-8 flex justify-between flex-col w-full bg-red-500">
      <img className='w-16 ml-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <div className="bg-white py-4 px-4">
        <h2 classname="text-3xl font-bold">Get Started with Uber</h2>
        <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2'>Sign Up</Link>
      </div>
    </div>
    </div>
  )
}

export default start
