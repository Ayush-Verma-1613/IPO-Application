import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import IPOList from './Components/IpoList';
import IPODetail from './Components/IpoDetails';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/IPOList" element={<IPOList />} />
          <Route path="/ipo/:symbol" element={<IPODetail />} />
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
