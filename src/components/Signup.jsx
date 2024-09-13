import React from 'react'
import ParticlesSignup from './ParticlesSignup'
function Signup() {
  return (
    <div>
      <ParticlesSignup id="psignup" />
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-[#E4E5E8] font-bold text-3xl pb-12'>Sign-Up</h1>
        <div className='bg-[#4D0011] p-16 px-36 w-max flex flex-col items-center gap-2'>  
          <input type='text' placeholder='Username'></input>
          <input type='text' placeholder='Password'></input>
          <button className='bg-[#4B443C] w-max rounded-xl p-1 px-6 mt-4'>SignUp</button>
        </div>
      </div>  
    </div>
  )
}

export default Signup
