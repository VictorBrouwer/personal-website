import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Contact, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import About from './components/About';
import Experience from './components/Experience';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Interests />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
