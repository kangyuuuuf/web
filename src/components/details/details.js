import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import Terminal from "../terminal/terminal";
import ResearchPage from '../research/research';
import About from '../about/about';
import Projects from '../projects/project';
import './details.css';


function Details() {
  return (
    <div className="detailsContainer">
      <Navbar />
      <div className="routesContainer">
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      </div>
    </div>
  );
}

export default Details;