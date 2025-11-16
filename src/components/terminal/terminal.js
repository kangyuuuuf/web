import React, { useRef, useState, useEffect } from "react";
import TypeIt from "typeit-react";
import "./terminal.css";
import { motion } from "framer-motion";
import { useTheme } from '../../contexts/ThemeContext';

function Terminal() {
  const { theme } = useTheme();
  const [currentTime, setCurrentTime] = useState("");
  const [currentLog1, setCurrentLog1] = useState(false);
  const [currentLog2, setCurrentLog2] = useState(false);
  const [currentLog3, setCurrentLog3] = useState(false);

  // Use an array ref to store multiple TypeIt instances
  const typeItRefs = useRef([]);

  // Function to update current time
  useEffect(() => {
    try {

      const updateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        setCurrentTime(`${hours}:${minutes}:${seconds}`);
      };

      updateTime(); // Set the initial time
      const timer = setInterval(updateTime, 1000); // Update time every second

      // Cleanup: clear interval and destroy all TypeIt instances
      return () => {
        clearInterval(timer);
      };
    } catch { }
  }, []);

  try {
    return (
      <motion.div
        className={`terminal-container ${theme === 'dark' ? 'dark-mode' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
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
                breakLines: true,
                lifeLike: true,
                strings: ['echo "Hey, I\'m Kangyu!"'],
                speed: 40,
                lifeLike: true,
                waitUntilVisible: true,
                afterComplete: (instance) => {
                  instance.pause()
                  setTimeout(() => {
                    setCurrentLog1(true);
                    }, 1000);
                }
              }}
            />
          </span>
          <div className="command">
            {currentLog1 &&
              <TypeIt
                options={{
                  strings: [
                    // ASCII art (spaces replaced by \u2007 as needed)
                    "\u2007_\u2007\u2007\u2007_\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007___\u2007_\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007",
                    "|\u2007|\u2007|\u2007|\u2007___\u2007_\u2007\u2007\u2007_\u2007\u2007\u2007\u2007|_\u2007_(\u2007)_\u2007__\u2007___\u2007\u2007",
                    "|\u2007|_|\u2007|/\u2007_\u2007\\\u2007|\u2007|\u2007|\u2007\u2007\u2007\u2007|\u2007||/|\u2007'_\u2007\u2007\u2007_\u2007\\\u2007",
                    "|\u2007\u2007_\u2007\u2007|\u2007\u2007__/\u2007|_|\u2007|_\u2007\u2007\u2007|\u2007|\u2007\u2007|\u2007|\u2007|\u2007|\u2007|\u2007|",
                    "|_|\u2007|_|\\___|\\__,\u2007(\u2007)\u2007|___|\u2007|_|\u2007|_|\u2007|_|",
                    "|\u2007|/\u2007/__\u2007_\u2007_|___/|/_\u2007_\u2007_\u2007\u2007\u2007_\u2007_\u2007\u2007\u2007_\u2007\u2007-\u2007",
                    "|\u2007'\u2007//\u2007_\u2007\u2007|\u2007'_\u2007\\\u2007/\u2007_\u2007\u2007|\u2007|\u2007|\u2007|\u2007|\u2007|\u2007||\u2007|",
                    "|\u2007.\u2007\\\u2007(_|\u2007|\u2007|\u2007|\u2007|\u2007(_|\u2007|\u2007|_|\u2007|\u2007|_|\u2007||_|",
                    "|_|\\_\\__,_|_|\u2007|_|\\__,\u2007|\\__,\u2007|\\__,_/(_)",
                    "\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007|___/\u2007|___/\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007\u2007",
                  ],
                  speed: 0.1,
                  lifeLike: true,
                  nextStringDelay: 0,
                  afterComplete: () => {
                    // wait 5 seconds
                    setTimeout(() => {
                      setCurrentLog2(true);
                    }, 1000);
                  }
                }}
              />
            }
          </div>

          {currentLog2 && <span className="prompt">user@localhost: </span>}
          {currentLog2 &&
            <span className="command">
              <TypeIt
                options={{
                  strings: [
                    // ASCII art (spaces replaced by \u2007 as needed)
                    "cat about-me.txt",
                  ],
                  speed: 40,
                  lifeLike: true,
                  nextStringDelay: 0,
                  waitUntilVisible: true,
                  afterComplete: () => {
                    setTimeout(() => {
                      setCurrentLog3(true);
                    }, 2000);
                  }
                }}
              />
            </span>
          }
          {currentLog3 &&
            <div className="command">
              <TypeIt
                options={{
                  speed: 0.1,
                  loop: true,
                  lifeLike: true,
                  breakLines: false,
                  nextStringDelay: [5000, 1000],
                  loopDelay: [1000, 5000],
                  strings: [
                    "I majored in computer science at the Grainger College of Engineering @ UIUC and earned my Bachelor of Science degree with Highest Honors in May 2024.",
                    "I am currently enrolled in the MCS program as a graduate student starting in Fall 2024, conducting research on utilizing CS tools to improve non-CS elementary courses.",
                    "My fields of interest are mainly artificial intelligence/machine learning, game development, and education in computer science.",
                  ],
                }}
              />
            </div>
          }
        </div>
      </motion.div>
    );
  }
  catch {
    console.log("")
  }
}

export default Terminal;