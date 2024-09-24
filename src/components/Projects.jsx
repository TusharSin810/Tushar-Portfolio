import React from 'react'
import {CardCom} from './uiComponents/CardCom'
import cardD from '../../data/cardinfo.json'

function Projects() {
  return (
    <div className='h-max bg-[#4B443C] pt-5'>
      <h2 className='w-screen text-2xl font-extrabold text-white flex justify-center pb-4' >Projects</h2>
      <div className='flex flex-row justify-evenly flex-wrap'>
        {cardD.map((data) => (
        <CardCom title={data.title} description={data.description} link={data.link} image={data.image} />
      ))}
      </div>
    </div>
  )
}

export default Projects
