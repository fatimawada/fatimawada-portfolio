"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Relyvora",
    subtitle: "Fintech & Transaction Trust",
    description:
      "A transaction-protection checkout and escrow platform designed for independent social commerce vendors in Nigeria.",
    tags: ["Escrow Protocols", "Next.js", "Node.js", "Payment APIs"],
    status: "Active Venture",
    impact: "Protecting buyers & sellers across informal African digital commerce",
  },
  {
    title: "Pulseclime",
    subtitle: "Climate Finance Infrastructure",
    description:
      "A climate-finance infrastructure prototype managing milestone verification and disbursement workflows for renewable energy.",
    tags: ["Climate MRV", "Milestone Engine", "Verifiable Data", "Green Finance"],
    status: "Infrastructure Prototype",
    impact: "Automating capital release upon verified ecological benchmarks",
  },
  {
    title: "Bite2Care",
    subtitle: "Emergency Health Response",
    description:
      "An emergency health response platform connecting rural communities to referral pathways for snakebite care.",
    tags: ["Healthcare Triage", "Offline-First", "Geospatial Routing", "Wellcome Trust Finalist"],
    status: "Global Finalist",
    impact: "Cutting emergency referral delays from 12+ hours to under 45 minutes",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-white text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E63946] uppercase">
            Featured Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
            Projects That Define My Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Purpose-built technology addressing systemic challenges in financial trust, climate capital, and healthcare access.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#E63946]/40 hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E63946]">
                    {project.subtitle}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-gray-700 border border-gray-200">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight group-hover:text-[#E63946] transition-colors">
                  {project.title}
                </h3>

                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-white border border-gray-100 text-xs text-gray-700 font-medium">
                  <span className="font-bold text-[#111827]">Impact: </span>
                  {project.impact}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white text-xs font-medium text-gray-700 border border-gray-200 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
