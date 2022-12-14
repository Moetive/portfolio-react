import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route exact path ="/about" element={<About/>}/>
      <Route exact path ="/portfolio" element={<Portfolio/>}/>
      <Route exact path ="/contact" element={<Contact/>}/>

      </Routes>
    </Router>
  );
}

export default App;
