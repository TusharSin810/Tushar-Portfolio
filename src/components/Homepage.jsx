import React from 'react'
import Navbar from './Navbar'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Homepage() {
  
  const [typeEffect] = useTypewriter({
    words: ['Full Stack','Machine Learning','Web3'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })

  return (
    <div>
        <Navbar />       
          <div className='flex flex-col mx-20 my-14 h-screen'>
            <h1 className='text-5xl font-extrabold'>Hi,<br/>I'm Tushar Singhal</h1>
            <h2 className='my-3 font-bold text-2xl'>I Am Into {" "}  
              <span className='text-[#4D0011]'>{typeEffect}</span>
              <span className='text-[#4B443C] font-bold'><Cursor/></span>
            </h2>
          </div>
          <div className='min-h-screen'>
            <p className='flex justify-center bg-white h-screen'>Hello my name is Tushar Singhal. I am a web developer.</p>
          </div>
    </div>
  )
}

export default Homepage
