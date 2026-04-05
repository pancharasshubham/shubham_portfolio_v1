import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Projects = () => {
  const {
    toast
  } = useToast();
  const projects = [{
    title: "Fraud Call Detection System",
    problem: "Rising spam and fraud calls affecting millions of users in India",
    features: ["Real-time call identification and blocking", "Community-driven spam reporting system", "Machine learning-based fraud detection", "User-friendly dashboard for call history"],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "ML Models"],
    impact: "Anti-spam solution designed for Indian market",
    image: "Smartphone displaying fraud call detection app interface with blocked spam calls"
  }, {
    title: "InspireX - Motivational Reels Platform",
    problem: "Need for curated, high-quality motivational content in short-form video format",
    features: ["Curated motivational video reels", "Category-based content filtering", "Save and share favorite reels", "Daily inspiration notifications"],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Video API"],
    impact: "Platform helping users stay motivated with quality content",
    image: "Mobile app showing motivational video reels feed with inspirational quotes"
  }, {
    title: "Instagram Save-Like Organizer",
    problem: "Difficulty in organizing and revisiting saved Instagram content",
    features: ["Organize saved posts by categories", "Quick search and filtering", "Tag-based organization system", "Export saved content lists"],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Instagram API"],
    impact: "Helping users manage their saved content efficiently",
    image: "Web application interface showing organized Instagram saved posts in grid layout"
  }, {
    title: "DevImage - Image Hosting SaaS",
    problem: "Developers need reliable, fast image hosting for their applications",
    features: ["CDN-powered image delivery", "Automatic image optimization", "API-first architecture", "Usage analytics dashboard"],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "CDN", "Sharp"],
    impact: "Developer-centric platform for seamless image management",
    image: "Dashboard showing image upload interface with CDN statistics and analytics"
  }, {
    title: "AI Usage Policy Generator",
    problem: "Open-source projects need clear AI usage guidelines but lack templates",
    features: ["Customizable policy templates", "Legal compliance checking", "Export in multiple formats", "Version control integration"],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "PDF Generation"],
    impact: "Helps developers and startups generate transparent AI usage policies",
    image: "Policy generator interface with form fields and preview of generated document",
    github: "https://github.com/pancharasshubham/ai-usage-policy-generator",
    demo: "https://ai-usage-policy-generator.vercel.app/"
  }, {
    title: "TaskFlow - Team Collaboration Tool",
    problem: "Small teams struggle with scattered communication and task management",
    features: ["Real-time task assignment and tracking", "Team chat and file sharing", "Project timeline visualization", "Performance analytics"],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    impact: "Streamlining team collaboration for small businesses",
    image: "Collaborative workspace showing kanban board with tasks and team members"
  }];
  const handleProjectClick = url => {
    if (!url) {
      toast({
        title: "Link not available",
        description: "This project does not have a public link yet."
      });
      return;
    }
    window.open(url, "_blank");
  };
  return <section id="projects" className="py-20 px-4 bg-[#0F172A]">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#22C55E] mx-auto mb-4"></div>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Real-world solutions built with the MERN stack, focusing on practical problems and user impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} whileHover={{
          y: -5
        }} className="bg-[#1E293B] rounded-xl overflow-hidden border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover" alt={`${project.title} preview`} src="https://horizons-cdn.hostinger.com/5419a3bb-d7a4-4a98-999d-12276d3a8990/screenshot-2026-01-09-132203-U76SN.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-[#38BDF8]">Problem:</span>
                  <p className="text-[#94A3B8] mt-1">{project.problem}</p>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-semibold text-[#22C55E]">Key Features:</span>
                  <ul className="mt-2 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => <li key={idx} className="text-[#94A3B8] text-sm flex items-start">
                        <span className="text-[#22C55E] mr-2">•</span>
                        {feature}
                      </li>)}
                  </ul>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-semibold text-[#38BDF8]">Tech Stack:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, idx) => <span key={idx} className="px-3 py-1 bg-[#0F172A] rounded-full text-xs text-[#94A3B8] border border-[#38BDF8]/20">
                        {tech}
                      </span>)}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-[#22C55E]/10 rounded-lg border border-[#22C55E]/20">
                  <p className="text-[#22C55E] text-sm font-medium">
                    💡 {project.impact}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button onClick={() => handleProjectClick(project.github)} className="flex-1 bg-[#38BDF8] hover:bg-[#38BDF8]/90">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button onClick={() => handleProjectClick(project.demo)} variant="outline" className="flex-1 border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Projects;