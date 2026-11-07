"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt immediate unmuted autoplay
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          // If browser restricts unmuted autoplay, start muted and unlock on first user gesture
          video.muted = true;
          video.play();
          setIsMuted(true);

          const unlockAudio = () => {
            if (video) {
              video.muted = false;
              setIsMuted(false);
            }
            window.removeEventListener("pointermove", unlockAudio);
            window.removeEventListener("scroll", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
            window.removeEventListener("click", unlockAudio);
          };

          window.addEventListener("pointermove", unlockAudio, { once: true });
          window.addEventListener("scroll", unlockAudio, { once: true });
          window.addEventListener("touchstart", unlockAudio, { once: true });
          window.addEventListener("click", unlockAudio, { once: true });
        });
    }
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* 50/50 Split Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
        
        {/* Left Side: Primary Red Background (#E63946) with White Text */}
        <div className="bg-[#E63946] text-white flex items-center justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-24 relative">
          {/* Subtle architectural depth accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl w-full flex flex-col items-start space-y-7 relative z-10"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/95 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Technology Leader &amp; Innovator
            </span>

            {/* Headline Layout */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Hi, I&apos;m Fatima Binta Wada, a Technology Entrepreneur &amp; Full-Stack Developer.
            </h1>

            {/* Sub-text Layout */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal">
              I build fast, scalable, and secure digital products, focusing on transactional trust and infrastructure.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#E63946] font-bold text-sm sm:text-base hover:bg-white/95 active:scale-95 transition-all shadow-xl"
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
        </div>

        {/* Right Side: Crisp White Background (#FFFFFF) with Continuous Subtle Floating Animated Portrait */}
        <div className="bg-[#FFFFFF] flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-24 relative overflow-hidden">
          {/* Subtle soft backdrop radial */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white pointer-events-none" />

          {/* Continuous Subtle Floating Animation Container */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] flex items-center justify-center"
          >
            {/* Portrait Frame with Clean Shadow */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              <video
                ref={videoRef}
                src="/media/fatima_greeting.mp4"
                poster="/media/fatima_poster.jpg"
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover object-top select-none"
              />

              {/* Sound Toggle Pill */}
              <button
                type="button"
                onClick={toggleSound}
                className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-medium border border-white/20 transition-all flex items-center gap-1.5 shadow-md active:scale-95"
                title={isMuted ? "Unmute greeting audio" : "Mute audio"}
                aria-label="Toggle greeting sound"
              >
                <span>{isMuted ? "🔇" : "🔊"}</span>
                <span className="hidden sm:inline">{isMuted ? "Unmute" : "Sound On"}</span>
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
