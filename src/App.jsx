import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Contact, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Interests />
      </main>
    </div>
  );
}

export default App;
