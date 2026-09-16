"use client";

import React, { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState<"all" | "health" | "saas" | "climate">("all");

  // Easily editable contact email constant
  const emailAddress = "hello@fatimawada.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0B1220] font-sans selection:bg-[#007475]/15 selection:text-[#007475]">
      {/* Background subtle ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#007475]/10 via-[#3CB89C]/5 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-[#3CB89C]/10 blur-[140px] rounded-full" />
        <div className="absolute top-[65%] left-[-10%] w-[500px] h-[500px] bg-[#007475]/5 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00747508_1px,transparent_1px),linear-gradient(to_bottom,#00747508_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Header & Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F8FAF9]/85 border-b border-slate-200/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475] rounded-md py-1"
          >
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#007475] to-[#3CB89C] flex items-center justify-center font-mono font-bold text-xs text-white shadow-sm shadow-[#007475]/20 group-hover:scale-105 transition-transform">
              FBW
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-[#0B1220] group-hover:text-[#007475] transition-colors">
                Fatima Binta Wada
              </span>
              <span className="text-[11px] text-slate-500 font-mono tracking-tight hidden sm:block">
                Full-Stack &amp; Technical Lead
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
            <a
              href="#about"
              className="px-3 py-1.5 rounded-md hover:text-[#007475] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
            >
              About
            </a>
            <a
              href="#projects"
              className="px-3 py-1.5 rounded-md hover:text-[#007475] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
            >
              Projects
            </a>
            <a
              href="#stack"
              className="px-3 py-1.5 rounded-md hover:text-[#007475] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
            >
              Stack
            </a>
            <a
              href="#experience"
              className="px-3 py-1.5 rounded-md hover:text-[#007475] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
            >
              Experience
            </a>
            <a
              href="#philosophy"
              className="px-3 py-1.5 rounded-md hover:text-[#007475] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="ml-2 px-3.5 py-1.5 rounded-md bg-[#007475]/10 text-[#007475] border border-[#007475]/30 hover:bg-[#007475]/20 hover:border-[#007475]/50 transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#0B1220] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#007475]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-[#F8FAF9]/95 px-4 pt-2 pb-4 space-y-1 backdrop-blur-xl">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-[#007475] hover:bg-slate-100"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-[#007475] hover:bg-slate-100"
            >
              Projects
            </a>
            <a
              href="#stack"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-[#007475] hover:bg-slate-100"
            >
              Technical Stack
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-[#007475] hover:bg-slate-100"
            >
              Experience
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-[#007475] hover:bg-slate-100"
            >
              Engineering Philosophy
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium bg-[#007475]/10 text-[#007475] border border-[#007475]/30 text-center"
            >
              Get in Touch
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-3xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-medium text-slate-700 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CB89C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3CB89C]"></span>
              </span>
              <span>Available for fellowship initiatives &amp; high-impact collaboration</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] mb-3 leading-[1.12]">
              Fatima Binta Wada
            </h1>
            <div className="text-lg sm:text-xl font-semibold text-[#007475] font-mono mb-4 tracking-tight">
              Full-Stack Developer &amp; Technical Lead
            </div>

            {/* Secondary Context Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mb-6 font-mono">
              <svg className="w-4 h-4 text-[#007475] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Based in Nigeria · Building for global impact</span>
            </div>

            {/* Hero Message */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-8">
              I build full-stack systems that turn complex real-world problems into practical digital tools, with a growing focus on sustainability, resilience, and emergency innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#007475] text-white font-semibold text-sm sm:text-base hover:bg-[#005f60] active:scale-[0.99] transition-all shadow-md shadow-[#007475]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAF9]"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[#0B1220] border border-slate-300 font-medium text-sm sm:text-base hover:bg-slate-50 hover:text-[#007475] hover:border-slate-400 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
              >
                <span>Contact Me</span>
                <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Micro-signals / Domain Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="p-1.5 rounded-md bg-[#007475]/10 text-[#007475] mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0B1220]">Emergency &amp; HealthTech</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Referral chains &amp; frontline coordination</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="p-1.5 rounded-md bg-[#3CB89C]/15 text-[#007475] mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0B1220]">Climate &amp; Resilience</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Early warnings &amp; localized hazard awareness</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="p-1.5 rounded-md bg-[#007475]/10 text-[#007475] mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0B1220]">Full-Stack SaaS &amp; Automation</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Modern web architecture &amp; workflows</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT / BUILDING PHILOSOPHY */}
        <section id="about" className="py-16 sm:py-20 border-t border-slate-200 bg-white/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#007475] uppercase tracking-wider mb-2 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                About &amp; Approach
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220] tracking-tight mb-6">
                Applying software engineering where practical impact matters most.
              </h2>
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  I am a full-stack developer driven by applying technology beyond conventional software products. Rather than building for idealized conditions, my work centers on engineering tools that hold up in high-friction, real-world operational environments.
                </p>
                <p>
                  Whether coordinating rural medical referrals during time-critical emergencies or translating complex environmental data into community warnings, I focus on systems that remain dependable despite constrained connectivity, fragmented workflows, and resource limits.
                </p>
              </div>

              {/* Core Focus Areas Grid */}
              <div className="mt-10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4 font-semibold">
                  Core Focus &amp; Problem Spaces
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#007475]/40 shadow-sm transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-2 w-2 rounded-full bg-[#3CB89C]" />
                      <h4 className="font-semibold text-sm text-[#0B1220]">Sustainability &amp; Climate Resilience</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Transforming localized hazard information and climate indicators into actionable community awareness and early response triggers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#007475]/40 shadow-sm transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-2 w-2 rounded-full bg-[#007475]" />
                      <h4 className="font-semibold text-sm text-[#0B1220]">Emergency Response &amp; Referral Systems</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bridging the communication gap between patients, frontline health workers, transport providers, and receiving medical facilities.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#007475]/40 shadow-sm transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-2 w-2 rounded-full bg-[#3CB89C]" />
                      <h4 className="font-semibold text-sm text-[#0B1220]">Healthcare Access</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Designing intuitive digital health workflows that streamline clinical readiness verification, triage decision trees, and patient care pathways.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#007475]/40 shadow-sm transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-2 w-2 rounded-full bg-[#007475]" />
                      <h4 className="font-semibold text-sm text-[#0B1220]">Practical SaaS Products</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Building full-stack platforms that automate repetitive operational bottlenecks, invoice recovery, and multi-channel notifications.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#007475]/40 shadow-sm transition-colors sm:col-span-2">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500" />
                      <h4 className="font-semibold text-sm text-[#0B1220]">Technology for Underserved Communities</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Architectures engineered with lightweight payload footprints, resilient offline-first assumptions, and zero reliance on heavy device hardware.
                    </p>
                  </div>
                </div>
              </div>

              {/* Real World Constraints Callout Box */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#007475]/10 via-white to-white border border-[#007475]/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="p-2.5 rounded-lg bg-[#007475]/10 text-[#007475] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-[#0B1220]">Engineering for real-world conditions:</span> I prioritize low-bandwidth accessibility, asynchronous failover channels (SMS &amp; WhatsApp), and resilient database modeling over fragile single-point dependencies.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED PROJECTS */}
        <section id="projects" className="py-16 sm:py-24 border-t border-slate-200 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#007475] uppercase tracking-wider mb-2 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                Featured Work
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0B1220] tracking-tight">
                Selected Projects
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Prototypes and full-stack software products built to address critical real-world friction.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white border border-slate-200 text-xs self-start md:self-auto font-mono shadow-sm">
              <button
                onClick={() => setActiveProjectTab("all")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeProjectTab === "all"
                    ? "bg-[#007475] text-white font-semibold"
                    : "text-slate-600 hover:text-[#0B1220]"
                }`}
              >
                All (3)
              </button>
              <button
                onClick={() => setActiveProjectTab("health")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeProjectTab === "health"
                    ? "bg-[#007475] text-white font-semibold"
                    : "text-slate-600 hover:text-[#0B1220]"
                }`}
              >
                Health &amp; Emergency
              </button>
              <button
                onClick={() => setActiveProjectTab("saas")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeProjectTab === "saas"
                    ? "bg-[#007475] text-white font-semibold"
                    : "text-slate-600 hover:text-[#0B1220]"
                }`}
              >
                SaaS
              </button>
              <button
                onClick={() => setActiveProjectTab("climate")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeProjectTab === "climate"
                    ? "bg-[#007475] text-white font-semibold"
                    : "text-slate-600 hover:text-[#0B1220]"
                }`}
              >
                ClimateTech
              </button>
            </div>
          </div>

          <div className="space-y-10">
            {/* PROJECT 1: Bite2Care (Featured / High Prominence) */}
            {(activeProjectTab === "all" || activeProjectTab === "health") && (
              <div className="relative rounded-2xl bg-white border-2 border-[#007475]/40 p-6 sm:p-8 lg:p-10 shadow-lg shadow-[#007475]/5 hover:border-[#007475] transition-all duration-300 group">
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007475]/10 text-[#007475] border border-[#007475]/30 text-xs font-mono font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#007475] animate-pulse" />
                    Innovation Prototype
                  </span>
                </div>

                <div className="max-w-3xl">
                  {/* Category Label */}
                  <div className="text-xs font-mono text-[#007475] font-semibold tracking-wide uppercase mb-2">
                    Emergency Response · HealthTech · Innovation
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1220] tracking-tight mb-2 group-hover:text-[#007475] transition-colors">
                    Bite2Care
                  </h3>

                  {/* Role & Initiative Metadata */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 font-mono mb-6">
                    <span className="text-[#007475] font-semibold">Role: Team Lead · Product &amp; Technology</span>
                    <span className="text-slate-300">|</span>
                    <span>Wellcome Snakebite Innovation Prize / SnakeHack Africa</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    Bite2Care is a multidisciplinary digital platform concept developed for the Wellcome Snakebite Innovation Prize / SnakeHack Africa, focused on improving the emergency journey after a snakebite. It explores practical system coordination to bridge the critical window between a snakebite occurrence and the administration of verified antivenom.
                  </p>

                  {/* Key Capabilities Breakdown */}
                  <div className="mb-8">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 font-semibold">
                      Key Explorations &amp; System Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                        <svg className="w-4 h-4 text-[#007475] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <div className="text-xs text-slate-700">
                          <strong className="text-[#0B1220] block font-semibold">Low-Bandwidth Emergency Guidance</strong>
                          Structured first-aid decision flows designed for low-connectivity rural environments.
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                        <svg className="w-4 h-4 text-[#007475] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        <div className="text-xs text-slate-700">
                          <strong className="text-[#0B1220] block font-semibold">Referral &amp; Pre-Arrival Alerts</strong>
                          Real-time notification pathways between rural triage points and receiving hospitals.
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                        <svg className="w-4 h-4 text-[#007475] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-xs text-slate-700">
                          <strong className="text-[#0B1220] block font-semibold">Facility Readiness &amp; Verification</strong>
                          Live verification of antivenom availability and clinical staff readiness before referral.
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                        <svg className="w-4 h-4 text-[#007475] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className="text-xs text-slate-700">
                          <strong className="text-[#0B1220] block font-semibold">Transport &amp; Logistics Coordination</strong>
                          Mobilizing local transport operators with estimated travel times and route verification.
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80 sm:col-span-2">
                        <svg className="w-4 h-4 text-[#3CB89C] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <div className="text-xs text-slate-700">
                          <strong className="text-[#0B1220] block font-semibold">WhatsApp-Based Frontline Workflows</strong>
                          Conversational triage interface allowing community health workers and responders to coordinate without installing heavy bespoke apps.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Architecture Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200">
                    <span className="text-[11px] font-mono text-slate-500 mr-2 font-semibold">Focus Areas:</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
                      Low-Bandwidth UX
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
                      WhatsApp Dispatch API
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
                      Emergency Referral Routing
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
                      Facility Antivenom Tracking
                    </span>
                  </div>

                  <div className="mt-4 text-[11px] text-slate-500 italic">
                    Note: Concept prototype developed as part of an innovation challenge. Not currently deployed as a live clinical medical device.
                  </div>
                </div>
              </div>
            )}

            {/* PROJECT 2: ChaseFree */}
            {(activeProjectTab === "all" || activeProjectTab === "saas") && (
              <div className="relative rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 group">
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007475]/10 text-[#007475] border border-[#007475]/30 text-xs font-mono font-semibold">
                    Full-Stack Product
                  </span>
                </div>

                <div className="max-w-3xl">
                  {/* Category Label */}
                  <div className="text-xs font-mono text-[#007475] font-semibold tracking-wide uppercase mb-2">
                    SaaS · FinTech · Automation
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1220] tracking-tight mb-2 group-hover:text-[#007475] transition-colors">
                    ChaseFree
                  </h3>

                  {/* Role & Metadata */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 font-mono mb-6">
                    <span className="text-[#007475] font-semibold">Role: Founder / Builder</span>
                    <span className="text-slate-300">|</span>
                    <span>Full-Stack SaaS &amp; Workflow Automation</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    ChaseFree is an AI-powered accounts receivable recovery platform designed for agencies and service businesses. It automates unpaid invoice monitoring, executes smart multi-channel payment follow-ups, and stops collection sequences the instant settlements are detected.
                  </p>

                  {/* Key Capabilities List */}
                  <div className="mb-6">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 font-semibold">
                      Platform Highlights &amp; Architecture:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                        <span>Unpaid invoice monitoring &amp; aging tracking</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                        <span>Automated Email, SMS &amp; WhatsApp workflows</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                        <span>Payment detection &amp; instant reminder halt</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                        <span>Recurring invoice &amp; retainer cadence support</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                        <span>Cash-flow &amp; recovery performance insights</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                        <span>QuickBooks &amp; Xero sync architecture</span>
                      </div>
                    </div>
                  </div>

                  {/* Technology Stack Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200">
                    <span className="text-[11px] font-mono text-slate-500 mr-2 font-semibold">Technologies:</span>
                    {["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "REST APIs"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PROJECT 3: PulseClime */}
            {(activeProjectTab === "all" || activeProjectTab === "climate") && (
              <div className="relative rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 group">
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3CB89C]/15 text-[#007475] border border-[#3CB89C]/30 text-xs font-mono font-semibold">
                    Early-Stage Prototype
                  </span>
                </div>

                <div className="max-w-3xl">
                  {/* Category Label */}
                  <div className="text-xs font-mono text-[#007475] font-semibold tracking-wide uppercase mb-2">
                    ClimateTech · Early Warning · Prototype
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1220] tracking-tight mb-2 group-hover:text-[#007475] transition-colors">
                    PulseClime
                  </h3>

                  {/* Role & Metadata */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 font-mono mb-6">
                    <span className="text-[#007475] font-semibold">Role: Prototype Builder</span>
                    <span className="text-slate-300">|</span>
                    <span>Climate &amp; Community Resilience</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    PulseClime is an early-warning prototype exploring how localized climate hazard information can be translated into practical alerts and response workflows for communities. It investigates ways to bridge macro-level environmental data with immediate grassroots safety actions.
                  </p>

                  {/* Core Capabilities */}
                  <div className="mb-6">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 font-semibold">
                      Prototype Focus &amp; Explorations:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3CB89C]" />
                        <span>Localized environmental hazard awareness</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3CB89C]" />
                        <span>Actionable, plain-language early warning alerts</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3CB89C]" />
                        <span>Accessible information delivery for low-resource devices</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3CB89C]" />
                        <span>Structured community response coordination protocols</span>
                      </div>
                    </div>
                  </div>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200">
                    <span className="text-[11px] font-mono text-slate-500 mr-2 font-semibold">Focus Areas:</span>
                    {["Hazard Awareness", "Early Warning", "Accessible Alerts", "Response Coordination", "Community Resilience"].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. TECHNICAL CAPABILITIES */}
        <section id="stack" className="py-16 sm:py-24 border-t border-slate-200 bg-white/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#007475] uppercase tracking-wider mb-2 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                Architecture &amp; Tooling
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0B1220] tracking-tight">
                Technical Stack
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Tools and technologies organized by domain, prioritizing operational stability, security, and developer velocity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-[#007475]/10 text-[#007475] border border-[#007475]/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1220]">Frontend</h3>
                    <p className="text-xs text-slate-500 font-mono">Modern UI, TypeScript, &amp; responsive styling</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Next.js</div>
                      <div className="text-xs text-slate-500 mt-0.5">App Router, SSR, Server Components, API routes</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#007475] bg-[#007475]/10 px-2 py-0.5 rounded font-semibold border border-[#007475]/20">Core</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">React</div>
                      <div className="text-xs text-slate-500 mt-0.5">Component architecture, custom hooks, reactive state</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">v19 / v18</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">TypeScript</div>
                      <div className="text-xs text-slate-500 mt-0.5">End-to-end type safety, strict typing, schema contracts</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#007475] bg-[#007475]/10 px-2 py-0.5 rounded font-semibold border border-[#007475]/20">Strict</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Tailwind CSS</div>
                      <div className="text-xs text-slate-500 mt-0.5">Responsive design systems, custom utilities, accessibility</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">v4 / v3</span>
                  </li>
                </ul>
              </div>

              {/* Backend & Data Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-[#007475]/10 text-[#007475] border border-[#007475]/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1220]">Backend &amp; Data</h3>
                    <p className="text-xs text-slate-500 font-mono">Relational databases, auth &amp; security policies</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Supabase &amp; PostgreSQL</div>
                      <div className="text-xs text-slate-500 mt-0.5">Relational schemas, queries, migrations, Realtime</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#007475] bg-[#007475]/10 px-2 py-0.5 rounded font-semibold border border-[#007475]/20">Data</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">API Architecture</div>
                      <div className="text-xs text-slate-500 mt-0.5">RESTful services, webhook ingestion, resilient endpoints</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">REST</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Authentication &amp; Authorization</div>
                      <div className="text-xs text-slate-500 mt-0.5">OAuth providers, session tokens, role-based access</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">Auth</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Row Level Security (RLS)</div>
                      <div className="text-xs text-slate-500 mt-0.5">Granular database-level access policies &amp; data isolation</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#007475] bg-[#007475]/10 px-2 py-0.5 rounded font-semibold border border-[#007475]/20">Security</span>
                  </li>
                </ul>
              </div>

              {/* Cloud & Infrastructure Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-[#007475]/10 text-[#007475] border border-[#007475]/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1220]">Cloud &amp; Infrastructure</h3>
                    <p className="text-xs text-slate-500 font-mono">Edge deployment, serverless &amp; compute hosting</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Google Cloud</div>
                      <div className="text-xs text-slate-500 mt-0.5">Cloud Run, storage buckets, compute instances</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#007475] bg-[#007475]/10 px-2 py-0.5 rounded font-semibold border border-[#007475]/20">GCP</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Microsoft Azure</div>
                      <div className="text-xs text-slate-500 mt-0.5">App Services, cloud workflows, resource groups</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">Azure</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Vercel</div>
                      <div className="text-xs text-slate-500 mt-0.5">Edge network deployments, automated CI/CD pipelines</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#007475] bg-[#007475]/10 px-2 py-0.5 rounded font-semibold border border-[#007475]/20">Deploy</span>
                  </li>
                </ul>
              </div>

              {/* Integrations & Automation Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-[#3CB89C]/15 text-[#007475] border border-[#3CB89C]/30">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1220]">Integrations &amp; Automation</h3>
                    <p className="text-xs text-slate-500 font-mono">Multi-channel alerts, payments &amp; webhooks</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Stripe</div>
                      <div className="text-xs text-slate-500 mt-0.5">Subscriptions, Checkout sessions, webhook listeners</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#007475] bg-[#007475]/10 px-2 py-0.5 rounded font-semibold border border-[#007475]/20">FinTech</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Twilio &amp; WhatsApp APIs</div>
                      <div className="text-xs text-slate-500 mt-0.5">Chat triage workflows, SMS alert dispatches, fallback logic</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#007475] bg-[#007475]/10 px-2 py-0.5 rounded font-semibold border border-[#007475]/20">Messaging</span>
                  </li>
                  <li className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                    <div>
                      <div className="text-sm font-semibold text-[#0B1220]">Resend &amp; Third-Party APIs</div>
                      <div className="text-xs text-slate-500 mt-0.5">Transactional email delivery, accounting sync, error handling</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">Pipelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. EXPERIENCE / IMPACT SNAPSHOT */}
        <section id="experience" className="py-16 sm:py-24 border-t border-slate-200 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#007475] uppercase tracking-wider mb-2 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
              Track Record &amp; Exposure
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B1220] tracking-tight">
              Experience &amp; Impact Snapshot
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Demonstrated exposure across software development, digital health platforms, and emergency innovation initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#007475] font-semibold uppercase tracking-wider">
                  Area 01
                </span>
                <span className="text-xs text-slate-500 font-mono">Full-Stack Focus</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2">
                Software &amp; Product Development
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Building full-stack web applications and SaaS products using modern JavaScript/TypeScript tooling, relational database design, and automated notification pipelines.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#007475] font-semibold uppercase tracking-wider">
                  Area 02
                </span>
                <span className="text-xs text-slate-500 font-mono">Health Systems</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2">
                Digital Health
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Experience supporting users and operational workflows around <strong className="text-[#0B1220] font-semibold">MySmartMedic</strong>, a digital healthcare platform, gaining direct exposure to clinical friction and patient care coordination.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#007475] font-semibold uppercase tracking-wider">
                  Area 03
                </span>
                <span className="text-xs text-slate-500 font-mono">Innovation Challenge</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2">
                Emergency Innovation
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Technical and product leadership within a multidisciplinary snakebite emergency innovation project (<strong className="text-[#0B1220] font-semibold">Bite2Care</strong> for the Wellcome Snakebite Innovation Prize / SnakeHack Africa).
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#007475] font-semibold uppercase tracking-wider">
                  Area 04
                </span>
                <span className="text-xs text-slate-500 font-mono">Global Resilience</span>
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2">
                Climate &amp; Sustainability
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Growing focus on climate resilience, circular economy principles, and technology-enabled sustainability tools designed to support vulnerable communities facing ecological shocks.
              </p>
            </div>
          </div>
        </section>

        {/* 6. BUILDING FOR REAL-WORLD CONDITIONS */}
        <section id="philosophy" className="py-16 sm:py-24 border-t border-slate-200 bg-white/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#007475] uppercase tracking-wider mb-2 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                Engineering Philosophy
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0B1220] tracking-tight leading-tight">
                Technology should work outside the perfect demo.
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
                In real-world deployments—especially across emerging regions and critical frontline services—software must withstand network drops, messy data, fragmented stakeholders, and hardware constraints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#007475]/40 hover:shadow-md transition-all group">
                <div className="h-10 w-10 rounded-lg bg-[#007475]/10 text-[#007475] flex items-center justify-center font-mono font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  01
                </div>
                <h3 className="text-base font-bold text-[#0B1220] mb-2">
                  Low-Bandwidth Environments
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Minimizing payload footprints, optimizing client-side caching, and designing graceful degradation so critical workflows function even on intermittent 2G/3G connections.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#007475]/40 hover:shadow-md transition-all group">
                <div className="h-10 w-10 rounded-lg bg-[#007475]/10 text-[#007475] flex items-center justify-center font-mono font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  02
                </div>
                <h3 className="text-base font-bold text-[#0B1220] mb-2">
                  Fragmented Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bridging disconnected software silos through standardized schemas, asynchronous webhook consumers, and error-resilient reconciliation pipelines.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#007475]/40 hover:shadow-md transition-all group">
                <div className="h-10 w-10 rounded-lg bg-[#007475]/10 text-[#007475] flex items-center justify-center font-mono font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  03
                </div>
                <h3 className="text-base font-bold text-[#0B1220] mb-2">
                  Human-Centered Workflows
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structuring interactions around the actual physical routines of frontline health workers and operators, rather than forcing convoluted software manuals.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#007475]/40 hover:shadow-md transition-all group">
                <div className="h-10 w-10 rounded-lg bg-[#007475]/10 text-[#007475] flex items-center justify-center font-mono font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  04
                </div>
                <h3 className="text-base font-bold text-[#0B1220] mb-2">
                  Interoperability
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Building open, API-driven integration architectures that can communicate with existing third-party databases, financial ledgers, and emergency portals.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#007475]/40 hover:shadow-md transition-all group">
                <div className="h-10 w-10 rounded-lg bg-[#007475]/10 text-[#007475] flex items-center justify-center font-mono font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  05
                </div>
                <h3 className="text-base font-bold text-[#0B1220] mb-2">
                  Reliable Notifications
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineering multi-channel delivery fallbacks across WhatsApp, SMS, and transactional email to ensure critical operational messages reach their recipients.
                </p>
              </div>

              {/* Pillar 6 */}
              <div className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#007475]/40 hover:shadow-md transition-all group">
                <div className="h-10 w-10 rounded-lg bg-[#007475]/10 text-[#007475] flex items-center justify-center font-mono font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  06
                </div>
                <h3 className="text-base font-bold text-[#0B1220] mb-2">
                  Real Operational Constraints
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Designing around battery drain, legacy hardware, fluctuating power availability, and the fast-paced stress of field environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT / COLLABORATION */}
        <section id="contact" className="py-20 sm:py-28 border-t border-slate-200 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl shadow-slate-200/60">
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#007475]/5 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#007475] uppercase tracking-wider mb-3 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#007475]" />
                Get in Touch
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] tracking-tight mb-4">
                Let&apos;s build useful things.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                I am interested in collaborating on technology, sustainability, healthcare, climate resilience, and global innovation initiatives.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                I am actively open to opportunities and technical collaborations connected to programs such as <span className="text-[#0B1220] font-semibold">MIT Solve</span>, <span className="text-[#0B1220] font-semibold">UNICEF youth innovation initiatives</span>, and fellowship programs building technology for high-impact challenges.
              </p>

              {/* Direct Email Display & Copy Action */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#007475]/10 text-[#007475]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 font-semibold">Direct Email</div>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm sm:text-base font-semibold text-[#0B1220] hover:text-[#007475] transition-colors font-mono"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-300 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <svg className="w-4 h-4 text-[#007475]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#007475]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#007475] text-white font-semibold text-xs hover:bg-[#005f60] transition-all shadow-sm shadow-[#007475]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
                  >
                    <span>Send Email</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Links & Channels */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:text-[#007475] hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
                >
                  <svg className="w-4 h-4 text-[#007475]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: {emailAddress}</span>
                </a>

                <a
                  href="#GITHUB_URL"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:text-[#007475] hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
                  title="GitHub Profile (Replace #GITHUB_URL with your profile)"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub (#GITHUB_URL)</span>
                </a>

                <a
                  href="#LINKEDIN_URL"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:text-[#007475] hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007475]"
                  title="LinkedIn Profile (Replace #LINKEDIN_URL with your profile)"
                >
                  <svg className="w-4 h-4 text-[#007475]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn (#LINKEDIN_URL)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#007475] to-[#3CB89C] flex items-center justify-center font-mono font-bold text-[10px] text-white">
                  FBW
                </div>
                <span className="font-semibold text-[#0B1220] tracking-tight">Fatima Binta Wada</span>
              </div>
              <div className="text-xs text-slate-500 font-mono mt-1">
                Full-Stack Developer &amp; Technical Lead
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
              <a href="#about" className="hover:text-[#007475] transition-colors">About</a>
              <a href="#projects" className="hover:text-[#007475] transition-colors">Projects</a>
              <a href="#stack" className="hover:text-[#007475] transition-colors">Technical Stack</a>
              <a href="#experience" className="hover:text-[#007475] transition-colors">Experience</a>
              <a href="#philosophy" className="hover:text-[#007475] transition-colors">Philosophy</a>
              <a href="#contact" className="hover:text-[#007475] transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Fatima Binta Wada. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Building practical technology for real-world resilience.</span>
              <a
                href="#"
                className="ml-4 inline-flex items-center gap-1 text-[#007475] hover:text-[#005f60] font-medium transition-colors"
                aria-label="Back to top"
              >
                <span>Top</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

