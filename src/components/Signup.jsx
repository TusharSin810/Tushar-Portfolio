import React from 'react'
import ParticlesSignup from './ParticlesSignup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 

function Signup() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };    

  async function signup(){   
        const username = document.getElementById("userid").value;  
        const password = document.getElementById("passid").value;
        
        await axios.post("http://localhost:3000/login", {
            username: username,
            password: password
        });
        alert("You are signed Up");
        navigate("/");
    }

  return (
    <div className="mx-auto p-6 flex flex-col w-full md:w-1/2">
      <ParticlesSignup id="psignup" />
      <div className="flex justify-between mb-6">
        <button
          className={`p-2 w-full rounded-xl m-1 ${activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('login')}
        >
          Login
        </button>
        <button
          className={`p-2 w-full rounded-xl m-1 ${activeTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick('register')}
        >
          Register
        </button>
      </div>
      {activeTab === 'login' && (
        <div className='w-full h-0'>
          <div className="text-center mb-4 text-white">
            <p>Sign in with:</p>
            <div className="flex justify-between mx-auto w-1/2">
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

          <div className="flex justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500">Forgot password?</a>
          </div>

          <button className="bg-blue-500 text-white w-full p-2 rounded mb-4">Sign in</button>
          <p className="text-center">Not a member? <a href="#" className="text-blue-500">Register</a></p>
        </div>
      )}

      {activeTab === 'register' && (
        <div>
          <div className="text-center mb-4">
            <p>Sign up with:</p>
            <div className="flex justify-between mx-auto w-1/2">
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
            type="text"
            placeholder="Name"
            className="mb-4 p-2 border border-gray-300 w-full rounded"
          />
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-2 border border-gray-300 w-full rounded"
          />
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

          <div className="flex justify-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> I agree to the terms
            </label>
          </div>

          <button className="bg-blue-500 text-white w-full p-2 rounded mb-4">Sign up</button>
        </div>
      )}
    </div>
  );
}

export default Signup
