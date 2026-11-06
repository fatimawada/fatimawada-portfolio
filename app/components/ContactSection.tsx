"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = "hello@fatimawada.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl glass-card border-2 border-[#10B981]/40 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-black">
        {/* Subtle Ambient Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#34D399] uppercase tracking-wider mb-3.5 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Initiate Conversation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F4F5] tracking-tight mb-4">
            Let&apos;s build infrastructure that matters.
          </h2>

          <p className="text-base sm:text-lg text-[#F4F4F5]/90 leading-relaxed mb-4">
            I am actively engaged in venture building, infrastructure innovation, and high-impact partnerships. I welcome conversations regarding:
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 mb-8 font-mono">
            <li className="flex items-center gap-2">
              <span className="text-[#10B981]">✦</span>
              <span>International fellowships and leadership programmes</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#10B981]">✦</span>
              <span>Global innovation summits, keynotes, and speaking panels</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#10B981]">✦</span>
              <span>Strategic venture partnerships and financial infrastructure collaborations</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#10B981]">✦</span>
              <span>Climate innovation, adaptation funds, and sustainable development initiatives</span>
            </li>
          </ul>

          {/* Direct Email Display & Copy Action */}
          <div className="p-4 sm:p-5 rounded-2xl glass-card border border-white/10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] font-mono text-zinc-400 font-semibold">Direct Professional Email</div>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm sm:text-base font-semibold text-[#F4F4F5] hover:text-[#34D399] transition-colors font-mono"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-card hover:bg-white/10 text-xs font-semibold text-[#F4F4F5] border border-white/10 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <svg className="w-4 h-4 text-[#34D399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#34D399]">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}?subject=Partnership%20or%20Speaking%20Inquiry%20-%20Fatima%20Binta%20Wada`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#10B981] text-[#08080A] font-bold text-xs hover:bg-[#34D399] transition-all shadow-md shadow-[#10B981]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
              >
                <span>Send Message</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/fatima-wada-0b43ab399"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-white/10 text-[#F4F4F5] text-xs font-semibold hover:border-[#10B981] hover:text-[#34D399] transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="https://github.com/fatimawada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-white/10 text-[#F4F4F5] text-xs font-semibold hover:border-[#10B981] hover:text-[#34D399] transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub (@fatimawada)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
