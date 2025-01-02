
import "./navigate.css";
import {animate, motion} from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';


function  Navigate() {

  return (
    <motion.div className="container" 
      animate={{opacity:1}}>
      {/* Sidebar Section */}
      <div className="sidebar">
        <motion.img
          src="/image.png" // Replace with your profile image URL
          className="profile-image"
        />
        <h2 className="sidebar-title">Kangyu Feng | 冯康宇</h2>
        <p className="sidebar-subtitle">Master of Computer Science</p>
        <div className="sidebar-info">
          <p>📍 Champaign, IL</p>
          <p>📧 Email</p>
          <p>💻 GitHub</p>
          <p>📚 Google Scholar</p>
          <p>🔗 LinkedIn</p>
          <p>🌐 Website</p>
          <p>📄 Curriculum Vitae</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="main-content">

        {/* Bio Section */}
        <section className="bio">
          <h2>Bio</h2>
        </section>

        {/* Research Interests Section */}
        <section className="research">
          <h2>Research Interest</h2>
          <ul>
            <li>Edge AI & Foundation Models for IoT</li>
            <li>Realtime Sensing Intelligence</li>
            <li>Multimodal Time-Series Learning</li>
            <li>Embodied AI for Cyber-Physical Systems</li>
            <li>Self-Supervised Learning</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Navigate;