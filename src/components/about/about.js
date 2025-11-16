

import React from 'react';
import { motion } from 'framer-motion';
import './about.css';
import {faEnvelope, faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="single-page-container">
      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Education Section */}
        <div className="content-section">
          <h2>Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-header">
                <h3>University of Illinois at Urbana-Champaign</h3>
                <span className="education-date">Aug. 2020 - May 2024</span>
              </div>
              <p className="degree">
                <em>Bachelor of Science: Computer Science in Grainger Engineering</em>
              </p>
              <div className="education-details">
                <p className="gpa">Overall GPA: 3.98/4.0 ｜ Technical GPA: 3.99/4.0</p>
                <p className="honors">
                  <strong>Graduated with Highest Honors</strong>
                </p>
                <p className="deans-list">
                  <strong>Deans List:</strong> Fall 2020, Spring 2021, Fall 2022, Spring 2022, Fall 2023, Spring 2023
                </p>
                <div className="teaching-experience">
                  <p className="teaching-title"><strong>Undergraduate Course Assistant:</strong></p>
                  <ul className="course-list">
                    <li>CS 124: Intro to Computer Science I</li>
                    <li>CS 357: Numerical Methods I</li>
                    <li>CS 519: Scientific Visualization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="education-card">
              <div className="education-header">
                <h3>University of Illinois at Urbana-Champaign</h3>
                <span className="education-date">Aug. 2024 - Present</span>
              </div>
              <p className="degree">
                <em>Master of Computer Science</em>
              </p>
              <div className="education-details">
                <p className="gpa">Overall GPA: 4.0/4.0</p>
                <div className="assistantship-info">
                  <p className="assistantship-item">
                    <strong>Graduate Research Assistant</strong> (Sep. 2024 - Present)
                  </p>
                  <p className="research-mentor">
                    Working with <motion.a
                      href="https://mfsilva.web.illinois.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ color: "#0056b3" }}
                      style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease", textDecoration: "none" }}
                    >
                      Prof. Mariana Silva
                    </motion.a> on utilizing CS tools to improve non-CS elementary courses
                  </p>
                  <p className="assistantship-item">
                    <strong>Teaching Assistant</strong> (Jan. 2025 - Present)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobby Section */}
        <div className="content-section">
          <h2>Hobby</h2>
          <div className="hobby-content">
            <div className="hobby-info">
              <h3>Bouldering</h3>
              <p>
                Started bouldering in <strong>March 2025</strong>, BEST SPORTS EVER! I currently climb at around the <strong>V4–V5</strong> level.
              </p>
              <p>
                I usually go 2–3 times per week, focusing on improving technique, dynamic movement, and body tension. I usually climb with a small group of friends, and we love projecting routes together and sharing beta. One of my favorite parts of climbing is the problem-solving and the feeling of finally sending something after many attempts.
              </p>
              <p>
              I especially enjoy overhang routes and dynamic moves. I’m currently working on building more finger strength and improving my balance on slab problems. Recently, I’ve been trying to push toward V5 and be more consistent on harder sets.
              </p>
            </div>
            <div className="video-container">
              <video 
                controls 
                onLoadedMetadata={(e) => {
                  e.target.volume = 0.3;
                }}
              >
                <source src="/video/climb.MOV" type="video/quicktime" />
                <source src="/video/climb.MOV" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="content-section">
          <h2>Support</h2>
          <div className="support-cards">
            <div className="support-card">
              <div className="support-card-content">
                <p>
                  As I began receiving my salary as an undergraduate course assistant, I made a conscious
                  decision to set aside funds specifically to support the growth and development of children
                  monthly. It's a privilege to contribute to their well-being and provide them with
                  opportunities that will shape their futures.
                </p>
                <div className="support-actions">
                  <a 
                    href="https://www.unicef.cn/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="support-button"
                  >
                    Donate!
                  </a>
                </div>
              </div>
            </div>
            <div className="support-card">
              <div className="support-card-content">
                <p className="support-subtitle">Be My Eyes - Help to make the world more accessible for blind and low-vision people</p>
                <div className="support-actions">
                  <a 
                    href="https://www.bemyeyes.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="support-button"
                  >
                    <FontAwesomeIcon icon={faEye} /> Help!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="content-section">
          <h2>Contact</h2>
          <div className="contact-content">
            <p>If you have any question or just wanna chat with me, use this google <motion.a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScawvKCs5XuzSz-5HGlGB7np99YLGM9n4DPfiCu_lmORh0ewQ/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ color: "#0056b3" }}
                        style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease", textDecoration: "none" }}
                      >
                        form
                      </motion.a> to schedule a meeting with me!</p>
            <div className="email-info">
              <p><FontAwesomeIcon icon={faEnvelope} /> <span>kangyuf2[at]illinois.edu</span> | <span>kangyuuuuf[at]gmail[dot]com</span></p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;