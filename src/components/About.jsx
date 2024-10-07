import React from 'react'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import {motion}  from 'framer-motion'
import ScrollAnimation from './uiComponents/ScrollAnimation';

const words = `I’m an undergraduate student from India pursuing a B.Tech in Electronics and Communication Engineering at Jaypee Institute of Information Technology (JIIT), Noida. Passionate about coding and full-stack development, I enjoy building dynamic, scalable web applications with a focus on innovation and performance.


Currently, I’m expanding my knowledge in Web3, Data Science, and Machine Learning, while also pursuing a distance BSc program in Data Science and Programming from IIT Madras. With strong communication, leadership skills, and a collaborative mindset, I’m dedicated to delivering impactful, user-centric software.`;

const words1 = `I’m an undergraduate student from India pursuing a B.Tech in Electronics and Communication Engineering.Passionate about coding and full-stack development. I build scalable, user-centric web applications and am currently expanding my skills in Web3, Data Science, and Machine Learning.I’m also pursuing a distance BSc in Data Science and Programming from IIT Madras.`;

function About() {
  return (
    <div>
        <div className='h-max bg-[#53565A]/80 pb-8'>
        <ScrollAnimation>
            <h2 className='text-4xl font-extrabold flex w-screen justify-center p-5 pt-10 text-[#E4E5E8]'>About Me</h2>
            <div className='flex flex-col items-center'>
                <div className='p-6 flex sm:hidden text-center font-semibold'>
                    <TextGenerateEffect words={words1} />
                </div>
                <div className='hidden p-4 sm:flex sm:w-3/5 text-center font-semibold'>
                    <TextGenerateEffect words={words} />
                </div> 
                <motion.p className='px-6 pb-2 text-center text-lg font-bold text-[#E4E5E8]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 17.5, duration: 1 }}
                >"Always exploring new tech stacks to push boundaries and innovate."</motion.p>
            </div>
        </ScrollAnimation>
        </div>
    </div>
  )
}

export default About