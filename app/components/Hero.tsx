import React from "react";
import InteractiveCharacterHero from "./InteractiveCharacterHero";

export default function Hero() {
  const emailAddress = "hello@fatimawada.com";

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Positioning & Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono font-medium text-[#34D399] mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="tracking-wider">TECHNOLOGY ENTREPRENEUR · FOUNDER · PRODUCT LEADER</span>
          </div>

          {/* Name & Primary Role */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F5] mb-3 leading-[1.1]">
            Fatima Binta Wada
          </h1>

          <div className="text-lg sm:text-xl font-semibold text-[#34D399] font-mono mb-6 tracking-tight">
            Technology Entrepreneur | Founder | Product &amp; Technology Leader
          </div>

          {/* Hero Statement */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F4F4F5] tracking-tight mb-6 leading-snug">
            &ldquo;Building technology and infrastructure for a more inclusive and sustainable future.&rdquo;
          </h2>

          {/* Supporting Introduction */}
          <div className="space-y-4 text-base sm:text-lg text-[#F4F4F5]/85 leading-relaxed mb-6 max-w-2xl font-normal">
            <p>
              I am a Nigerian technology entrepreneur and product builder working at the intersection of financial infrastructure, climate innovation, digital health and emerging technology.
            </p>
            <p>
              My work involves identifying systemic problems, developing technology-driven solutions, building early-stage ventures and leading multidisciplinary initiatives. From developing trust infrastructure for digital commerce to exploring climate finance systems and improving healthcare coordination, I am interested in building solutions that extend beyond technology itself.
            </p>
            <p>
              I combine technical execution, scientific thinking, entrepreneurial leadership and a strong interest in sustainable development to build practical solutions for emerging markets and global challenges.
            </p>
          </div>

          {/* Location & Global Scope */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-400 font-mono mb-8 glass-card px-4 py-2 rounded-xl border border-white/10">
            <svg className="w-4 h-4 text-[#10B981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium text-[#F4F4F5]">Nigeria</span>
            <span className="text-zinc-600">·</span>
            <span>Building for global impact</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#ventures"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#10B981] text-[#08080A] font-bold text-sm sm:text-base hover:bg-[#34D399] active:scale-[0.99] transition-all shadow-lg shadow-[#10B981]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
            >
              <span>Explore My Ventures</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card text-[#F4F4F5] border border-white/15 font-medium text-sm sm:text-base hover:border-white/30 hover:bg-white/[0.06] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
            >
              <span>View My Work</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-zinc-400 hover:text-[#F4F4F5] glass-card border border-white/5 hover:border-white/20 transition-all text-sm font-medium"
            >
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          {/* Verified Channels Strip */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/10 w-full text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">Connect:</span>
            <a
              href="https://www.linkedin.com/in/fatima-wada-0b43ab399"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#34D399] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href="https://github.com/fatimawada"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#34D399] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href={`mailto:${emailAddress}`}
              className="hover:text-[#34D399] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 text-[#E07A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Character Hero */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <InteractiveCharacterHero />
        </div>
      </div>

      {/* Cross-Sector Focus Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10">
        <div className="p-5 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/40 transition-colors group">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            <h3 className="text-xs font-mono font-semibold text-[#F4F4F5] uppercase tracking-wider">Financial Infrastructure</h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Building trust and payment workflows that make informal African social commerce accountable.
          </p>
        </div>

        <div className="p-5 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#0D9488]/40 transition-colors group">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#0D9488]" />
            <h3 className="text-xs font-mono font-semibold text-[#F4F4F5] uppercase tracking-wider">Climate Finance</h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Connecting localized climate intelligence with resilience financing for vulnerable communities.
          </p>
        </div>

        <div className="p-5 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#E11D48]/40 transition-colors group">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#E11D48]" />
            <h3 className="text-xs font-mono font-semibold text-[#F4F4F5] uppercase tracking-wider">Digital Health</h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Technology-enabled emergency referral chains and antivenom verification for snakebite care.
          </p>
        </div>

        <div className="p-5 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#E07A5F]/40 transition-colors group">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#E07A5F]" />
            <h3 className="text-xs font-mono font-semibold text-[#F4F4F5] uppercase tracking-wider">Scientific Rigor</h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Microbiological laboratory investigation informing empirical systems thinking and software architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
