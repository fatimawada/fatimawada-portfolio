"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const expertiseList = [
  {
    num: "01",
    title: "Transactional Trust & Escrow",
    desc: "Architecting multi-party escrow systems, dispute mediation logic, and automated fraud guards for informal social commerce.",
    rotation: "-rotate-2",
  },
  {
    num: "02",
    title: "Full-Stack Web & API Engines",
    desc: "Building performant Next.js, React, and Node.js microservices with PostgreSQL, Supabase, and resilient payment gateways.",
    rotation: "rotate-2",
  },
  {
    num: "03",
    title: "Climate-Finance & MRV Systems",
    desc: "Designing verifiable measurement, reporting, and automated milestone-disbursement pipelines for clean technology.",
    rotation: "-rotate-1",
  },
  {
    num: "04",
    title: "Digital Health & Emergency Triage",
    desc: "Low-bandwidth, offline-resilient healthcare routing algorithms connecting remote patients to anti-venom referral hubs.",
    rotation: "rotate-3",
  },
];

export default function ExpertiseSection() {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section id="expertise" className="py-24 sm:py-36 bg-white text-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Pill, Bold Heading with Hand-Drawn Arrow, Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Small pill-shaped section label */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-[#E10600] text-xs font-bold uppercase tracking-wider border border-gray-200">
              My Expertise
            </span>

            {/* Large bold heading */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#111111] mt-5 leading-[1.12]">
              Building Modern Digital Solutions with Code &amp; AI
            </h2>

            {/* Hand-Drawn Curved Red Underline Vector */}
            <svg
              className="w-48 sm:w-64 h-3 text-[#E10600] mt-2 mb-4"
              viewBox="0 0 260 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9C60 2.5 150 2 257 8"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
              Combining full-stack software development, transactional security, and cloud technologies to create scalable and impactful digital systems.
            </p>

            {/* Hand-Drawn Dashed Arrow pointing to the cards */}
            <div className="mt-8 hidden lg:flex items-center gap-3 text-[#E10600]">
              <span className="text-xs font-bold uppercase tracking-wider">Explore Capabilities</span>
              <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className="text-[#E10600]">
                <path
                  d="M10 20 C 40 10, 70 30, 90 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <path
                  d="M85 14 L 95 20 L 85 26"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: Cards scattered on a diagonal path joined by a dotted line */}
          <div className="lg:col-span-7 relative">
            
            {/* Dotted Connection Path (Background) */}
            <div className="absolute inset-y-12 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#E10600]/30 hidden sm:block pointer-events-none" />

            {/* Grid of Red Rounded Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {expertiseList.map((item, index) => {
                const isActive = activeCard === index;

                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    onMouseEnter={() => setActiveCard(index)}
                    className={`p-7 sm:p-8 rounded-3xl bg-[#E10600] text-white transition-all duration-300 cursor-pointer ${
                      item.rotation
                    } ${
                      isActive
                        ? "shadow-[0_20px_40px_rgba(225,6,0,0.35)] scale-[1.03] ring-4 ring-red-300"
                        : "hover:scale-[1.02] shadow-xl opacity-95"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-4xl sm:text-5xl font-black text-white/40">
                        {item.num}
                      </span>
                      <span className="w-3 h-3 rounded-full bg-white/70" />
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl text-white tracking-tight mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/90 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Elegant Italic Serif Caption at bottom right */}
            <div className="mt-8 text-right">
              <span className="font-serif-italic text-sm sm:text-base text-gray-500">
                &ldquo;Turning ideas into reality&rdquo;
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
