import React from 'react'
import {CardCom} from './uiComponents/CardCom'
import cardD from '../../data/cardinfo.json'

function Projects() {
  return (
    <div className='h-max bg-white pt-5'>
      <h2 className='w-screen text-4xl font-extrabold text-[#4D0011] flex justify-center pb-4' >Projects</h2>
      <div className='flex flex-row flex-wrap justify-evenly px-16'>
        {cardD.map((data,index) => (
        <CardCom key={data.id || index} title={data.title} description={data.description} link={data.link} image={data.image} live={data.live} code={data.code} />
      ))}
      </div>
    </div>
  )
}

export default Projects
