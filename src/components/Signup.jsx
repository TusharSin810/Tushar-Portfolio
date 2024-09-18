import React, { useState } from 'react';
import ParticlesSignup from './ParticlesSignup'

function Signup() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ParticlesSignup id="psignup"/>
      <div className='flex flex-col w-1/2 justify-center m-auto h-screen'>
      <div className="flex justify-between mb-4">
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
      </div>
      {activeTab === 'login' && (
        <div className=' flex flex-col items-center'>
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
            className="mb-4 p-2 border border-gray-300 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300 w-full rounded"
          />

          <div className="flex flex-row justify-around w-full mb-4">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500">Forgot password?</a>
          </div>

          <button className="bg-blue-500 text-white w-4/5 p-2 rounded mb-4">Sign in</button>
          <p className="text-center text-white">Not a member? <a href="#" className="text-blue-500">Register</a></p>
        </div>
      )}

      {activeTab === 'register' && (
        <div className='flex flex-col items-center'>
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
            placeholder="Name"
            className="mb-2 p-2 border border-gray-300 w-full rounded"
          />
          <input
            type="text"
            placeholder="Username"
            className="mb-2 p-2 border border-gray-300 w-full rounded"
          />
          <input
            type="email"
            placeholder="Email address"
            className="mb-2 p-2 border border-gray-300 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-2 p-2 border border-gray-300 w-full rounded"
          />

          <div className="flex justify-center mb-4">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" /> I agree to the terms
            </label>
          </div>

          <button className="bg-blue-500 text-white w-4/5 p-2 rounded mb-4">Sign up</button>
        </div>
      )}
    </div>  
    </div>  
  );
}

export default Signup;
