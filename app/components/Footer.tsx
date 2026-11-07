import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0D13] text-white pt-20 pb-14 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Statement Brand Text (Exactly like sushmita. in reference) */}
        <div className="pb-12 border-b border-zinc-800/80">
          <span className="text-[14vw] font-black lowercase tracking-tighter leading-none text-white select-none block">
            fatima<span className="text-[#CE1126]">.</span>
          </span>
        </div>

        {/* Footer Nav & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-zinc-400">
          <div>
            &copy; {currentYear} Fatima Binta Wada. All rights reserved. · Technology Entrepreneur &amp; Founder
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#credentials" className="hover:text-white transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <span className="text-zinc-700">|</span>
            <a
              href="https://www.linkedin.com/in/fatima-wada-0b43ab399"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CE1126] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/fatimawada"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
