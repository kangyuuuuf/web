import "./navigate.css";
import { animate, delay, motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import { faEnvelope, faFile, faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Navigate() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Controls the delay between each child's animation
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const items = [
    { id: 1, text: "CS 124", info: "Intro to Computer Science I", image: "/124.png" },
    { id: 2, text: "CS 357", info: "Numerical Methods I", image: "/357.png" },
    { id: 3, text: "CS 519", info: "Scientific Visualization", image: "/519.png" },
  ];
  const updates = [
    { id: 1, time: "2020.08", info: "Started my undergraduate study at UIUC"},
    { id: 2, time: "2024.05", info: "Graduated with Highest Honors in Computer Science" },
    { id: 3, time: "2024.06", info: "Joined ANE Logistics as an intern, working on updating API infrastructure" },
    { id: 4, time: "2024.08", info: "Started MCS program at UIUC" },
    
  ];

  const AnimatedElement = ({ children, component: Component = "p", className, ...rest }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const animation = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    };
  
    return (
      <motion.div
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        transition={{ duration: 0.8 }}
        variants={animation}
      >
        {/* Pass className and any additional props */}
        <Component className={className} {...rest}>
          {children}
        </Component>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="container"
    >
      {/* Sidebar Section */}
      <motion.div className="sidebar"       initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
        <motion.img
          whileHover={{ rotate: 10 }}
          onClick={() => (window.location.href = "/")}
          src="/image.png"
          className="profile-image"
        />
        <h2 className="sidebar-title">Kangyu Feng | 冯康宇</h2>
        <p className="sidebar-subtitle">Master of Computer Science</p>
        <div className="sidebar-info">
        <a 
          href="https://www.google.com/maps/place/Champaign,+IL" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLocationDot}/> Champaign, IL
        </a>
        <a 
          href="mailto:ericfeng0821@gmail.com" 
          className="sidebar-link"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a 
          href="https://github.com/kangyuuuuf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sidebar-link"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/kangyuuuuf/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sidebar-link"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a 
          href="/" 
          target="_self" 
          rel="noopener noreferrer"
          className="sidebar-link"
        >
          <FontAwesomeIcon icon={faGlobe} /> Website
        </a>
        <a 
          href="/cv.pdf" 
          download= "Kangyu_Feng_CV.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="sidebar-link"
        >
          <FontAwesomeIcon icon={faFile} /> Curriculum Vitae
        </a>
        </div>
      </motion.div>

      <div className="main-content">
      {/* Bio Section */}
      <section className="subsection" id="bio">
        <AnimatedElement component="h2">Bio</AnimatedElement>
        <AnimatedElement>
          I majored in computer science at the Grainger College of Engineering @{" "}
          <motion.a
            href="https://illinois.edu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0056b3" }}
            style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease" }}
          >
            UIUC
          </motion.a>{" "}
          and earned my <strong>Bachelor of Science</strong> degree with Highest Honors in May
          2024. I am currently enrolled in the MCS program as a graduate student starting in Fall
          2024, continuing my journey in the field of computer science. I have the privilege to work
          with Prof.{" "}
          <motion.a
            href="https://mfsilva.web.illinois.edu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0056b3" }}
            style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease" }}
          >
            Mariana Silva
          </motion.a>{" "}
          as her research assistant, conducting research on utilizing CS tools to improve non-CS
          elementary courses.
        </AnimatedElement>
        <AnimatedElement>
          My fields of interest are mainly artificial intelligence/machine learning, game
          development, and{" "}
          <motion.a
            href="https://publish.illinois.edu/computingedresearch/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0056b3" }}
            style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease" }}
          >
            computer science education
          </motion.a>
          .
        </AnimatedElement>
      </section>

      {/* Updates Section */}
      <section className="subsection" id="updates">
        <AnimatedElement component="h2">Updates</AnimatedElement>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="timeline-container"
        >
          {updates.slice().reverse().map((update) => (
            <motion.p
              key={update.id}
              className="timeline"
              variants={itemVariants}
            >
              <span>>> {update.time}</span>
              <span style={{ display: "inline-block", width: "4ch" }}></span>
              <span>{update.info}</span>
            </motion.p>
          ))}
        </motion.div>
      </section>

      {/* Research Interests Section */}
      <section className="subsection" id="research">
        <AnimatedElement component="h2">Education in Computer Science</AnimatedElement>
        <AnimatedElement>
          Besides learning how fundamental data structures and algorithms function, my teaching
          experience at Grainger College of Engineering also reinforced my commitment to creating an
          inclusive and supportive playground in entertainment technology, from breaking language
          barriers for international students to weaving programming expertise into the diverse
          fabric of interdisciplinary research.
        </AnimatedElement>
        <AnimatedElement>
          The following are the courses for which I have been working as an undergraduate course
          assistant:
        </AnimatedElement>
        <AnimatedElement component="div" className="container-class">
          {items.map((item) => (
            <div key={item.id} className="circle-container">
              <motion.div className="circle" whileHover={{ scale: 1.1 }}>
                <img src={item.image} alt={`Circle ${item.id}`} className="circle-image" />
              </motion.div>
              <div className="circle-text">{item.text}</div>
              <div className="circle-text2">{item.info}</div>
            </div>
          ))}
        </AnimatedElement>
        <AnimatedElement>
          I am currently working with my mentor,{" "}
          <motion.a
            href="https://mfsilva.web.illinois.edu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0056b3" }}
            style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease" }}
          >
            Dr. Mariana Silva
          </motion.a>{" "}
          on the project—which focuses on utilizing computer science tools to enhance non-CS elementary courses, Calculas I. The project includes to 1) deploy the homework content to {" "}
           <motion.a
            href="https://ae3.grainger.illinois.edu/holding/grants-for-the-advancement-of-teaching-engineering-gate"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#0056b3" }}
            style={{ display: "inline", color: "#007bff", transition: "color 0.3s ease" }}
          >
            PriarieLearn
          </motion.a> to support mastery-based learning and meet the course’s growing demand and 2) conduct research on the analysis of student performance data between non-engineering student and engineering student to improve the course’s content and structure.
        </AnimatedElement>
      </section>
    </div>
    
    </motion.div>
  );
}

export default Navigate;