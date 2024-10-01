import React from 'react'
import { Meteorscard } from './uiComponents/Meteorscard'

function Education() {
  return (
    <div className='bg-[#E4E5E8] h-screen w-screen flex flex-col items-center p-8 gap-10'>
       <h2 className='font-extrabold text-3xl text-[#4D0011]'>Education</h2>
       <div className='flex gap-6'>
      <Meteorscard />
      <Meteorscard />
      <Meteorscard />
       </div>
    </div>
   
  )
}

export default Education
