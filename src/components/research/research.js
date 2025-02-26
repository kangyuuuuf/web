import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./research.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResearchPage() {
  // Initially hide the text
  const [showText, setShowText] = useState(false);

  // Toggle function for button
  const handleButtonClick = () => {
    setShowText((prev) => !prev);
  };

  const data = [
    {
      title: "Implementing a Tool for Structured Roles in Hybrid Collaborative Learning Environments",
      conference: "ASEE 2025 Annual Conference & Exposition, June 2025",
      authors: [
        { name: "Victor Zhao" },
        { name: "Yuxuan Chen" },
        { name: "Kangyu Feng", boldItalic: true },
        { name: "Mariana Silva" },
      ],
      link: "https://www.asee.org/home",
    },
    {
      title: "A Comprehensive Redesign of CS1 for Engineering Students",
      conference: "ASEE 2025 Annual Conference & Exposition, June 2025",
      authors: [
        { name: "Yuxuan Chen" },
        { name: "Victor Zhao" },
        { name: "Kangyu Feng", boldItalic: true },
        { name: "Mariana Silva" },
      ],
      link: "https://www.asee.org/home",
    }
  ];

  return (
    <div className="research-container">
      <AnimatePresence>
        {showText ? (
          <motion.div
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
              unwavering support, invaluable opportunities, and thoughtful guidance, as well as immensely grateful to Yuxuan and everyone who supported, helped, and enlightened me during my academic journey."
            </p>
            <div
              style={{
                height: "2px",
                width: "20%",
                margin: "20px auto 40px auto",
                background: "#696969",
                border: "none",
              }}
            ></div>
            <p>
              -谨此以感谢Mariana Silva教授、宇轩以及其他所有在我求学道路上帮助过我的人-
            </p>
          </motion.div>
        ) : (
          <motion.div className="publications-container"             
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed button at the bottom-right corner */}
      <FontAwesomeIcon icon={faPaperPlane} className="fixed-button" onClick={handleButtonClick}>
        {showText ? "Hide Text" : "Show Text"}
      </FontAwesomeIcon>
    </div>
  );
}

export default ResearchPage;
