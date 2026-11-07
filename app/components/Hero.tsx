"use client";

import React, { useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handlePlayVoice = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.muted = false;
    videoRef.current.play();
    setIsMuted(false);
  };

  return (
    <section id="home" className="relative bg-[#CE1126] text-white pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Decorative Subtle Curved Red Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/30" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#A50D1D] blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-12 right-0 w-80 h-80 rounded-full bg-[#E50914] blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="text-xl sm:text-2xl font-medium tracking-tight text-white/95">
              Hi, I&apos;m a
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Technology Entrepreneur
            </h1>

            <div className="text-lg sm:text-xl font-medium text-white/90">
              Founder &amp; Product Leader · Fatima Binta Wada
            </div>

            <p className="text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
              Building technology, financial infrastructure, and modern digital solutions that solve systemic challenges across emerging markets and beyond.
            </p>

            {/* Interactive Voice Greeting Speech Bubble */}
            <div className="w-full max-w-lg p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePlayVoice}
                  className="h-10 w-10 rounded-full bg-white text-[#CE1126] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform flex-shrink-0 shadow-md"
                  title="Play audio greeting"
                >
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="text-xs sm:text-sm text-white font-medium leading-snug">
                  &ldquo;Welcome to my portfolio! I&apos;m excited to share my work and connect with you.&rdquo;
                </div>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-1 rounded bg-white/15 text-white/90 flex-shrink-0">
                Voice Note
              </span>
            </div>

            {/* Two Main Rounded Pill CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#CE1126] font-bold text-sm sm:text-base hover:bg-white/95 active:scale-95 transition-all shadow-xl"
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
          </div>

          {/* Right Column: macOS-Styled Character Window Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md rounded-3xl bg-[#111827] shadow-2xl overflow-hidden border border-white/15">
              {/* macOS Window Controls Header */}
              <div className="bg-[#1F2937] px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
                  <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
                  <span className="h-3 w-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="text-[11px] font-mono text-zinc-400">
                  Fatima Binta Wada · Video
                </div>
                <button
                  type="button"
                  onClick={toggleSound}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 transition-colors"
                >
                  {isMuted ? "🔇 Unmute" : "🔊 Sound On"}
                </button>
              </div>

              {/* Character Video Screen */}
              <div className="relative aspect-[4/5] bg-black overflow-hidden group">
                <video
                  ref={videoRef}
                  src="/media/fatima_greeting.mp4"
                  poster="/media/fatima_poster.jpg"
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />

                {/* Sound Prompt Overlay Banner */}
                {isMuted && (
                  <button
                    type="button"
                    onClick={toggleSound}
                    className="absolute bottom-4 left-4 right-4 py-2.5 px-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-black/90 transition-colors shadow-lg"
                  >
                    <svg className="w-4 h-4 text-[#CE1126]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span>Tap to listen to greeting 🔊</span>
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
