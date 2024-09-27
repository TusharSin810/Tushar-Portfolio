import React, { useState } from 'react';
import { HoverEffect } from './ui/card-hover-effect';

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
    { images: "/images/git.svg", alt: "Git", name: "Git" }
  ];

  return (
    <div className='h-max bg-[#53565A] pb-16'>
      <h2 className='flex w-screen justify-center text-[#4D0011] font-extrabold text-2xl p-8'>Skills & Tools</h2>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
      </div>
     
    </div>
  );
}

export default Skills;
