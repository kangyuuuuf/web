import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
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
      className="navbar"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-left">
        <h1 className="website-name" onClick={handleHome}>Kangyu Feng | UIUC</h1>
      </div>
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
    </motion.nav>
  );
};

export default Navbar;