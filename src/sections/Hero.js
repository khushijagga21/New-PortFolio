import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <motion.p className="tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          👋 Hey there, I’m
        </motion.p>

        <motion.h1 className="name" initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          Khushi Jagga
        </motion.h1>

       <motion.h2
  className="role"
  initial={{ x: 60, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.5 }}
>
  MERN Stack Developer, Open-Source Contributor and Freelancer
</motion.h2>


        <motion.p className="description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          I design and code beautifully simple things, and I love what I do.
          Let’s build something incredible together.
        </motion.p>

        <motion.div className="hero-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <a href="#projects" className="btn btn-primary">🚀 View Projects</a>
          <a href="#contact" className="btn btn-outline">📬 Contact Me</a>
             <a href="https://drive.google.com/file/d/1OqSFGhqoMxpeMMzpfCF4pXts4DJoYijJ/view?usp=sharing" className="btn btn-outline"> Resume</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
