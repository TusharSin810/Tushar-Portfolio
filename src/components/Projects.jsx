import React from 'react'
import {CardCom} from './uiComponents/CardCom'
import cardD from '../../data/cardinfo.json'
import ScrollAnimation from './uiComponents/ScrollAnimation'

function Projects() {
  return (
    <div className='h-max bg-[white] py-10'>
      <ScrollAnimation>
      <h2 className='w-screen text-4xl font-extrabold text-[#4D0011] flex justify-center pb-4' >Projects</h2>
      <div className='flex flex-row flex-wrap justify-evenly sm:px-16 px-4 mt-10'>
        {cardD.map((data,index) => (
        <CardCom key={data.id || index} title={data.title} description={data.description} link={data.link} image={data.image} live={data.live} code={data.code} />
      ))}
      </div>
      </ScrollAnimation>
    </div>
  )
}

export default Projects
