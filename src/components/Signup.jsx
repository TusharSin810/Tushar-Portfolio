import React, { useState } from 'react';
import ParticlesSignup from './ParticlesSignup'
import {motion} from 'framer-motion'
import {useNavigate } from 'react-router-dom';
import axios from 'axios'

function Signup({setIsLoggedIn}) {

    async function signin(){
    const email = document.getElementById('userEmail').value
    const password = document.getElementById('userPassword').value
    const response = await axios.post("http://localhost:5000/signin",{
       email:email,
       password:password
    });
    const userToken = response.data.token;
    localStorage.setItem('token',userToken);
    if(localStorage.getItem('token') == userToken){
      setIsLoggedIn(true);
      navigate('/')
    }   
  }

  async function signup(){
    const name = document.getElementById('uName').value
    const email = document.getElementById('uEmail').value
    const password = document.getElementById('uPassword').value
    await axios.post("http://localhost:5000/signup",{
       name:name,
       email:email,
       password:password
    });
  }


  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate()

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div>
      <ParticlesSignup id="psignup"/>
      <motion.div className='flex flex-col w-1/2 justify-center m-auto h-screen' 
      initial={{x:-1000}}
      animate={{x:0}}
      transition={{duration:1.5}}
      >
      <motion.div className="flex justify-between mb-4"
      key={activeTab}
      initial={{y:-1000}}
      animate={{y:0}}
      transition={{duration:1.5}}
      >
        <button
          className={`p-1 w-full rounded-xl m-1 ${activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('login')}
        >
          Login
        </button>
        <button
          className={`p-1 w-full rounded-xl m-1 ${activeTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('register')}
        >
          Register
        </button>
      </motion.div>
      {activeTab === 'login' && (
        <motion.div className=' flex flex-col items-center'
        initial={{x:-1000}}
        animate={{x:0}}
        transition={{duration:2}}
        >
          <div className="text-center mb-2 text-white">
            <p>Sign in with:</p>
            <div className="flex flex-row justify-between gap-20">
              <button className="text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="text-blue-500">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="text-blue-500">
                <i className="fab fa-google"></i>
              </button>
              <button className="text-blue-500">
                <i className="fab fa-github"></i>
              </button>
            </div>
            <p className="text-center mt-4">or:</p>
          </div>

          <input
            type="email"
            placeholder="Email address"
            id='userEmail'
            className="mb-4 p-2 border border-gray-300 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            id='userPassword'
            className="mb-4 p-2 border border-gray-300 w-full rounded"
          />

          <div className="flex flex-row justify-around w-full mb-4">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500">Forgot password?</a>
          </div>

          <button className="bg-blue-500 text-white w-4/5 p-2 rounded mb-4" onClick={() => signin()}>Sign in</button>
        <p className="text-center text-white">Not a member? <a onClick={() => handleTabClick('register')} className="text-blue-500 cursor-pointer">Register</a></p>
        </motion.div>
      )}

      {activeTab === 'register' && (
        <motion.div className='flex flex-col items-center'
        initial={{x:-1000}}
        animate={{x:0}}
        transition={{duration:2}}
        >
          <div className="text-center mb-1 text-white">
            <p>Sign up with:</p>
            <div className="flex flex-row justify-between w-full gap-20">
              <button className="text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="text-blue-500">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="text-blue-500">
                <i className="fab fa-google"></i>
              </button>
              <button className="text-blue-500">
                <i className="fab fa-github"></i>
              </button>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>

          <input
            type="text"
            placeholder="Username"
            id='uName'
            className="mb-2 p-2 border border-gray-300 w-full rounded"
          />
          <input
            type="email"
            id='uEmail'
            placeholder="Email address"
            className="mb-2 p-2 border border-gray-300 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            id='uPassword'
            className="mb-2 p-2 border border-gray-300 w-full rounded"
          />

          <div className="flex justify-center mb-4">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" /> I agree to the terms
            </label>
          </div>

          <button className="bg-blue-500 text-white w-4/5 p-2 rounded mb-4" onClick={() => signup()}>Sign up</button>
        </motion.div>
      )}
    </motion.div>  
    </div>  
  );
}

export default Signup;
