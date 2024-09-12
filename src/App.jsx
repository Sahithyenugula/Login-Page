import React from 'react';
import HomePage from './HomePage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from "./Welcome";

function App() {
  
  return (
    <>
      <div>
       <Router> 
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
      </div>
    </>
  )
}
export default App
