import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'React Developer Intern',
    company: 'NED Gaming',
    date: 'July 2024 – Aug 2025',
    description:
      'Interned as a React Developer at NED Gaming Limited, where I developed and optimized frontend features using React.js. I worked on responsive UI design, API integration, and performance enhancements. Collaborated with designers and developers in an Agile environment, gaining hands-on experience with React Hooks, Context API, and Git version control.',
    tech: ['React', 'Tailwind', 'REST APIs'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GirlScript Summer of Code',
    date: 'Mar 2024 – May 2024',
    description:
      'Contributed to multiple open-source projects during GirlScript Summer of Code 2025. Worked on frontend and full-stack features using React.js, JavaScript, Python, Node.js, and API integration. Collaborated with maintainers via GitHub, submitted pull requests, resolved issues, improved UI/UX, and reviewed code.',
    tech: ['GitHub', 'Open Source', 'JavaScript'],
  },
  {
    role: 'Subject Matter Expert (Computer Science)',
    company: 'Chegg',
   
    date: 'Jan 2024 – Present',
    description:
      'As a Subject Matter Expert at Chegg, I helped students by providing clear, step-by-step solutions to complex Computer Science problems. Topics included Data Structures, Algorithms, Databases, and OOP. This role sharpened my problem-solving skills and deepened my subject knowledge.',
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
