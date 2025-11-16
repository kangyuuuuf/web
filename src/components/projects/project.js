import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import './project.css';

const projectsData = [
  {
    title: "Hybrid Distributed File System (HyDFS)",
    category: "Distributed Systems",
    dates: "Jan. 2025 – May 2025",
    bullets: [
      "Developed HyDFS, a hybrid distributed file system inspired by HDFS and Cassandra, integrating consistent hashing and replication across a cluster to ensure scalability and fault tolerance.",
      "Implemented append, merge, and re-replication protocols supporting per-client ordering, eventual consistency, and automatic data rebalancing under node failures."
    ]
  },
  {
    title: "Focused Object Detection Based on 3D Reconstruction",
    category: "Computer Vision",
    dates: "Oct. 2024 – Dec. 2024",
    bullets: [
      "Constructed the utils file for handling segmentation and gaze estimation models, and image processing.",
      "Created the initial output using a single-view image as the preliminary idea.",
      "Developed the final methodology for 3D reconstruction, projection, and finding the intersection of planes and the focused object based on triangulation.",
      "Utilized SAM and YOLO model as object detection and segmentation."
    ]
  },
  {
    title: "StudyBuddy",
    category: "Web Design",
    dates: "Oct. 2024 – Dec. 2024",
    bullets: [
      "A website that helps students to pair and build connections with their classmates.",
      "Created and designed the frontend, including all the pages for users.",
      "Developed user authentication using Google Firebase.",
      "Designed and coded the logic of filter/preference, providing a personalized user experience."
    ]
  },
  {
    title: "CardColony",
    category: "Game Development",
    dates: "Oct. 2022 – Dec. 2022",
    bullets: [
      "Responsible for card drag-and-drop and snapping logic (card stacking).",
      "Contributed to the development of the card synthesis system.",
      "Designed and developed the time system and currency system.",
      "Participated in designing the game interface and shop interface."
    ]
  },
  {
    title: "University Course Register",
    category: "Database System",
    dates: "Oct. 2022 – Dec. 2022",
    bullets: [
      "Scraped course information from the school's website using Python’s BeautifulSoup4.",
      "Stored and managed course information and student account data with SQLite3.",
      "Developed the front-end using React, designed web pages, and optimized layout for better user experience."
    ]
  },
  {
    title: "Open Flight Data Analysis",
    category: "Data Structure",
    dates: "Oct. 2021 – Dec. 2021",
    bullets: [
      "A graph-based program that includes BFS, PageRank, and Dijkstra algorithms with visualization.",
      "Implemented Dijkstra’s algorithm to find the shortest path between airports.",
      "Developed a visualization to display routes on an equirectangular world map.",
      "Stored and manipulated 8000+ airports and 20000+ airlines data."
    ]
  }
];

// 1) Parent container variants
const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.2 // each child animates after previous finishes 0.2s
    }
  }
};

// 2) Child/card variants
const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 30
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Projects() {
  const { theme } = useTheme();
  
  return (
    <div className={`projects-container ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h1>Projects</h1>
        <h2 className='subtitle'>- kangyuuuuf -</h2>
      {/* 3) Parent motion.div controlling the stagger */}
      <motion.div
        className="cards-wrapper"
        variants={containerVariants}
        initial="offscreen"
        animate="onscreen"
      >
        {projectsData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={cardVariants}  // Each child card uses these variants
          >
            <h2 className="project-title">{project.title}</h2>
            <div className="project-meta">
              <span className="project-category">{project.category}</span>
              <span className="project-date">{project.dates}</span>
            </div>
            <ul className="project-bullets">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}