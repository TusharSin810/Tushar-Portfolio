import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons'
import Navbar from './Navbar'



function Homepage() {
  
  const [typeEffect] = useTypewriter({
    words: ['Full Stack','Machine Learning','Web3','Data Science'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })

  return (
    <div>
        <Navbar />       
          <div className='flex flex-col h-svh m-6 my-10 sm:flex-row'>
            <div className=''>
              <h1 className='text-3xl font-extrabold'>Hi,<br/>I'm Tushar Singhal</h1>
              <h2 className='my-6 font-bold text-xl'>I Am Into {" "}  
                <span className='text-[#4D0011]'>{typeEffect}</span>
                <span className='text-[#4B443C] font-bold'><Cursor/></span>
              </h2>
              <div className='flex justify-start gap-4 my-1'>
                <SocialIcon url='https://x.com/TusharS91319723' target='_blank' className='hover:opacity-85' />
                <SocialIcon url='https://github.com/TusharSin810' target='_blank' className='hover:opacity-85'/>
                <SocialIcon url='https://www.linkedin.com/in/tushar-singhal-921a41259/' target='_blank' className='hover:opacity-85'/>
                <SocialIcon url='mailto:tsinghal666@gmail.com' target='_blank' bgColor='#4D0011'className='hover:opacity-85'/>
              <SocialIcon url='tushar_singhal' target='_blank' className='hover:opacity-85'/> 
              </div>
            </div>
            <img src="/images/Avatar.png" alt="Avatar image" className='h-auto w-auto max-w-96  max-h-96 mt-10 rounded-full'/>
          </div>

          <div className=''>
            <p className='bg-white h-screen'>Hello my name is Tushar Singhal. I am a web developer.</p>
          </div>
    </div>
  )
}

export default Homepage
