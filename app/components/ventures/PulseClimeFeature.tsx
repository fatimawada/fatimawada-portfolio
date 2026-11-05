import React from "react";

export default function PulseClimeFeature() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#101918] to-[#0A1211] border-2 border-[#0D9488]/40 p-6 sm:p-10 lg:p-12 shadow-xl shadow-black/60 hover:border-[#0D9488] transition-all duration-300">
      {/* Top Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#0D9488]/15 text-[#2DD4BF] border border-[#0D9488]/30 text-xs font-mono font-semibold uppercase tracking-wider">
            Climate Finance Infrastructure Initiative · Functional MVP
          </span>
          <span className="text-xs font-mono text-[#2DD4BF] px-2.5 py-1 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/20 hidden sm:inline-block">
            Climate Adaptation &amp; Capital Access
          </span>
        </div>
        <span className="text-xs font-mono text-[#2DD4BF] px-3 py-1 rounded-full bg-[#0D9488]/15 border border-[#0D9488]/30">
          Infrastructure Gap Architecture
        </span>
      </div>

      {/* Title & Core Role */}
      <div className="mb-6">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F6F4EE] tracking-tight mb-2">
          PulseClime
        </h3>
        <p className="text-base sm:text-lg text-[#2DD4BF] font-mono">
          Climate Intelligence &amp; Capital-Access Infrastructure for Emerging Markets Resilience
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#9BA3B4] font-mono mt-3">
          <span className="text-[#F6F4EE] font-semibold">Founder / Product Architect / MVP Developer</span>
          <span className="text-[#273144]">|</span>
          <span>Emerging Initiative · Climate Finance Infrastructure</span>
        </div>
      </div>

      {/* Primary Strategic Positioning */}
      <div className="p-6 rounded-2xl bg-[#0B0D13]/80 border border-[#0D9488]/30 mb-10 text-sm sm:text-base text-[#F6F4EE]/90 leading-relaxed">
        <div className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider mb-2 font-bold">
          Strategic Positioning · Climate Finance Infrastructure
        </div>
        <p className="mb-3">
          PulseClime is exploring how climate intelligence, localized environmental data, and financial mechanisms can work together to improve climate resilience and unlock accessible climate finance for vulnerable communities and emerging markets.
        </p>
        <p className="text-xs sm:text-sm text-[#9BA3B4]">
          The project investigates the underlying infrastructure needed to connect climate-related risks, community needs, measurable resilience activities, and financing opportunities. <em>PulseClime is fundamentally conceived as climate finance infrastructure, not simply a weather-alert application.</em>
        </p>
      </div>

      {/* Dedicated Case Study Grid */}
      <div className="space-y-6 mb-10">
        {/* The Problem & The Infrastructure Gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#0B0D13] border border-[#273144]">
            <div className="text-xs font-mono text-[#E07A5F] uppercase tracking-wider mb-2 font-semibold">
              01 · The Problem
            </div>
            <h4 className="text-base font-bold text-[#F6F4EE] mb-2">Frontline Vulnerability &amp; Capital Isolation</h4>
            <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
              Vulnerable agricultural and coastal communities in emerging markets bear the acute brunt of severe weather shocks—droughts, seasonal floods, erratic rainfall cycles. While billions in global climate adaptation finance are pledged worldwide, almost none reaches grassroots communities because capital allocators lack verified ground-level risk intelligence and structured delivery channels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0D13] border border-[#273144]">
            <div className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider mb-2 font-semibold">
              02 · The Infrastructure Gap
            </div>
            <h4 className="text-base font-bold text-[#F6F4EE] mb-2">The Missing Link Between Data &amp; Financing</h4>
            <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
              Standard meteorology platforms broadcast generic forecasts with zero connection to financial mechanisms. There is a critical infrastructure gap: the absence of a system that can ingest localized environmental risk data, map it directly to community-level resilience activities, and provide verified evidence trails that unlock parametric funding, micro-insurance, and climate grants.
            </p>
          </div>
        </div>

        {/* The Proposed Solution & Product Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#0B0D13] border border-[#273144]">
            <div className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider mb-2 font-semibold">
              03 · The Proposed Solution
            </div>
            <h4 className="text-base font-bold text-[#F6F4EE] mb-2">Connecting Risks, Resilience &amp; Capital</h4>
            <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
              PulseClime proposes a digital bridge connecting three critical layers: (1) hyper-local climate intelligence, (2) structured community resilience workflows, and (3) programmatic financial disbursement mechanisms. By creating verifiable records of vulnerability and resilience action, the platform enables capital providers to direct resources where they generate measurable adaptation impact.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0D13] border border-[#273144]">
            <div className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider mb-2 font-semibold">
              04 · Product Architecture &amp; System Flow
            </div>
            <h4 className="text-base font-bold text-[#F6F4EE] mb-2">Lightweight Edge Ingestion to Risk Models</h4>
            <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
              The system architecture is engineered for low-bandwidth mobile environments. It ingests localized environmental indicators (rainfall deviations, soil dryness, flood levels), processes them through deterministic hazard models, presents plain-language action steps to local users, and structures data outputs for financial and institutional stakeholders.
            </p>
          </div>
        </div>

        {/* Target Users & Stakeholders */}
        <div className="p-6 rounded-2xl bg-[#0B0D13] border border-[#273144]">
          <div className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider mb-2 font-semibold">
            05 · Target Users &amp; Ecosystem Stakeholders
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
            <div className="p-4 rounded-xl bg-[#121620] border border-[#1E2536]">
              <div className="text-xs font-bold text-[#F6F4EE] mb-1">Frontline Communities &amp; Farmers</div>
              <p className="text-[11px] text-[#9BA3B4] leading-relaxed">
                Receive plain-language, low-bandwidth advisories and log verified preparedness measures that demonstrate climate resilience.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#121620] border border-[#1E2536]">
              <div className="text-xs font-bold text-[#F6F4EE] mb-1">Climate Funds &amp; DFIs</div>
              <p className="text-[11px] text-[#9BA3B4] leading-relaxed">
                Access verifiable, localized community risk and adaptation data to satisfy allocation, compliance, and impact measurement criteria.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#121620] border border-[#1E2536]">
              <div className="text-xs font-bold text-[#F6F4EE] mb-1">Insurers &amp; Cooperatives</div>
              <p className="text-[11px] text-[#9BA3B4] leading-relaxed">
                Leverage ground-level threshold indices to structure parametric micro-insurance products and community risk-sharing pools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Honest Distinction: Functional MVP vs Future Roadmap */}
      <div className="p-6 rounded-2xl bg-[#0B0D13] border border-[#1E2536] mb-8">
        <h4 className="text-xs font-mono font-bold text-[#F6F4EE] uppercase tracking-wider mb-4">
          Development Stage Matrix · Functional MVP Capabilities vs. Future Roadmap
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          <div className="p-5 rounded-xl bg-[#121620] border border-[#0D9488]/40">
            <div className="flex items-center gap-2 text-[#2DD4BF] font-mono font-bold mb-3">
              <span className="h-2 w-2 rounded-full bg-[#0D9488]" />
              <span>Developed &amp; Functional MVP Capabilities</span>
            </div>
            <ul className="space-y-2 text-[#9BA3B4]">
              <li className="flex items-start gap-2">
                <span className="text-[#0D9488] font-bold">✓</span>
                <span><strong>Localized Hazard Awareness:</strong> Hyper-local climate risk modeling translating complex environmental indices into accessible severity tiers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0D9488] font-bold">✓</span>
                <span><strong>Plain-Language Early Warnings:</strong> Translating scientific indices into clear, non-technical safety and adaptation steps for grassroots users.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0D9488] font-bold">✓</span>
                <span><strong>Low-Bandwidth Mobile Interface:</strong> Lightweight frontend architecture optimized for low-tier smartphones and spotty rural 2G/3G connectivity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0D9488] font-bold">✓</span>
                <span><strong>Community Action Protocols:</strong> Structured guidance sequences for flood preparation, drought response, and crop protection.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#121620] border border-[#273144]">
            <div className="flex items-center gap-2 text-[#9BA3B4] font-mono font-bold mb-3">
              <span className="h-2 w-2 rounded-full bg-[#687185]" />
              <span>Proposed Future Development Roadmap</span>
            </div>
            <ul className="space-y-2 text-[#9BA3B4]">
              <li className="flex items-start gap-2">
                <span className="text-[#687185] font-bold">→</span>
                <span><strong>Parametric Financing Triggers:</strong> Smart contract-based pre-approved capital releases triggered by verified environmental thresholds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#687185] font-bold">→</span>
                <span><strong>Auditable Resilience Activity Verification:</strong> Cryptographically verifiable proof-of-adaptation logs for climate funds and DFIs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#687185] font-bold">→</span>
                <span><strong>Micro-Insurance API Integrations:</strong> Direct underwriting integrations with agricultural insurers for rapid post-disaster payout authorization.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#687185] font-bold">→</span>
                <span><strong>Cross-Border Regional Scaling:</strong> Expanding localized environmental risk modeling across Sub-Saharan climate corridors.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Tags */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E2536] text-xs text-[#9BA3B4]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[#687185]">Focus:</span>
          {["Climate-Risk Intelligence", "Resilience Finance Rails", "Parametric Architecture", "Emerging Markets Adaptation", "Low-Bandwidth UX"].map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg bg-[#0B0D13] border border-[#273144] font-mono text-[11px] text-[#2DD4BF]">
              {tag}
            </span>
          ))}
        </div>
        <span className="font-mono text-[11px] text-[#9BA3B4] italic">
          Distinction: Functional MVP developed · Future financing triggers in roadmap
        </span>
      </div>
    </div>
  );
}