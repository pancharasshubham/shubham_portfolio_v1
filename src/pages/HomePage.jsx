import React from 'react';
import SEO from '@/components/SEO';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Shubham Pancharas | Full-Stack Developer"
        description="Portfolio of Shubham Pancharas, a full-stack developer focused on scalable web products, frontend architecture, and real-world business solutions."
        canonical="https://pancharasshubham.com/"
        ogImage="https://pancharasshubham.com/og-image.png"
      />

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
      </div>
    </>
  );
};

export default HomePage;
