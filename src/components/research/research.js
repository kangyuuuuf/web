import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./research.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from '../../contexts/ThemeContext';

function ResearchPage() {
  const { theme } = useTheme();
  // Initially hide the text
  const [showText, setShowText] = useState(false);

  // Toggle function for button
  const handleButtonClick = () => {
    setShowText((prev) => !prev);
  };

  const data = [
    {
      title: "Exploring LLMs for Generating Erroneous Examples in CS1",
      conference: "SIGCSE Technical Symposium 2026",
      authors: [
        { name: "Yuxuan Chen" },
        { name: "Chenyan Zhao" },
        { name: "Kangyu Feng", boldItalic: true },
        { name: "Junyu Zhang" },
        { name: "Vedan Malhotra" },
        { name: "Mariana Silva" },
      ],
      link: "https://sigcse2026.sigcse.org/",
    },
    {
      title: "Implementing a Tool for Structured Roles in Hybrid Collaborative Learning Environments",
      conference: "ASEE 2025 Annual Conference & Exposition, June 2025",
      authors: [
        { name: "Victor Zhao" },
        { name: "Yuxuan Chen" },
        { name: "Kangyu Feng", boldItalic: true },
        { name: "Geoffrey L Herman"},
        { name: "Matthew West" },
        { name: "Mariana Silva" },
      ],
      link: "https://www.asee.org/events/Conferences-and-Meetings/2025-Annual-Conference",
    },
    {
      title: "A Comprehensive Redesign of CS1 for Engineering Students",
      conference: "ASEE 2025 Annual Conference & Exposition, June 2025",
      authors: [
        { name: "Yuxuan Chen" },
        { name: "Victor Zhao" },
        { name: "Kangyu Feng", boldItalic: true },
        { name: "Matthew West" },
        { name: "Mariana Silva" },
      ],
      link: "https://www.asee.org/events/Conferences-and-Meetings/2025-Annual-Conference",
    }
  ];

  return (
    <div className={`research-container ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <AnimatePresence mode="wait">
        {showText ? (
          <motion.div
            key="gratitude-text"
            className="center-text"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 2 }} 
          >
            <p>
              "My deepest gratitude to Professor Mariana Silva for her 
            </p>
            <p>
              unwavering support, invaluable opportunities, and thoughtful guidance, as well as immensely grateful to Yuxuan and Victor and everyone who supported, helped, and enlightened me during my academic journey."
            </p>
            <div
              style={{
                height: "2px",
                width: "20%",
                margin: "20px auto 40px auto",
                background: theme === 'dark' ? "#b0b0b0" : "#696969",
                border: "none",
              }}
            ></div>
            <p>
              -谨此以感谢Mariana Silva教授、宇轩、Victor以及其他所有在我求学道路上帮助过我的人-
            </p>
          </motion.div>
        ) : (
          <motion.div className="publications-container"
            key="publications-content"     
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 2 }} >
            <h2>Publications</h2>
            <hr />
            {data.map((publication, index) => (
              <div key={index} className="publication">
                <h3>{publication.title}</h3>
                <p className="conference">
                  <i>
                    <a href={publication.link} target="_blank" rel="noopener noreferrer">
                      {publication.conference}
                    </a>
                  </i>
                </p>
                <p className="authors">
                  {publication.authors.map((author, i) => (
                    <span key={i}>
                      {author.boldItalic ? <b><i>{author.name}</i></b> : author.name}
                      {i < publication.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                {index < data.length - 1}
              </div>
            ))}
            <div style={{ height: "8px" }}></div> 
            <h2>Ongoing Project</h2>
            <hr />
            <div className="publication">
              <div className="authors">
                        I am currently working with my mentor,{" "}
                        <motion.a
                          href="https://mfsilva.web.illinois.edu/"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ color: theme === 'dark' ? "#ffb84d" : "#0056b3" }}
                          style={{ display: "inline", color: theme === 'dark' ? "#f39c12" : "#007bff", transition: "color 0.3s ease" }}
                        >
                          Dr. Mariana Silva
                        </motion.a>{" "}
                        on the project—which focuses on utilizing computer science tools to enhance non-CS elementary courses, Calculus II. The project includes 
                        1) deploying the homework content to {" "}
                        <motion.a
                          href="https://ae3.grainger.illinois.edu/holding/grants-for-the-advancement-of-teaching-engineering-gate"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ color: theme === 'dark' ? "#ffb84d" : "#0056b3" }}
                          style={{ display: "inline", color: theme === 'dark' ? "#f39c12" : "#007bff", transition: "color 0.3s ease" }}
                        >
                          PriarieLearn
                        </motion.a> to support mastery-based learning and meet the course’s growing demand and 2) conducting research on the analysis of student performance data between non-engineering students and engineering students to improve the course’s content and structure.
              </div>
            </div>
          </motion.div>)
          }
      </AnimatePresence>

      {/* Fixed button at the bottom-right corner */}
      <FontAwesomeIcon icon={faPaperPlane} className="fixed-button" onClick={handleButtonClick}>
        {showText ? "Hide Text" : "Show Text"}
      </FontAwesomeIcon>
    </div>
  );
}

export default ResearchPage;
