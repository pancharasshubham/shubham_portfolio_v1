import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Shubham Pancharas - Full-Stack Developer | MERN Stack Expert</title>
        <meta name="description" content="Portfolio of Shubham Pancharas, a full-stack developer from India specializing in MERN stack development. Building practical problem-solving web applications with modern technologies." />
      </Helmet>
      <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Toaster />
      </div>
    </>
  );
}

export default App;