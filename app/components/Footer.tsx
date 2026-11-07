"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0D13] text-white pt-16 pb-12 overflow-hidden border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Credits Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-gray-900 text-sm text-gray-400">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#ventures" className="hover:text-white transition-colors">Ventures</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience &amp; Leadership</Link>
            <Link href="#research" className="hover:text-white transition-colors">Research</Link>
            <Link href="#recognition" className="hover:text-white transition-colors">Recognition</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-gray-500 font-medium shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
              📍 Abuja, Nigeria · Global Availability
            </span>
            <span>© {new Date().getFullYear()} Fatima Binta Wada. All rights reserved.</span>
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
