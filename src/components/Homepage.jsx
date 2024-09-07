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
            <div className='mt-4'>
              <h1 className='text-3xl font-extrabold'>Hi,<br/>I'm Tushar Singhal</h1>
              <h2 className='my-6 font-bold text-xl'>I Am Into {" "}  
                <span className='text-[#4D0011]'>{typeEffect}</span>
                <span className='text-[#4B443C] font-bold'><Cursor/></span>
              </h2>
              <button className='bg-[#4B443C] py-1 px-2 m-2 mb-10 rounded-xl text-[#E4E5E8]'>About Me</button>
              <button className='bg-[#4B443C] py-1 px-2 m-2 mb-10 rounded-xl text-[#E4E5E8]'>Resume</button>
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

          <div className='h-screen bg-white'>
               <h2 className='text-2xl font-extrabold flex w-screen justify-center p-4'>About Me</h2>
              <p className='p-4'>
                I’m an undergraduate student pursuing a B.Tech in Electronics and Communication Engineering at Jaypee Institute of Information Technology (JIIT), Noida. Passionate about coding and full-stack development, I enjoy building dynamic, scalable web applications with a focus on innovation and performance.
              </p>
              <p className='p-4'>
                Currently, I’m expanding my knowledge in Web3, Data Science, and Machine Learning, while also pursuing a distance BSc program in Data Science and Programming from IIT Madras. With strong communication, leadership skills, and a collaborative mindset, I’m dedicated to delivering impactful, user-centric software.
              </p> 
              <p className='p-4'>"Always exploring new tech stacks to push boundaries and innovate."</p>
          </div>
    </div>
  )
}

export default Homepage
