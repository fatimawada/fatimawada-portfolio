"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const venturesList = [
  {
    num: "01",
    title: "Relyvora",
    role: "Founder & CEO / Product & Technology Lead",
    desc: "Building trust and payment infrastructure for social commerce in Africa. Relyvora addresses the lack of transaction protection in informal digital commerce by providing secure payment holding, verified delivery workflows, and dispute mediation. Supported by payment infrastructure partner Anchor.",
    links: [
      { label: "relyvora.com", href: "https://relyvora.com" },
      { label: "ng.relyvora.com", href: "https://ng.relyvora.com" },
    ],
    rotation: "-rotate-2",
    isHero: true,
  },
  {
    num: "02",
    title: "PulseClime",
    role: "Founder & Product Architect",
    desc: "A climate-finance infrastructure initiative. PulseClime explores how climate intelligence, localized environmental data, and financial mechanisms can work together to improve resilience and unlock accessible climate finance for vulnerable communities.",
    links: [],
    rotation: "rotate-2",
    isHero: false,
  },
  {
    num: "03",
    title: "ChaseFree",
    role: "Founder & Full-Stack Product Builder",
    desc: "An AI-enabled accounts receivable and payment recovery SaaS platform automating overdue invoice workflows and improving cash-flow visibility for service businesses.",
    links: [],
    rotation: "-rotate-1",
    isHero: false,
  },
  {
    num: "04",
    title: "Relyvora Foundation",
    role: "Social Impact Arm",
    desc: "The social-impact arm of the Relyvora vision, focused on expanding digital inclusion, economic participation, and opportunities for underserved communities.",
    links: [],
    rotation: "rotate-3",
    isHero: false,
  },
];

export default function VenturesSection() {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section id="ventures" className="py-24 sm:py-36 bg-white text-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Eyebrow, Header with Hand-Drawn Underline, Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Small pill-shaped section label */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-[#E10600] text-xs font-bold uppercase tracking-wider border border-gray-200">
              Venture Ecosystem
            </span>

            {/* Large bold heading */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#111111] mt-5 leading-[1.12]">
              Featured Ventures
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
              Building scalable infrastructure, payment protocols, and digital enterprises designed to eliminate systemic friction across emerging markets.
            </p>

            {/* Hand-Drawn Dashed Arrow pointing to the cards */}
            <div className="mt-8 hidden lg:flex items-center gap-3 text-[#E10600]">
              <span className="text-xs font-bold uppercase tracking-wider">Explore Ventures</span>
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
              {venturesList.map((item, index) => {
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
                      item.isHero ? "sm:col-span-2 shadow-2xl" : ""
                    } ${
                      isActive
                        ? "shadow-[0_20px_45px_rgba(225,6,0,0.38)] scale-[1.02] ring-4 ring-red-300"
                        : "hover:scale-[1.01] shadow-xl opacity-95"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-heading text-4xl sm:text-5xl font-black text-white/40">
                        {item.num}
                      </span>
                      <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/20 text-white">
                        {item.role}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-tight mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    {item.links.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center gap-3">
                        {item.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#E10600] text-xs font-bold hover:bg-white/90 transition-colors"
                          >
                            <span>{link.label}</span>
                            <span>↗</span>
                          </a>
                        ))}
                      </div>
                    )}
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
