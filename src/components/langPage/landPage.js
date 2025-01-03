import React, { useState, useEffect, useRef } from 'react';
import TypeIt from "typeit-react";
import './landPage.css';

import {animate, motion} from 'framer-motion';

function LandPage() {
  const [navigate, setNavigate] = useState(false);
  const elementRef = useRef(null);

  const handleNavigate = () => {
    setNavigate(true); // 切换到新页面

    setTimeout(() => {
      window.location.href = "/navigate";

    }, 1000);
  };
  const handleDetails = () => {
    setNavigate(true); // 切换到新页面

    setTimeout(() => {
      window.location.href = "/research";

    }, 1000);
  };
const text = "Kangyu Feng | 冯康宇";
const randomizedIndices = text.split("").map((_, i) => i).sort(() => Math.random() - 0.5);
  return (
    
    <div className="app-container">
    <motion.img ref={elementRef} className='circular-image' 
      whileHover={{ rotate: 10 }}
      src="/image.png" alt="Kangyu Feng" onClick={() => window.location.href = "/"}  animate={navigate ? { opacity: 0} : {} } transition={{ duration: 0.5 }} />
      <motion.div className='head' animate={navigate ? { opacity: 0} : {} } transition={{ duration: 0.5 }}>
      <div className= "title">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: randomizedIndices[index] * 0.12 }}

        >
          {char}
        </motion.span>
      ))}
    </div>
      
      <div
        
        style={{
          height: "2px",
          width: "100%",
          background: "#000",
          border: "none",
          margin: "20px 0px 30px 0px",
        }}
      ></div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }} 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.button
      whileHover={{ scale: 1.05 }}
        style={{
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          fontWeight: "500",
          color: "#000",
          cursor: "pointer",
          padding: "0 20px",
        }}
        onClick={handleNavigate}
      >
        General
      </motion.button>
      <div
        style={{
          width: "2px",
          height: "1.5rem",
          backgroundColor: "#000", // Black vertical line
        }}
      ></div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        style={{
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          fontWeight: "500",
          color: "#000",
          cursor: "pointer",
          padding: "0 20px",
        }}
        onClick={handleDetails}
      >
        Details
      </motion.button>
    </motion.div>
    </motion.div>
      {/* <Terminal /> */}
    </div>
      
  );
}

export default LandPage;