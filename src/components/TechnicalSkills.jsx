import React from "react";
import "./TechnicalSkills.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const technicalSkills = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "REST APIs", icon: <SiPostman /> },
  ],
  Tools: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "EmailJS" },
  ],
};

const TechnicalSkills = () => {
  return (
    <section className="skills" id="technical-skills">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills 🛠️
      </motion.h2>

      <p className="skills-intro">
        Technologies I build with, organized by area of focus.
      </p>

      {Object.entries(technicalSkills).map(([category, skills], index) => (
        <div key={index} className="skills-block">
          <h3 className="skills-subtitle">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <motion.div
                className="skill-item"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {skill.icon && (
                  <span className="skill-icon">{skill.icon}</span>
                )}
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechnicalSkills;
