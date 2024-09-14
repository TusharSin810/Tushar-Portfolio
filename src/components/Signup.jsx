import React from 'react'
import ParticlesSignup from './ParticlesSignup'
import axios from 'axios'

function Signup() {

    async function signup(){
        const username = document.getElementById("userid").value;  
        const password = document.getElementById("passid").value;
        
        await axios.post("http://localhost:3000/login", {
            username: username,
            password: password
        });
        alert("You are signed Up");    
    }

  return (
    <div>
      <ParticlesSignup id="psignup" />
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-[#E4E5E8] font-bold text-3xl pb-12'>Sign-Up</h1>
        <div className='bg-[#4D0011] py-10 px-14 w-max flex flex-col items-center gap-2 sm:py-14 sm:px-36'>  
          <input id='userid' type='text' placeholder='Username'></input>
          <input id='passid' type='text' placeholder='Password'></input>
          <button onClick={signup} className='bg-[#4B443C] w-max rounded-xl p-1 px-6 mt-4'>SignUp</button>
        </div>
      </div>  
    </div>
  )
}

export default Signup
