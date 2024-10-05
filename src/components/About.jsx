import React from 'react'

function About() {
  return (
    <div>
        <div className='h-max bg-[#53565A] pb-8'>
            <h2 className='text-4xl font-extrabold flex w-screen justify-center p-5 pt-10 text-[#E4E5E8]'>About Me</h2>
            <div className='flex flex-col items-center'>
                <p className='p-6 flex sm:hidden text-center font-semibold'>
                    I’m an undergraduate student from India pursuing a B.Tech in Electronics and Communication Engineering.Passionate about coding and full-stack development. I build scalable, user-centric web applications and am currently expanding my skills in Web3, Data Science, and Machine Learning.
                    <br/>
                    I’m also pursuing a distance BSc in Data Science and Programming from IIT Madras.
                </p>
                <p className='hidden p-4 sm:flex sm:w-3/5 text-center font-semibold'>
                    I’m an undergraduate student from India pursuing a B.Tech in Electronics and Communication Engineering at Jaypee Institute of Information Technology (JIIT), Noida. Passionate about coding and full-stack development, I enjoy building dynamic, scalable web applications with a focus on innovation and performance.
                </p>
                <p className='hidden p-4 sm:flex sm:w-3/5 text-center font-semibold'>
                    Currently, I’m expanding my knowledge in Web3, Data Science, and Machine Learning, while also pursuing a distance BSc program in Data Science and Programming from IIT Madras. With strong communication, leadership skills, and a collaborative mindset, I’m dedicated to delivering impactful, user-centric software.
                </p> 
                <p className='px-6 pb-2 text-center text-lg font-bold text-[#E4E5E8]'>"Always exploring new tech stacks to push boundaries and innovate."</p>
            </div>
        </div>
    </div>
  )
}

export default About