"use client";

import React from "react";
import { motion } from "framer-motion";

const credentials = [
  {
    institution: "Harvard University",
    program: "CS50: Introduction to Computer Science",
    detail: "Algorithms, Data Structures, Memory Management (C, Python, SQL, Web)",
    status: "Verified Credential",
  },
  {
    institution: "Stanford Online",
    program: "Computer Science 101",
    detail: "Foundational Computing Principles, Hardware Architecture, Software Logic",
    status: "Verified Credential",
  },
  {
    institution: "African Leadership Group (ALX)",
    program: "Software Engineering & Leadership Certification",
    detail: "Rigorous Full-Stack Engineering, Systems Programming, Team Leadership",
    status: "Certified Graduate",
  },
  {
    institution: "Bayero University Kano",
    program: "B.Sc. Microbiology",
    detail: "First-Principles Biological Systems, Laboratory Methodologies, Analytical Research",
    status: "Graduate",
  },
];

export default function CredentialsSection() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-gray-50 text-[#111827] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E63946] uppercase">
            Education &amp; Honors
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
            Professional Credentials
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A relentless pursuit of rigorous engineering principles, computation, and scientific discipline.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((item, index) => (
            <motion.div
              key={item.program}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#E63946]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E63946]">
                    {item.institution}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
                  {item.program}
                </h3>

                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Verified Academic &amp; Professional Rigor</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
