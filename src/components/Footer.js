import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>👩‍💻 Khushi Jagga</h3>
        <p>Frontend Developer | React | UI Enthusiast</p>
        <div className="social-links">
          <a href="https://github.com/khushijagga21" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/khushijagga" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:khushijagga14@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Khushi Jagga. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
