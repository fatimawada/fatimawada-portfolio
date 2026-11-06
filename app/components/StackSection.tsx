import React from "react";

export default function StackSection() {
  return (
    <section id="stack" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#34D399] uppercase tracking-wider mb-2.5 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          Technical Capabilities &amp; System Architecture
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] tracking-tight">
          Technical Stack &amp; Systems Philosophy
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2.5">
          Engineering pragmatic digital infrastructure optimized for high availability, transactional integrity, and low-connectivity African environments.
        </p>
      </div>

      {/* 4 Architectural Domains */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/50 transition-colors">
          <div className="text-xs font-mono text-[#34D399] font-semibold mb-2">01 · Application Layer</div>
          <h3 className="text-base font-bold text-[#F4F4F5] mb-4">Frontend &amp; UX</h3>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Next.js</span>
              <span className="font-mono text-[10px] text-[#34D399]">App Router / SSR</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">React 19</span>
              <span className="font-mono text-[10px]">Component Systems</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">TypeScript</span>
              <span className="font-mono text-[10px] text-[#3B82F6]">Strict Typings</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Tailwind CSS v4</span>
              <span className="font-mono text-[10px]">Responsive Design</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/50 transition-colors">
          <div className="text-xs font-mono text-[#34D399] font-semibold mb-2">02 · Data &amp; Security</div>
          <h3 className="text-base font-bold text-[#F4F4F5] mb-4">Backend &amp; DB</h3>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Supabase</span>
              <span className="font-mono text-[10px] text-[#34D399]">BaaS &amp; Auth</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">PostgreSQL</span>
              <span className="font-mono text-[10px]">Relational Schemas</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Row Level Security</span>
              <span className="font-mono text-[10px] text-[#34D399]">Multi-Tenant RLS</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">REST APIs</span>
              <span className="font-mono text-[10px]">Endpoint Design</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/50 transition-colors">
          <div className="text-xs font-mono text-[#34D399] font-semibold mb-2">03 · Financial &amp; Workflows</div>
          <h3 className="text-base font-bold text-[#F4F4F5] mb-4">Integrations &amp; Rails</h3>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Stripe API</span>
              <span className="font-mono text-[10px] text-[#3B82F6]">Payment Workflows</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Anchor Partner APIs</span>
              <span className="font-mono text-[10px] text-[#34D399]">Payment Compliance</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Resend</span>
              <span className="font-mono text-[10px]">Transactional Email</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">WhatsApp / Webhooks</span>
              <span className="font-mono text-[10px]">Frontline Messaging</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-[#10B981]/50 transition-colors">
          <div className="text-xs font-mono text-[#34D399] font-semibold mb-2">04 · Infrastructure</div>
          <h3 className="text-base font-bold text-[#F4F4F5] mb-4">DevOps &amp; Edge</h3>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Vercel</span>
              <span className="font-mono text-[10px] text-[#34D399]">Edge Deployment</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Git &amp; GitHub</span>
              <span className="font-mono text-[10px]">Version Control</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Semantic HTML</span>
              <span className="font-mono text-[10px] text-[#34D399]">SEO &amp; Accessibility</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#F4F4F5] font-medium">Turbopack</span>
              <span className="font-mono text-[10px]">Optimized Builds</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Engineering Philosophy Cards */}
      <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10">
        <div className="text-xs font-mono text-[#34D399] uppercase tracking-wider mb-2 font-semibold">
          Core Engineering Principles
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F4F5] tracking-tight mb-6">
          Technology should perform outside idealized demo environments.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-zinc-400">
          <div className="p-4 rounded-xl glass-card border border-white/10">
            <div className="text-xs font-mono text-[#10B981] font-bold mb-1.5">01 · Low-Bandwidth Resiliency</div>
            <p className="leading-relaxed">
              Minimizing payload footprints and eliminating unnecessary client-side overhead so essential workflows load across unstable 2G/3G connections.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-white/10">
            <div className="text-xs font-mono text-[#10B981] font-bold mb-1.5">02 · Human-Centered Realities</div>
            <p className="leading-relaxed">
              Designing software around the actual daily habits of frontline responders, operators, and informal merchants rather than abstract user manuals.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-white/10">
            <div className="text-xs font-mono text-[#10B981] font-bold mb-1.5">03 · Asynchronous Failover</div>
            <p className="leading-relaxed">
              Implementing multi-channel notification fallbacks across Email, SMS, and WhatsApp so critical financial and emergency alerts never fail in transit.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-white/10">
            <div className="text-xs font-mono text-[#10B981] font-bold mb-1.5">04 · Operational Simplicity</div>
            <p className="leading-relaxed">
              Solving systemic problems by eliminating friction rather than inventing gratuitous complexity that creates unmanageable technical debt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
