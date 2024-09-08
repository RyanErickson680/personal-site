import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Home from './Pages/Home.js'
import Sidebar from "./Components/Sidebar.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar/>
        <Routes>
          <Route path='/' element={<div><Home /><About/></div>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
