import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./research.css";

function ResearchPage() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false); // 在 5 秒后隐藏文字
    }, 5000);

    return () => clearTimeout(timer); // 清理计时器
  }, []);

  return (
    <div className="research-container">
      <AnimatePresence>
        {showText && (
          <motion.div
            className="center-text"
            initial={{ opacity: 0 }} // 初始状态
            animate={{ opacity: 1 }} // 动画目标状态
            exit={{ opacity: 0,  }} // 淡出动画
            transition={{ duration: 2 }} // 动画时长
          >
            <p>
              "My deepest gratitude to Professor Mariana Silva for her </p>
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
    </div>
  );
}

export default ResearchPage;