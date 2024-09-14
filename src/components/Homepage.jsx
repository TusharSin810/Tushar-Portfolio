import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Exp from './Exp'
import React, { useEffect, useState } from 'react';
import LoadingContainer from './LoadingContainer';
import ParticlesComponent from './Particles'
import Header from './Header'


function Homepage() {

  const [loading, setLoading] = useState(true);
  const [transitionEnded, setTransitionEnded] = useState(false);
  
  useEffect(() => {
    const visited = localStorage.getItem('visited','false');
    if(!visited){
    const timer = setTimeout(() => {
      setLoading(false);
      localStorage.setItem('visited','true');
      setTimeout(() => {
        localStorage.removeItem('visited');
      },3 * 60 * 1000);
    
    }, 2300);

    return () => clearTimeout(timer);
  }else{
    setLoading(false);
  }
  }, []);

  useEffect(() => {
    if (!loading) {
      setTransitionEnded(true);
    }
  }, [loading]);

  return (
    <div>
      <div className="h-screen w-screen no-scrollbar overflow-y-scroll overflow-x-hidden"> 
      <ParticlesComponent id="particles"/> 
      <div className={`transition-opacity duration-2000 ease-in-out ${
          loading ? 'opacity-100' : 'opacity-0'
        } ${transitionEnded ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        <LoadingContainer isActive ={loading}/>
      </div>
      <div className={`transition-opacity duration-2000 delay-700 ease-in-out ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}>
          <Navbar />       
          <Header />
          <About />
          <Skills />
          <Projects />
          <Exp />  
      </div>
    </div>
    </div>
  )
}

export default Homepage
