import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Hackathons from './components/Hackathons';
import TechnicalSkills from './components/TechnicalSkills';
import InterpersonalSkills from './components/InterpersonalSkills';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills/>
      <InterpersonalSkills/>
      <Services/>
      <Projects />
      <Experience />
      <Hackathons/>

      <Contact /> <Footer />

    </>
  );
}

export default App; // <-- ✅ This line must be present
