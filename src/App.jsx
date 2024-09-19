import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage"
import Signup from "./components/Signup"

const App = () => {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/Register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
