import React from "react";

export default function ExpertiseSection() {
  const expertiseCards = [
    {
      tag: "FINANCIAL INFRASTRUCTURE",
      title: "Trust & Escrow Rails for Social Commerce",
      description:
        "Architecting payment holding, buyer-seller verification release codes, and automated settlement workflows that eliminate transaction friction across informal commerce.",
      venture: "Relyvora (Operating Venture)",
    },
    {
      tag: "CLIMATE FINANCE",
      title: "Climate Intelligence & Capital Access",
      description:
        "Developing data models that connect localized environmental indicators with parametric funding mechanisms and resilience adaptation financing for vulnerable communities.",
      venture: "PulseClime (Functional MVP)",
    },
    {
      tag: "DIGITAL HEALTH",
      title: "Emergency Triage & Antivenom Verification",
      description:
        "Engineering low-bandwidth emergency referral chains and antivenom stock verification protocols presented to international judges at SnakeHack Africa in Nairobi.",
      venture: "Bite2Care (Innovation Project)",
    },
    {
      tag: "B2B AUTOMATION",
      title: "Cash-Flow Visibility & AR Recovery",
      description:
        "Building intelligent, scheduled payment recovery sequences and webhook-driven auto-halt triggers that streamline accounts receivable for growing service businesses.",
      venture: "ChaseFree (B2B SaaS)",
    },
  ];

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-white text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CE1126] font-mono">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-[#111827]">
            Building Modern Digital Solutions with Code, Infrastructure &amp; AI
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 mt-4 leading-relaxed">
            Combining technical execution, biological systems thinking, and entrepreneurial leadership to build scalable infrastructure for real-world impact.
          </p>
        </div>

        {/* 4 Clean Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-3xl bg-[#F9FAFB] border border-zinc-200/80 hover:border-[#CE1126]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#CE1126] uppercase">
                  {card.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mt-3 mb-3 group-hover:text-[#CE1126] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Core Initiative:</span>
                <span className="font-semibold text-zinc-800">{card.venture}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
