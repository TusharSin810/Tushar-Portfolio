"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import {useNavigate } from 'react-router-dom';


export function Mborder() {

  const navigate = useNavigate()
  function chatpage(){
    if(localStorage.getItem('token')){
      navigate('/chatwithme')
    }else{
      navigate('/login')
    }
}

  return (
    (<div>
      <Button onClick={chatpage}>
        Let's Talk
      </Button>
    </div>)
  );
}
