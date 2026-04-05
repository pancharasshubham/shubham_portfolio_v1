import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "#38BDF8",
      skills: ["HTML", "CSS", "JavaScript (ES6+)", "React", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "#22C55E",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      icon: Database,
      color: "#38BDF8",
      skills: ["MongoDB", "Mongoose"]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "#22C55E",
      skills: ["Git", "GitHub", "VS Code", "NPM", "Linux basics"]
    }
  ];

  const learningSkills = [
    "System Design",
    "Data Structures & Algorithms",
    "Web3 Concepts",
    "Advanced Linux",
    "Cloud Services"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & <span className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#22C55E] mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1E293B] p-8 rounded-xl border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br from-[${category.color}]/20 to-[${category.color}]/5`}>
                  <category.icon className="w-8 h-8" style={{ color: category.color }} />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[#0F172A] rounded-lg text-[#94A3B8] border border-[#38BDF8]/10 hover:border-[#38BDF8]/30 hover:text-[#38BDF8] transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#38BDF8]/10 to-[#22C55E]/10 p-8 rounded-xl border border-[#38BDF8]/30"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Currently <span className="text-[#22C55E]">Learning</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {learningSkills.map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="px-6 py-3 bg-[#1E293B] rounded-full text-[#22C55E] border border-[#22C55E]/30 font-medium hover:bg-[#22C55E]/10 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;