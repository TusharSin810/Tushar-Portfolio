import React, { useState } from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import ScrollAnimation from './uiComponents/ScrollAnimation';

function Skills() {

  const skills = [
    { images: "/images/html-5.svg", alt: "HTML", name: "HTML" },
    { images: "/images/css-3.svg", alt: "CSS", name: "CSS" },
    { images: "/images/js.svg", alt: "JavaScript", name: "JavaScript" },
    { images: "/images/react.svg", alt: "React Js", name: "React Js" },
    { images: "/images/node-js.svg", alt: "Node Js", name: "Node Js" },
    { images: "/images/express.svg", alt: "Express", name: "Express" },
    { images: "/images/postgres.svg", alt: "PostgreSQL", name: "PostgreSQL" },
    { images: "/images/tailwind.svg", alt: "Tailwind CSS", name: "Tailwind CSS" },
    { images: "/images/c.svg", alt: "C++", name: "C++" },
    { images: "/images/python.svg", alt: "Python", name: "Python" },
    { images: "/images/github.svg", alt: "GitHub", name: "GitHub" },
    { images: "/images/postman.svg", alt: "Postman", name: "Postman" },
    { images: "/images/solidity.svg", alt: "Solidity", name: "Solidity" },
    { images: "/images/machinelearning.svg", alt: "Machine Learning", name: "Machine Learning" },
    { images: "/images/data.svg", alt: "Data Science", name: "Data Science" },
    { images: "/images/git.svg", alt: "Git", name: "Git" },
    { images: "/images/nextjs.svg", alt: "Nextjs", name: "Next Js" },
    { images: "/images/recoil-js.svg", alt: "RecoilJS", name: "Recoil Js" },
    { images: "/images/ts.svg", alt: "TypeScript", name: "TypeScript" },
    { images: "/images/mongodb.svg", alt: "MongoDB", name: "MongoDB" },
  ];

  return (
    <div className='h-max bg-white pb-16'>
      <ScrollAnimation>
      <div className=" bg-[#53565A]/50 py-10">
        <h2 className='flex justify-start text-black font-extrabold text-4xl sm:text-5xl font-mono px-4 sm:px-8 sm:py-4'>Skills & Tools</h2>
        <HoverEffect items={skills} className="px-8 sm:px-20"/>
      </div>
     </ScrollAnimation>
    </div>
  );
}

export default Skills;
