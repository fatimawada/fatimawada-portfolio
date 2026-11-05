import React from "react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1E2536]">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-2.5 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
          Multidisciplinary &amp; Collaborative Projects
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F6F4EE] tracking-tight">
          Selected Innovation Projects
        </h2>
        <p className="text-sm sm:text-base text-[#9BA3B4] mt-2.5">
          High-impact collaborative healthtech initiatives and systems engineered to eliminate life-critical bottlenecks in underserved environments.
        </p>
      </div>

      {/* FEATURED CASE STUDY: BITE2CARE */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#181216] to-[#120D10] border-2 border-[#E11D48]/40 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/70 hover:border-[#E11D48] transition-all duration-300">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#E11D48]/15 text-[#FB7185] border border-[#E11D48]/30 text-xs font-mono font-semibold uppercase tracking-wider">
              Digital Health · Emergency Innovation · Public Health
            </span>
            <span className="text-xs font-mono text-[#FB7185] px-2.5 py-1 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/20 hidden sm:inline-block">
              Working Prototype Concept
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#FB7185] border border-[#E11D48]/40 text-xs font-mono font-bold">
            Multidisciplinary Team Project
          </span>
        </div>

        {/* Title & Metadata */}
        <div className="mb-6">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F6F4EE] tracking-tight mb-2">
            Bite2Care
          </h3>
          <p className="text-base sm:text-lg text-[#FB7185] font-mono">
            Technology-Enabled Emergency Coordination for Snakebite Treatment in Rural Africa
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#9BA3B4] font-mono mt-3">
            <span className="text-[#FB7185] font-semibold">Role: Product &amp; Technology Lead (Multidisciplinary Team)</span>
            <span className="text-[#273144]">|</span>
            <span>Wellcome Snakebite Innovation Initiative / SnakeHack Africa</span>
          </div>
        </div>

        {/* International Presentation Milestone Banner */}
        <div className="p-5 rounded-2xl bg-[#E11D48]/10 border border-[#E11D48]/30 mb-8 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-[#E11D48]/20 text-[#FB7185] flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <div className="text-xs sm:text-sm text-[#F6F4EE]/90 leading-relaxed">
            <strong className="text-[#FB7185] block font-semibold mb-0.5">International Presentation · Nairobi, Kenya</strong>
            Presented Bite2Care on behalf of our multidisciplinary team at <span className="font-semibold text-white">SnakeHack Africa in Nairobi, Kenya</span>, an international innovation initiative supported by the Wellcome Trust snakebite programme, demonstrating our system architecture to clinicians, international judges, and public health innovators.
          </div>
        </div>

        {/* The Problem & The Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-[#0B0D13] border border-[#273144]">
            <div className="text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-2 font-semibold">
              The Systemic Problem
            </div>
            <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
              Snakebite envenoming is a neglected tropical disease causing severe mortality and amputation across rural Africa. Delays in treatment are catastrophic: victims consult unverified traditional remedies, lack emergency transport, and frequently travel hours to distant clinics only to find zero antivenom in stock.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0D13] border border-[#273144]">
            <div className="text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-2 font-semibold">
              The Technology Coordination Solution
            </div>
            <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
              Bite2Care engineers an interconnected emergency triage and referral coordination system. Conceived for Africa-wide impact with Nigeria as our primary implementation focus, it coordinates community first responders, receiving clinics, and transport logistics to drastically compress the critical window from bite to verified antivenom infusion.
            </p>
          </div>
        </div>

        {/* 6 Key System Capabilities */}
        <div className="mb-8">
          <div className="text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-4 font-semibold">
            System Capabilities &amp; Architecture
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#0B0D13]/70 border border-[#273144]">
              <div className="text-xs font-bold text-[#F6F4EE] mb-1">Emergency Referral Coordination</div>
              <p className="text-xs text-[#9BA3B4] leading-relaxed">
                Connects community first responders to nearest verified care points, orchestrating pre-arrival notifications so clinical teams prepare.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D13]/70 border border-[#273144]">
              <div className="text-xs font-bold text-[#F6F4EE] mb-1">Structured First-Aid Guidance</div>
              <p className="text-xs text-[#9BA3B4] leading-relaxed">
                Deterministic first-aid decision trees dispensing clinically validated dos and don&apos;ts to halt harmful traditional interventions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D13]/70 border border-[#273144]">
              <div className="text-xs font-bold text-[#F6F4EE] mb-1">Facility Readiness &amp; Antivenom Verification</div>
              <p className="text-xs text-[#9BA3B4] leading-relaxed">
                Real-time verification protocols ensuring patients are only dispatched to healthcare facilities with verified antivenom stocks on hand.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D13]/70 border border-[#273144]">
              <div className="text-xs font-bold text-[#F6F4EE] mb-1">Patient Transport Coordination</div>
              <p className="text-xs text-[#9BA3B4] leading-relaxed">
                Rural driver and ambulance dispatch coordination designed to evacuate victims from inaccessible agrarian terrain swiftly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D13]/70 border border-[#273144]">
              <div className="text-xs font-bold text-[#F6F4EE] mb-1">Low-Bandwidth Technology</div>
              <p className="text-xs text-[#9BA3B4] leading-relaxed">
                Zero heavy dependencies; lightweight code bundles engineered to load reliably across spotty 2G and edge network coverage.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D13]/70 border border-[#273144]">
              <div className="text-xs font-bold text-[#FB7185] mb-1">WhatsApp Frontline Interaction</div>
              <p className="text-xs text-[#9BA3B4] leading-relaxed">
                Chatbot interfaces enabling community health workers and traditional healers to trigger emergency workflows directly in WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Community Engagement & Traditional Healers Integration */}
        <div className="p-5 rounded-2xl bg-[#0B0D13] border border-[#273144] mb-8 text-xs text-[#9BA3B4] leading-relaxed">
          <strong className="text-[#F6F4EE] block mb-1">Community Integration &amp; Traditional Healer Referral Pathways:</strong>
          Recognizing that traditional healers are often the first point of contact after a snakebite, the Bite2Care protocol integrates them into the emergency notification chain—equipping them to initiate clinical referral instead of administering delayed traditional remedies.
        </div>

        {/* Team Project Attribution & Prototype Link */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#1E2536]">
          <div className="text-xs text-[#9BA3B4] italic max-w-xl">
            Multidisciplinary team project developed for innovation challenge. Status: Working prototype concept (not deployed as an active clinical device).
          </div>

          <a
            href="https://bite2-care.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E11D48] text-white font-semibold text-xs hover:bg-[#c9183d] transition-all shadow-md shadow-[#E11D48]/25 flex-shrink-0"
          >
            <span>Explore Bite2Care Prototype</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}