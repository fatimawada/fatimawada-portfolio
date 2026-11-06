"use client";

import React, { useState } from "react";
import RelyvoraFeature from "./ventures/RelyvoraFeature";
import RelyvoraFoundationFeature from "./ventures/RelyvoraFoundationFeature";
import PulseClimeFeature from "./ventures/PulseClimeFeature";
import ChaseFreeFeature from "./ventures/ChaseFreeFeature";

export default function VenturesSection() {
  const [activeVentureTab, setActiveVentureTab] = useState<"all" | "relyvora" | "foundation" | "pulseclime" | "chasefree">("all");

  return (
    <section id="ventures" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#34D399] uppercase tracking-wider mb-2.5 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Entrepreneurial Ventures &amp; Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] tracking-tight">
            Ventures &amp; Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2.5 max-w-2xl">
            Companies, infrastructure models, and founder-led systems built to transform informal commerce, unlock climate finance, and automate business operations.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-card border border-white/10 text-xs font-mono self-start md:self-auto shadow-sm">
          <button
            onClick={() => setActiveVentureTab("all")}
            className={`px-3.5 py-1.5 rounded-xl transition-all ${
              activeVentureTab === "all"
                ? "bg-[#10B981] text-[#08080A] font-bold shadow-sm"
                : "text-zinc-400 hover:text-[#F4F4F5] hover:bg-white/5"
            }`}
          >
            All Ventures (4)
          </button>
          <button
            onClick={() => setActiveVentureTab("relyvora")}
            className={`px-3.5 py-1.5 rounded-xl transition-all ${
              activeVentureTab === "relyvora"
                ? "bg-[#10B981] text-[#08080A] font-bold shadow-sm"
                : "text-zinc-400 hover:text-[#F4F4F5] hover:bg-white/5"
            }`}
          >
            Relyvora (Primary)
          </button>
          <button
            onClick={() => setActiveVentureTab("foundation")}
            className={`px-3.5 py-1.5 rounded-xl transition-all ${
              activeVentureTab === "foundation"
                ? "bg-[#E07A5F] text-[#08080A] font-bold shadow-sm"
                : "text-zinc-400 hover:text-[#F4F4F5] hover:bg-white/5"
            }`}
          >
            Foundation
          </button>
          <button
            onClick={() => setActiveVentureTab("pulseclime")}
            className={`px-3.5 py-1.5 rounded-xl transition-all ${
              activeVentureTab === "pulseclime"
                ? "bg-[#0D9488] text-[#08080A] font-bold shadow-sm"
                : "text-zinc-400 hover:text-[#F4F4F5] hover:bg-white/5"
            }`}
          >
            PulseClime
          </button>
          <button
            onClick={() => setActiveVentureTab("chasefree")}
            className={`px-3.5 py-1.5 rounded-xl transition-all ${
              activeVentureTab === "chasefree"
                ? "bg-[#3B82F6] text-[#08080A] font-bold shadow-sm"
                : "text-zinc-400 hover:text-[#F4F4F5] hover:bg-white/5"
            }`}
          >
            ChaseFree
          </button>
        </div>
      </div>

      <div className="space-y-16">
        {/* Venture 1: Relyvora */}
        {(activeVentureTab === "all" || activeVentureTab === "relyvora") && (
          <RelyvoraFeature />
        )}

        {/* Venture 2: Relyvora Foundation */}
        {(activeVentureTab === "all" || activeVentureTab === "foundation") && (
          <RelyvoraFoundationFeature />
        )}

        {/* Venture 3: PulseClime */}
        {(activeVentureTab === "all" || activeVentureTab === "pulseclime") && (
          <PulseClimeFeature />
        )}

        {/* Venture 4: ChaseFree */}
        {(activeVentureTab === "all" || activeVentureTab === "chasefree") && (
          <ChaseFreeFeature />
        )}
      </div>
    </section>
  );
}
