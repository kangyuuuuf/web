import React from "react";
import { motion } from "framer-motion";
import "./snakePage.css";
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../themeToggle/ThemeToggle';

function SnakePage() {
  const { theme } = useTheme();

  return (
    <div className={`snake-page-container ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <motion.div
        className="snake-content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Whoops, 404 error!</h3>
        <div className="game-container">
          <iframe
            title="SnakeGame"
            src="/snake_game/snake.html"
            className="snake-game-iframe"
          />
        </div>
      </motion.div>
      <ThemeToggle />
    </div>
  );
}

export default SnakePage;