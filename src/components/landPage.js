import React, { useState, useEffect } from 'react';
import TypeIt from "typeit-react";
import './landPage.css';

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

  return (
    <div className="app-container">
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
                instance.pause(500).type("echo \"Hey, I'm Kangyu!\"").pause(700);
                return instance;
            }}
            />
            </span>
            { currentLog1 && <p className="command">
                <TypeIt
            options={{
                speed: 20,
                afterComplete: function (instance) {
                instance.destroy(); 
                setCurrentLog2(true);
                },
            }}
            getBeforeInit={(instance) => {
                instance.pause(500).type("Hey, I'm Kangyu!").pause(500);
                return instance;
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
                instance.destroy(); 
                setCurrentLog3(true);
                },
            }}
            getBeforeInit={(instance) => {
                instance.pause(900).type("cat about-me.txt").pause(500);
                return instance;
            }}
            />
            </span>
          }
          { currentLog3 && <p className="command">
                <TypeIt
            options={{
                speed: 40,
                loop: true,
                breakLines: false,
                nextStringDelay: 2000,
                strings: ["I majored in computer science at the Grainger College of Engineering @ UIUC and earned my Bachelor of Science degree with Highest Honors in May 2024.", "I will continue my journey in the MCS program as a graduate student starting Fall 2024.", "My fields of interest are mainly artificial intelligence/machine learning, game development, and education in computer science."]
            }}
            />
            </p>}
            
        </div>
      </div>
    </div>
      
  );
}

export default LandPage;