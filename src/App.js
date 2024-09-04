import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Home from './Pages/Home.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
