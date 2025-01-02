import React, { useState, useEffect } from 'react';
import TypeIt from "typeit-react";
import './landPage.css';
import {motion} from 'framer-motion';

function LandPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentLog1, setCurrentLog1] = useState('');
  const [currentLog2, setCurrentLog2] = useState('');
  const [currentLog3, setCurrentLog3] = useState('');
  // Function to update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Set the initial time
    const timer = setInterval(updateTime, 1000); // Update time every second
    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);
const text = "Kangyu Feng";
const randomizedIndices = text.split("").map((_, i) => i).sort(() => Math.random() - 0.5);
  return (
    
    <div className="app-container">
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
      <div className="terminal-container">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-btn red"></span>
            <span className="terminal-btn yellow"></span>
            <span className="terminal-btn green"></span>
          </div>
          <div className="terminal-title">kangyuuuuf - {currentTime}</div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body">
          <span className="prompt">user@localhost: </span>
          <span className="command">
          <TypeIt
            options={{
                speed: 40,
                lifeLike: true,
                afterComplete: function (instance) {
                instance.destroy(); 
                setCurrentLog1(true);
                },
            }}
            getBeforeInit={(instance) => {
                instance.pause(2000).type("echo \"Hey, I'm Kangyu!\"").pause(700);
                return instance;
            }}
            />
            </span>
            { currentLog1 && <p className="command">
                <TypeIt
            options={{
                speed: 0.1,
                nextStringDelay:0,
                // this is the ASCII art with some spaces replaced by \u2007
                strings: ['\u2007_\u2007\u2007\u2007_\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007___\u2007_\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007', '|\u2007|\u2007|\u2007|\u2007___\u2007_\u2007\u2007\u2007_\u2007\u2007\u2007\u2007|_\u2007_(\u2007)_\u2007__\u2007___\u2007\u2007', "|\u2007|_|\u2007|/\u2007_\u2007\\\u2007|\u2007|\u2007|\u2007\u2007\u2007\u2007|\u2007||/|\u2007'_\u2007\u2007\u2007_\u2007\\\u2007", '|\u2007\u2007_\u2007\u2007|\u2007\u2007__/\u2007|_|\u2007|_\u2007\u2007\u2007|\u2007|\u2007\u2007|\u2007|\u2007|\u2007|\u2007|\u2007|', '|_|\u2007|_|\\___|\\__,\u2007(\u2007)\u2007|___|\u2007|_|\u2007|_|\u2007|_|', '|\u2007|/\u2007/__\u2007_\u2007_|___/|/_\u2007_\u2007_\u2007\u2007\u2007_\u2007_\u2007\u2007\u2007_\u2007\u2007-\u2007', "|\u2007'\u2007//\u2007_\u2007\u2007|\u2007'_\u2007\\\u2007/\u2007_\u2007\u2007|\u2007|\u2007|\u2007|\u2007|\u2007|\u2007||\u2007|", '|\u2007.\u2007\\\u2007(_|\u2007|\u2007|\u2007|\u2007|\u2007(_|\u2007|\u2007|_|\u2007|\u2007|_|\u2007||_|', '|_|\\_\\__,_|_|\u2007|_|\\__,\u2007|\\__,\u2007|\\__,_/(_)', '\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007|___/\u2007|___/\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007']
                ,
                afterComplete: function (instance) {
                setTimeout(() => {
                    instance.destroy(); // Destroy the instance after 2 seconds
                    setCurrentLog2(true); // Trigger the next log
                }, 700);
                },
            }}
            />
            </p>}
        { currentLog2 && <span className="prompt">user@localhost: </span>}
        { currentLog2 &&
          
          <span className="command">
          <TypeIt
            options={{
                speed: 40,
                lifeLike: true,
                afterComplete: function (instance) {
                instance.pause(500);
                instance.destroy(); 
                setCurrentLog3(true);
                },
            }}
            getBeforeInit={(instance) => {
                instance.pause(1500).type("cat about-me.txt").pause(500);
                return instance;
            }}
            />
            </span>
          }
          { currentLog3 && <p className="command">
                <TypeIt
            options={{
                speed: 0.1,
                loop: true,
                breakLines: false,
                nextStringDelay: [5000, 1000],
                loopDelay: [1000, 5000],
                strings: ["I majored in computer science at the Grainger College of Engineering @ UIUC and earned my Bachelor of Science degree with Highest Honors in May 2024.", "I am currently enrolled in the MCS program as a graduate student starting in Fall 2024, conducting research on utilizing CS tools to improve non-CS elementary courses.", "My fields of interest are mainly artificial intelligence/ machine learning, game development, and education in computer science."]
            }}
            />
            </p>}
            
        </div>
      </div>
    </div>
      
  );
}

export default LandPage;