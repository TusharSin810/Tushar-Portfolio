import React from 'react'

function Skills() {
  return (
    <div className='h-max bg-[#53565A] pb-16'>
        <h2 className='flex w-screen justify-center text-[#4D0011] font-extrabold text-2xl p-8'>Skills & Tools</h2>
        <div className="grid grid-cols-3 px-10 gap-7 gap-x-8 sm:grid-cols-6 sm:px-80 sm:gap-5">
            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/html-5.svg" alt="HTML" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">HTML</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/css-3.svg" alt="CSS" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">CSS</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/js.svg" alt="JavaScript" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">JavaScript</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/react.svg" alt="React Js" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">React Js</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/node-js.svg" alt="Node Js" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Node Js</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/express.svg" alt="Express" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Express</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/postgres.svg" alt="PostgreSQL" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Postgre SQL</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/tailwind.svg" alt="Tailwind CSS" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Tailwind CSS</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/c.svg" alt="C++" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">C++</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/python.svg" alt="Python" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Python</p>
                </div>
            </div>    

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/github.svg" alt="GitHub" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">GitHub</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/postman.svg" alt="Postman" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Postman</p>
                </div>
            </div>  

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/solidity.svg" alt="Solidity" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Solidity</p>
                </div>
            </div>
                       
            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/machinelearning.svg" alt="Machine Learning" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Machine Learning</p>
                </div>
            </div>

            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/data.svg" alt="Data Science" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Data Science</p>
                </div>
            </div>               


            <div className="group w-fit">
                <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
                <img className="group-hover:hidden select-none" draggable="false" src="/images/git.svg" alt="Git" loading="lazy"/>
                <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">Git</p>
                </div>
            </div> 

        </div>

    
    </div>
  )
}

export default Skills
