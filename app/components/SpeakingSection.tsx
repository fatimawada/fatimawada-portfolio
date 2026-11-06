import React from "react";

export default function SpeakingSection() {
  return (
    <section id="speaking" className="py-20 sm:py-28 bg-[#08080A]/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#34D399] uppercase tracking-wider mb-2.5 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Global Engagements &amp; Academic Honors
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] tracking-tight">
            Speaking &amp; Recognition
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2.5">
            Presenting technology-enabled infrastructure, healthcare innovation, and entrepreneurial leadership across international forums.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: International Engagements */}
          <div className="lg:col-span-8 space-y-6">
            {/* Nairobi Milestone Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border-2 border-[#10B981]/30 shadow-xl shadow-black/50 hover:border-[#10B981] transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30 text-xs font-mono font-semibold">
                  International Innovation Presentation
                </span>
                <span className="text-xs font-mono text-zinc-400">Nairobi, Kenya</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F4F5] mb-2">
                SnakeHack Africa
              </h3>
              <div className="text-xs font-mono text-[#34D399] mb-4">
                Supported under the Wellcome Snakebite Innovation Initiative
              </div>

              <p className="text-xs sm:text-sm text-[#F4F4F5]/85 leading-relaxed mb-6">
                Presented Bite2Care to a distinguished international panel of healthcare clinicians, public health researchers, and innovation judges in Nairobi, Kenya. Articulated the system architecture for low-bandwidth emergency triage, receiving-facility antivenom verification, and rural ambulance coordination across Sub-Saharan Africa.
              </p>

              <div className="p-4 rounded-xl glass-card border border-white/10 text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-3">
                <span>Focus: Emergency Systems · Antivenom Verification · Frontline Healthtech</span>
                <a
                  href="https://bite2-care.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#34D399] hover:underline flex items-center gap-1"
                >
                  <span>View Project</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Philippines Engagement Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 shadow-md hover:border-white/25 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono font-semibold">
                  International Business Conference
                </span>
                <span className="text-xs font-mono text-zinc-400">Philippines</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F5] mb-2">
                AIM Global International Conference
              </h3>
              <div className="text-xs font-mono text-zinc-400 mb-3">
                Entrepreneurship, Coaching &amp; Cross-Border Networking
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Participated in international business summits in the Philippines as Team Leader, engaging with global entrepreneurial delegations on distributed team coaching, leadership development, cross-cultural collaboration, and commercial community building.
              </p>
            </div>
          </div>

          {/* Right Column: Academic Honors & Speaker Inquiry Box */}
          <div className="lg:col-span-4 space-y-6">
            {/* Academic Honors */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 shadow-md">
              <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-4 font-semibold">
                Academic Honors &amp; Awards
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl glass-card border border-white/10">
                  <h4 className="text-sm font-bold text-[#F4F4F5] mb-1">
                    Face of MCB Award of Excellence
                  </h4>
                  <div className="text-xs text-zinc-400">
                    Departmental Recognition · Bayero University Kano
                  </div>
                </div>

                <div className="p-4 rounded-xl glass-card border border-white/10">
                  <h4 className="text-sm font-bold text-[#F4F4F5] mb-1">
                    Queen of Life Sciences Award of Merit
                  </h4>
                  <div className="text-xs text-zinc-400">
                    Faculty of Life Sciences Leadership Recognition · Bayero University Kano
                  </div>
                </div>
              </div>
            </div>

            {/* Speaking / Panel Invitations */}
            <div className="p-6 rounded-3xl glass-card border border-[#34D399]/30 shadow-lg">
              <div className="h-10 w-10 rounded-xl bg-[#10B981]/15 text-[#34D399] flex items-center justify-center mb-4 border border-[#10B981]/30">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </div>

              <h4 className="text-lg font-bold text-[#F4F4F5] mb-2">
                Speaking &amp; Panel Inquiries
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Available for keynote presentations, panels, and guest sessions on financial infrastructure for informal markets, climate finance mechanisms, digital health coordination, and African venture building.
              </p>

              <a
                href="mailto:hello@fatimawada.com?subject=Speaking%20or%20Panel%20Invitation%20-%20Fatima%20Binta%20Wada"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#10B981] text-[#08080A] font-bold text-xs hover:bg-[#34D399] transition-all shadow-md shadow-[#10B981]/20"
              >
                <span>Send Speaker Inquiry</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
