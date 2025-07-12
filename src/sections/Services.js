import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaLaptopHouse } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Website Development',
    desc: 'Building responsive websites with React, HTML, and CSS. Optimized for performance and user experience.'
  },
  {
    icon: <FaPaintBrush />,
    title: 'Graphic Designing',
    desc: 'Designing clean and beautiful UIs with attention to usability, consistency, and modern design trends.'
  },
  {
    icon: <FaLaptopHouse />,
    title: 'Freelance Projects',
    desc: 'Helping startups and clients with custom website development, personal branding, and UI improvements.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <motion.div
        className="services-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">⚙️ Services</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
