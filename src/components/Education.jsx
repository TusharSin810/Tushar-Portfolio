import React from 'react'
import { Meteorscard } from './uiComponents/Meteorscard'
import eCard from '../../data/educationCard.json'
import ScrollAnimation from './uiComponents/ScrollAnimation'
import { CardCom } from './uiComponents/CardCom'
function Education() {
  return (
    <div className='bg-white h-screen w-screen flex flex-col items-center p-8 gap-10'>
      <ScrollAnimation>
       <h2 className='font-extrabold text-3xl text-[#4D0011]'>Education</h2>
       <div className='flex gap-6'>
        {eCard.map((data, index) => (
          <Meteorscard key={data.id || index} title={data.title} description={data.description} image={data.image} year={data.year}/>
        ))}
       </div>
       <CardCom />
      </ScrollAnimation>
    </div>
   
  )
}

export default Education
