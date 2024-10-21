import React from 'react'
import eCard from '../../data/educationCard.json'
import ScrollAnimation from './uiComponents/ScrollAnimation'
import { CardCom } from './uiComponents/CardCom'
function Education() {
  return (
    <div className='bg-white h-max w-screen flex flex-col pt-10 gap-10 px-2 pb-4 sm:px-6'>
      <ScrollAnimation>
       <h2 className='font-extrabold text-6xl text-[#4D0011] pb-4'>Education</h2>
       <div className='w-full sm:flex sm:justify-evenly'>
        {eCard.map((data, index) => (
          <CardCom key={data.id || index} title={data.title} description={data.description} image={data.image} year={data.year}/>
        ))}
       </div>
      </ScrollAnimation>
    </div>
   
  )
}

export default Education
