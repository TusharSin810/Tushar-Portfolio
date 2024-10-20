"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card"


export function CardCom({title,description,year,image}) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-[#53565A] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-[24rem] rounded-xl p-6 border"
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white pt-4"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
          <br />
          {year}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          {/* <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal text-white cursor-pointer"
          >
            <a href={live} target="_blank">Live</a>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href={code} target="_blank">Code</a>
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}