import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
// import profileImg from '../assets/profile.jpg'; // <-- replace with your image in /assets

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          {/* <img src={profileImg} alt="Khushi Jagga" /> */}
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m <strong>Khushi Jagga</strong>, a frontend developer passionate about clean UI and beautiful digital experiences.
            I love bringing ideas to life through responsive and interactive websites.
          </p>
          <p>
            With a strong foundation in React, CSS, and modern web design principles, I help startups and clients elevate their brand through design and code.
          </p>
          <p>
            I’m currently exploring animations, 3D effects, and freelance opportunities. Let's collaborate and create something impactful.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
