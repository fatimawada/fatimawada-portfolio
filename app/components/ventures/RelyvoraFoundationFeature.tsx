import React from "react";

export default function RelyvoraFoundationFeature() {
  return (
    <div className="relative rounded-3xl glass-card border-2 border-[#E07A5F]/40 p-6 sm:p-10 lg:p-12 shadow-xl shadow-black/60 hover:border-[#E07A5F] transition-all duration-300">
      {/* Top Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#E07A5F]/15 text-[#F4A261] border border-[#E07A5F]/30 text-xs font-mono font-semibold uppercase tracking-wider">
            Social-Impact Initiative · Digital Inclusion Arm
          </span>
          <span className="text-xs font-mono text-[#E07A5F] px-2.5 py-1 rounded-full bg-[#E07A5F]/10 border border-[#E07A5F]/20 hidden sm:inline-block">
            Distinct Social-Impact Identity
          </span>
        </div>
        <span className="text-xs font-mono text-[#F4A261] px-3 py-1 rounded-full bg-[#E07A5F]/15 border border-[#E07A5F]/30">
          Grassroots Opportunity &amp; Access
        </span>
      </div>

      {/* Title & Role */}
      <div className="mb-6">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F4F5] tracking-tight mb-2">
          Relyvora Foundation
        </h3>
        <p className="text-base sm:text-lg text-[#F4A261] font-mono">
          Expanding Access, Economic Participation &amp; Digital Inclusion for Underserved Communities
        </p>
        <div className="text-xs text-zinc-400 font-mono mt-2">
          Role: Initiative Founder &amp; Director · Social-Impact Dimension of the Relyvora Vision
        </div>
      </div>

      {/* Core Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#F4F4F5]/85 leading-relaxed">
          <p>
            The <strong>Relyvora Foundation</strong> represents the social-impact dimension of my broader entrepreneurial vision. While Relyvora operates as a commercial financial infrastructure venture, the Foundation embodies an enduring commitment to expanding access, economic participation, digital inclusion, and tangible opportunities for underserved communities across Nigeria and the wider African continent.
          </p>
          <p>
            Millions of informal micro-traders, artisans, youth, and women operate on the fringes of the formal financial system. For these communities, economic security requires more than transactional software—it demands structured pathways to digital literacy, equitable economic participation, and access to sustainable livelihood tools.
          </p>
          <p>
            The Foundation is established as a distinct social-impact initiative associated with the wider Relyvora vision, while maintaining an autonomous mission and identity. It is structured to accommodate future grassroots programmes, educational partnerships, community capacity building, and transparent impact documentation.
          </p>
        </div>

        {/* 3 Core Impact Pillars */}
        <div className="lg:col-span-4 space-y-3.5">
          <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10">
            <div className="text-xs font-mono font-semibold text-[#F4A261] mb-1">01 · Economic Participation</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Lowering barriers for informal micro-merchants to participate safely and equitably in digital commerce.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10">
            <div className="text-xs font-mono font-semibold text-[#F4A261] mb-1">02 · Digital Inclusion</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Equipping underserved community traders with practical knowledge to utilize modern technology tools with confidence.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10">
            <div className="text-xs font-mono font-semibold text-[#F4A261] mb-1">03 · Underserved Opportunity</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Designing targeted initiatives for women and youth entrepreneurs facing systemic exclusion from formal trade channels.
            </p>
          </div>
        </div>
      </div>

      {/* Framework for Future Initiatives & Partnerships */}
      <div className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-xs font-mono text-[#F4A261] uppercase tracking-wider mb-1 font-semibold">
            Institutional Engagement &amp; Partnership Channel
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
            Conceived as an adaptable vehicle to host forthcoming community programmes, civil society collaborations, and impact reporting as our initiatives roll out.
          </p>
        </div>

        <a
          href="mailto:hello@fatimawada.com?subject=Relyvora%20Foundation%20Inquiry%20-%20Partnership"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E07A5F]/20 text-[#F4A261] border border-[#E07A5F]/40 hover:bg-[#E07A5F] hover:text-[#08080A] transition-all text-xs font-semibold flex-shrink-0 shadow-sm"
        >
          <span>Connect Regarding Foundation Initiatives</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
