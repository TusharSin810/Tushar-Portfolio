import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { src: "/images/html-5.svg", alt: "HTML", name: "HTML" },
    { src: "/images/css-3.svg", alt: "CSS", name: "CSS" },
    { src: "/images/js.svg", alt: "JavaScript", name: "JavaScript" },
    { src: "/images/react.svg", alt: "React Js", name: "React Js" },
    { src: "/images/node-js.svg", alt: "Node Js", name: "Node Js" },
    { src: "/images/express.svg", alt: "Express", name: "Express" },
    { src: "/images/postgres.svg", alt: "PostgreSQL", name: "PostgreSQL" },
    { src: "/images/tailwind.svg", alt: "Tailwind CSS", name: "Tailwind CSS" },
    { src: "/images/c.svg", alt: "C++", name: "C++" },
    { src: "/images/python.svg", alt: "Python", name: "Python" },
    { src: "/images/github.svg", alt: "GitHub", name: "GitHub" },
    { src: "/images/postman.svg", alt: "Postman", name: "Postman" },
    { src: "/images/solidity.svg", alt: "Solidity", name: "Solidity" },
    { src: "/images/machinelearning.svg", alt: "Machine Learning", name: "Machine Learning" },
    { src: "/images/data.svg", alt: "Data Science", name: "Data Science" },
    { src: "/images/git.svg", alt: "Git", name: "Git" }
  ];

  return (
    <div className='h-max bg-[#53565A] pb-16'>
      <h2 className='flex w-screen justify-center text-[#4D0011] font-extrabold text-2xl p-8'>Skills & Tools</h2>
      <div className="flex flex-wrap gap-8 justify-center xs:px-44 lg:px-44">
        {skills.map((skill, index) => (
          <div
            key={skill.alt}
            className="group w-fit"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center justify-center rounded-md h-[4rem] w-[4rem] xs:h-[4rem] xs:w-[4rem] sm:h-[5rem] sm:w-[5rem] p-2 sm:p-3 overflow-hidden bg-[#E4E5E8] border dark:border-white/[0.2] group-hover:border-lightest group-hover:border-opacity-50 relative z-20">
              <img className="group-hover:hidden select-none" draggable="false" src={skill.src} alt={skill.alt} loading="lazy" />
              <p className="text-black select-none text-[16px] sm:text-sm font-bold text-center hidden group-hover:block">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
