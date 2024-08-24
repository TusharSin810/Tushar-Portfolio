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
    </div>
  )
}

export default App
