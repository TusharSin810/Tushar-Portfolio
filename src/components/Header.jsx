import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [typeEffect] = useTypewriter({
    words: ['Full Stack', 'Machine Learning', 'Web3', 'Data Science'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  function chatpage() {
    if (localStorage.getItem('token')) {
      navigate('/chatwithme');
    } else {
      navigate('/login');
    }
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateAmountX = ((y / rect.height) - 0.5) * 40;
    const rotateAmountY = ((x / rect.width) - 0.5) * -40;

    setRotateX(rotateAmountX);
    setRotateY(rotateAmountY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className='flex flex-col h-svh m-6 my-10 sm:flex-row sm:justify-around'>
      <div className='mt-4'>
        <h1 className='text-3xl font-extrabold sm:text-6xl'>
          Hi,<br />I'm Tushar Singhal
        </h1>
        <h2 className='my-6 font-bold text-xl sm:text-3xl'>
          I Am Into{' '}
          <span className='text-[#4D0011]'>{typeEffect}</span>
          <span className='text-[#4B443C] font-bold'>
            <Cursor />
          </span>
        </h2>
        <button className='hidden sm:inline-block bg-[#4B443C] py-2 px-4 mr-2 rounded-3xl font-semibold text-[#E4E5E8]'>
          About Me
        </button>
        <button className='bg-[#4B443C] py-2 px-4 m-2 rounded-3xl font-semibold text-[#E4E5E8]'>
          <a
            href='https://drive.google.com/file/d/1_K89DMcUKlSV5_g0w5ZdHqvFYzPd7Zt_/view?usp=sharing'
            target='_blank'
          >
            Resume
          </a>
        </button>
        <button
          className='bg-[#4B443C] py-2 px-4 m-2 mb-8 rounded-3xl font-semibold text-[#E4E5E8]'
          onClick={chatpage}
        >
          Chat With Me
        </button>
        <div className='flex justify-start gap-4 my-1 sm:justify-start sm:gap-8'>
          <SocialIcon url='https://x.com/TusharS91319723' target='_blank' className='hover:opacity-85' bgColor='#4D0011' />
          <SocialIcon url='https://github.com/TusharSin810' target='_blank' className='hover:opacity-85' bgColor='#4D0011' />
          <SocialIcon url='https://www.linkedin.com/in/tushar-singhal-921a41259/' target='_blank' className='hover:opacity-85' bgColor='#4D0011' />
          <SocialIcon url='mailto:tsinghal666@gmail.com' target='_blank' bgColor='#4D0011' className='hover:opacity-85' />
          <SocialIcon url='tushar_singhal' target='_blank' className='hover:opacity-85' bgColor='#4D0011' />
        </div>
      </div>
      <motion.img
        src='/images/Avatar.png'
        alt='Avatar image'
        className='h-auto w-auto max-w-96 max-h-96 mt-10 rounded-full sm:mt-6'
        style={{
          rotateX: `${rotateX}deg`,
          rotateY: `${rotateY}deg`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

export default Header;
