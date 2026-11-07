"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    category: "FINTECH & TRANSACTION TRUST",
    title: "Relyvora",
    description:
      "A transaction-protection checkout and escrow platform designed for independent social commerce vendors in Nigeria.",
    tags: ["Next.js", "Node.js", "Escrow APIs", "Supabase"],
    link: "https://github.com/fatimawada",
    type: "Platform",
  },
  {
    category: "CLIMATE INFRASTRUCTURE",
    title: "Pulseclime",
    description:
      "A climate-finance infrastructure prototype managing milestone verification and disbursement workflows for renewable energy.",
    tags: ["Climate MRV", "Milestone Engine", "TypeScript", "CleanTech"],
    link: "https://github.com/fatimawada",
    type: "Infrastructure",
  },
  {
    category: "EMERGENCY DIGITAL HEALTH",
    title: "Bite2Care",
    description:
      "An emergency health response platform connecting rural communities to referral pathways for snakebite care.",
    tags: ["Offline-First", "Geospatial Routing", "Triage Logic", "Wellcome Finalist"],
    link: "https://github.com/fatimawada",
    type: "Healthcare",
  },
];

const otherRepos = [
  {
    name: "anchor-escrow-contracts",
    desc: "Smart escrow state machines and dispute arbitration protocols.",
    language: "TypeScript",
  },
  {
    name: "snakehack-triage-core",
    desc: "Offline-first clinical referral engine with SMS/USSD fallback routing.",
    language: "Python / Fastify",
  },
  {
    name: "carbon-mrv-telemetry",
    desc: "Data ingestion pipeline parsing remote solar inverter telemetry into audit trails.",
    language: "Node.js / Timescale",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-36 bg-[#F9FAFB] text-[#111111] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          {/* Small pill-shaped section label */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-[#E10600] text-xs font-bold uppercase tracking-wider border border-gray-200 shadow-2xs">
            Featured Work
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#111111] mt-4 leading-tight">
            Projects That Define My{" "}
            <span className="relative inline-block">
              Journey
              {/* Red Curved Underline beneath "Journey" */}
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

          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A selection of production systems, decentralized infrastructure, and social impact platforms I have built.
          </p>
        </motion.div>

        {/* Three Project Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-gray-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Small red uppercase category label */}
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#E10600]">
                  {project.category}
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl text-[#111111] mt-3 group-hover:text-[#E10600] transition-colors">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                {/* Tech tag chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gray-50 text-[11px] font-semibold text-gray-700 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Source Code link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#E10600] transition-colors"
                >
                  <span>Source Code</span>
                  <span className="text-base leading-none">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Repositories List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-2xl sm:text-3xl text-[#111111]">
              Other Repositories &amp; Open Source
            </h3>
            <a
              href="https://github.com/fatimawada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-[#E10600] hover:underline"
            >
              View GitHub Profile ↗
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherRepos.map((repo) => (
              <a
                key={repo.name}
                href="https://github.com/fatimawada"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-gray-200/70 hover:border-[#E10600]/40 hover:shadow-lg transition-all group block"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-gray-900 group-hover:text-[#E10600] transition-colors">
                    {repo.name}
                  </span>
                  <span className="text-gray-400 group-hover:text-[#E10600]">↗</span>
                </div>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {repo.desc}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-[#E10600]" />
                  <span>{repo.language}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
