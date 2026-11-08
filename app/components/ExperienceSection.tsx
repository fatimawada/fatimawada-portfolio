"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founder & CEO | Product & Technology Lead",
    organization: "Relyvora",
    period: "2024 - Present",
    category: "VENTURE LEADERSHIP",
    description:
      "Company formation, business strategy, product architecture, technical development, payment workflow design and partnership coordination for social commerce trust infrastructure.",
    highlight: "Payment & Trust Infrastructure",
  },
  {
    role: "Founder & Product Architect",
    organization: "PulseClime",
    period: "2024 - Present",
    category: "CLIMATE FINANCE",
    description:
      "Product direction and MVP development, concept development, product architecture, and exploration of monitoring, reporting and verification mechanisms for climate-related projects.",
    highlight: "Climate-Finance MVP",
  },
  {
    role: "Product & Technology Lead | Multidisciplinary Team",
    organization: "Bite2Care",
    period: "2024 - Present",
    category: "HEALTHCARE INNOVATION",
    description:
      "Product and technical leadership, emergency referral workflow development, low-connectivity system design, and multidisciplinary team coordination.",
    highlight: "SnakeHack Africa Presenter",
  },
  {
    role: "AI & Digital Literacy Mentor",
    organization: "UNICCON Group",
    period: "April – August 2026",
    category: "MENTORSHIP & EDUCATION",
    description:
      "Responsible AI education, youth technology mentorship, and foundational digital literacy training on emerging technological tools.",
    highlight: "Youth Technology Mentorship",
  },
  {
    role: "Customer Relations Associate / User Operations",
    organization: "MySmartMedic (UNICCON)",
    period: "2025 - 2026",
    category: "TELEMEDICINE OPERATIONS",
    description:
      "UNICCON's AI telemedicine platform. Managed user onboarding, subscription support, doctor consultation access, issue documentation and operational escalation.",
    highlight: "Telehealth User Operations",
  },
  {
    role: "Team Leader",
    organization: "AIM Global",
    period: "April 2023 – November 2025",
    category: "ORGANIZATIONAL LEADERSHIP",
    description:
      "Team development, distributor mentorship, entrepreneurial engagement, and participation in the international conference in the Philippines.",
    highlight: "International Conference Delegate",
  },
];

export default function ExperienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="py-24 sm:py-36 bg-white text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          {/* Small pill-shaped section label */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-[#E10600] text-xs font-bold uppercase tracking-wider border border-gray-200">
            Career &amp; Governance
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#111111] mt-4 leading-tight">
            Experience &amp;{" "}
            <span className="relative inline-block">
              Leadership
              {/* Red Hand-Drawn Underline */}
              <svg
                className="absolute -bottom-2.5 left-0 w-full h-3 text-[#E10600]"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9C55 2 130 2 197 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A track record of venture creation, product architecture, multidisciplinary team coordination, and youth technology mentorship.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Row of Experience Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.organization}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[310px] sm:min-w-[360px] p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:border-[#E10600]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shrink-0"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#E10600]">
                    {exp.category}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-gray-700 border border-gray-200">
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#111111] leading-tight">
                  {exp.role}
                </h3>
                <span className="block text-sm font-bold text-[#E10600] mt-1">
                  {exp.organization}
                </span>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
                  {exp.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs">
                <span className="font-bold text-gray-900">{exp.highlight}</span>
                <span className="text-gray-400">Milestone</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Italic Serif Caption Underneath */}
        <div className="mt-4 text-center sm:text-left">
          <span className="font-serif-italic text-sm text-gray-500">
            &ldquo;Hover track to inspect leadership milestones&rdquo;
          </span>
        </div>

      </div>
    </section>
  );
}
