import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100 }
    },
  };
  const handleHome = () => {
      window.location.href = "/";
  };

  const menuItems = [
    { to: '/details/', label: 'Main' },
    { to: '/details/about', label: 'About Me' },
    { to: '/details/research', label: 'Research' },
    { to: '/details/project', label: 'Project' },

  ];

  return (
    <motion.nav 
      className={`navbar ${theme === 'dark' ? 'dark-mode' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-left">
        <h1 className="website-name" onClick={handleHome}>Kangyu Feng | UIUC</h1>
      </div>
      <div className="navbar-right-container">
        <motion.ul className="navbar-right">
          {menuItems.map((item, index) => (
            <motion.li 
              key={index} 
              className="navbar-item"
              variants={itemVariants}
            >
              <Link to={item.to} className="navbar-link">
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.button
          className={`theme-toggle-btn ${theme === 'dark' ? 'dark-mode' : ''}`}
          onClick={toggleTheme}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            // Moon icon for light mode (dark color)
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            // Sun icon for dark mode (light color)
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;