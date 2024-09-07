import React from 'react'

function About() {
  return (
    <div>
        <div className='h-screen bg-white'>
            <h2 className='text-2xl font-extrabold flex w-screen justify-center p-4'>About Me</h2>
            <div className='flex flex-col items-center'>
                <p className='p-4 sm:hidden'>
                    I’m an Electronics and Communication Engineering student at JIIT, Noida, with a passion for full-stack development. I build scalable, user-centric web applications and am currently expanding my skills in Web3, Data Science, and Machine Learning. I’m also pursuing a distance BSc in Data Science and Programming from IIT Madras.
                </p>
                <p className='hidden p-4 sm:flex sm:w-3/5'>
                    I’m an undergraduate student pursuing a B.Tech in Electronics and Communication Engineering at Jaypee Institute of Information Technology (JIIT), Noida. Passionate about coding and full-stack development, I enjoy building dynamic, scalable web applications with a focus on innovation and performance.
                </p>
                <p className='hidden p-4 sm:flex sm:w-3/5'>
                    Currently, I’m expanding my knowledge in Web3, Data Science, and Machine Learning, while also pursuing a distance BSc program in Data Science and Programming from IIT Madras. With strong communication, leadership skills, and a collaborative mindset, I’m dedicated to delivering impactful, user-centric software.
                </p> 
                <p className='p-4'>"Always exploring new tech stacks to push boundaries and innovate."</p>
            </div>
        </div>
    </div>
  )
}

export default About