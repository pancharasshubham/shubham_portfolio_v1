import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, GitBranch, Lightbulb } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Code,
      title: "Self-Driven Project Development",
      description: "Built multiple end-to-end MERN stack applications from concept to deployment, focusing on solving real-world problems",
      period: "Ongoing",
      color: "#38BDF8"
    },
    {
      icon: GitBranch,
      title: "Active GitHub Contributions",
      description: "Maintaining consistent GitHub activity with regular commits, showcasing continuous learning and project development",
      period: "2023 - Present",
      color: "#22C55E"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning Journey",
      description: "Dedicated to mastering system design, data structures & algorithms, and exploring emerging technologies like Web3 and AI/ML",
      period: "2022 - Present",
      color: "#38BDF8"
    },
    {
      icon: Lightbulb,
      title: "Full-Stack Implementation",
      description: "Independently handling both frontend and backend development, from UI/UX design to database architecture and API development",
      period: "2022 - Present",
      color: "#22C55E"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Learning <span className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#22C55E] mx-auto mb-4"></div>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            My path of continuous growth through self-driven projects and consistent learning
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#38BDF8] to-[#22C55E]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
              } md:w-1/2`}
            >
              <div className="absolute left-0 md:left-auto md:right-0 md:transform md:translate-x-1/2 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#22C55E] border-4 border-[#0F172A]"></div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="ml-8 md:ml-0 bg-[#1E293B] p-6 rounded-xl border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-all"
              >
                <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-[${exp.color}]/20 to-[${exp.color}]/5`}>
                    <exp.icon className="w-6 h-6" style={{ color: exp.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-sm text-[#22C55E]">{exp.period}</p>
                  </div>
                </div>
                <p className="text-[#94A3B8]">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;