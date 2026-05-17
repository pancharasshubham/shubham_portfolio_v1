import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-[#38BDF8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          {/* <p className="text-xl md:text-2xl font-semibold tracking-[0.22em] uppercase text-[#38BDF8]">Shubham Pancharas</p> */}
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#94A3B8]">
            Shubham Pancharas
          </h1>
          <div className="h-2 w-28 md:w-36 bg-gradient-to-r from-[#38BDF8] to-[#22C55E] mx-auto mt-5 rounded-full opacity-80" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
        >
      {/* Small Badge */}
        <div className="inline-flex items-center rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 px-4 py-2 mb-6">
          <span className="text-sm uppercase tracking-[0.2em] text-[#38BDF8] font-medium">
            Built Products. Real Outcomes.
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight max-w-2xl">
          I build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#22C55E]">
            mobile-first web apps
          </span>{" "}
          people actually use.
        </h1>

        {/* Supporting Line */}
        <p className="mt-6 text-xl text-[#CBD5E1] leading-relaxed max-w-xl">
          Full-stack developer building fast, scalable web products with real business impact.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            onClick={() => scrollToSection('#projects')}
            className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white px-8 py-6 text-lg rounded-xl"
          >
            View Work <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            onClick={() => scrollToSection('#contact')}
            variant="outline"
            className="border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10 px-8 py-6 text-lg rounded-xl"
          >
          Hire Me
          </Button>
      </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-4">
    <motion.a
      whileHover={{ scale: 1.08, y: -2 }}
      href="https://github.com/pancharasshubham"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-[#1E293B] rounded-xl border border-white/5 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/10 transition-all"
    >
      <Github className="w-5 h-5 text-[#94A3B8] hover:text-[#38BDF8]" />
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.08, y: -2 }}
      href="https://linkedin.com/in/shubham-pancharas"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-[#1E293B] rounded-xl border border-white/5 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/10 transition-all"
    >
      <Linkedin className="w-5 h-5 text-[#94A3B8] hover:text-[#38BDF8]" />
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.08, y: -2 }}
      href="mailto:contact@pancharasshubham.com"
      className="p-3 bg-[#1E293B] rounded-xl border border-white/5 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/10 transition-all"
    >
      <Mail className="w-5 h-5 text-[#94A3B8] hover:text-[#38BDF8]" />
    </motion.a>
        </div>
      </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-[320px] md:w-[420px] aspect-[4/5] mx-auto">
              
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#38BDF8]/20 to-[#22C55E]/20 blur-3xl scale-105" />

              {/* Animated Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-[2rem] border border-[#38BDF8]/20"
              />

              {/* Image */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F172A] shadow-2xl">
                <img
                  src="/shubham_pancharas_ProfilePic.png"
                  alt="Shubham Pancharas portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
