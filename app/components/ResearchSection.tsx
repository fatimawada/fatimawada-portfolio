import React from "react";

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1E2536]">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2.5 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
          Scientific Grounding &amp; Empirical Methodology
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F6F4EE] tracking-tight">
          Scientific Foundation &amp; Research
        </h2>
        <p className="text-sm sm:text-base text-[#9BA3B4] mt-2.5">
          A rigorous academic foundation in Microbiology providing the analytical discipline, hypothesis validation, and systems-level diagnosis that shapes my approach to venture building.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Undergraduate Research Feature */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121620] border-2 border-[#D4AF37]/30 shadow-xl shadow-black/50">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono text-[#D4AF37] font-semibold uppercase tracking-wider">
                Undergraduate Thesis · Bayero University Kano
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono">
                BSc Microbiology
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#F6F4EE] mb-4">
              Investigation of Antibiotic-Resistant Bacteria on Food-Handling Surfaces
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#F6F4EE]/85 leading-relaxed">
              <p>
                <strong>Scientific Problem &amp; Context:</strong> Food-handling surfaces serve as critical microbial reservoirs and cross-contamination vectors. When bacterial strains colonizing these surfaces exhibit multidrug resistance to standard antibiotics, they pose grave, unmonitored public health and food-safety threats to institutional and domestic populations.
              </p>
              <p>
                <strong>Laboratory Methodology:</strong> Conducted empirical microbiological sampling through sterile surface swabbing across active institutional food-preparation points. Executed serial dilution, selective agar culturing, Gram staining, and high-power optical microscopy for morphological and physiological bacterial identification.
              </p>
              <p>
                <strong>Susceptibility Profiling:</strong> Performed standardized Kirby-Bauer antibiotic susceptibility testing against panels of widely prescribed antibacterial agents to map inhibition zones, quantify resistance patterns, and isolate resilient strains.
              </p>
              <p>
                <strong>Public Health Significance:</strong> Provided empirical evidence on the critical intersection of sanitation protocol compliance, disinfectant efficacy, and antimicrobial resistance surveillance in commercial food handling.
              </p>
            </div>
          </div>

          {/* The Methodological Bridge */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0B0D13] border border-[#273144]">
            <h4 className="text-base font-bold text-[#F6F4EE] mb-3 flex items-center gap-2">
              <span className="text-[#34D399]">✦</span>
              How Scientific Training Informs My Approach to Technology
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
              <p>
                Microbiology trains the mind to respect unseen variables, trace root infection vectors, and distrust superficial assumptions. In complex biological systems, a single uncontrolled contaminant can compromise an entire experiment.
              </p>
              <p>
                In technology entrepreneurship and product architecture, this translates into <strong>evidence-based thinking, disciplined systems analysis, empirical investigation, and relentless stress testing</strong>. Whether designing escrow payment holding for Relyvora or modeling environmental hazard thresholds for PulseClime, I diagnose structural failure points and design for resilience outside idealized laboratory or demo conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Industrial Training & Sensitisation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-[#121620] border border-[#273144] hover:border-[#D4AF37]/40 transition-colors">
            <div className="text-xs font-mono text-[#D4AF37] font-semibold mb-1">
              Community Health Outreach · ~10 Months
            </div>
            <h4 className="font-bold text-base text-[#F6F4EE] mb-2">
              Food-Safety Community Sensitisation
            </h4>
            <p className="text-xs text-[#9BA3B4] leading-relaxed">
              Dedicated approximately ten months to grassroots food-safety sensitisation and hygiene education across community food markets, instructing vendors on cross-contamination prevention, safe storage, and sanitation practices.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121620] border border-[#273144] hover:border-[#D4AF37]/40 transition-colors">
            <div className="text-xs font-mono text-[#D4AF37] font-semibold mb-1">
              Industrial Training (SIWES) · 6 Months
            </div>
            <h4 className="font-bold text-base text-[#F6F4EE] mb-2">
              Bayero University Kano Laboratory
            </h4>
            <p className="text-xs text-[#9BA3B4] leading-relaxed">
              Completed six months of structured laboratory training mastering aseptic culture techniques, media preparation, bacterial isolation, biochemical identification, and laboratory quality control protocols.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121620] border border-[#273144] hover:border-[#D4AF37]/40 transition-colors">
            <div className="text-xs font-mono text-[#D4AF37] font-semibold mb-1">
              Industrial Placement · 3 Months
            </div>
            <h4 className="font-bold text-base text-[#F6F4EE] mb-2">
              Flour Mills of Nigeria (FMN) Plc
            </h4>
            <p className="text-xs text-[#9BA3B4] leading-relaxed">
              Three months of industrial placement in commercial quality assurance and laboratory testing, monitoring hygiene standards, industrial food product testing, and compliance with national food safety benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}