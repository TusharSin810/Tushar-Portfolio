import React from 'react'
import Navbar from './Navbar'
import ParticlesComponent from './Particles'

function Homepage() {
  return (
    <div>
        <ParticlesComponent id="particles" />
        <Navbar />       
          <div className='flex items-center justify-center min-h-screen'>
            <h1 className='text-2xl font-extrabold'>Hello There</h1>
          </div>
          <div className='min-h-screen'>
            <p className='flex justify-center'>Hello my name is Tushar Singhal. I am a web developer.</p>
          </div>
    </div>
  )
}

export default Homepage
