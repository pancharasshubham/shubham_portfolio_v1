import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex flex-col justify-center px-4 pt-20 pb-10 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Centered Name Section */}
        <motion.div initial={{
        opacity: 0,
        y: -30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="text-center mb-12 md:mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#94A3B8] drop-shadow-sm select-none">
            Shubham Pancharas
          </h1>
          <div className="h-2 w-24 md:w-32 bg-gradient-to-r from-[#38BDF8] to-[#22C55E] mx-auto mt-4 rounded-full opacity-80"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Full-Stack Developer{' '}
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">
              MERN & Angular
              </span>
            </motion.h2>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-xl text-[#94A3B8] mb-4">
              I build practical, end-to-end web applications that solve real business problems.
            </motion.p>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="text-lg text-[#94A3B8] mb-8">
              Computer Science graduate building practical web applications using React, Angular, Node.js, and modern databases
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-wrap gap-4 mb-8">
              <Button onClick={() => scrollToSection('#projects')} className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white px-8 py-6 text-lg">
                View Projects <ArrowRight className="ml-2" />
              </Button>
              <Button onClick={() => scrollToSection('#contact')} variant="outline" className="border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10 px-8 py-6 text-lg">
                Contact Me
              </Button>
            </motion.div>

            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.7
          }} className="flex gap-4">
              <motion.a whileHover={{
              scale: 1.1,
              y: -2
            }} href="https://github.com/pancharasshubham" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1E293B] rounded-lg hover:bg-[#38BDF8]/10 transition-colors">
                <Github className="w-6 h-6 text-[#94A3B8] hover:text-[#38BDF8]" />
              </motion.a>
              <motion.a whileHover={{
              scale: 1.1,
              y: -2
            }} href="https://linkedin.com/in/shubham-pancharas" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1E293B] rounded-lg hover:bg-[#38BDF8]/10 transition-colors">
                <Linkedin className="w-6 h-6 text-[#94A3B8] hover:text-[#38BDF8]" />
              </motion.a>
              <motion.a whileHover={{
              scale: 1.1,
              y: -2
            }} href="mailto:contact@pancharasshubham.com" className="p-3 bg-[#1E293B] rounded-lg hover:bg-[#38BDF8]/10 transition-colors">
                <Mail className="w-6 h-6 text-[#94A3B8] hover:text-[#38BDF8]" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative w-full aspect-square">
              <motion.div animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#22C55E] opacity-20 blur-3xl" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img className="w-full h-full object-cover rounded-2xl shadow-2xl" alt="Professional developer workspace" src="https://horizons-cdn.hostinger.com/5419a3bb-d7a4-4a98-999d-12276d3a8990/shubham_pancharas_profilepic-gyixC.png" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;