"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Ventures", href: "#ventures", badge: "Primary" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Speaking", href: "#speaking" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#08080A]/80 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#"
          className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-lg py-1"
        >
          <div className="h-10 w-10 rounded-xl bg-[#0E0E14] flex items-center justify-center font-mono font-bold text-xs text-[#F4F4F5] shadow-md shadow-black/60 group-hover:border-[#10B981]/60 transition-all border border-white/10">
            <span className="tracking-wider text-[#34D399]">FBW</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base sm:text-lg tracking-tight text-[#F4F4F5] group-hover:text-[#34D399] transition-colors">
              Fatima Binta Wada
            </span>
            <span className="text-[11px] text-[#A1A1AA] font-mono tracking-tight hidden sm:block">
              Technology Entrepreneur &amp; Founder
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#A1A1AA]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 rounded-lg hover:text-[#F4F4F5] hover:bg-white/5 transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-4 py-2 rounded-xl bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/40 hover:bg-[#10B981] hover:text-[#08080A] hover:border-[#10B981] transition-all font-semibold text-xs tracking-wide shadow-sm shadow-[#10B981]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#08080A]/95 px-5 pt-3 pb-6 space-y-2 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/5"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-3 px-4 py-3 rounded-xl bg-[#10B981] text-[#08080A] font-semibold text-sm shadow-md"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
