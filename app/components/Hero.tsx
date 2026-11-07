"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Play greeting audio automatically on load
  useEffect(() => {
    const audio = new Audio("/media/fatima_greeting.mp4");
    audioRef.current = audio;
    audio.preload = "auto";

    // Attempt immediate unmuted autoplay
    audio.muted = false;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlayingAudio(true);
        })
        .catch(() => {
          // If browser policy blocks immediate sound without interaction,
          // unlock audio on first user touch/scroll/pointer movement
          const unlock = () => {
            if (audioRef.current) {
              audioRef.current.currentTime = 0;
              audioRef.current.play().then(() => {
                setIsPlayingAudio(true);
              }).catch(() => {});
            }
            window.removeEventListener("pointermove", unlock);
            window.removeEventListener("scroll", unlock);
            window.removeEventListener("touchstart", unlock);
            window.removeEventListener("click", unlock);
          };

          window.addEventListener("pointermove", unlock, { once: true });
          window.addEventListener("scroll", unlock, { once: true });
          window.addEventListener("touchstart", unlock, { once: true });
          window.addEventListener("click", unlock, { once: true });
        });
    }

    audio.onended = () => {
      setIsPlayingAudio(false);
    };

    return () => {
      audio.pause();
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => {
        setIsPlayingAudio(true);
      }).catch(() => {});
    }
  };

  return (
    <section
      id="home"
      className="relative w-full bg-[#E10600] text-white pt-28 sm:pt-36 pb-32 sm:pb-44 overflow-hidden"
    >
      {/* Subtle depth lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#A00400]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Top Badge, Headline, Sub-text, Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Top Badge */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              TECHNOLOGY LEADER &amp; INNOVATOR
            </span>

            {/* Headline (h1) */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[4.2rem] text-white leading-[1.08] tracking-tight">
              Hi, I&apos;m Fatima Binta Wada, a Technology Entrepreneur &amp; Product Builder.
            </h1>

            {/* Sub-text (p) */}
            <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-xl leading-relaxed font-normal">
              I work at the intersection of financial infrastructure, climate innovation, and digital health. I build early-stage ventures and lead multidisciplinary initiatives to solve systemic problems across emerging markets and beyond.
            </p>

            {/* Discreet Audio Waveform Indicator & Sound Toggle */}
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={toggleAudio}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold transition-all active:scale-95"
                title={isPlayingAudio ? "Pause greeting" : "Replay greeting"}
                aria-label="Toggle voice greeting"
              >
                <span>{isPlayingAudio ? "🔊 Voice Playing" : "🔈 Voice Greeting"}</span>
                {/* Micro waveform graphic */}
                <span className="flex items-center gap-0.5 h-3.5">
                  {[8, 14, 10, 16, 11].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}px` }}
                      className={`w-0.5 rounded-full bg-white transition-all ${
                        isPlayingAudio ? "animate-pulse" : "opacity-50"
                      }`}
                    />
                  ))}
                </span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#ventures"
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
              
              {/* Back illumination glow */}
              <div className="absolute inset-4 rounded-3xl bg-white/20 blur-2xl pointer-events-none" />

              {/* Portrait cut-out card container overlapping the red background */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-b from-white/10 to-black/20">
                <Image
                  src="/images/fatima_headset_portrait.jpg"
                  alt="Fatima Binta Wada - Technology Entrepreneur & Product Builder"
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
