"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend Engineering",
    description: "Responsive, accessible, and high-performance user interfaces and 3D web applications.",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Three.js"],
  },
  {
    title: "Backend & Systems",
    description: "Scalable APIs, transactional state machines, and relational database architectures.",
    skills: ["Node.js", "PostgreSQL", "Supabase", "FastAPI", "API Integrations"],
  },
  {
    title: "Design & Product Architecture",
    description: "Human-centered product design, interactive design systems, and workflow wireframes.",
    skills: ["UI/UX Design", "Figma", "System Workflows", "Wireframing"],
  },
];

export default function StackSection() {
  return (
    <section id="skills" className="py-24 sm:py-36 bg-white text-[#111111]">
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
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-[#E10600] text-xs font-bold uppercase tracking-wider border border-gray-200">
            Technical Stack
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#111111] mt-4 leading-tight">
            Technologies I Work With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A production-proven stack engineered for high velocity, transactional reliability, and security.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-200/70 shadow-sm hover:shadow-xl hover:border-[#E10600]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-1.5 bg-[#E10600] rounded-full mb-6" />
                <h3 className="font-heading text-2xl text-[#111111] tracking-tight">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#E10600] hover:text-white text-gray-800 text-xs sm:text-sm font-semibold border border-gray-200 transition-colors shadow-2xs"
                  >
                    {skill}
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
