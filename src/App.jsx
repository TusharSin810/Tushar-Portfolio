import {React, useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage"
import Signup from "./components/Signup"
import ChatPage from './components/ChatPage';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLoginState = localStorage.getItem('isLoggedIn');
    const token = localStorage.getItem('token');
    return token ? savedLoginState === 'true' : false;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
    }
    
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/Register" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/chatwithme" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
