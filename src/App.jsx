import React from 'react'
import ParticlesComponent from './components/Particles'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <ParticlesComponent id ="particles"/>
       <Navbar />
      <div className='flex items-center justify-center min-h-96'>
        <h1 className='text-2xl font-extrabold'>Hello There</h1>
      </div>
      <div className='min-h-96'>
        <p className='flex justify-center'>Hello my name is Tushar Singhal i am a web developer </p>
      </div>
           
    </div>
  )
}

export default App
