import React from 'react'
import {CardCom} from './uiComponents/CardCom'
import cardD from '../../data/cardinfo.json'
import ScrollAnimation from './uiComponents/ScrollAnimation'
import { WCard } from './uiComponents/WCard'

function Projects() {
  return (
    <div className='h-max bg-[white] py-10 lg:px-10 px-4'>
      <ScrollAnimation>
      <h2 className='w-screen text-6xl font-extrabold text-[#4D0011] pb-10' >Projects</h2>
      <WCard />
      </ScrollAnimation>
    </div>
  )
}

export default Projects 
