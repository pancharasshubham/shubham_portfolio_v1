import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const featuredProjects = [
  {
    title: 'InspireX',
    description:
      'Mobile-first platform focused on intentional content discovery and saved-content organization.',

    tech: ['Next.js', 'PWA', 'Node.js', 'MongoDB'],

    image: '/projects/inspirex-preview.png',

    live: 'https://inspire-x-pink.vercel.app/',

    caseStudy: '/projects/inspirex',

    github: 'https://github.com/pancharasshubham/inspirex',

    featured: true,
  },

  {
    title: 'Real Estate Business Website',

    description:
      'Conversion-focused real estate website designed to showcase properties, generate qualified leads, and improve mobile user engagement.',

    tech: ['React', 'Tailwind CSS', 'Vite', 'Responsive Design'],

    image: '/projects/real-estate-preview.png',

    live: 'https://realestate.pancharasshubham.com',

    caseStudy: '/projects/real-estate-business-website',

    github: 'https://github.com/pancharasshubham/real-estate-demo',

    featured: true,
  },

  {
    title: 'SaaScope API',

    description:
      'Backend-focused SaaS analytics and reporting API designed for scalable data workflows, filtering systems, and production-ready architecture.',

    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],

    image: '/projects/saascope-api-preview.png',

    live: '',

    caseStudy: '/projects/saascope-api',

    github: 'https://github.com/pancharasshubham/saascope-api',
  },

  {
    title: 'AI Usage Policy Generator',

    description:
      'Tool for generating transparent AI usage policies for open-source projects and startups.',

    tech: ['React', 'Node.js', 'PDF'],

    image: '/projects/ai-policy-preview.png',

    live: 'https://ai-usage-policy-generator.vercel.app/',

    caseStudy: '/projects/ai-policy-generator',

    github:
      'https://github.com/pancharasshubham/ai-usage-policy-generator',
  },
];

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-[#0F172A]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[0.25em] text-[#38BDF8] font-medium">
            Selected Work
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
            Featured Case Studies
          </h2>

          <p className="mt-5 text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Real-world products focused on usability,
            scalability, performance, and practical business impact.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#111827]/80 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent" />

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-xs font-medium text-[#38BDF8]">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <Github className="w-5 h-5 text-[#94A3B8]" />
                  </a>
                </div>

                <p className="mt-4 text-[#94A3B8] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-[#CBD5E1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-3">
                  <a href={project.caseStudy}>
                    <Button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white rounded-xl">
                      Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl"
                      >
                        Live Demo
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/pancharasshubham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#38BDF8] hover:text-[#0EA5E9] transition-colors text-lg font-medium"
          >
            Explore More Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;