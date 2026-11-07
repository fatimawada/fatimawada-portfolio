"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const email = "hello@fatimawada.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white overflow-hidden text-[#111827]">
      {/* Giant Background Typography: "CONTACT" (Exact style from reference) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full text-center">
        <span className="text-[18vw] font-black uppercase text-zinc-100 tracking-tighter leading-none block">
          CONTACT
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Vibrant Crimson Red Contact Card */}
        <div className="rounded-3xl bg-[#CE1126] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/80">
                Reach Out
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Let&apos;s build infrastructure that matters.
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                Open to venture collaborations, fintech partnerships, speaking panels, and high-impact innovation initiatives.
              </p>

              {/* Email Box */}
              <div className="pt-4 border-t border-white/20">
                <div className="text-xs font-mono text-white/70 mb-1">Direct Email:</div>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="text-base sm:text-lg font-bold font-mono text-white hover:underline"
                  >
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="px-2.5 py-1 rounded bg-white/20 hover:bg-white/30 text-xs font-mono text-white transition-colors"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/fatima-wada-0b43ab399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#CE1126] text-xs font-bold transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/fatimawada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#CE1126] text-xs font-bold transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7 bg-[#B70F20] p-6 sm:p-8 rounded-2xl shadow-inner">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-white text-[#CE1126] font-bold text-sm uppercase tracking-wider hover:bg-white/95 transition-all shadow-lg active:scale-95"
                >
                  {formSent ? "Thank You! Message Sent" : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
