import React from "react";

export default function RelyvoraFeature() {
  return (
    <div className="relative rounded-3xl glass-card border-2 border-[#10B981]/50 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/80 hover:border-[#10B981] transition-all duration-300">
      {/* Top Pill & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30 text-xs font-mono font-semibold uppercase tracking-wider">
            Primary Entrepreneurial Venture · Operating Company
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-mono font-semibold hidden sm:inline-block">
            FinTech &amp; Social Commerce
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/20 text-[#34D399] border border-[#10B981]/40 text-xs font-mono font-bold">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          Featured Flagship
        </span>
      </div>

      {/* Title & Core Positioning */}
      <div className="mb-6">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F4F5] tracking-tight mb-2">
          Relyvora
        </h3>
        <p className="text-lg sm:text-xl text-[#34D399] font-mono font-medium">
          Building Trust and Payment Infrastructure for Social Commerce
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 font-mono mt-3">
          <span className="text-[#F4F4F5] font-semibold">Founder &amp; CEO / Product and Technology Lead</span>
          <span className="text-zinc-600">|</span>
          <span>Operating Company · Nigeria to Pan-Africa</span>
        </div>
      </div>

      {/* Narrative & Infrastructure Partner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#F4F4F5]/85 leading-relaxed">
          <p>
            Social commerce across Africa is exploding, yet it remains anchored on deep structural vulnerability: buyers and sellers frequently transact through chat channels like WhatsApp and Instagram without reliable transaction protection. Sellers suffer from order abandonment, logistics delivery refusal, and cash-on-delivery defaults; buyers dread paying upfront due to pervasive scams and unfulfilled deliveries.
          </p>
          <p>
            <strong>Relyvora</strong> addresses this systemic trust void by engineering financial and transactional rails tailored for informal social commerce. We provide protected payment workflows where buyer funds are securely held pending delivery confirmation, and released to the vendor through a unique release code.
          </p>
          <p>
            Relyvora is not merely a checkout application; it is real financial infrastructure designed to turn high-friction informal social commerce into an accountable, transparent, and trustworthy economic engine.
          </p>
        </div>

        {/* Infrastructure Partner Box & Business Model */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl glass-card border border-[#10B981]/30">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-[#34D399] uppercase tracking-wider">
              <svg className="w-4 h-4 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Infrastructure Partnership</span>
            </div>
            <h4 className="text-sm font-bold text-[#F4F4F5] mb-1">
              Anchor Technologies Limited
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Relyvora is an established company with a partnership with <strong>Anchor Technologies Limited</strong>, supporting its payment and compliance infrastructure arrangements.
            </p>
            <div className="mt-3 text-[11px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1.5 rounded-lg border border-[#D4AF37]/20">
              Institutional Distinction: Relyvora is the operating venture; Anchor is its payment and compliance infrastructure partner.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-white/10">
            <div className="text-xs font-mono font-semibold text-[#D4AF37] uppercase tracking-wider mb-1.5">
              Business Model
            </div>
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="text-2xl font-bold font-mono text-[#F4F4F5]">3%</span>
              <span className="text-xs text-zinc-400 font-mono">Proposed Transaction Fee</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              A transaction-based revenue model aligning company revenue directly with successful, dispute-free settlement between buyer and merchant.
            </p>
          </div>
        </div>
      </div>

      {/* What We Are Building: 5 Core Infrastructure Capabilities */}
      <div className="mb-10">
        <div className="text-xs font-mono text-[#34D399] uppercase tracking-wider mb-4 font-semibold">
          What We Are Building · Core System Workflows
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/40 transition-colors">
            <div className="text-xs font-bold text-[#F4F4F5] mb-1.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              Protected Payment Workflows
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Secure payment holding pending delivery confirmation, protecting buyers from scams and merchants from non-payment.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/40 transition-colors">
            <div className="text-xs font-bold text-[#F4F4F5] mb-1.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              Transaction Coordination
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Buyer and seller transaction coordination across WhatsApp and Instagram, transforming unstructured chats into verifiable agreements.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/40 transition-colors">
            <div className="text-xs font-bold text-[#F4F4F5] mb-1.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              Unique Release Codes
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Delivery verification through unique release codes issued to the buyer, surrendered to the courier/seller only upon physical delivery confirmation.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/40 transition-colors">
            <div className="text-xs font-bold text-[#F4F4F5] mb-1.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              Automated Vendor Settlement
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Payment release workflows connecting verified delivery directly to vendor settlement, ensuring immediate payout without manual delays.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/40 transition-colors sm:col-span-2 lg:col-span-2">
            <div className="text-xs font-bold text-[#34D399] mb-1.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
              Accountable Informal Commerce Rails
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Infrastructure designed to make informal social commerce more accountable and trustworthy, generating verifiable track records for African micro-merchants.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Responsibilities & Market Expansion Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pt-8 border-t border-white/10">
        {/* Founder Leadership Responsibilities */}
        <div className="p-5 rounded-2xl glass-card border border-white/10">
          <h4 className="text-xs font-mono font-bold text-[#F4F4F5] uppercase tracking-wider mb-3">
            My Executive Responsibilities
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">✓</span>
              <span><strong>Company Formation &amp; Strategic Direction:</strong> Establishing corporate governance, operating vision, and executive execution.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">✓</span>
              <span><strong>Product Architecture &amp; Development:</strong> Designing end-to-end payment holding, escrow verification, and release flows.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">✓</span>
              <span><strong>Payment Workflow Design:</strong> Designing cryptographic release code mechanics and automated settlement logic.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">✓</span>
              <span><strong>Technical Implementation &amp; Integrations:</strong> Engineering platform APIs and backend workflows connecting to partner payment rails.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">✓</span>
              <span><strong>Partner Coordination:</strong> Structuring compliance and payment rail integrations with Anchor Technologies Limited.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">✓</span>
              <span><strong>Market Entry &amp; Expansion Strategy:</strong> Formulating merchant acquisition channels, launch cadence, and expansion roadmap.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#10B981] font-bold">✓</span>
              <span><strong>Business Model Development:</strong> Modeling transaction-based unit economics and fee structures.</span>
            </li>
          </ul>
        </div>

        {/* Pan-African Expansion Vision */}
        <div className="p-5 rounded-2xl glass-card border border-white/10">
          <h4 className="text-xs font-mono font-bold text-[#F4F4F5] uppercase tracking-wider mb-3">
            Market Expansion Vision
          </h4>
          <div className="space-y-3.5 text-xs">
            <div className="p-3.5 rounded-xl glass-card border border-white/10">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-[#F4F4F5]">Initial Market · Nigeria</span>
                <span className="font-mono text-[10px] text-[#34D399] px-2 py-0.5 rounded bg-[#10B981]/15">Launch Pad</span>
              </div>
              <p className="text-zinc-400">Deploying core escrow infrastructure across Nigeria&apos;s high-volume social commerce ecosystem in Lagos, Abuja, Kano, and beyond.</p>
            </div>

            <div className="p-3.5 rounded-xl glass-card border border-white/10">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-[#F4F4F5]">Regional Expansion</span>
                <span className="font-mono text-[10px] text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/15">Ghana · Kenya · South Africa</span>
              </div>
              <p className="text-zinc-400">Planned expansion into key African social commerce powerhouses, adapting to regional mobile money and banking infrastructure.</p>
            </div>

            <div className="p-3.5 rounded-xl glass-card border border-white/10">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-[#F4F4F5]">Continental Scale · Whole of Africa</span>
                <span className="font-mono text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/5">Pan-African Horizon</span>
              </div>
              <p className="text-zinc-400">Establishing universal trust and verified delivery rails for cross-border African commerce, unlocking unprecedented regional trade.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Venture Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
        <div className="text-xs text-zinc-400 font-mono">
          Official Venture Platforms &amp; Working Prototypes:
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://relyvora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#10B981] text-[#08080A] font-bold text-xs hover:bg-[#34D399] transition-all shadow-md shadow-[#10B981]/20"
          >
            <span>Company Website (relyvora.com)</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="https://ng.relyvora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl glass-card text-[#F4F4F5] border border-white/15 font-medium text-xs hover:border-[#10B981] transition-all"
          >
            <span>Nigeria Platform (ng.relyvora.com)</span>
            <svg className="w-3.5 h-3.5 text-[#34D399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="https://relyvora.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl glass-card text-zinc-400 border border-white/10 font-medium text-xs hover:text-[#F4F4F5] hover:border-white/20 transition-all"
          >
            <span>Prototype (relyvora.vercel.app)</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
