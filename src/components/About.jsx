import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications using MongoDB, Express.js, React, and Node.js."
    },
    {
      icon: Target,
      title: "Practical Problem Solving",
      description: "Translating real requirements into working features with clean frontend and reliable backend logic."
    },
    {
      icon: Rocket,
      title: "Engineering Fundamentals",
      description: "Actively improving system design thinking, data structures, and Linux fundamentals through hands-on practice."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[#0F172A]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#22C55E] mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" 
              alt="Developer working on code"
             src="https://images.unsplash.com/photo-1634835855106-f4f0dc8279ca" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-[#94A3B8] mb-6 leading-relaxed">
              I am a Computer Science graduate and full-stack developer focused on building practical web applications using the MERN stack and Angular.
              I enjoy working across the entire development lifecycle—from designing clean user interfaces to implementing backend APIs and database logic.
            </p>
            <p className="text-lg text-[#94A3B8] mb-6 leading-relaxed">
              Currently, I am strengthening my fundamentals in system design, data structures, and Linux, with a strong emphasis on writing maintainable
              code and understanding how real-world systems scale.
              I believe consistent building and problem-solving are the fastest ways to grow as an engineer.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#1E293B] p-6 rounded-xl border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-all"
            >
              <feature.icon className="w-12 h-12 text-[#38BDF8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#94A3B8]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;