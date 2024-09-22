import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion'
import {useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()
  const [typeEffect] = useTypewriter({
    words: ['Full Stack','Machine Learning','Web3','Data Science'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })

  function chatpage(){
    if(localStorage.getItem('token')){
      navigate('/chatwithme')
    }
  }
  
  return (
        <div className='flex flex-col h-svh m-6 my-10 sm:flex-row'>
            <div className='mt-4'>
              <h1 className='text-3xl font-extrabold'>Hi,<br/>I'm Tushar Singhal</h1>
              <h2 className='my-6 font-bold text-xl'>I Am Into {" "}  
                <span className='text-[#4D0011]'>{typeEffect}</span>
                <span className='text-[#4B443C] font-bold'><Cursor/></span>
              </h2>
              <button className='bg-[#4B443C] py-1 px-2 m-2 mb-10 rounded-xl font-semibold text-[#E4E5E8]'>About Me</button>
              <button className='bg-[#4B443C] py-1 px-2 m-2 mb-10 rounded-xl font-semibold text-[#E4E5E8]'>Resume</button>
              <button className='bg-[#4B443C] py-1 px-2 m-2 mb-10 rounded-xl font-semibold text-[#E4E5E8]' onClick={chatpage}>Chat With Me </button>
              <div className='flex justify-start gap-4 my-1'>
                <SocialIcon url='https://x.com/TusharS91319723' target='_blank' className='hover:opacity-85' />
                <SocialIcon url='https://github.com/TusharSin810' target='_blank' className='hover:opacity-85'/>
                <SocialIcon url='https://www.linkedin.com/in/tushar-singhal-921a41259/' target='_blank' className='hover:opacity-85'/>
                <SocialIcon url='mailto:tsinghal666@gmail.com' target='_blank' bgColor='#4D0011'className='hover:opacity-85'/>
              <SocialIcon url='tushar_singhal' target='_blank' className='hover:opacity-85'/> 
              </div>
            </div>
            <motion.img src="/images/Avatar.png" alt="Avatar image" className='h-auto w-auto max-w-96  max-h-96 mt-10 rounded-full'
            whileHover={{
              scale:1.1
            }}
            transition={{
              duration:0.5
            }}
            ></motion.img>
        </div>
  )
}

export default Header
