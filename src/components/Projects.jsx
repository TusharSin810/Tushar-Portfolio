import React from 'react'
import { CardCom } from './uiComponents/CardCom'


function Projects() {
  return (
    <div className='h-max bg-[#4B443C] p-10 pb-10'>
      <h2 className='w-screen text-2xl font-extrabold text-white flex justify-center pb-4' >Projects</h2>
      <div className='flex flex-row justify-between'>
        <CardCom />
        <CardCom />
        <CardCom />
      </div>
    </div>
  )
}

export default Projects
