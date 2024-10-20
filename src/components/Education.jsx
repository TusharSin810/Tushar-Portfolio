import React from 'react'
import eCard from '../../data/educationCard.json'
import ScrollAnimation from './uiComponents/ScrollAnimation'
import { CardCom } from './uiComponents/CardCom'
function Education() {
  return (
    <div className='bg-white h-screen w-screen flex flex-col pt-10 px-10 gap-10'>
      <ScrollAnimation>
       <h2 className='font-extrabold text-6xl text-[#4D0011] pb-4'>Education</h2>
       <div className='flex w-full justify-between gap-2'>
        {eCard.map((data, index) => (
          <CardCom key={data.id || index} title={data.title} description={data.description} image={data.image} year={data.year}/>
        ))}
       </div>
      </ScrollAnimation>
    </div>
   
  )
}

export default Education
