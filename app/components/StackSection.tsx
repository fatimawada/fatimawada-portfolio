import React from "react";

export default function StackSection() {
  const stackCategories = [
    {
      title: "Frontend Development",
      description: "Modern, high-performance user interfaces and responsive web applications.",
      skills: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "HTML5 & Semantic Web", "Responsive Architecture"],
    },
    {
      title: "Backend & Systems",
      description: "Scalable data stores, secure authentications, and multi-tenant architectures.",
      skills: ["Node.js", "PostgreSQL", "Supabase", "Row Level Security (RLS)", "REST APIs", "Event Webhooks"],
    },
    {
      title: "Infrastructure & Payments",
      description: "Payment holding workflows, transactional integrity, and edge cloud deployments.",
      skills: ["Stripe API", "Payment Rails", "Vercel Edge", "Git & GitHub", "Resend Transactional", "Turbopack"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#F9FAFB] text-[#111827] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CE1126] font-mono">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-[#111827]">
            Technologies I Work With
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 mt-4 leading-relaxed">
            Full-stack expertise across modern development, payment infrastructure, and cloud delivery.
          </p>
        </div>

        {/* 3 Modern Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stackCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#111827] mb-2">{cat.title}</h3>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">{cat.description}</p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-mono font-medium hover:bg-[#CE1126] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
