"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleVoiceNote = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/media/fatima_greeting.mp4");
    }

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
      audioRef.current.onended = () => setIsPlayingAudio(false);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full bg-[#E10600] text-white pt-28 sm:pt-36 pb-32 sm:pb-44 overflow-hidden"
    >
      {/* Background radial accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#A00400]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio, Voice-Note Card, CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Small pill-shaped label */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              Technology Leader &amp; Innovator
            </span>

            {/* Huge bold white heading (two lines) */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
              Hi, I&apos;m a<br />
              Technology Entrepreneur
            </h1>

            {/* Short white paragraph */}
            <p className="text-base sm:text-lg text-white/95 max-w-xl leading-relaxed font-normal">
              I build fast, scalable, and secure digital products, focusing on transactional trust and infrastructure across emerging markets and beyond.
            </p>

            {/* Voice-Note Card with Quote */}
            <div className="w-full max-w-lg p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-4">
              <button
                type="button"
                onClick={toggleVoiceNote}
                className="w-12 h-12 rounded-full bg-white text-[#E10600] flex items-center justify-center font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-md shrink-0"
                aria-label={isPlayingAudio ? "Pause voice note" : "Play voice note"}
              >
                {isPlayingAudio ? "⏸" : "▶"}
              </button>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Voice Note {isPlayingAudio && "• Playing"}
                  </span>
                  <span className="text-xs text-white/60">0:04</span>
                </div>
                <p className="text-xs sm:text-sm text-white font-medium italic line-clamp-2">
                  &ldquo;Welcome to my portfolio! I&apos;m excited to share my work and connect with you.&rdquo;
                </p>
              </div>

              {/* Decorative Audio Waveform */}
              <div className="hidden sm:flex items-center gap-1 shrink-0 h-6">
                {[12, 22, 16, 24, 18, 14, 20].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}px` }}
                    className={`w-1 rounded-full bg-white transition-all ${
                      isPlayingAudio ? "animate-pulse" : "opacity-60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Two Pill Buttons: View My Work & Contact Me */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#111111] font-bold text-sm sm:text-base hover:bg-white/95 active:scale-95 transition-all shadow-xl"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white text-white font-bold text-sm sm:text-base hover:bg-white/10 active:scale-95 transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Cut-out Photo overlapping Red Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] flex items-center justify-center">
              
              {/* Subtle back illumination glow */}
              <div className="absolute inset-4 rounded-3xl bg-white/20 blur-2xl pointer-events-none" />

              {/* Portrait cut-out card container overlapping the red background */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-b from-white/10 to-black/20">
                <Image
                  src="/images/fatima_headset_portrait.jpg"
                  alt="Fatima Binta Wada"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                
                {/* Subtle bottom edge gradient feather */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#E10600]/80 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Curved White Wave Edge leading into next section */}
      <div className="absolute -bottom-1 inset-x-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-14 sm:h-20 text-white fill-current"
        >
          <path d="M0,0 C220,100 450,-20 680,60 C900,130 1080,20 1200,70 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
