import {React, useState} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage"
import Signup from "./components/Signup"

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/Register" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
