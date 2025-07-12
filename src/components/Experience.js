import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Digimantra',
    logo: '/logos/digimantra.png',
    date: 'May 2024 – Jul 2024',
    description: 'Built modern UI using React & Tailwind, integrated APIs, and delivered pixel-perfect responsive components.',
    tech: ['React', 'Tailwind', 'REST APIs'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GSSoC',
    logo: '/logos/gssoc.png',
    date: 'Mar 2024 – May 2024',
    description: 'Contributed to projects with PRs, bug fixes, and documentation enhancements across multiple repos.',
    tech: ['GitHub', 'Open Source', 'JavaScript'],
  },
  {
    role: 'Freelancer',
    company: 'Personal Projects',
    logo: '/logos/freelance.png',
    date: 'Jan 2024 – Present',
    description: 'Worked with clients to build stunning websites, portfolios, and UI components using React and EmailJS.',
    tech: ['React', 'HTML/CSS', 'EmailJS'],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <motion.h2
        className="exp-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience 💼
      </motion.h2>

      <div className="exp-grid">
        {experiences.map((exp, index) => (
          <motion.div
            className="exp-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="exp-header">
              <img src={exp.logo} alt={exp.company} className="exp-logo" />
              <div className="exp-info">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="exp-date">{exp.date}</p>
              </div>
            </div>
            <p className="exp-desc">{exp.description}</p>
            <div className="exp-tech">
              {exp.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
