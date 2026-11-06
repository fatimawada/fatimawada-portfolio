import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#08080A]/60 border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#34D399] uppercase tracking-wider mb-3 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              Executive Narrative &amp; Perspective
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] tracking-tight mb-6 leading-tight">
              I build companies, define products, and explore infrastructure that addresses systemic problems.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#F4F4F5]/85 leading-relaxed font-normal">
              <p>
                My professional journey is defined by a shift away from isolated software development toward comprehensive venture building and infrastructure exploration. Building software is valuable, but real-world transformation happens when technical execution is matched with structural problem definition, business model sustainability, and deep domain context.
              </p>
              <p>
                Across emerging markets like Nigeria, systemic friction is rarely solved by generic applications alone. In digital commerce, buyers and sellers transact on informal platforms with zero escrow protection; in climate adaptation, frontline communities suffer weather shocks without access to resilience capital; in rural healthcare, delayed triage and supply-chain fragmentation cost vital treatment hours.
              </p>
              <p>
                My academic grounding in Microbiology from Bayero University Kano instilled a fundamental commitment to empirical rigor: identifying root vectors, testing hypotheses, and anticipating systemic contamination. I carry this perspective into technology leadership—architecting resilient solutions designed to perform under real-world human and operational constraints.
              </p>
            </div>
          </div>

          {/* Strategic Foundations Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/40 transition-colors">
              <div className="text-xs font-mono text-[#34D399] font-semibold mb-1">01 · Entrepreneurial Leadership</div>
              <h3 className="font-bold text-base text-[#F4F4F5] mb-2">Company Formation &amp; Direction</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Founding ventures like Relyvora, designing commercial structures, negotiating infrastructure partnerships, and aligning business models with market expansion realities.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#0D9488]/40 transition-colors">
              <div className="text-xs font-mono text-[#2DD4BF] font-semibold mb-1">02 · Infrastructure Architecture</div>
              <h3 className="font-bold text-base text-[#F4F4F5] mb-2">Systemic Trust &amp; Financial Rails</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Designing escrow workflows, release verification codes, settlement APIs, and exploring climate-finance access mechanisms for underserved populations.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#E11D48]/40 transition-colors">
              <div className="text-xs font-mono text-[#FB7185] font-semibold mb-1">03 · Multidisciplinary Execution</div>
              <h3 className="font-bold text-base text-[#F4F4F5] mb-2">Cross-Functional Collaboration</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Leading product strategy across multidisciplinary teams in healthcare innovation (Bite2Care), presenting to international judges at SnakeHack Africa in Nairobi.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#E07A5F]/40 transition-colors">
              <div className="text-xs font-mono text-[#F4A261] font-semibold mb-1">04 · Scientific &amp; Empirical Rigor</div>
              <h3 className="font-bold text-base text-[#F4F4F5] mb-2">Evidence-Based Thinking</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Applying biological laboratory investigation and public-health analysis to diagnose systemic failure points and engineer robust, fault-tolerant technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
