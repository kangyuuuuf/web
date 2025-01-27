

import React, { useState } from 'react';
import { motion,AnimatePresence} from 'framer-motion';
import './about.css';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const [activeContent, setActiveContent] = useState('Education');
  const [activeNumber, setActiveNumber] = useState(0);
  const content = {
    Education: (
      <motion.div
        className="mid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      <div className="education-section">
      <h2 >Education</h2>
      <div className="education-content">
        <div className="university">
          <h3>University of Illinois at Urbana-Champaign</h3>
          <div id="column-container">
            <p className="degree">
              <em>Bachelor of Science: Computer Science in Grainger Engineering</em>
            </p>
            <p className="dates">Aug. 2020 - May 2024</p>
          </div>
        </div>
        <p className="gpa">Overall GPA: 3.98/4.0 ｜ Technical GPA: 3.99/4.0</p>
        <p className="deans-list">
          <strong>Deans List:</strong> Fall 2020, Spring 2021, Fall 2022, Spring 2022, Fall 2023, Spring 2023
        </p>
      </div>
      </div>
      <div className="education-section">
      <h2 className="section-title"></h2>
      <div className="education-content">
        <div className="university">
          <h3>University of Illinois at Urbana-Champaign</h3>
          <div id="column-container">
            <p className="degree">
              <em>Master of Computer Science</em>
            </p>
            <p className="dates">Aug. 2024 - Present</p>
          </div>
        </div>
        <p className="gpa">Overall GPA: 4.0/4.0 </p>
      </div>
      </div>
      </motion.div>
    ),
    Contact: (
      <motion.div
        className="mid"
        initial={{ opacity: 0,}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact</h2>
        <p style={{fontSize:"22px"}}>If you have any question or just wanna chat with me, use this google <motion.a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScawvKCs5XuzSz-5HGlGB7np99YLGM9n4DPfiCu_lmORh0ewQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ color: "#0056b3" }}
                    style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease", textDecoration: "none" }}
                  >
                    form
                  </motion.a> to schedule a meeting with me!</p>
        <p style={{fontSize:"22px"}}>Email <FontAwesomeIcon icon={faEnvelope} />: kangyuf2[at]illinois.edu {' '}{' '}{' '}{' '} |  {' '}{' '}{' '}{' '} kangyuuuuf[at]gmail[dot]com</p>
      </motion.div>
    ),
    Donation: (
      <motion.div
        className="mid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Donation</h2>
        <p style={{fontSize:"22px"}}>
          As I began receiving my salary as an undergraduate course assistant, I made a conscious
          decision to set aside funds specifically to support the growth and development of children
          monthly. It's a privilege to contribute to their well-being and provide them with
          opportunities that will shape their futures.
        </p>
        <div class="donation-button-container">
          <a 
            href="https://www.unicef.cn/en" 
            target="_blank" 
            rel="noopener noreferrer"
            class="donate-button"
          >
            Donate!
          </a>
        </div>
      </motion.div>
    ),
  };

  return (
    <div className="split-container">
      {/* Left Panel */}
      <motion.div
        className="left-panel"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={() => setActiveContent('Education')}>Education</button>
        <button onClick={() => setActiveContent('Contact')}>Contact</button>
        <button onClick={() => setActiveContent('Donation')}>Donation</button>
      </motion.div>

      {/* Right Panel */}
        <AnimatePresence mode="wait">
          {/* 
              The 'key' makes React treat each content as a new component 
              when activeContent changes, so it re-mounts. 
          */}
          <motion.div className='right-panel'
            key={activeContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {content[activeContent]}
          </motion.div>
        </AnimatePresence>
    </div>
  );
};

export default About;