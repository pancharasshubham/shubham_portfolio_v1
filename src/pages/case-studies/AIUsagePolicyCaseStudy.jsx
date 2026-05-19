import React from 'react';

import {
  ArrowLeft,
  ExternalLink,
  Github,
} from 'lucide-react';

import { Link } from 'react-router-dom';

const features = [
  'Real-time policy generation',
  'Fully client-side architecture',
  'Structured AI usage input flow',
  'Readable policy formatting',
  'Type-safe implementation with TypeScript',
];

const stack = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
];

const AIUsagePolicyCaseStudy = () => {
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

        <div className="max-w-4xl">

          <span className="text-sm uppercase tracking-[0.25em] text-[#38BDF8]">
            Utility Tool Case Study
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-[1]">
            AI Usage Policy Generator
          </h1>

          <p className="mt-8 text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
            Lightweight frontend tool designed to help teams generate
            transparent, human-readable AI usage policies through
            structured real-time workflows.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://ai-usage-policy-generator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] transition-colors font-medium"
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/pancharasshubham/ai-usage-policy-generator"
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

      {/* Hero Image */}
      <section className="max-w-6xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]">

          <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/5 to-transparent pointer-events-none" />

          <img
            src="/projects/ai-policy-generator/hero.png"
            alt="AI Usage Policy Generator Preview"
            className="w-full object-cover object-top"
          />

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
            AI usage documentation is often inconsistent and unclear.
          </h2>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg">
            Smaller teams and open-source projects frequently lack
            structured workflows for explaining how AI systems,
            user data, and generated outputs are handled.
          </p>

        </div>

        {/* Solution */}
        <div>

          <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
            Solution
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight">
            Real-time AI policy generation through structured inputs.
          </h2>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg">
            The application converts form-based AI usage details into
            readable policy documents instantly, helping teams improve
            transparency and reduce documentation friction.
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

      {/* Technical Approach */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
          Technical Approach
        </span>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-3xl font-bold leading-tight">
            Lightweight frontend-only architecture with type-safe generation logic.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            The project intentionally avoids backend complexity by
            handling policy generation entirely on the client side,
            improving deployment simplicity and reducing operational overhead.
          </p>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            TypeScript was used to maintain predictable policy structures
            and improve maintainability across form state, content generation,
            and rendering workflows.
          </p>

        </div>

      </section>

      {/* Stack */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#38BDF8]">
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

        <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
          Outcome
        </span>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-3xl font-bold leading-tight">
            Practical developer tooling focused on transparency and simplicity.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            The project strengthened frontend architecture experience,
            structured state handling, type-safe utility workflows,
            and real-time content generation patterns without introducing
            unnecessary backend complexity.
          </p>

        </div>

      </section>

    </main>
  );
};

export default AIUsagePolicyCaseStudy;