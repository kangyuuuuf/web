import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './about.css';

const About = () => {
  const [activeContent, setActiveContent] = useState('Story');

  const content = {
    Story: (
      <div className='mid'>
        <h2>Story</h2>
        <p>
        Growing up in Shanghai, I've often felt the weight of my parents' journey. In 2000, they left their hometown, which is a small, impoverished village in Hunan Province, a place that still feels like a distant memory for me. As a first-generation in my family who left my hometown, my father made sacrifices and efforts to provide me with opportunities that our peers back home could only dream of.
        </p>
        <p>  
        As I reflect on my journey, I realize that I'm part of a new chapter for our family - one where we've transcended geographical boundaries and cultural silos. Just as my parents' departure from Hunan Province marked a significant shift in our family's trajectory, my decision to study abroad in the US represents another milestone. As a first-generation international student,  it's also an honor to be part of this journey that began with their courage and perseverance.
        </p>
      </div>
    ),
    Contact: (
      <div className='mid'>
        <h2>Contact</h2>
        <p>
          kangyuf2[at]illinois[dot]edu / kangyuuuuf[at]gmail[dot]com
        </p>
      </div>
    ),
    Donation: (
      <div className='mid'>
        <h2>Donation</h2>
        <p>
        As I began receiving my salary as an undergraduate course assistant, I  made a conscious decision to set aside funds specifically to support the  growth and development of children monthly. It's a privilege to contribute to their well-being and provide them with opportunities that will shape their futures. This commitment has been a source of fulfillment for me, and I'm  grateful for the chance to make a positive impact on the world through my actions.
        </p>
      </div>
    ),
  };

  return (
    <div className="split-container">
      {/* Left Panel */}
      <motion.div
        className="left-panel"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={() => setActiveContent('Story')}>Story</button>
        <button onClick={() => setActiveContent('Contact')}>Contact</button>
        <button onClick={() => setActiveContent('Donation')}>Donation</button>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className="right-panel"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {content[activeContent]}
      </motion.div>
    </div>
  );
};

export default About;