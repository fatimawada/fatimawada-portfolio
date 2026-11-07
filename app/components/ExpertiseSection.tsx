"use client";

import React from "react";
import { motion } from "framer-motion";

const expertiseAreas = [
  {
    number: "01",
    title: "Transactional Trust & Escrow Systems",
    description:
      "Engineering robust multi-party escrow architectures, automated dispute-resolution protocols, and fraud mitigation mechanisms for peer-to-peer commerce.",
    tags: ["State Machines", "Dispute Resolution", "Escrow APIs", "Fintech Security"],
  },
  {
    number: "02",
    title: "Full-Stack Web & Mobile Architecture",
    description:
      "Developing resilient frontend applications in Next.js and React backed by scalable Node.js microservices, PostgreSQL/Supabase, and modern cloud infrastructure.",
    tags: ["Next.js", "React", "Node.js", "Supabase", "REST/GraphQL"],
  },
  {
    number: "03",
    title: "Climate & Environmental Infrastructure",
    description:
      "Designing MRV (Measurement, Reporting & Verification) and milestone disbursement workflows that bridge verifiable field data with green finance.",
    tags: ["MRV Protocols", "Auditable Pipelines", "Disbursement Logic", "CleanTech"],
  },
  {
    number: "04",
    title: "Healthcare Emergency Dispatch & AI",
    description:
      "Architecting low-bandwidth, offline-resilient triage systems, geospatial routing, and emergency health pipelines connecting remote clinics to life-saving care.",
    tags: ["Offline-First", "Geospatial Routing", "Triage Logic", "Digital Health"],
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 sm:py-32 bg-white text-[#111827] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Massive Bold Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16 sm:mb-20"
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E63946] uppercase">
            Areas of Focus
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] leading-[1.12]">
            Building Modern Digital Solutions with Code &amp; First-Principles Architecture.
          </h2>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {expertiseAreas.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#E63946]/30 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#E63946]/40 group-hover:text-[#E63946] transition-colors font-mono">
                  {item.number}
                </span>
                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-gray-200/60">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-white text-gray-700 border border-gray-200 shadow-2xs"
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
