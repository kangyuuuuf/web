import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./research.css";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResearchPage() {
  // Initially hide the text
  const [showText, setShowText] = useState(false);

  // Toggle function for button
  const handleButtonClick = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className="research-container">
      <AnimatePresence>
        {showText && (
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
        )}
      </AnimatePresence>

      {!showText && (
        <h3>NYN Research Group...</h3>
      )}

      {/* Fixed button at the bottom-right corner */}
      <FontAwesomeIcon icon={faPaperPlane} className="fixed-button" onClick={handleButtonClick}>
        {showText ? "Hide Text" : "Show Text"}
      </FontAwesomeIcon>
    </div>
  );
}

export default ResearchPage;