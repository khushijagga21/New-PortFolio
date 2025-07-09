import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="glass-navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav-container">
        <div className="nav-logo">✨ Khushi.dev</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/resume.pdf" className="resume-btn">Resume</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
