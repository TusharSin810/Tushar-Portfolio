"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WCard() {
  return (
    (<div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            PortFolio Website
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Build Using React, Express, Taliwind CSS, Node JS. Made Us Of UI Libraries Like Aceternity UI. Website also have a unique feature of chat with me. which is a live chatting feature with the host only.
          </p>
          <div className="pt-2">
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl mr-2">Code</a>
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl ">Live</a>
          </div>
        </div>
        <img
          src="https://tusharportfolio-images.s3.ap-south-1.amazonaws.com/Portfolio.png"
          width={500}
          height={200}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[5%] grayscale filter -bottom-4 object-contain rounded-2xl" />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2
          className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          JODC Website
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Created College Club Website From Scratch Using React.js, Express, TailwindCSS and Node.js.
        </p>
         <div className="pt-2">
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl mr-2">Code</a>
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl ">Live</a>
          </div>
          <img  src="https://tusharportfolio-images.s3.ap-south-1.amazonaws.com/JODC.png"
          width={400}
          height={300}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[5%] filter -bottom-[75px] object-contain rounded-2xl"></img>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            v-AI-dya: AI-Powered Medical Diagnosis
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            v-AI-dya is a smart diagnostic assistant that analyzes patient symptoms and reports to support early medical diagnosis. Built with React, Tailwind, Streamlit, and the Grok API, it helps doctors make faster, informed decisions—bridging gaps in global healthcare.
          </p>
        </div>
         <div className="pt-2">
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl mr-2">Code</a>
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl ">Live</a>
          </div>
        <img
          src="https://tusharportfolio-images.s3.ap-south-1.amazonaws.com/vAIdya.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:right-[5%] -bottom-6 object-contain rounded-2xl" />
      </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2
          className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Solana Token Launch Pad
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Built a Token Launchpad on the Solana blockchain using React.js, Web3.js, and Solana Web3.js. Enabled seamless token creation, minting, and allocation with an intuitive UI for easy user interaction on a decentralized platform.
        </p>
         <div className="pt-2">
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl mr-2">Code</a>
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl ">Live</a>
          </div>
        <img
          src="https://tusharportfolio-images.s3.ap-south-1.amazonaws.com/SolanaLaunchPad.png"
          width={300}
          height={200}
          alt="linear demo image"
          className="-z-50 absolute -right-4 lg:-right-[15%] filter -bottom-1 object-contain rounded-2xl" />
      </WobbleCard>
       <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Keeper App
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Developed a full-stack Notes Keeper app using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to create, update, delete, and manage personal notes with a clean and responsive UI. It offers secure data storage and a smooth user experience for everyday productivity.
          </p>
        </div>
         <div className="pt-2">
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl mr-2">Code</a>
          <a href="https://github.com/TusharSin810" target="_blank" className="px-4 py-1 mt-3 bg-black text-white rounded-xl ">Live</a>
          </div>
        <img
          src="https://tusharportfolio-images.s3.ap-south-1.amazonaws.com/KeeperApp.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[4%] filter -bottom-1 object-contain rounded-2xl" />
      </WobbleCard>
    </div>)
  );
}