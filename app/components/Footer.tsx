"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0D13] text-white pt-16 pb-12 overflow-hidden border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Credits Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-gray-900 text-sm text-gray-400">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#expertise" className="hover:text-white transition-colors">Expertise</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#certifications" className="hover:text-white transition-colors">Certifications</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()} Fatima Binta Wada. All rights reserved.
          </div>
        </div>

        {/* Giant Screen-Width Wordmark: fatima. */}
        <div className="pt-12 sm:pt-16 select-none overflow-hidden text-center">
          <span className="font-heading block text-[19vw] font-black tracking-tighter text-white/95 leading-none lowercase pointer-events-none transition-all">
            fatima<span className="text-[#E10600]">.</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
