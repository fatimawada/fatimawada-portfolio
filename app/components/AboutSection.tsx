"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#E10600] text-white py-20 sm:py-28 overflow-hidden">
      
      {/* Decorative red star / sparkle decoration at bottom left */}
      <div className="absolute bottom-16 left-8 sm:left-16 z-20 pointer-events-none opacity-90 animate-pulse">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-lg">
          <path
            d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Tilted Hanging ID Badge Card */}
          <motion.div
            initial={{ opacity: 0, rotate: -10, y: 30 }}
            whileInView={{ opacity: 1, rotate: -4, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-72 sm:w-80 group">
              
              {/* Lanyard Clip and Strap at top */}
              <div className="flex flex-col items-center mb--2 relative z-20">
                <div className="w-1.5 h-12 bg-gray-900 mx-auto" />
                <div className="w-8 h-4 rounded-sm bg-gray-800 border border-gray-600 shadow-md" />
                <div className="w-4 h-3 rounded-b-md bg-gray-900 border-x border-b border-gray-700" />
              </div>

              {/* ID Badge Card */}
              <div className="relative rounded-3xl bg-gray-950 p-4 border-4 border-gray-900 shadow-2xl transition-transform duration-500 group-hover:rotate-0">
                
                {/* Lanyard slot hole at top of badge */}
                <div className="w-12 h-2 rounded-full bg-gray-800 mx-auto mb-3 border border-gray-700" />

                {/* Photo container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
                  <Image
                    src="/images/fatima_headset_portrait.jpg"
                    alt="Fatima Binta Wada ID Badge"
                    fill
                    className="object-cover object-top"
                    sizes="320px"
                  />
                </div>

                {/* Badge Bottom Details */}
                <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="block font-bold text-white text-sm">Fatima B. Wada</span>
                    <span className="text-gray-400 text-[11px]">Founder &amp; Tech Lead</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#E10600] text-white font-mono font-bold text-[10px]">
                    VERIFIED
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: "Hello!" Headline, Intro, & Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            <h2 className="font-heading text-5xl sm:text-7xl font-extrabold text-white tracking-tight">
              Hello!
            </h2>

            <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-xl font-normal">
              Hi, my name is{" "}
              <span className="inline-block px-3 py-1 mx-1 rounded-lg bg-white text-[#E10600] font-bold shadow-sm">
                Fatima Binta Wada
              </span>
              , a passionate technology entrepreneur and full-stack software engineer dedicated to crafting clean, functional, and highly scalable web applications and decentralized trust infrastructure.
            </p>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
              From building multi-party escrow architectures for Nigerian informal vendors to prototyping climate-finance MRV pipelines, I transform complex real-world workflows into reliable code.
            </p>

            {/* Floating Tech Badges */}
            <div className="flex items-center gap-4 pt-4">
              {/* React Tech Badge */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-md hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="2" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
                </svg>
                <span className="text-sm font-bold tracking-wide">React / Next.js</span>
              </div>

              {/* Node / TypeScript Badge */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-md hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 16.5l-7-3.85V9.45l7 3.85v5.2zm2 0v-5.2l7-3.85v5.2l-7 3.85zM12 4.15l6.5 3.55-6.5 3.55-6.5-3.55L12 4.15z" />
                </svg>
                <span className="text-sm font-bold tracking-wide">TypeScript &amp; Node</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Curved White Wave Transition at Bottom */}
      <div className="absolute -bottom-1 inset-x-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-14 sm:h-20 text-white fill-current"
        >
          <path d="M0,0 C300,90 600,-20 900,70 C1050,115 1150,40 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </section>
  );
}
