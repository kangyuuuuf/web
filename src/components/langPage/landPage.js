import React, { useState, useEffect } from 'react';
import TypeIt from "typeit-react";
import './landPage.css';
import Terminal from '../terminal/terminal';
import {motion} from 'framer-motion';

function LandPage() {
const text = "Kangyu Feng";
const randomizedIndices = text.split("").map((_, i) => i).sort(() => Math.random() - 0.5);
  return (
    
    <div className="app-container">
    <motion.img className='circular-image' 
      whileHover={{ rotate: 10 }}
      src="/image.png" alt="Kangyu Feng" onClick={() => window.location.href = "/"} />
      <div className='head' >
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
      >
        Navigate
      </motion.button>
      <div
        style={{
          width: "1px",
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
      >
        Research
      </motion.button>
    </motion.div>
    </div>
      {/* <Terminal /> */}
    </div>
      
  );
}

export default LandPage;