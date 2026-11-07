"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    description: "Responsive, accessible, and high-performance user interfaces and 3D web experiences.",
    skills: ["Next.js", "React", "Tailwind CSS", "Three.js"],
  },
  {
    title: "Backend & DB",
    description: "Scalable APIs, relational and NoSQL storage, and enterprise third-party integration pipelines.",
    skills: ["Node.js", "Supabase", "API Integrations"],
  },
  {
    title: "Design & Architecture",
    description: "Human-centered interfaces, design systems, and resilient distributed system workflows.",
    skills: ["UI/UX Design", "Figma", "System Workflows"],
  },
];

export default function StackSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-gray-50 text-[#111827] border-y border-gray-100">
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
            Technical Stack
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
            Technologies I Work With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A production-proven stack engineered for high velocity, reliability, and security.
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
              className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#E63946]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-1.5 bg-[#E63946] rounded-full mb-6" />
                <h3 className="text-2xl font-bold text-[#111827] tracking-tight">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl bg-gray-50 hover:bg-[#E63946] hover:text-white text-gray-800 text-xs sm:text-sm font-semibold border border-gray-200/70 transition-colors shadow-2xs"
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
