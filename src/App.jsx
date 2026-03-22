import { useState } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsEducation from './components/SkillsEducation';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav>
        <div className="logo" style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
          SS.
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <main>
        <Hero />
        <Experience />
        <Projects />
        <SkillsEducation />
        <Contact />
      </main>
    </div>
  );
}

export default App;
