import React, { useState } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <motion.nav
      className="glass-navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <div className="nav-logo">✨ Khushi.dev</div>

        {/* Toggle button (hamburger) */}
        <div className="nav-toggle" onClick={toggleMenu}>
          {open ? <FiX size={26} color="#fff" /> : <FiMenu size={26} color="#fff" />}
        </div>

        {/* Links (visible on larger screens or when toggled) */}
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {['Home', 'About', 'Services', 'Projects','Experience', 'Contact',].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" className="resume-btn" onClick={closeMenu}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
