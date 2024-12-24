import React, { useState, useEffect } from 'react';
import './landPage.css';

function LandPage() {
  const [currentTime, setCurrentTime] = useState('');

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
          <p className="terminal-line">
            <span className="prompt">user@localhost:</span> <span className="command">ls</span>
          </p>
          <p className="terminal-line">portfolio  resume.txt  about-me.txt</p>

          <p className="terminal-line">
            <span className="prompt">user@localhost:</span> <span className="command">cat about-me.txt</span>
          </p>
          <p className="terminal-line">Hey, I am Kangyu. I majored in computer science at the Grainger College of Engineering @ [UIUC](https://illinois.edu/) ane earned my Bachelor of Science degree with Highest Honors in May 2024. I will continue my jounary in MCS program as a graduated student starting fall 2024. 
My fields of interests are mainly artificial intelligence/machine learning, game development, and education in computer science.</p>

          <p className="terminal-line">
            <span className="prompt">user@localhost:</span> <span className="command">echo "Hello, World!"</span>
          </p>
          <p className="terminal-line">Hello, World!</p>

          {/* Blinking Cursor */}
          <p className="terminal-line">
            <span className="prompt">user@localhost:</span> <span className="command"></span> 
            <span className="cursor"> _ </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandPage;