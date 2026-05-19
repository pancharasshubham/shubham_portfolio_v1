import React from 'react';

import {
  ArrowLeft,
  Github,
  ExternalLink,
} from 'lucide-react';

import { Link } from 'react-router-dom';

const stack = [
  'Node.js',
  'TypeScript',
  'Express',
  'PostgreSQL',
  'JWT',
  'REST API',
];

const decisions = [
  'Pure-function insight engine architecture',
  'Deterministic rule-based insight generation',
  'Stateless JWT authentication',
  'CSV ingestion with validation pipeline',
  'Monthly cost normalization strategy',
];

const SaaScopeCaseStudy = () => {
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
            Backend Case Study
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-[1]">
            SaaScope API
          </h1>

          <p className="mt-8 text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
            Backend API system designed for SaaS spend visibility,
            structured insight generation, and cost optimization workflows.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://github.com/pancharasshubham/saascope-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] transition-colors font-medium"
            >
              GitHub
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-medium"
            >
              API Preview
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-6xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]">

          <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/5 to-transparent pointer-events-none" />

          <img
            src="/projects/saascope-api/hero.png"
            alt="SaaScope API Preview"
            className="w-full object-cover"
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
            SaaS spending becomes difficult to track across growing organizations.
          </h2>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg">
            Teams often accumulate inactive licenses, duplicate subscriptions,
            and unused seats without centralized visibility or actionable reporting.
          </p>

        </div>

        {/* Solution */}
        <div>

          <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
            Solution
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight">
            Deterministic backend insight engine for SaaS optimization.
          </h2>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg">
            SaaScope processes uploaded subscription records and generates
            structured optimization insights categorized by confidence,
            type, and estimated monthly savings.
          </p>

        </div>

      </section>

      {/* Key Engineering Decisions */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#38BDF8]">
          Engineering Decisions
        </span>

        <div className="mt-8 grid md:grid-cols-2 gap-4">

          {decisions.map((decision) => (
            <div
              key={decision}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 text-[#CBD5E1]"
            >
              {decision}
            </div>
          ))}

        </div>

      </section>

      {/* Architecture Thinking */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
          Architecture
        </span>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-3xl font-bold leading-tight">
            Pure-function insight engine designed for testability.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            The insight engine was intentionally isolated from
            database access, environment variables, and I/O operations
            to maintain deterministic behavior and simplify testing workflows.
          </p>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            CSV ingestion, validation, normalization, and aggregation
            pipelines were separated into dedicated services to reduce
            coupling and improve maintainability.
          </p>

        </div>

      </section>

      {/* Constraints */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#38BDF8]">
          Constraints
        </span>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-3xl font-bold leading-tight">
            Scope discipline over premature complexity.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            Infrastructure decisions intentionally avoided unnecessary
            abstractions such as Redis, S3, OAuth integrations,
            and distributed scaling concerns before actual usage justified them.
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
            Backend-focused system design with practical architecture boundaries.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            SaaScope strengthened experience in backend architecture,
            deterministic service design, validation pipelines,
            relational data modeling, and scalable API organization.
          </p>

        </div>

      </section>

    </main>
  );
};

export default SaaScopeCaseStudy;