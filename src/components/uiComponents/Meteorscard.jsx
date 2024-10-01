import React from "react";
import { Meteors } from "../ui/meteors";

export function Meteorscard({title,description,image,year}) {
  return (
    (<div className="">
      <div className=" w-full relative max-w-xs">
        <div
          className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div
          className="relative shadow-xl bg-[#53565A] border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <img src={image} alt="Avatar" className="h-40 w-full"/>
          <h1 className="font-bold text-xl text-white mb-4 relative z-50 mt-2">
            {title}
          </h1>

          <p className="font-normal text-base text-[#E4E5E8] relative z-50">
            {description} <br/><br/>
            {year}
          </p>
           <Meteors number={30} />
        </div>
      </div>
    </div>)
  );
}
