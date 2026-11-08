"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play greeting audio automatically on load / first user gesture with zero visual UI
  useEffect(() => {
    const audio = new Audio("/media/fatima_greeting.mp4");
    audio.preload = "auto";
    audioRef.current = audio;

    let hasStarted = false;

    const startAudio = () => {
      if (hasStarted || !audioRef.current) return;
      hasStarted = true;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});

      document.removeEventListener("pointerdown", startAudio);
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("keydown", startAudio);
      window.removeEventListener("scroll", startAudio);
    };

    // Attempt immediate unmuted autoplay
    const immediatePromise = audio.play();
    if (immediatePromise !== undefined) {
      immediatePromise
        .then(() => {
          hasStarted = true;
        })
        .catch(() => {
          // If browser policy restricts autoplay before user interaction,
          // start voice greeting instantly on first user click/touch/scroll/key
          document.addEventListener("pointerdown", startAudio, { once: true, passive: true });
          document.addEventListener("click", startAudio, { once: true, passive: true });
          document.addEventListener("touchstart", startAudio, { once: true, passive: true });
          document.addEventListener("keydown", startAudio, { once: true, passive: true });
          window.addEventListener("scroll", startAudio, { once: true, passive: true });
        });
    }

    return () => {
      document.removeEventListener("pointerdown", startAudio);
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("keydown", startAudio);
      window.removeEventListener("scroll", startAudio);
      audio.pause();
    };
  }, []);

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
          
          {/* Left Column: Eyebrow, Headline, Punchy Sub-text, Buttons (NO voice note UI box, NO double about copy) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-white/20">
              TECHNOLOGY LEADER &amp; INNOVATOR
            </span>

            {/* Headline */}
            <div>
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-[4.2rem] font-extrabold text-white leading-[1.08] tracking-tight">
                Hi, I&apos;m a<br />
                Technology Entrepreneur &amp; Product Builder.
              </h1>
            </div>

            {/* Sub-text (Concise, punchy - no repetition with About section) */}
            <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-xl leading-relaxed font-normal">
              I work at the intersection of financial infrastructure, climate innovation, and digital health. I build early-stage ventures and lead multidisciplinary initiatives to solve systemic problems across emerging markets and beyond.
            </p>

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

          {/* Right Column: Unboxed, Free-Floating Cutout Photo on Red Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Gentle Floating Motion Container */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[720/1024] flex items-center justify-center"
            >
              {/* Subtle back depth illumination */}
              <div className="absolute inset-8 rounded-full bg-white/10 blur-3xl pointer-events-none" />

              {/* Unboxed portrait: No borders, no card box, transparent cutout feathered into red canvas */}
              <div className="relative w-full h-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
                <Image
                  src="/images/fatima_pink_blazer_cutout.png"
                  alt="Fatima Binta Wada - Technology Entrepreneur & Product Builder"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl select-none pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </motion.div>
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
