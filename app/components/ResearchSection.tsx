"use client";

import React from "react";
import { motion } from "framer-motion";

const recognitions = [
  {
    title: "Wellcome Trust SnakeHack Africa Finalist",
    detail: "Global recognition for emergency healthcare innovation & low-bandwidth clinical triage routing.",
    year: "2024",
  },
  {
    title: "Harvard CS50: Computer Science",
    detail: "Algorithms, memory management, and systems programming (C, Python, SQL, Web).",
    year: "Verified",
  },
  {
    title: "Stanford Online: Computer Science 101",
    detail: "Foundational computing logic, hardware architecture, and software design principles.",
    year: "Verified",
  },
  {
    title: "ALX Software Engineering Fellowship",
    detail: "Rigorous full-stack engineering, systems programming, and cross-cultural leadership.",
    year: "Graduate",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 sm:py-36 bg-[#F9FAFB] text-[#111111] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-[#E10600] text-xs font-bold uppercase tracking-wider border border-gray-200 shadow-2xs">
            First-Principles Methodology
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#111111] mt-4 leading-tight">
            Scientific Foundation &amp;{" "}
            <span className="relative inline-block">
              Research
              <svg
                className="absolute -bottom-2.5 left-0 w-full h-3 text-[#E10600]"
                viewBox="0 0 160 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9C40 2.5 100 2 157 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            My BSc in Microbiology (Bayero University Kano) forms the foundation of my evidence-based approach to technology, systems analysis, and validation.
          </p>
        </motion.div>

        {/* Scientific Research Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Card 1: Key Research Investigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#E10600]">
                UNDERGRADUATE THESIS &amp; LAB RESEARCH
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#111111] mt-3 leading-snug">
                Investigation of Antibiotic-Resistant Bacteria on Food-Handling Surfaces
              </h3>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Conducted rigorous microbiological sampling, selective culturing, biochemical characterization, and antimicrobial susceptibility testing, evaluating cross-contamination risks and critical public health implications.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
              {["Microbiological Culturing", "Data Validation", "Public Health", "Systemic Analysis"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-gray-50 text-xs font-semibold text-gray-700 border border-gray-200">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Industrial Laboratory Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#E10600]">
                APPLIED LABORATORY &amp; FIELD EXPERIENCE
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#111111] mt-3 leading-snug">
                Laboratory Training &amp; Industrial Placement at FMN Plc
              </h3>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Completed 6-month SIWES laboratory training and industrial quality assurance placement at Flour Mills of Nigeria (FMN Plc), alongside leading grassroots community food-safety sensitization programs.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
              {["Quality Assurance (QA)", "FMN Plc Placement", "SIWES Lab", "Field Sensitization"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-gray-50 text-xs font-semibold text-gray-700 border border-gray-200">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Speaking & Recognition Section Anchor */}
        <div id="recognition" className="pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-[#E10600] text-xs font-bold uppercase tracking-wider border border-gray-200">
              Honors &amp; Global Fellowships
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl text-[#111111] mt-3">
              Speaking &amp; Recognition
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((rec) => (
              <div
                key={rec.title}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#E10600]/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#E10600] uppercase tracking-wider">
                    {rec.year}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-[#111111] mt-2">
                    {rec.title}
                  </h4>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed font-normal">
                    {rec.detail}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                  <span>Credential Record</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
