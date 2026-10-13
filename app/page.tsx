"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState<"all" | "health" | "saas" | "climate">("all");

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
    <div className="min-h-screen bg-[#171729] text-[#F2EBDD] font-sans selection:bg-[#536DFE]/30 selection:text-[#F2EBDD]">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#536DFE]/12 via-[#292448]/30 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-[#9694FF]/8 blur-[160px] rounded-full" />
        <div className="absolute top-[65%] left-[-10%] w-[600px] h-[600px] bg-[#536DFE]/8 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#536DFE0a_1px,transparent_1px),linear-gradient(to_bottom,#536DFE0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Header & Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#171729]/90 border-b border-[#292448] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE] rounded-md py-1"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#536DFE] via-[#292448] to-[#9694FF] flex items-center justify-center font-mono font-bold text-xs text-white shadow-sm shadow-[#536DFE]/20 group-hover:scale-105 transition-transform border border-[#536DFE]/40">
              FBW
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-[#F2EBDD] group-hover:text-[#9694FF] transition-colors">
                Fatima Binta Wada
              </span>
              <span className="text-[11px] text-[#777486] font-mono tracking-tight hidden sm:block">
                Technology Innovator &amp; Technical Lead
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-[#777486]">
            <a
              href="#about"
              className="px-3 py-1.5 rounded-md hover:text-[#F2EBDD] hover:bg-[#292448]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
            >
              About
            </a>
            <a
              href="#projects"
              className="px-3 py-1.5 rounded-md hover:text-[#F2EBDD] hover:bg-[#292448]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="px-3 py-1.5 rounded-md hover:text-[#F2EBDD] hover:bg-[#292448]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
            >
              Experience
            </a>
            <a
              href="#research"
              className="px-3 py-1.5 rounded-md hover:text-[#F2EBDD] hover:bg-[#292448]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
            >
              Research
            </a>
            <a
              href="#speaking"
              className="px-3 py-1.5 rounded-md hover:text-[#F2EBDD] hover:bg-[#292448]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
            >
              Speaking
            </a>
            <a
              href="#stack"
              className="px-3 py-1.5 rounded-md hover:text-[#F2EBDD] hover:bg-[#292448]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
            >
              Stack
            </a>
            <a
              href="#contact"
              className="ml-2 px-3.5 py-1.5 rounded-md bg-[#536DFE]/20 text-[#9694FF] border border-[#536DFE]/40 hover:bg-[#536DFE]/30 hover:border-[#536DFE] hover:text-[#F2EBDD] transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
            >
              Connect
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#777486] hover:text-[#F2EBDD] hover:bg-[#292448] focus:outline-none focus:ring-2 focus:ring-[#536DFE]"
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
          <div className="md:hidden border-b border-[#292448] bg-[#171729]/98 px-4 pt-2 pb-4 space-y-1 backdrop-blur-xl">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#777486] hover:text-[#F2EBDD] hover:bg-[#292448]"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#777486] hover:text-[#F2EBDD] hover:bg-[#292448]"
            >
              Featured Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#777486] hover:text-[#F2EBDD] hover:bg-[#292448]"
            >
              Experience &amp; Leadership
            </a>
            <a
              href="#research"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#777486] hover:text-[#F2EBDD] hover:bg-[#292448]"
            >
              Science &amp; Research
            </a>
            <a
              href="#speaking"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#777486] hover:text-[#F2EBDD] hover:bg-[#292448]"
            >
              Speaking &amp; Engagement
            </a>
            <a
              href="#stack"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#777486] hover:text-[#F2EBDD] hover:bg-[#292448]"
            >
              Technical Stack
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium bg-[#536DFE]/20 text-[#9694FF] border border-[#536DFE]/40 text-center"
            >
              Get in Touch
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Narrative & Action */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292448]/80 border border-[#536DFE]/30 text-xs font-mono font-medium text-[#9694FF] mb-6 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#536DFE] animate-pulse" />
                <span>TECHNOLOGY · INNOVATION · SUSTAINABLE DEVELOPMENT</span>
              </div>

              {/* Name & Identity */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2EBDD] mb-3 leading-[1.1]">
                Fatima Binta Wada
              </h1>

              <div className="text-lg sm:text-xl font-semibold text-[#9694FF] font-mono mb-4 tracking-tight">
                Technology Innovator | Full-Stack Developer | Product &amp; Technical Lead
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F2EBDD] tracking-tight mb-4 leading-tight">
                Building technology for problems that matter.
              </h2>

              {/* Supporting narrative */}
              <p className="text-base sm:text-lg text-[#F2EBDD]/80 leading-relaxed mb-6 max-w-2xl">
                I am a Nigerian technology innovator and full-stack developer working across digital health, AI, entrepreneurship and climate resilience. I build practical digital solutions, lead multidisciplinary product work and explore how technology can address real-world challenges across Africa.
              </p>

              {/* Location & Global Scope */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#777486] font-mono mb-8">
                <svg className="w-4 h-4 text-[#536DFE] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Based in Nigeria · Building for global impact</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#536DFE] text-white font-semibold text-sm sm:text-base hover:bg-[#4357dd] active:scale-[0.99] transition-all shadow-lg shadow-[#536DFE]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
                >
                  <span>Explore my work</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#292448] text-[#F2EBDD] border border-[#536DFE]/30 font-medium text-sm sm:text-base hover:bg-[#322c59] hover:border-[#536DFE] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
                >
                  <span>Let&apos;s connect</span>
                  <svg className="w-4 h-4 text-[#9694FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              {/* Social Channels Strip */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#292448] w-full">
                <span className="text-xs font-mono text-[#777486]">Connect:</span>
                <a
                  href="https://github.com/fatimawada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F2EBDD]/70 hover:text-[#9694FF] transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <span className="text-[#292448]">·</span>
                <a
                  href="https://www.linkedin.com/in/fatima-wada-0b43ab399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F2EBDD]/70 hover:text-[#9694FF] transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 text-[#536DFE]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <span className="text-[#292448]">·</span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xs font-mono text-[#F2EBDD]/70 hover:text-[#9694FF] transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 text-[#FF795C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Distinctive Portrait Frame Composition */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Decorative background shapes & ambient aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#536DFE]/30 via-[#292448]/60 to-[#FF795C]/20 rounded-3xl blur-xl opacity-70 transform -rotate-2" />
                <div className="absolute -inset-1 bg-[#292448] rounded-3xl border border-[#536DFE]/40" />

                {/* Main Portrait Card */}
                <div className="relative rounded-2xl overflow-hidden bg-[#292448] border-2 border-[#536DFE]/40 shadow-2xl shadow-[#171729]/80 aspect-[4/5]">
                  <Image
                    src="/images/fatima-binta-wada.jpg"
                    alt="Portrait of Fatima Binta Wada, Technology Innovator and Full-Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Subtle tonal gradient overlay at base for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171729]/90 via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#171729]/90 backdrop-blur-md border border-[#536DFE]/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-[#F2EBDD]">Fatima Binta Wada</div>
                        <div className="text-[11px] text-[#9694FF] font-mono">Full-Stack &amp; Product Lead</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#536DFE]/20 text-[10px] font-mono font-semibold text-[#9694FF] border border-[#536DFE]/40">
                        Nigeria · Global
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Micro-Signals Focus Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[#292448]">
            <div className="p-4 rounded-xl bg-[#292448]/50 border border-[#292448] hover:border-[#FF795C]/40 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FF795C]" />
                <h3 className="text-xs font-mono font-semibold text-[#F2EBDD]">Digital Health</h3>
              </div>
              <p className="text-xs text-[#777486] leading-relaxed">
                Emergency referral chains, triage workflows, and clinical coordination.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#292448]/50 border border-[#292448] hover:border-[#536DFE]/40 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2 w-2 rounded-full bg-[#536DFE]" />
                <h3 className="text-xs font-mono font-semibold text-[#F2EBDD]">Full-Stack SaaS</h3>
              </div>
              <p className="text-xs text-[#777486] leading-relaxed">
                Business automation, accounts receivable recovery, and API integrations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#292448]/50 border border-[#292448] hover:border-[#9694FF]/40 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2 w-2 rounded-full bg-[#9694FF]" />
                <h3 className="text-xs font-mono font-semibold text-[#F2EBDD]">AI &amp; Youth Mentorship</h3>
              </div>
              <p className="text-xs text-[#777486] leading-relaxed">
                Training young learners in digital literacy and responsible AI education.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#292448]/50 border border-[#292448] hover:border-[#F2B84B]/40 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2 w-2 rounded-full bg-[#F2B84B]" />
                <h3 className="text-xs font-mono font-semibold text-[#F2EBDD]">Climate Resilience</h3>
              </div>
              <p className="text-xs text-[#777486] leading-relaxed">
                Localized hazard awareness and plain-language community early warnings.
              </p>
            </div>
          </div>
        </section>

        {/* 2. ABOUT ME: EDITORIAL PROFESSIONAL NARRATIVE */}
        <section id="about" className="py-20 sm:py-28 bg-[#F2EBDD] text-[#171729] relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#536DFE] uppercase tracking-wider mb-3 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#536DFE]" />
                Professional Narrative
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-[#171729] tracking-tight mb-6 leading-tight">
                Engineering solutions anchored in the realities people actually face.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#32313B] leading-relaxed">
                <p>
                  My work sits at the intersection of technology, innovation and practical problem-solving. With a background in Microbiology from Bayero University Kano and experience across software development, digital health, youth mentoring and multidisciplinary innovation, I am interested in how useful systems can be designed around the realities people face.
                </p>
                <p>
                  From exploring better coordination for snakebite emergencies through Bite2Care to building software that reduces business friction with ChaseFree, I focus on technology as a means of solving problems, not simply producing another digital product.
                </p>
                <p>
                  My academic foundation in the biological sciences trains me to approach engineering with empirical rigor: diagnosing failure points, evaluating evidence, and understanding systemic interdependencies before proposing software interventions.
                </p>
              </div>

              {/* 4 Identity Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div className="p-4 rounded-xl bg-white/80 border border-[#171729]/10 shadow-sm">
                  <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">01 · Scientific Foundation</div>
                  <h3 className="font-semibold text-sm text-[#171729] mb-1">Evidence-Informed Thinking</h3>
                  <p className="text-xs text-[#777486] leading-relaxed">
                    Trained in laboratory microbiology and public-health investigation, connecting empirical research with practical technical problem-solving.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/80 border border-[#171729]/10 shadow-sm">
                  <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">02 · Multidisciplinary Leadership</div>
                  <h3 className="font-semibold text-sm text-[#171729] mb-1">Collaborative Coordination</h3>
                  <p className="text-xs text-[#777486] leading-relaxed">
                    Bridging engineers, healthcare stakeholders, and community partners in high-stakes innovation initiatives like SnakeHack Africa.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/80 border border-[#171729]/10 shadow-sm">
                  <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">03 · Product Architecture</div>
                  <h3 className="font-semibold text-sm text-[#171729] mb-1">Full-Stack Execution</h3>
                  <p className="text-xs text-[#777486] leading-relaxed">
                    Building resilient web applications with Next.js, TypeScript, PostgreSQL, and multi-channel automation pipelines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/80 border border-[#171729]/10 shadow-sm">
                  <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">04 · Community Impact</div>
                  <h3 className="font-semibold text-sm text-[#171729] mb-1">Youth Literacy &amp; AI Mentorship</h3>
                  <p className="text-xs text-[#777486] leading-relaxed">
                    Mentoring children and young learners in computational thinking, digital literacy, and responsible artificial intelligence concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED PROJECTS: THREE DISTINCT CASE STUDIES */}
        <section id="projects" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9694FF] uppercase tracking-wider mb-2 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#536DFE]" />
                Featured Case Studies
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F2EBDD] tracking-tight">
                Selected Work
              </h2>
              <p className="text-sm sm:text-base text-[#777486] mt-2 max-w-2xl">
                Prototypes, team innovations, and founder-led products addressing real-world operational friction.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#292448] border border-[#536DFE]/30 text-xs font-mono self-start md:self-auto shadow-sm">
              <button
                onClick={() => setActiveProjectTab("all")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeProjectTab === "all"
                    ? "bg-[#536DFE] text-white font-semibold"
                    : "text-[#777486] hover:text-[#F2EBDD]"
                }`}
              >
                All Work (3)
              </button>
              <button
                onClick={() => setActiveProjectTab("health")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeProjectTab === "health"
                    ? "bg-[#FF795C] text-white font-semibold"
                    : "text-[#777486] hover:text-[#F2EBDD]"
                }`}
              >
                Digital Health
              </button>
              <button
                onClick={() => setActiveProjectTab("saas")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeProjectTab === "saas"
                    ? "bg-[#536DFE] text-white font-semibold"
                    : "text-[#777486] hover:text-[#F2EBDD]"
                }`}
              >
                SaaS &amp; Automation
              </button>
              <button
                onClick={() => setActiveProjectTab("climate")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeProjectTab === "climate"
                    ? "bg-[#F2B84B] text-[#171729] font-semibold"
                    : "text-[#777486] hover:text-[#F2EBDD]"
                }`}
              >
                Climate &amp; Resilience
              </button>
            </div>
          </div>

          <div className="space-y-12">
            {/* CASE STUDY 1: BITE2CARE (Digital Health · Emergency Innovation) */}
            {(activeProjectTab === "all" || activeProjectTab === "health") && (
              <div className="relative rounded-3xl bg-[#292448]/80 border-2 border-[#FF795C]/40 p-6 sm:p-10 lg:p-12 shadow-xl shadow-[#171729]/60 hover:border-[#FF795C] transition-all duration-300">
                {/* Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="text-xs font-mono text-[#FF795C] font-semibold tracking-wider uppercase">
                    Digital Health · Emergency Innovation · Public Health
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF795C]/20 text-[#FF795C] border border-[#FF795C]/40 text-xs font-mono font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF795C] animate-pulse" />
                    Innovation Project / Prototype
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-[#F2EBDD] tracking-tight mb-2">
                  Bite2Care
                </h3>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#777486] font-mono mb-6">
                  <span className="text-[#FF795C] font-semibold">Role: Product &amp; Technology Lead (Multidisciplinary Team)</span>
                  <span className="text-[#292448]">|</span>
                  <span>Wellcome Snakebite Innovation Prize / SnakeHack Africa</span>
                </div>

                {/* Speaking Milestone Highlight */}
                <div className="p-4 rounded-xl bg-[#FF795C]/10 border border-[#FF795C]/30 mb-8 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FF795C]/20 text-[#FF795C] flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm text-[#F2EBDD] leading-relaxed">
                    <strong className="text-[#FF795C] block font-semibold mb-0.5">Presentation Milestone · Nairobi, Kenya</strong>
                    Presented Bite2Care at <span className="font-semibold text-white">SnakeHack Africa in Nairobi, Kenya</span>, sharing our approach to technology-enabled snakebite emergency coordination.
                  </div>
                </div>

                {/* The Problem & Solution Framing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-5 rounded-2xl bg-[#171729]/60 border border-[#292448]">
                    <div className="text-xs font-mono text-[#FF795C] uppercase tracking-wider mb-2 font-semibold">
                      The Problem
                    </div>
                    <p className="text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed">
                      Following a snakebite incident, severe delays and fragmentation occur between initial community occurrence and access to verified antivenom. In rural settings, lack of pre-arrival guidance, uncoordinated transport, and uncertain hospital antivenom supplies cost critical survival hours.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#171729]/60 border border-[#292448]">
                    <div className="text-xs font-mono text-[#FF795C] uppercase tracking-wider mb-2 font-semibold">
                      The Solution &amp; Scope
                    </div>
                    <p className="text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed">
                      A connected emergency coordination system bridging initial guidance, rural referrals, receiving-facility readiness verification, and transport logistics. Conceived for Africa-wide impact, with Nigeria as the initial implementation location.
                    </p>
                  </div>
                </div>

                {/* Key System Capabilities Breakdown */}
                <div className="mb-8">
                  <div className="text-xs font-mono text-[#777486] uppercase tracking-wider mb-3 font-semibold">
                    System Architecture &amp; Verified Explorations:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                      <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Structured Emergency Guidance</div>
                      <div className="text-xs text-[#777486] leading-relaxed">
                        Deterministic first-aid triage decision trees engineered for low-connectivity rural settings without high data overheads.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                      <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Referral Coordination &amp; Pre-Arrival Alerts</div>
                      <div className="text-xs text-[#777486] leading-relaxed">
                        Notification pathways alerting receiving healthcare facilities in advance of patient transit to prepare antivenom administration.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                      <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Facility Readiness &amp; Verification Concept</div>
                      <div className="text-xs text-[#777486] leading-relaxed">
                        Protocols verifying clinical readiness and antivenom stock availability before dispatching patients to distant clinics.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                      <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Transport &amp; Emergency Logistics</div>
                      <div className="text-xs text-[#777486] leading-relaxed">
                        Routing and driver mobilization workflows designed to cut transit times across hard-to-reach rural communities.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448] sm:col-span-2">
                      <div className="text-xs font-semibold text-[#FF795C] mb-1">WhatsApp-Based Frontline Interaction</div>
                      <div className="text-xs text-[#777486] leading-relaxed">
                        Exploring conversational interfaces so responders and community health workers can trigger triage workflows without installing heavy standalone applications.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Honest Disclosure & Links */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#292448]">
                  <div className="text-[11px] text-[#777486] italic">
                    Multidisciplinary team project developed for innovation challenge. Status: Working prototype concept (not deployed as an active clinical device).
                  </div>

                  <a
                    href="https://bite2-care.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF795C] text-white font-semibold text-xs hover:bg-[#eb6a4f] transition-all shadow-md shadow-[#FF795C]/20"
                  >
                    <span>View Deployed Prototype</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {/* CASE STUDY 2: CHASEFREE (SaaS · FinTech · Business Automation) */}
            {(activeProjectTab === "all" || activeProjectTab === "saas") && (
              <div className="relative rounded-3xl bg-[#292448]/80 border-2 border-[#536DFE]/40 p-6 sm:p-10 lg:p-12 shadow-xl shadow-[#171729]/60 hover:border-[#536DFE] transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="text-xs font-mono text-[#9694FF] font-semibold tracking-wider uppercase">
                    SaaS · FinTech · Business Automation
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#536DFE]/20 text-[#9694FF] border border-[#536DFE]/40 text-xs font-mono font-semibold">
                    Founder-Led SaaS Product
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#F2EBDD] tracking-tight">
                    ChaseFree
                  </h3>
                  <span className="text-base sm:text-lg font-mono text-[#9694FF] italic">
                    &ldquo;Stop chasing invoices. Get paid faster.&rdquo;
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#777486] font-mono mb-6">
                  <span className="text-[#536DFE] font-semibold">Role: Founder / Builder</span>
                  <span className="text-[#292448]">|</span>
                  <span>Full-Stack SaaS Implementation &amp; Architecture</span>
                </div>

                <p className="text-sm sm:text-base text-[#F2EBDD]/80 leading-relaxed mb-6">
                  ChaseFree helps agencies and service businesses automate overdue invoice recovery. Manually chasing clients for late payments drains productive hours, introduces awkward client tension, and destabilizes cash flow. ChaseFree automates the entire follow-up lifecycle with intelligent multi-channel reminders.
                </p>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Invoice Ageing Monitoring</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Continuous tracking of unpaid balances, categorizing receivables by age and payment risk.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Multi-Channel Follow-ups</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Automated reminder sequences via Email with intended SMS and WhatsApp notification integrations.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Payment Detection &amp; Auto-Halt</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Instantly halts reminder sequences the moment customer settlement is recorded to prevent awkward double-dunning.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Retainer &amp; Recurring Cadences</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Automated invoicing intervals tailored for agency retainers and recurring service agreements.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Cash-Flow Insights</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Real-time visibility into collection efficiency, average days sales outstanding (DSO), and recovered revenue.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Accounting Sync Architecture</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Integration architecture designed to synchronize ledger data with QuickBooks and Xero.
                    </div>
                  </div>
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-[#292448]">
                  <span className="text-xs font-mono text-[#777486] mr-2">Built With:</span>
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe API", "Resend"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-[#171729] border border-[#292448] text-xs font-mono text-[#9694FF]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CASE STUDY 3: PULSECLIME (ClimateTech · Early Warning · Community Resilience) */}
            {(activeProjectTab === "all" || activeProjectTab === "climate") && (
              <div className="relative rounded-3xl bg-[#292448]/80 border-2 border-[#F2B84B]/40 p-6 sm:p-10 lg:p-12 shadow-xl shadow-[#171729]/60 hover:border-[#F2B84B] transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="text-xs font-mono text-[#F2B84B] font-semibold tracking-wider uppercase">
                    ClimateTech · Early Warning · Community Resilience
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2B84B]/20 text-[#F2B84B] border border-[#F2B84B]/40 text-xs font-mono font-semibold">
                    Early-Stage Prototype
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-[#F2EBDD] tracking-tight mb-2">
                  PulseClime
                </h3>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#777486] font-mono mb-6">
                  <span className="text-[#F2B84B] font-semibold">Role: Prototype Builder</span>
                  <span className="text-[#292448]">|</span>
                  <span>Climate Risk Communication &amp; Resilience Workflows</span>
                </div>

                <p className="text-sm sm:text-base text-[#F2EBDD]/80 leading-relaxed mb-6">
                  PulseClime is an exploratory climate-resilience initiative focused on transforming abstract environmental hazard data into clear, actionable awareness for grassroots communities. Rather than burdening users with complex meteorological models, it investigates accessible early-warning delivery for low-resource environments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Localized Hazard Awareness</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Translating regional climate risk indicators into hyper-local impact assessments.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Plain-Language Early Warnings</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Converting technical climate indices into direct, non-technical safety steps community members can execute immediately.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Low-Resource Device Delivery</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Architected with lightweight payload sizes to ensure alerts can transmit over unstable network connections.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#171729]/40 border border-[#292448]">
                    <div className="text-xs font-semibold text-[#F2EBDD] mb-1">Structured Response Protocols</div>
                    <div className="text-xs text-[#777486] leading-relaxed">
                      Defining clear community coordination protocols before, during, and after acute climate disruptions.
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-[#292448]">
                  <span className="text-xs font-mono text-[#777486] mr-2">Focus Areas:</span>
                  {["Hazard Awareness", "Actionable Alerts", "Low-Bandwidth UX", "Community Resilience", "Response Workflows"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-[#171729] border border-[#292448] text-xs font-mono text-[#F2B84B]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. PROFESSIONAL EXPERIENCE AND LEADERSHIP */}
        <section id="experience" className="py-20 sm:py-28 bg-[#292448]/40 border-y border-[#292448]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9694FF] uppercase tracking-wider mb-2 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#536DFE]" />
                Leadership &amp; Contributions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F2EBDD] tracking-tight">
                Professional Experience
              </h2>
              <p className="text-sm sm:text-base text-[#777486] mt-2">
                Demonstrated leadership across technology education, digital health operations, multidisciplinary innovation, and team building.
              </p>
            </div>

            {/* Visual Timeline */}
            <div className="relative border-l-2 border-[#536DFE]/30 ml-3 sm:ml-6 space-y-12">
              {/* Experience 1: UNICCON */}
              <div className="relative pl-6 sm:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#171729] border-2 border-[#536DFE] group-hover:bg-[#536DFE] transition-colors" />
                <div className="p-6 rounded-2xl bg-[#171729]/80 border border-[#292448] hover:border-[#536DFE]/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#9694FF] font-semibold">April – August 2026</span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#536DFE]/20 text-[#9694FF] border border-[#536DFE]/30">
                      Youth Mentorship &amp; Education
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F2EBDD] mb-1">
                    AI &amp; Digital Literacy Mentor
                  </h3>
                  <div className="text-xs font-mono text-[#536DFE] mb-3">UNICCON</div>
                  <p className="text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed mb-4">
                    Mentored young learners, including children aged five and above, in digital literacy and artificial intelligence fundamentals. Guided learners through foundational computational thinking, explained complex technology concepts through age-appropriate curricula, introduced responsible AI principles, and supported students through structured progression assessments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Youth STEM Education", "Responsible AI Concepts", "Digital Literacy", "Curriculum Facilitation"].map((skill) => (
                      <span key={skill} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#292448] text-[#777486]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 2: MySmartMedic */}
              <div className="relative pl-6 sm:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#171729] border-2 border-[#FF795C] group-hover:bg-[#FF795C] transition-colors" />
                <div className="p-6 rounded-2xl bg-[#171729]/80 border border-[#292448] hover:border-[#FF795C]/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#FF795C] font-semibold">Platform Operations</span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#FF795C]/20 text-[#FF795C] border border-[#FF795C]/30">
                      Digital Health Operations
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F2EBDD] mb-1">
                    Customer Relations &amp; User Operations
                  </h3>
                  <div className="text-xs font-mono text-[#FF795C] mb-3">MySmartMedic (Telemedicine Platform)</div>
                  <p className="text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed mb-4">
                    Managed user operations and support for a digital health and AI telemedicine platform serving Nigerian doctors and patients. Guided users through onboarding, accounts, and consultation scheduling, while documenting friction points and operational bottlenecks. Gained direct first-hand insight into frontline healthcare access barriers and user adoption realities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Digital Health Access", "User Onboarding", "Telemedicine Support", "Service Delivery"].map((skill) => (
                      <span key={skill} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#292448] text-[#777486]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 3: Bite2Care Leadership */}
              <div className="relative pl-6 sm:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#171729] border-2 border-[#536DFE] group-hover:bg-[#536DFE] transition-colors" />
                <div className="p-6 rounded-2xl bg-[#171729]/80 border border-[#292448] hover:border-[#536DFE]/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#9694FF] font-semibold">Wellcome Innovation Prize</span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#536DFE]/20 text-[#9694FF] border border-[#536DFE]/30">
                      Innovation Leadership
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F2EBDD] mb-1">
                    Technology &amp; Product Lead
                  </h3>
                  <div className="text-xs font-mono text-[#536DFE] mb-3">Bite2Care (SnakeHack Africa)</div>
                  <p className="text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed mb-4">
                    Led product architecture and technical coordination for a multidisciplinary team tackling snakebite emergency care. Coordinated workflow mapping between patients, emergency transport, and clinical facilities. Represented the project in Nairobi, Kenya, articulating the technical solution to healthcare innovators and judges.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Emergency System Architecture", "Multidisciplinary Coordination", "Product Strategy", "Technical Pitching"].map((skill) => (
                      <span key={skill} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#292448] text-[#777486]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 4: AIM Global / AMG */}
              <div className="relative pl-6 sm:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#171729] border-2 border-[#777486] group-hover:bg-[#777486] transition-colors" />
                <div className="p-6 rounded-2xl bg-[#171729]/80 border border-[#292448] hover:border-[#777486]/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#777486] font-semibold">April 2023 – November 2025</span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#292448] text-[#777486]">
                      Community &amp; Coaching
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F2EBDD] mb-1">
                    Team Leadership &amp; Community Building
                  </h3>
                  <div className="text-xs font-mono text-[#777486] mb-3">AIM Global / AMG</div>
                  <p className="text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed mb-4">
                    Coached team members, supported peer development, and participated in entrepreneurial networking and community initiatives. Attended an international AIM business conference in the Philippines, developing transferable skills in communication, interpersonal coaching, goal alignment, and collaborative team motivation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Team Coaching", "Interpersonal Communication", "Goal Setting", "Community Building"].map((skill) => (
                      <span key={skill} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#292448] text-[#777486]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. RESEARCH, SCIENCE AND PUBLIC HEALTH */}
        <section id="research" className="py-20 sm:py-28 bg-[#F2EBDD] text-[#171729]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#536DFE] uppercase tracking-wider mb-2 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#536DFE]" />
                Scientific Grounding
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#171729] tracking-tight">
                Science, Research &amp; Public Health
              </h2>
              <p className="text-sm sm:text-base text-[#32313B] mt-2">
                A scientific education in Microbiology that informs systematic thinking, rigorous validation, and healthcare domain empathy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Case Study of Research */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#171729]/10 shadow-sm">
                  <div className="text-xs font-mono text-[#536DFE] uppercase tracking-wider font-semibold mb-2">
                    Undergraduate Thesis · Bayero University Kano
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171729] mb-4">
                    Investigation of Antibiotic-Resistant Bacteria on Food-Handling Surfaces
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-[#32313B] leading-relaxed">
                    <p>
                      <strong>The Problem:</strong> Food-handling surfaces act as primary reservoirs for bacterial contamination and vectors for cross-transmission, presenting heightened public health risks when microbial strains demonstrate resistance to standard antibiotic treatments.
                    </p>
                    <p>
                      <strong>Methods &amp; Laboratory Work:</strong> Conducted microbiological surface swabbing, culturing, and microscopy to evaluate bacterial contamination patterns across active food-preparation points.
                    </p>
                    <p>
                      <strong>Public Health Significance:</strong> Highlighted the critical nexus of sanitation protocols, hygiene enforcement, and microbial resistance surveillance in institutional and domestic food preparation.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#171729]/10 shadow-sm">
                  <h4 className="text-sm font-bold text-[#171729] mb-2">
                    How Science Shapes My Software Engineering
                  </h4>
                  <p className="text-xs sm:text-sm text-[#32313B] leading-relaxed">
                    Microbiology instills a respect for unseen variables, systemic contamination risks, and the necessity of controlled testing. In software development, this translates into rigorous error handling, schema boundaries, and building resilient systems that anticipate real-world contamination and operational anomalies.
                  </p>
                </div>
              </div>

              {/* Right Column: Practical Placements & Community Sensitisation */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-white/80 border border-[#171729]/10 shadow-sm">
                  <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">Community Sensitisation</div>
                  <h4 className="font-semibold text-sm text-[#171729] mb-1">10 Months Food-Safety Outreach</h4>
                  <p className="text-xs text-[#777486] leading-relaxed">
                    Participated in approximately 10 months of grassroots food-safety sensitisation, educating community handlers on hand hygiene, contamination risks, and safe food storage.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/80 border border-[#171729]/10 shadow-sm">
                  <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">Industrial Training (SIWES)</div>
                  <h4 className="font-semibold text-sm text-[#171729] mb-1">Bayero University Kano (6 Months)</h4>
                  <p className="text-xs text-[#777486] leading-relaxed">
                    Six months of practical microbiological laboratory work, sterile technique, sample preparation, and analytical procedures.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/80 border border-[#171729]/10 shadow-sm">
                  <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">Industrial Placement</div>
                  <h4 className="font-semibold text-sm text-[#171729] mb-1">FMN Plc (3 Months)</h4>
                  <p className="text-xs text-[#777486] leading-relaxed">
                    Three months of structured training in laboratory operations, food quality standards, and industrial hygiene protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SPEAKING, FACILITATION AND PROFESSIONAL ENGAGEMENT */}
        <section id="speaking" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9694FF] uppercase tracking-wider mb-2 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#536DFE]" />
              Speaking &amp; Facilitation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F2EBDD] tracking-tight">
              Selected Engagements
            </h2>
            <p className="text-sm sm:text-base text-[#777486] mt-2">
              Sharing technical perspectives on emergency coordination, digital health, and youth innovation across summits and programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Featured Milestone Card */}
            <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#292448]/80 border-2 border-[#536DFE]/40 shadow-xl shadow-[#171729]/60">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#536DFE]/20 text-[#9694FF] border border-[#536DFE]/40 text-xs font-mono font-semibold">
                  International Presentation
                </span>
                <span className="text-xs font-mono text-[#777486]">Nairobi, Kenya</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F2EBDD] mb-3">
                SnakeHack Africa
              </h3>
              
              <div className="text-xs font-mono text-[#9694FF] mb-4">
                Wellcome Snakebite Innovation Prize Initiative
              </div>

              <p className="text-sm sm:text-base text-[#F2EBDD]/80 leading-relaxed mb-6">
                Presented Bite2Care, a technology-enabled approach to improving snakebite emergency coordination, sharing the project&apos;s problem framing, solution approach and relevance to healthcare access with international judges, clinicians, and innovation fellows.
              </p>

              <div className="p-4 rounded-xl bg-[#171729]/60 border border-[#292448] flex items-center justify-between gap-4">
                <div className="text-xs text-[#777486]">
                  Focus: Emergency Triage · Low-Bandwidth Workflows · Multidisciplinary Healthcare Innovation
                </div>
                <a
                  href="https://bite2-care.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#9694FF] hover:text-[#F2EBDD] transition-colors flex-shrink-0"
                >
                  <span>Explore Project</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Speaking / Panel Invitations Callout */}
            <div className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#171729] border border-[#292448] shadow-md flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#9694FF]/10 text-[#9694FF] flex items-center justify-center font-mono font-bold text-sm mb-4 border border-[#9694FF]/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#F2EBDD] mb-2">
                  Inviting Me to Speak
                </h4>
                <p className="text-xs sm:text-sm text-[#777486] leading-relaxed mb-6">
                  Available for keynote presentations, panel contributions, youth STEM workshops, and innovation summits exploring digital health, community resilience, and practical software engineering in Africa.
                </p>
              </div>

              <a
                href={`mailto:${emailAddress}?subject=Speaking%20or%20Panel%20Invitation%20-%20Fatima%20Binta%20Wada`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#536DFE]/20 text-[#9694FF] border border-[#536DFE]/40 hover:bg-[#536DFE] hover:text-white transition-all text-xs font-semibold"
              >
                <span>Send Speaker Inquiry</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 7. TECHNICAL STACK: GROUNDED & PRACTICAL */}
        <section id="stack" className="py-20 sm:py-28 bg-[#292448]/30 border-y border-[#292448]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9694FF] uppercase tracking-wider mb-2 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#536DFE]" />
                Technical Competencies
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F2EBDD] tracking-tight">
                Technical Stack
              </h2>
              <p className="text-sm sm:text-base text-[#777486] mt-2">
                Organized by practical domain, prioritizing operational stability, clean schemas, and rapid iteration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Group 1: Frontend */}
              <div className="p-6 rounded-2xl bg-[#171729] border border-[#292448] shadow-sm hover:border-[#536DFE]/50 transition-colors">
                <div className="text-xs font-mono text-[#536DFE] font-semibold mb-2">01 · Application Layer</div>
                <h3 className="text-base font-bold text-[#F2EBDD] mb-4">Frontend &amp; UI</h3>
                <ul className="space-y-2.5 text-xs text-[#777486]">
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Next.js</span>
                    <span className="font-mono text-[10px] text-[#9694FF]">App Router / SSR</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">React</span>
                    <span className="font-mono text-[10px]">Component Systems</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">TypeScript</span>
                    <span className="font-mono text-[10px] text-[#536DFE]">Strict Typings</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Tailwind CSS</span>
                    <span className="font-mono text-[10px]">Responsive Design</span>
                  </li>
                </ul>
              </div>

              {/* Group 2: Backend & Security */}
              <div className="p-6 rounded-2xl bg-[#171729] border border-[#292448] shadow-sm hover:border-[#536DFE]/50 transition-colors">
                <div className="text-xs font-mono text-[#536DFE] font-semibold mb-2">02 · Data &amp; Security</div>
                <h3 className="text-base font-bold text-[#F2EBDD] mb-4">Backend &amp; DB</h3>
                <ul className="space-y-2.5 text-xs text-[#777486]">
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Supabase</span>
                    <span className="font-mono text-[10px] text-[#9694FF]">Backend-as-a-Service</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">PostgreSQL</span>
                    <span className="font-mono text-[10px]">Relational Schemas</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">REST APIs</span>
                    <span className="font-mono text-[10px]">Endpoint Design</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Row Level Security</span>
                    <span className="font-mono text-[10px] text-[#536DFE]">Granular Access</span>
                  </li>
                </ul>
              </div>

              {/* Group 3: Integrations & Workflows */}
              <div className="p-6 rounded-2xl bg-[#171729] border border-[#292448] shadow-sm hover:border-[#536DFE]/50 transition-colors">
                <div className="text-xs font-mono text-[#536DFE] font-semibold mb-2">03 · Workflows</div>
                <h3 className="text-base font-bold text-[#F2EBDD] mb-4">Integrations</h3>
                <ul className="space-y-2.5 text-xs text-[#777486]">
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Stripe</span>
                    <span className="font-mono text-[10px] text-[#9694FF]">Payment Flows</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Resend</span>
                    <span className="font-mono text-[10px]">Transactional Email</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">SMS &amp; WhatsApp</span>
                    <span className="font-mono text-[10px] text-[#536DFE]">Alert Fallbacks</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Webhooks</span>
                    <span className="font-mono text-[10px]">Event Automation</span>
                  </li>
                </ul>
              </div>

              {/* Group 4: Deployment & Collaboration */}
              <div className="p-6 rounded-2xl bg-[#171729] border border-[#292448] shadow-sm hover:border-[#536DFE]/50 transition-colors">
                <div className="text-xs font-mono text-[#536DFE] font-semibold mb-2">04 · Infrastructure</div>
                <h3 className="text-base font-bold text-[#F2EBDD] mb-4">Deployment</h3>
                <ul className="space-y-2.5 text-xs text-[#777486]">
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Git &amp; GitHub</span>
                    <span className="font-mono text-[10px] text-[#9694FF]">Version Control</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Vercel</span>
                    <span className="font-mono text-[10px]">Edge CI/CD</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Semantic HTML</span>
                    <span className="font-mono text-[10px] text-[#536DFE]">a11y &amp; SEO</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[#F2EBDD] font-medium">Turbopack</span>
                    <span className="font-mono text-[10px]">Optimized Builds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. ENGINEERING PHILOSOPHY */}
        <section id="philosophy" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9694FF] uppercase tracking-wider mb-2 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#536DFE]" />
              Core Engineering Principle
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F2EBDD] tracking-tight leading-tight">
              Technology should work outside the perfect demo.
            </h2>
            <p className="text-sm sm:text-base text-[#777486] mt-3 leading-relaxed">
              In real-world settings across Nigeria and emerging communities, digital systems must function under device constraints, spotty network connectivity, and fragmented user routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#292448]/60 border border-[#292448]">
              <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">01</div>
              <h3 className="text-sm font-bold text-[#F2EBDD] mb-1">Low-Bandwidth Resiliency</h3>
              <p className="text-xs text-[#777486] leading-relaxed">
                Minimizing payload footprints and prioritizing lightweight client bundles so essential workflows load across 2G/3G connections.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#292448]/60 border border-[#292448]">
              <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">02</div>
              <h3 className="text-sm font-bold text-[#F2EBDD] mb-1">Human-Centered Reality</h3>
              <p className="text-xs text-[#777486] leading-relaxed">
                Designing software around the actual physical habits of frontline responders, operators, and community users, rather than software manuals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#292448]/60 border border-[#292448]">
              <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">03</div>
              <h3 className="text-sm font-bold text-[#F2EBDD] mb-1">Asynchronous Failover</h3>
              <p className="text-xs text-[#777486] leading-relaxed">
                Utilizing multi-channel notification patterns across Email, SMS, and WhatsApp to ensure time-critical messages are delivered.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#292448]/60 border border-[#292448]">
              <div className="text-xs font-mono text-[#536DFE] font-semibold mb-1">04</div>
              <h3 className="text-sm font-bold text-[#F2EBDD] mb-1">Operational Simplicity</h3>
              <p className="text-xs text-[#777486] leading-relaxed">
                Solving problems by removing friction rather than inventing gratuitous technical complexity that creates operational debt.
              </p>
            </div>
          </div>
        </section>

        {/* 9. EDUCATION AND RECOGNITION */}
        <section className="py-16 bg-[#171729] border-t border-[#292448]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-[#292448]/50 border border-[#292448]">
                <div className="text-xs font-mono text-[#9694FF] uppercase tracking-wider mb-2 font-semibold">
                  Academic Background
                </div>
                <h3 className="text-xl font-bold text-[#F2EBDD] mb-1">
                  BSc in Microbiology
                </h3>
                <div className="text-xs font-mono text-[#536DFE] mb-2">
                  Bayero University Kano
                </div>
                <p className="text-xs text-[#777486] leading-relaxed">
                  Rigorous scientific study covering microbial physiology, virology, immunology, and research methodology.
                </p>
              </div>

              {/* Recognition Card */}
              <div className="p-6 rounded-2xl bg-[#292448]/50 border border-[#292448]">
                <div className="text-xs font-mono text-[#F2B84B] uppercase tracking-wider mb-2 font-semibold">
                  Honors &amp; Recognition
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-[#F2EBDD]">Face of MCB Award of Excellence</h3>
                    <div className="text-xs text-[#777486]">Bayero University Kano Departmental Recognition</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F2EBDD]">Queen of Life Sciences Award of Merit</h3>
                    <div className="text-xs text-[#777486]">Faculty of Life Sciences Leadership &amp; Merit Recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CONTACT / COLLABORATION */}
        <section id="contact" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#292448] to-[#171729] border-2 border-[#536DFE]/40 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-[#171729]">
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#536DFE]/15 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9694FF] uppercase tracking-wider mb-3 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#536DFE]" />
                Get in Touch
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2EBDD] tracking-tight mb-4">
                Let&apos;s build useful things.
              </h2>

              <p className="text-base sm:text-lg text-[#F2EBDD]/90 leading-relaxed mb-4">
                I am actively open to engineering roles, technical collaborations, and fellowship programs focused on building scalable technology for high-impact challenges.
              </p>

              <p className="text-xs sm:text-sm text-[#777486] leading-relaxed mb-8">
                Whether you are organizing an innovation summit, seeking a product and technical lead for a healthtech initiative, or evaluating fellowship candidates, I would welcome the conversation.
              </p>

              {/* Direct Email Display & Copy Action */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#171729]/80 border border-[#536DFE]/30 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#536DFE]/20 text-[#9694FF]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#777486] font-semibold">Direct Professional Email</div>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm sm:text-base font-semibold text-[#F2EBDD] hover:text-[#9694FF] transition-colors font-mono"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#292448] hover:bg-[#342f5c] text-xs font-semibold text-[#F2EBDD] border border-[#536DFE]/30 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <svg className="w-4 h-4 text-[#9694FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#9694FF]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 text-[#777486]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#536DFE] text-white font-semibold text-xs hover:bg-[#4357dd] transition-all shadow-md shadow-[#536DFE]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
                  >
                    <span>Send Message</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Links & Verified Channels */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/fatimawada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171729] border border-[#292448] text-[#F2EBDD] text-xs font-semibold hover:border-[#536DFE] hover:text-[#9694FF] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
                >
                  <svg className="w-4 h-4 text-[#777486]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub (@fatimawada)</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/fatima-wada-0b43ab399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171729] border border-[#292448] text-[#F2EBDD] text-xs font-semibold hover:border-[#536DFE] hover:text-[#9694FF] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536DFE]"
                >
                  <svg className="w-4 h-4 text-[#536DFE]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="border-t border-[#292448] bg-[#171729] py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#292448]">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#536DFE] to-[#9694FF] flex items-center justify-center font-mono font-bold text-xs text-white">
                  FBW
                </div>
                <span className="font-semibold text-[#F2EBDD] tracking-tight">Fatima Binta Wada</span>
              </div>
              <div className="text-xs text-[#777486] font-mono mt-1">
                Technology Innovator | Full-Stack Developer | Product &amp; Technical Lead
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#777486] font-medium">
              <a href="#about" className="hover:text-[#F2EBDD] transition-colors">About</a>
              <a href="#projects" className="hover:text-[#F2EBDD] transition-colors">Projects</a>
              <a href="#experience" className="hover:text-[#F2EBDD] transition-colors">Experience</a>
              <a href="#research" className="hover:text-[#F2EBDD] transition-colors">Research</a>
              <a href="#speaking" className="hover:text-[#F2EBDD] transition-colors">Speaking</a>
              <a href="#stack" className="hover:text-[#F2EBDD] transition-colors">Stack</a>
              <a href="#contact" className="hover:text-[#F2EBDD] transition-colors">Contact</a>
              <span className="text-[#292448] hidden sm:inline">|</span>
              <a
                href="https://github.com/fatimawada"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#9694FF] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fatima-wada-0b43ab399"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#9694FF] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#777486]">
            <div>
              &copy; {new Date().getFullYear()} Fatima Binta Wada. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F2EBDD]/70 font-medium italic">
                Building practical technology for people, communities and real-world challenges.
              </span>
              <a
                href="#"
                className="ml-4 inline-flex items-center gap-1 text-[#9694FF] hover:text-[#F2EBDD] font-mono transition-colors"
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
