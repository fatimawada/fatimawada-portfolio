import React from "react";

export default function ChaseFreeFeature() {
  return (
    <div className="relative rounded-3xl glass-card border-2 border-[#3B82F6]/40 p-6 sm:p-10 lg:p-12 shadow-xl shadow-black/60 hover:border-[#3B82F6] transition-all duration-300">
      {/* Top Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <span className="px-3 py-1 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] border border-[#3B82F6]/30 text-xs font-mono font-semibold uppercase tracking-wider">
          Founder-Led Software Venture · Business Automation
        </span>
        <span className="text-xs font-mono text-[#60A5FA] px-2.5 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20">
          Full-Stack Product Architecture
        </span>
      </div>

      {/* Title & Role */}
      <div className="mb-6">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F4F5] tracking-tight mb-2">
          ChaseFree
        </h3>
        <p className="text-base sm:text-lg text-[#60A5FA] font-mono">
          AI-Enabled Accounts Receivable &amp; Payment Recovery Platform
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 font-mono mt-3">
          <span className="text-[#F4F4F5] font-semibold">Role: Founder &amp; Full-Stack Product Builder</span>
          <span className="text-zinc-600">|</span>
          <span>B2B SaaS · Cash-Flow Visibility &amp; Recovery</span>
        </div>
      </div>

      <p className="text-sm sm:text-base text-[#F4F4F5]/85 leading-relaxed mb-8 max-w-3xl">
        ChaseFree helps agencies and service businesses automate overdue invoice follow-ups, reduce manual collection work, and improve cash-flow visibility. Manually chasing clients for late payments drains productive billable hours, introduces uncomfortable tension into client relationships, and creates volatile working capital gaps. ChaseFree automates the entire payment recovery lifecycle with intelligent, escalating notification cadences.
      </p>

      {/* Core Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10">
          <div className="text-xs font-bold text-[#F4F4F5] mb-1.5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            Automated Invoice Reminders
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Multi-stage scheduled reminder cadences customized for tone and timing, from friendly early nudges to formal final notices.
          </p>
        </div>

        <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10">
          <div className="text-xs font-bold text-[#F4F4F5] mb-1.5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            Multi-Channel Workflows
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Coordinated email follow-up sequences with planned SMS and messaging fallbacks to ensure notifications reach decision-makers.
          </p>
        </div>

        <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10">
          <div className="text-xs font-bold text-[#F4F4F5] mb-1.5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            Payment Detection &amp; Auto-Halt
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Instantly terminates follow-up sequences the exact moment settlement is confirmed via webhook, completely preventing double-dunning friction.
          </p>
        </div>

        <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10">
          <div className="text-xs font-bold text-[#F4F4F5] mb-1.5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            Accounts Receivable Monitoring
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Continuous tracking of invoice age cohorts (30/60/90+ days), giving business owners clear visibility into days sales outstanding (DSO).
          </p>
        </div>

        <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10">
          <div className="text-xs font-bold text-[#F4F4F5] mb-1.5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            Recurring Invoice Cadences
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Automated reminder logic specifically tailored for monthly retainers and recurring service contracts typical in digital agencies.
          </p>
        </div>

        <div className="p-4 rounded-xl glass-card glass-card-hover border border-white/10">
          <div className="text-xs font-bold text-[#60A5FA] mb-1.5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
            Accounting Sync Architecture
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Designed with standardized ledger synchronization schemas to ingest invoice status and reconcile payments with QuickBooks and Xero.
          </p>
        </div>
      </div>

      {/* Developed vs Planned Distinction */}
      <div className="p-5 rounded-2xl glass-card border border-white/10 mb-8 text-xs text-zinc-400">
        <div className="font-semibold text-[#F4F4F5] mb-1">Architecture Disclosure:</div>
        <div>
          Core email scheduling, invoice tracking, and webhook-driven payment auto-cancellation are fully implemented. Bidirectional QuickBooks/Xero ledger sync and automated WhatsApp delivery pathways are part of the active development roadmap.
        </div>
      </div>

      {/* Stack Badges */}
      <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/10">
        <span className="text-xs font-mono text-zinc-400 mr-2">Built With:</span>
        {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe API", "Resend"].map((tech) => (
          <span key={tech} className="px-2.5 py-1 rounded-lg glass-card border border-white/10 text-xs font-mono text-[#60A5FA]">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
