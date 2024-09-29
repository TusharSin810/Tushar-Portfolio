import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Exp from './Exp'
import React, { useEffect, useState } from 'react';
import LoadingContainer from './LoadingContainer';
import ParticlesComponent from './Particles'
import Header from './Header'
import Education from './Education'

function Homepage({isLoggedIn}) {
  
  const [loading, setLoading] = useState(true);
  const [transitionEnded, setTransitionEnded] = useState(false);
  
useEffect(() => {
  const visited = sessionStorage.getItem('visited');
  
  if (!visited) {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('visited', 'true');
    }, 2300);

    return () => clearTimeout(timer);
  } else {
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
          <Navbar isLoggedIn={isLoggedIn}/>       
          <Header />
          <About />
          <Skills />
          <Projects />
          <Exp />
          <Education />
      </div>
    </div>
    </div>
  )
}

export default Homepage
