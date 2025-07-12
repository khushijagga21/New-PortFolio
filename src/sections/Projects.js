import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Image Editor',
    description: 'Convert and download images via a simple web UI.',
    tech: 'Python, Flask, OpenCV, HTML',
    link: 'https://github.com/khushijagga21/Image_Editor.git',
    demo: '#',
    // image: require('../assets/project1.jpg')
  },
  {
    title: 'YouTube Insta Viewer Bot',
    description: 'Automates views using proxies and ChromeDriver.',
    tech: 'Python, Tkinter, ChromeDriver, teX, HTML',
    link: 'https://github.com/khushijagga21/YouTube-Viewer.git',
    demo: '#',
    // image: require('../assets/project2.jpg')
  },
  {
    title: 'Invoice-AI',
    description: 'Beautiful portfolio with React and Framer Motion.',
    tech: 'React, HTML, CSS JavaScript, Python, OCR and NER',
    link: 'https://github.com/khushijagga21/Invoice-Handling',
    demo: '#',
    // image: require('../assets/project3.jpg')
  },
  {
    title: 'Guided Learning Platform',
    description: 'Real-time weather updates based on location.',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://github.com/khushijagga21/Guided-Learning-Platform',
    demo: '#',
    // image: require('../assets/weather.jpg')
  },
  {
    title: 'Fuel Management System',
    description: 'Manage your tasks efficiently with local storage.',
    tech: 'HTML, CSS, JavaScript and Firebase',
    link: 'https://github.com/khushijagga21/HP-PowerLab',
    demo: '#',
    // image: require('../assets/todo.jpg')
  },
  {
    title: 'Intervue-Website',
    description: 'Fully responsive blog with dummy post integration.',
    tech: 'HTML and CSS',
    link: 'https://github.com/khushijagga21/Intervue-Assignment',
    demo: 'https://intervue-assignment-ten.vercel.app/',
    // image: require('../assets/blog.jpg')
  },
   {
    title: 'Real-Estate Website',
    description: 'Fully responsive blog with dummy post integration.',
    tech: 'React and Tailwind CSS',
    link: 'https://github.com/khushijagga21/RootsAndRoofs',
    demo: 'https://roots-and-roofs.vercel.app/',
    // image: require('../assets/blog.jpg')
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
