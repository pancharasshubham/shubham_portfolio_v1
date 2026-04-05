import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Zap, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "End-to-End MERN Applications",
      description: "Successfully built and deployed multiple full-stack applications from scratch",
      metric: "6+ Projects"
    },
    {
      icon: TrendingUp,
      title: "Consistent GitHub Activity",
      description: "Maintained regular contributions showcasing continuous learning and development",
      metric: "Active Daily"
    },
    {
      icon: Zap,
      title: "Independent Development",
      description: "Proficient in handling both frontend and backend development independently",
      metric: "Full Stack"
    },
    {
      icon: Target,
      title: "Problem-Solving Focus",
      description: "Created solutions addressing real-world challenges in the Indian market",
      metric: "Impact Driven"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-[#0F172A]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Key <span className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#22C55E] mx-auto mb-4"></div>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Milestones that reflect my dedication to continuous improvement and practical problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-to-br from-[#1E293B] to-[#1E293B]/50 p-8 rounded-xl border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#38BDF8]/10 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 bg-gradient-to-br from-[#38BDF8]/20 to-[#22C55E]/20 rounded-xl">
                    <achievement.icon className="w-8 h-8 text-[#38BDF8]" />
                  </div>
                  <span className="px-4 py-2 bg-[#22C55E]/20 text-[#22C55E] rounded-full text-sm font-semibold">
                    {achievement.metric}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#38BDF8]/10 to-[#22C55E]/10 p-8 rounded-xl border border-[#38BDF8]/30 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Driven by <span className="text-[#22C55E]">Consistency</span> & <span className="text-[#38BDF8]">Impact</span>
          </h3>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto">
            Every line of code I write is guided by the principle of creating meaningful solutions. 
            My focus is on building applications that not only showcase technical skills but also 
            address real problems and contribute value to users and the developer community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;