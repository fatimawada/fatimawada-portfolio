import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#08080A]/80 py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg glass-card flex items-center justify-center font-mono font-bold text-xs text-[#34D399] border border-white/10">
                FBW
              </div>
              <span className="font-semibold text-base text-[#F4F4F5] tracking-tight">Fatima Binta Wada</span>
            </div>
            <div className="text-xs text-zinc-400 font-mono mt-1">
              Technology Entrepreneur | Founder | Product &amp; Technology Leader
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-zinc-400 font-medium">
            <a href="#about" className="hover:text-[#F4F4F5] transition-colors">About</a>
            <a href="#ventures" className="hover:text-[#34D399] transition-colors">Ventures</a>
            <a href="#projects" className="hover:text-[#F4F4F5] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#F4F4F5] transition-colors">Experience</a>
            <a href="#research" className="hover:text-[#F4F4F5] transition-colors">Research</a>
            <a href="#speaking" className="hover:text-[#F4F4F5] transition-colors">Speaking</a>
            <a href="#stack" className="hover:text-[#F4F4F5] transition-colors">Stack</a>
            <a href="#contact" className="hover:text-[#34D399] transition-colors">Contact</a>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <a
              href="https://www.linkedin.com/in/fatima-wada-0b43ab399"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/fatimawada"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F4F5] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-400">
          <div>
            &copy; {currentYear} Fatima Binta Wada. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#F4F4F5]/75 italic hidden md:inline">
              Building technology and infrastructure for a more inclusive and sustainable future.
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[#34D399] hover:text-[#F4F4F5] font-mono transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
