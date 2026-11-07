"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-20 pb-12 overflow-hidden border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Navigation / Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-16 border-b border-gray-800 text-sm text-gray-400">
          <div className="flex items-center gap-6">
            <Link href="#home" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#expertise" className="hover:text-white transition-colors">
              Expertise
            </Link>
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} Fatima Binta Wada. All rights reserved.
          </div>
        </div>

        {/* Massive Screen-Width Typography: fatima. */}
        <div className="pt-12 sm:pt-16 select-none overflow-hidden text-center">
          <span className="block text-[18vw] sm:text-[19vw] font-black tracking-tighter text-white/90 leading-none lowercase pointer-events-none transition-all">
            fatima<span className="text-[#E63946]">.</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
