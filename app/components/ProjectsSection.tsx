"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    category: "DIGITAL HEALTH · EMERGENCY INNOVATION",
    title: "Bite2Care",
    role: "Product & Technology Lead | Multidisciplinary Team",
    description:
      "A multidisciplinary health innovation project developing a technology-enabled approach to improving coordination during snakebite emergencies, particularly in underserved and rural communities. The project explores how structured emergency guidance, healthcare facility readiness information, referral coordination and transport logistics can help reduce delays between a snakebite incident and access to appropriate treatment. My role involves product and technical leadership, workflow development and coordination across the multidisciplinary team. The solution is being developed with low-connectivity environments in mind, including potential WhatsApp-based interactions.",
    badge: "SnakeHack Africa (Nairobi, Kenya)",
    impactNote: "Presented at SnakeHack Africa in Nairobi, Kenya, as part of the Wellcome snakebite innovation initiative.",
    tags: ["Digital Health", "Emergency Coordination", "Facility Readiness", "Low-Connectivity Workflows"],
    link: "https://bite2-care.vercel.app",
    linkLabel: "View Project Demo",
  },
  {
    category: "FINANCIAL INFRASTRUCTURE · CASE STUDY",
    title: "Relyvora Trust Architecture",
    role: "Product & Technology Lead",
    description:
      "Technical architecture within the Relyvora product exploring protected transaction workflows, conditional holding states, vendor order fulfillment, and delivery confirmation mechanisms. Focuses on orchestrating release codes with infrastructure partner arrangements to create a safer social commerce checkout experience.",
    badge: "Core Venture Architecture",
    impactNote: "Exploring protected payment workflows and dispute mediation for informal digital commerce.",
    tags: ["Transaction Protection", "Payment Workflows", "Order Verification", "Fintech Architecture"],
    link: "https://relyvora.com",
    linkLabel: "relyvora.com",
  },
  {
    category: "CLIMATE FINANCE · INFRASTRUCTURE MVP",
    title: "PulseClime MVP",
    role: "Founder & Product Architect",
    description:
      "An exploratory climate-finance infrastructure MVP evaluating how localized environmental data, project monitoring, milestone verification, and financing workflows can bridge the gap between community-level climate activities and institutional capital assessment.",
    badge: "Climate-Finance Prototype",
    impactNote: "Translating local environmental and climate metrics into verifiable activities for capital evaluation.",
    tags: ["Climate Finance", "Environmental Data", "Project Monitoring", "Milestone Verification"],
    link: "#contact",
    linkLabel: "Request Overview",
  },
];

const technicalExplorations = [
  {
    name: "relyvora-protected-checkout",
    desc: "Workflow specifications and conditional release-code logic for informal social commerce.",
    focus: "Transaction Logic",
  },
  {
    name: "bite2care-referral-workflow",
    desc: "Low-connectivity emergency referral pathways and facility readiness guidance prototypes.",
    focus: "Emergency Triage",
  },
  {
    name: "pulseclime-indicator-framework",
    desc: "Conceptual indicators and data models for environmental milestone verification.",
    focus: "Climate Capital",
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
            Collaborative &amp; Innovation Initiatives
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#111111] mt-4 leading-tight">
            Collaborative &amp; Innovation{" "}
            <span className="relative inline-block">
              Projects
              {/* Red Curved Underline beneath "Projects" */}
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
            A selection of collaborative healthcare initiatives, infrastructure case studies, and practical prototypes built to address real-world challenges.
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
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#E10600]">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-[#E10600] border border-red-100">
                    {project.badge}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl text-[#111111] mt-2 group-hover:text-[#E10600] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mt-1">
                  {project.role}
                </p>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
                  {project.description}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600">
                  <span className="font-bold text-gray-800">Context: </span>
                  {project.impactNote}
                </div>
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

                {/* Project Link */}
                <a
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#E10600] transition-colors"
                >
                  <span>{project.linkLabel}</span>
                  <span className="text-base leading-none">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Explorations / Repository Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-2xl sm:text-3xl text-[#111111]">
              Technical Workflows &amp; Prototypes
            </h3>
            <a
              href="https://github.com/fatimawada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-[#E10600] hover:underline"
            >
              GitHub Profile ↗
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {technicalExplorations.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-2xl bg-white border border-gray-200/70 hover:border-[#E10600]/40 hover:shadow-lg transition-all group block"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-gray-900 group-hover:text-[#E10600] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-gray-400 group-hover:text-[#E10600]">↗</span>
                </div>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-[#E10600]" />
                  <span>{item.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
