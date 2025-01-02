
import "./navigate.css";
import {animate, motion} from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';


function  Navigate() {
  const items = [
    { id: 1, text: "CS 124", info: "Intro to Computer Science I",  image: "/124.png" },
    { id: 2, text: "CS 357", info: "Numerical Methods I", image: "/357.png" },
    { id: 3, text: "CS 519", info: "Scientific Visualization", image: "/519.png"},
  ];
  return (
    <motion.div className="container" 
      animate={{opacity:1}}>
      {/* Sidebar Section */}
      <div className="sidebar">
        <motion.img
          whileHover={{ rotate: 10 }}
          onClick={() => window.location.href = "/"}
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
      <section className="subsection" id="bio">
        <h2>Intro</h2>
        <p>
          I majored in computer science at the Grainger College of Engineering @ 
          <motion.a
            href="https://illinois.edu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0056b3" }} // Change color on hover
            style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease" }}
          > UIUC
          </motion.a> and earned my <strong>Bachelor of Science</strong> degree with Highest Honors in May 2024. 
          I am currently enrolled in the MCS program as a graduate student starting in Fall 2024, conducting research on utilizing CS tools to improve non-CS elementary courses.
          My fields of interests are mainly artificial intelligence/machine learning, game development, and education in computer science.
        </p>
      </section>

      {/* Research Interests Section */}
      <section className="subsection" id="research">
        <h2>Enthusiasm for Education in Computer Science</h2>
        <p>
          Besides learning how fundamental data structures and algorithm’s function are implemented with my professors and mentor, my teaching experience at Grainger College of Engineering also reinforced my commitment to create an inclusive and supportive playground in entertainment technology, from breaking language barriers for international students to weaving programming expertise into the diverse fabric of interdisciplinary research.
        </p>
        <p>The following are the courses for which I have been working as an undergraduate course assistant:</p>
        <div className="container-class">
          {items.map((item) => (
            <div key={item.id} className="circle-container">
              <div className="circle">
                <img src={item.image} alt={`Circle ${item.id}`} className="circle-image" />
              </div>
              <div className="circle-text">{item.text}</div>
              <div className="circle-text2">{item.info}</div>
            </div>
          ))}
        </div>
        <p>
          I am currently working with 
          <motion.a
            href="https://mfsilva.web.illinois.edu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0056b3" }}
            style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease" }}
          > Dr. Mariana Silva
          </motion.a>, who advocates 
          <motion.a
            href="https://en.wikipedia.org/wiki/Mastery_learning#:~:text=Mastery%20learning%20is%20a%20set%2Cthey%20are%20given%20enough%20time."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0056b3" }}
            style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease" }}
          > mastery learning
          </motion.a>, on the 
          <motion.a
            href="https://ae3.grainger.illinois.edu/holding/grants-for-the-advancement-of-teaching-engineering-gate"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0056b3" }}
            style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease" }}
          > GATE
          </motion.a> project—which was to create a new curriculum for CS 101, a large-scale and introductory course with students from various engineering majors—emphasizing the significance of detecting changes in students’ psychological states and providing appropriate emotional support.
        </p>
      </section>
    </div>
    </motion.div>
  );
};

export default Navigate;