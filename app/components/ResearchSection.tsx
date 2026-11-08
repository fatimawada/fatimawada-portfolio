"use client";

import React from "react";
import { motion } from "framer-motion";

const recognitions = [
  {
    title: "SnakeHack Africa Presentation",
    organization: "Wellcome Snakebite Innovation Initiative",
    location: "Nairobi, Kenya",
    detail: "Presented Bite2Care, exploring technology-enabled emergency coordination and healthcare facility readiness for rural snakebite incidents.",
    year: "International Engagement",
  },
  {
    title: "Face of MCB Award of Excellence",
    organization: "Department of Microbiology, BUK",
    location: "Kano, Nigeria",
    detail: "Award of excellence recognized by the Department of Microbiology, Bayero University Kano for leadership and academic contribution.",
    year: "Departmental Award",
  },
  {
    title: "Queen of Life Sciences Award of Merit",
    organization: "Faculty of Life Sciences, BUK",
    location: "Kano, Nigeria",
    detail: "Award of merit awarded in recognition of academic dedication, leadership, and student engagement across the life sciences faculty.",
    year: "Faculty Honor",
  },
];

const scientificExperiences = [
  {
    title: "SIWES Laboratory Training",
    institution: "Bayero University Kano",
    duration: "Six-month training",
    detail: "Practical laboratory training in clinical microbiological procedures, media preparation, aseptic techniques, and biological specimen analysis.",
  },
  {
    title: "Industrial Quality Placement",
    institution: "Flour Mills of Nigeria (FMN Plc)",
    duration: "Three-month placement",
    detail: "Industrial placement evaluating standard operational quality control, grain laboratory screening, and industrial food-safety compliance.",
  },
  {
    title: "Community Food-Safety Sensitisation",
    institution: "Public Health Outreach",
    duration: "Approximately ten months",
    detail: "Grassroots community education and public health campaigns focused on hygienic food-handling practices and reducing bacterial cross-contamination.",
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
            Scientific Foundation
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

          <div className="mt-4 space-y-2">
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#E10600]">
              BSc Microbiology · Bayero University Kano
            </span>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              My BSc in Microbiology (Bayero University Kano) forms the foundation of my evidence-based approach to technology, systems analysis, and validation.
            </p>
          </div>
        </motion.div>

        {/* Primary Undergraduate Research Investigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-md mb-12"
        >
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#E10600]">
            UNDERGRADUATE RESEARCH THESIS
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl text-[#111111] mt-3 leading-snug">
            Investigation of Antibiotic-Resistant Bacteria on Food-Handling Surfaces
          </h3>
          <p className="mt-4 text-base text-gray-600 leading-relaxed font-normal">
            My undergraduate research investigated bacterial contamination on food-handling surfaces and the public-health implications of antimicrobial resistance. My laboratory experience included sample collection, microbiological culturing, and antibiotic susceptibility testing.
          </p>
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2 text-xs">
            {["Microbiological Sampling", "Culturing & Isolation", "Antibiotic Susceptibility Testing", "Public Health Analysis"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-gray-50 font-semibold text-gray-700 border border-gray-200">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Applied Laboratory & Industrial Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {scientificExperiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E10600]">
                  {exp.duration}
                </span>
                <h4 className="font-heading text-lg font-bold text-[#111111] mt-2">
                  {exp.title}
                </h4>
                <span className="block text-xs font-semibold text-gray-500 mt-0.5">
                  {exp.institution}
                </span>
                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {exp.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Speaking & Recognition Section */}
        <div id="recognition" className="pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-[#E10600] text-xs font-bold uppercase tracking-wider border border-gray-200 shadow-2xs">
              Speaking &amp; Recognition
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl text-[#111111] mt-3">
              Engagements &amp; Honors
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              International presentations, academic merit honors, and departmental recognition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recognitions.map((rec) => (
              <div
                key={rec.title}
                className="p-7 rounded-3xl bg-white border border-gray-200 hover:border-[#E10600]/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#E10600] uppercase tracking-wider">
                    {rec.year}
                  </span>
                  <h4 className="font-heading text-xl font-bold text-[#111111] mt-2">
                    {rec.title}
                  </h4>
                  <span className="block text-xs font-semibold text-gray-700 mt-1">
                    {rec.organization} · {rec.location}
                  </span>
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {rec.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
