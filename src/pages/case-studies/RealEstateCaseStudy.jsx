import React from 'react';

import {
  ArrowLeft,
  ExternalLink,
  Github,
} from 'lucide-react';

import { Link } from 'react-router-dom';

const features = [
  'WhatsApp inquiry integration',
  'Responsive property showcase',
  'Mobile-first browsing experience',
  'SEO-focused landing architecture',
  'Fast-loading lightweight frontend',
];

const stack = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
];

const RealEstateCaseStudy = () => {
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
            Commercial Website Case Study
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-[1]">
            Real Estate Lead Generation Website
          </h1>

          <p className="mt-8 text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
            Mobile-first real estate landing experience designed
            to improve property discovery, inquiry conversion,
            and local business lead generation workflows.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://realestate.pancharasshubham.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] transition-colors font-medium"
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/pancharasshubham"
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
            src="/projects/real-estate/hero.png"
            alt="Real Estate Website Preview"
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
            Local builders often struggle with digital lead generation quality.
          </h2>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg">
            Many real estate websites overload users with cluttered layouts,
            slow performance, and unclear inquiry flows that reduce conversion potential,
            especially on mobile devices.
          </p>

        </div>

        {/* Solution */}
        <div>

          <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
            Solution
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight">
            Conversion-focused landing architecture for property inquiries.
          </h2>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg">
            The platform was designed around fast mobile interaction,
            clear CTA visibility, WhatsApp inquiry integration,
            and trust-building UI sections to improve engagement
            and lead capture workflows.
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

      {/* UX & Conversion Thinking */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#22C55E]">
          UX & Conversion Strategy
        </span>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-3xl font-bold leading-tight">
            Designed around inquiry visibility and mobile interaction behavior.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            WhatsApp inquiry access was intentionally surfaced throughout
            the browsing flow to reduce friction and improve lead initiation
            behavior across mobile devices.
          </p>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            The interface prioritizes visual hierarchy, simplified navigation,
            responsive property sections, and trust-focused layouts
            including testimonials and location visibility.
          </p>

        </div>

      </section>

      {/* SEO & Performance */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <span className="text-sm uppercase tracking-[0.2em] text-[#38BDF8]">
          SEO & Performance
        </span>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-3xl font-bold leading-tight">
            Lightweight frontend architecture optimized for discoverability.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            The project includes semantic structure, SEO-focused metadata,
            responsive layouts, and optimized asset delivery
            to improve loading speed and search visibility.
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
            Commercial frontend execution focused on usability and lead conversion.
          </h2>

          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            The project strengthened practical experience in responsive UI systems,
            conversion-oriented frontend thinking, SEO optimization,
            and business-focused website architecture for local service industries.
          </p>

        </div>

      </section>

    </main>
  );
};

export default RealEstateCaseStudy;