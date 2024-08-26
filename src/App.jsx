import React, { useEffect, useState } from 'react';
import LoadingContainer from './components/LoadingContainer';
import Homepage from './components/Homepage';
import ParticlesComponent from './components/Particles'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [transitionEnded, setTransitionEnded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      setTransitionEnded(true);
    }
  }, [loading]);

  return (
    <div>
      <ParticlesComponent id="particles" />
      <div className={`transition-opacity duration-3000 ease-in-out ${
          loading ? 'opacity-100' : 'opacity-0'
        } ${transitionEnded ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        
        <LoadingContainer isActive ={loading}/>
      </div>
      <div className={`transition-opacity duration-3000 delay-500 ease-in-out ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}>
        
        <Homepage />
      </div>
    </div>
  );
};

export default App;
