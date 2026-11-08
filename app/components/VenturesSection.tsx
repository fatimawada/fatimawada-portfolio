"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const venturesList = [
  {
    num: "01",
    title: "Relyvora",
    category: "FINANCIAL INFRASTRUCTURE · SOCIAL COMMERCE",
    role: "Founder & CEO | Product & Technology Lead",
    desc: "Relyvora is a Nigerian technology company building trust and payment infrastructure for social commerce. The company addresses the lack of transaction protection experienced by buyers and independent vendors who conduct business through platforms such as WhatsApp and Instagram. Relyvora is developing a protected transaction experience in which buyers make payments into a secure holding workflow, while vendors fulfil orders and confirm delivery through a unique release code. Verified delivery triggers the payment release process through its payment infrastructure arrangements. Relyvora is working with Anchor Technologies Limited as an infrastructure partner supporting its payment and compliance arrangements. My responsibilities include company formation, business strategy, product architecture, technical development, payment workflow design and partnership coordination. The company's initial market is Nigeria, with expansion plans covering Ghana, Kenya and South Africa before broader African expansion.",
    links: [
      { label: "relyvora.com", href: "https://relyvora.com" },
      { label: "ng.relyvora.com", href: "https://ng.relyvora.com" },
      { label: "relyvora.vercel.app", href: "https://relyvora.vercel.app" },
    ],
    rotation: "-rotate-2",
    isHero: true,
  },
  {
    num: "02",
    title: "PulseClime",
    category: "CLIMATE FINANCE · FINANCIAL INFRASTRUCTURE",
    role: "Founder & Product Architect",
    desc: "PulseClime is an emerging climate-finance infrastructure initiative exploring how environmental intelligence, measurable climate outcomes and financial mechanisms can be connected to improve access to climate capital. The initiative addresses a structural challenge in climate finance: the difficulty of translating local climate and environmental needs into measurable, verifiable activities that financing institutions can assess and support. I defined the product direction and developed its MVP, exploring how environmental data, project monitoring, milestone verification and climate-finance workflows could work together. My work includes concept development, product architecture, technical implementation and the exploration of monitoring, reporting and verification mechanisms for climate-related projects.",
    links: [],
    rotation: "rotate-2",
    isHero: false,
  },
  {
    num: "03",
    title: "ChaseFree",
    category: "SAAS · BUSINESS AUTOMATION",
    role: "Founder & Product Builder",
    desc: "ChaseFree is a founder-led SaaS product designed to help service businesses and agencies reduce the administrative burden of collecting overdue payments. The platform focuses on automating accounts receivable follow-ups, organizing invoice reminders and improving visibility into outstanding payments. My work includes product development, application architecture, database design and the integration of payment and communication workflows.",
    links: [],
    rotation: "-rotate-1",
    isHero: false,
  },
  {
    num: "04",
    title: "Relyvora Foundation",
    category: "SOCIAL IMPACT · DIGITAL INCLUSION",
    role: "Social Impact Vision",
    desc: "The Relyvora Foundation represents the social-impact dimension of the broader Relyvora vision. Its intended focus is expanding digital inclusion, economic participation and access to opportunities for underserved communities.",
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
                      <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/20 text-white">
                        {item.role}
                      </span>
                    </div>

                    <span className="block text-[10px] font-bold tracking-widest uppercase text-white/75 mb-1">
                      {item.category}
                    </span>

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
