"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    category: "COMPUTER SCIENCE",
    title: "CS50: Introduction to Computer Science",
    issuedBy: "Harvard University",
    date: "Verified Academic Rigor",
    badge: "Algorithms & Systems",
  },
  {
    category: "COMPUTATION & ARCHITECTURE",
    title: "Computer Science 101",
    issuedBy: "Stanford Online",
    date: "Certified Computing Core",
    badge: "Hardware & Logic",
  },
  {
    category: "SOFTWARE ENGINEERING",
    title: "Full-Stack Software Engineering",
    issuedBy: "African Leadership Group (ALX)",
    date: "Professional Fellow",
    badge: "Systems & Leadership",
  },
  {
    category: "BIOLOGICAL SCIENCES",
    title: "B.Sc. Microbiology",
    issuedBy: "Bayero University Kano",
    date: "Graduate Degree",
    badge: "Laboratory Research",
  },
  {
    category: "GLOBAL HEALTHCARE",
    title: "SnakeHack Africa Finalist",
    issuedBy: "Wellcome Trust Initiative",
    date: "Global Innovation Award",
    badge: "Digital Triage",
  },
];

export default function CredentialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="certifications" className="py-24 sm:py-36 bg-white text-[#111111] overflow-hidden">
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
            System Badges
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#111111] mt-4 leading-tight">
            Professional{" "}
            <span className="relative inline-block">
              Credentials
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
        </motion.div>

        {/* Horizontal Scrolling Row of Certificate Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[300px] sm:min-w-[340px] p-7 rounded-3xl bg-gray-50 border border-gray-200 hover:border-[#E10600]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shrink-0"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Small red category label */}
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#E10600]">
                    {cert.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white text-[10px] font-semibold text-gray-700 border border-gray-200">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#111111] leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/60">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Issued by
                </span>
                <span className="block text-sm font-bold text-gray-900 mt-0.5">
                  {cert.issuedBy}
                </span>
                <span className="block text-xs text-gray-500 mt-1">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Italic Serif Caption Underneath */}
        <div className="mt-4 text-center sm:text-left">
          <span className="font-serif-italic text-sm text-gray-500">
            &ldquo;Hover track to inspect credentials&rdquo;
          </span>
        </div>

      </div>
    </section>
  );
}
