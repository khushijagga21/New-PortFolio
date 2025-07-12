import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_n4v7bbe',   // ✅ Service ID
      'template_dqz5mxu',   // ✅ Template ID
      formData,
      'cXPP8zyCELg57Iyji'    // ✅ Public API Key
    )
    .then(() => {
      toast.success('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      toast.error('❌ Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>📩 Contact Me</h2>
      <p>Have a project or opportunity in mind? Let’s connect!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message 🚀</button>
      </form>

      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </section>
  );
};

export default Contact;
