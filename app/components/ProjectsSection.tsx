import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      tag: "FINTECH · PAYMENT INFRASTRUCTURE",
      title: "Relyvora",
      role: "Founder & CEO / Product and Technology Lead",
      description:
        "Building trust and payment infrastructure for social commerce across African markets. Provides protected payment holding pending delivery confirmation and unique release verification codes.",
      stack: ["Next.js", "Payment Rails", "Anchor Tech Partnership", "Escrow Workflows"],
      links: [
        { label: "Company Website", url: "https://relyvora.com" },
        { label: "Nigeria Platform", url: "https://ng.relyvora.com" },
        { label: "Prototype", url: "https://relyvora.vercel.app" },
      ],
      featured: true,
    },
    {
      tag: "CLIMATE FINANCE · RESILIENCE",
      title: "PulseClime",
      role: "Founder / Product Architect",
      description:
        "Climate intelligence and capital-access infrastructure initiative connecting localized environmental hazard data directly to resilience funding and parametric protection for vulnerable communities.",
      stack: ["Climate Risk Models", "Low-Bandwidth UX", "Parametric Triggers", "Functional MVP"],
      status: "Functional MVP Developed",
    },
    {
      tag: "DIGITAL HEALTH · EMERGENCY TRIAGE",
      title: "Bite2Care",
      role: "Product & Technology Lead (Multidisciplinary Team)",
      description:
        "Technology-enabled emergency triage and antivenom verification system for snakebite incidents in Sub-Saharan Africa. Presented to international judges at SnakeHack Africa in Nairobi, Kenya.",
      stack: ["Emergency Decision Trees", "Antivenom Stock Verification", "WhatsApp Frontline"],
      links: [{ label: "View Bite2Care Prototype", url: "https://bite2-care.vercel.app/" }],
    },
    {
      tag: "B2B SAAS · CASH FLOW AUTOMATION",
      title: "ChaseFree",
      role: "Founder & Full-Stack Builder",
      description:
        "Automated accounts receivable and payment recovery platform helping agencies reduce collection friction, automate payment follow-up cadences, and gain real-time cash flow visibility.",
      stack: ["Next.js", "TypeScript", "Supabase", "Stripe API"],
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CE1126] font-mono">
            Ventures &amp; Innovation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-[#111827]">
            Featured Ventures &amp; Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 mt-4 leading-relaxed">
            Practical entrepreneurial ventures and systems designed to solve systemic problems across emerging markets.
          </p>
        </div>

        {/* 2x2 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className={`p-8 rounded-3xl bg-[#F9FAFB] border transition-all duration-300 flex flex-col justify-between ${
                proj.featured
                  ? "border-[#CE1126]/40 shadow-lg hover:shadow-2xl"
                  : "border-zinc-200/80 hover:shadow-xl"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#CE1126] uppercase">
                    {proj.tag}
                  </span>
                  {proj.featured && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#CE1126]/10 text-[#CE1126] text-[10px] font-mono font-bold uppercase">
                      Primary Flagship
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-1">
                  {proj.title}
                </h3>
                <div className="text-xs font-mono text-zinc-500 mb-4 font-medium">
                  {proj.role}
                </div>

                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-3">
                {proj.links &&
                  proj.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#CE1126] hover:text-white border border-zinc-300 text-zinc-800 text-xs font-semibold transition-all shadow-sm"
                    >
                      <span>{link.label}</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                {proj.status && (
                  <span className="text-xs font-mono text-zinc-500 italic">
                    Status: {proj.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
