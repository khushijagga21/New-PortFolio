import React from "react";
import "./InterpersonalSkills.css";
import { motion } from "framer-motion";

const softSkills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Leadership",
  "Creativity",
  "Empathy",
  "Collaboration",
];

const InterpersonalSkills = () => {
  return (
    <section className="soft-skills" id="soft-skills">
      <motion.h2
        className="soft-skills-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Interpersonal Skills 🤝
      </motion.h2>

      <div className="soft-skills-grid">
        {softSkills.map((skill, index) => (
          <motion.div
            className="soft-skill-item"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InterpersonalSkills;
