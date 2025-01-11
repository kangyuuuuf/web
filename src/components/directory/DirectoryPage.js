// src/components/DirectoryPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './DirectoryPage.css';

const DirectoryPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    },
  };

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/navigate', label: 'Navigate' },
    { to: '/research', label: 'Research' },
    { to: '/snake', label: 'Snake Game' },
    { to: '/about', label: 'About Us' },
    // Add more menu items as needed
  ];

  return (
    <motion.div 
      className="directory-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="directory-title">Directory</h1>
      <motion.ul className="directory-menu">
        {menuItems.map((item, index) => (
          <motion.li 
            key={index} 
            className="directory-item"
            variants={itemVariants}
          >
            <Link to={item.to} className="directory-link">
              {/* <span className="icon">{item.icon}</span> */}
              <span className="label">{item.label}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default DirectoryPage;