"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { SocialIcon } from 'react-social-icons'

export function BackgroundB() {
  return (
    (<div
      className="h-screen w-full rounded-md bg-[#53565A] relative flex flex-col items-center antialiased pt-20">
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-[#E4E5E8] to-neutral-500  text-center font-sans font-bold">
          Get In Touch
        </h1>
        <p
          className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>
        <div className='flex gap-4 z-50'>
            <SocialIcon url='https://x.com/TusharS91319723' target='_blank' className='hover:opacity-85' />
            <SocialIcon url='https://github.com/TusharSin810' target='_blank' className='hover:opacity-85'/>
            <SocialIcon url='https://www.linkedin.com/in/tushar-singhal-921a41259/' target='_blank' className='hover:opacity-85'/>
            <SocialIcon url='mailto:tsinghal666@gmail.com' target='_blank' bgColor='#4D0011'className='hover:opacity-85'/>
          <SocialIcon url='tushar_singhal' target='_blank' className='hover:opacity-85'/> 
        </div>
        <div>
          <h3>tsinghal666@gmail.com</h3>
          <h3>9999999999</h3>
        </div>
      <BackgroundBeams />
    </div>)
  );
}
