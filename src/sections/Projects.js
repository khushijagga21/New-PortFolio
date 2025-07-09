import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Image Editor',
    description: 'Convert and download images via a simple web UI.',
    tech: 'React, HTML, CSS, FileSaver.js',
    link: 'https://github.com/khushijagga21/image-editor',
    demo: '#',
    // image: require('../assets/project1.jpg')
  },
  {
    title: 'YouTube Insta Viewer Bot',
    description: 'Automates views using proxies and ChromeDriver.',
    tech: 'Python, Tkinter, ChromeDriver',
    link: 'https://github.com/khushijagga21/YouTube-Viewer',
    demo: '#',
    // image: require('../assets/project2.jpg')
  },
  {
    title: 'Personal Portfolio',
    description: 'Beautiful portfolio with React and Framer Motion.',
    tech: 'React, Framer Motion, CSS',
    link: 'https://github.com/khushijagga21/portfolio',
    demo: '#',
    // image: require('../assets/project3.jpg')
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0 }
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
      >
        <h2 className="section-title">🚀 Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project, idx) => (
            <motion.div className="project-card" key={idx} variants={item}>
              <div className="image-container">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
              <div className="project-info">
                <p>{project.description}</p>
                <p className="tech">{project.tech}</p>
                <div className="links">
                  <a href={project.link} target="_blank" rel="noreferrer">Code</a>
                  <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
