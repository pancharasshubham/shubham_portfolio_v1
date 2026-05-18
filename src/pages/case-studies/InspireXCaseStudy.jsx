import React from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Github,
} from 'lucide-react';

import { Link } from 'react-router-dom';

const features = [
  'Installable Progressive Web App',
  'Mobile-first interaction system',
  'Intentional content discovery flow',
  'Fast category-based navigation',
  'Responsive UI architecture',
];

const stack = [
  'Next.js',
  'React',
  'Node.js',
  'MongoDB',
  'Tailwind CSS',
  'PWA',
];

const InspireXCaseStudy = () => {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* Top Navigation */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

        </div>
      </section>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="max-w-3xl">

          <span className="text-sm uppercase tracking-[0.25em] text-[#38BDF8]">
            Case Study
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-[1]">
            InspireX
          </h1>

          <p className="mt-8 text-xl text-[#94A3B8] leading-relaxed">
            Mobile-first platform designed to improve intentional
            content discovery and reduce passive doomscrolling behavior.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://inspire-x-pink.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] transition-colors font-medium"
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/pancharasshubham/inspirex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-medium"
            >
              GitHub
              <Github className="w-4 h-4" />
            </a>

          </div>
        </div>
      </section>

      {/* Mobile Showcase */}
        <section className="max-w-6xl mx-auto px-6">

            <div className="flex justify-center">

                {/* Glow */}
                <div className="relative">

                <div className="absolute inset-0 bg-[#38BDF8]/10 blur-3xl rounded-full scale-110" />

                {/* Phone Frame */}
                <div className="relative w-[290px] md:w-[340px] rounded-[2.5rem] border border-white/10 bg-[#0F172A] p-3 shadow-2xl">

                    {/* Top Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20" />

                    {/* Screen */}
                    <div className="overflow-hidden rounded-[2rem] border border-white/5">
                    <img
                        src="/projects/inspirex/hero.png"
                        alt="InspireX mobile preview"
                        className="w-full object-cover object-top"
                    />
                    </div>

                </div>

                </div>

            </div>
        </section>

      {/* Problem + Solution */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* Problem */}
        <div>

          <span className="text-sm uppercase tracking-[0.2em] text-[#38BDF8]">
            Problem
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight">
            Saved content becomes digital clutter.
          </h2>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg">
            Most short-form platforms optimize for endless
            consumption, making saved content difficult to
            rediscover intentionally later.
          </p>

        </div>

        {/* Solution */}
        <div>

          <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
            Solution
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight">
            Designed for intentional interaction.
          </h2>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg">
            InspireX focuses on mobile-first navigation,
            curated discovery flows, and frictionless revisit
            behavior through lightweight PWA architecture.
          </p>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#38BDF8]">
          Key Features
        </span>

        <div className="mt-8 grid md:grid-cols-2 gap-4">

          {features.map((feature) => (
            <div
              key={feature}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 text-[#CBD5E1]"
            >
              {feature}
            </div>
          ))}

        </div>
      </section>

      {/* Technical Decisions */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
          Technical Decisions
        </span>

        <div className="mt-8 max-w-4xl">

          <p className="text-lg text-[#94A3B8] leading-relaxed">
            The application was structured using reusable
            component architecture and mobile-first rendering
            principles to maintain scalability and responsiveness.
          </p>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            Progressive Web App functionality was prioritized
            to support installability and faster repeat interaction
            flows across mobile devices.
          </p>

        </div>

      </section>

      {/* Challenges */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#38BDF8]">
          Challenges
        </span>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-3xl font-bold">
            Balancing engagement without encouraging endless scrolling.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            One of the primary product challenges was creating
            a smooth browsing experience while avoiding addictive
            interaction patterns commonly found in short-form
            content platforms.
          </p>

        </div>

      </section>

      {/* Stack */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
          Stack
        </span>

        <div className="mt-6 flex flex-wrap gap-3">

          {stack.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#CBD5E1]"
            >
              {tech}
            </div>
          ))}

        </div>

      </section>

      {/* Outcome */}
      <section className="max-w-6xl mx-auto px-6 pb-32">

        <span className="text-sm uppercase tracking-[0.2em] text-[#38BDF8]">
          Outcome
        </span>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-3xl font-bold leading-tight">
            Product-focused frontend engineering with intentional UX thinking.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            InspireX helped strengthen practical experience in
            frontend architecture, responsive design systems,
            product thinking, and scalable component-driven
            development workflows.
          </p>

        </div>

      </section>

    </main>
  );
};

export default InspireXCaseStudy;