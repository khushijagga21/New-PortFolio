import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
// import profileImg from '../assets/profile.jpg'; // <-- replace with your image in /assets

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          {/* <img src={profileImg} alt="Khushi Jagga" /> */}
        </div>
        <div className="about-text">
          <h2>About Me 💜</h2>
          <p>
            I'm <strong>Khushi Jagga</strong>, a final-year Electronics and Communication Engineering student, passionate <strong>Frontend Developer</strong>, <strong>Open-Source Contributor</strong>, and <strong>Freelancer</strong>.
          </p>
          <p>
            With a strong foundation in <strong>React</strong>, <strong>CSS</strong>, and modern web development practices, I craft responsive and user-friendly interfaces that blend creativity and functionality.
          </p>
          <p>
            I’ve participated in national-level hackathons — including being a <strong>finalist at HackRx</strong> and a <strong>semi-finalist at the HP Hackathon</strong> — where I contributed to building impactful tech solutions under tight deadlines.
          </p>
          <p>
            Apart from coding, I’m a <strong>confident communicator</strong>, <strong>active listener</strong>, and a <strong>collaborative team player</strong>. These skills help me connect well with teams, clients, and users.
          </p>
          <p>
            I'm currently seeking opportunities in <strong>MERN Stack Development</strong>, <strong>Frontend Engineering</strong>, <strong>Salesforce Development</strong>, and <strong>Software Development</strong> roles. Let's collaborate and build something meaningful together!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
