import React from 'react'
import {CardCom} from './uiComponents/CardCom'
import cardD from '../../data/cardinfo.json'

function Projects() {
  return (
    <div className='h-max bg-[#4B443C] pt-5'>
      <h2 className='w-screen text-2xl font-extrabold text-white flex justify-center pb-4' >Projects</h2>
      <div className='flex flex-row flex-wrap justify-evenly px-16'>
        {cardD.map((data,index) => (
        <CardCom key={data.id || index} title={data.title} description={data.description} link={data.link} image={data.image} live={data.live} code={data.code} />
      ))}
      </div>
    </div>
  )
}

export default Projects
