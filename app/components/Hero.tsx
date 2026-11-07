"use client";

import React, { useRef, useEffect, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Auto-play immediately with speech on load
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt unmuted playback immediately on page load
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          // If browser restricts unmuted autoplay before interaction,
          // play muted first and unlock audio on very first mousemove/scroll/tap
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
    <section
      id="home"
      className="relative bg-[#CE1126] text-white pt-10 pb-28 sm:pt-16 sm:pb-36 overflow-hidden"
    >
      {/* Subtle Depth Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/30" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#A50D1D] blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-12 right-0 w-80 h-80 rounded-full bg-[#E50914] blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Bio & Buttons (Matching Reference Exactly) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <span className="text-xl sm:text-2xl font-medium tracking-tight text-white/95">
              Hi, I&apos;m a
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Technology Entrepreneur
            </h1>

            <p className="text-base sm:text-lg text-white/90 max-w-lg leading-relaxed">
              I build technology, financial infrastructure, and modern digital solutions across emerging markets and beyond.
            </p>

            {/* Two Main Rounded Pill CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
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

          {/* Right Column: Character Video & Angled Laptop (Seamless, Unboxed, Matching Reference) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md sm:max-w-lg flex justify-center">
              
              {/* Unboxed Seamless Character Video */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]">
                <video
                  ref={videoRef}
                  src="/media/fatima_greeting.mp4"
                  poster="/media/fatima_poster.jpg"
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                />
              </div>

              {/* Minimal floating sound toggle button */}
              <button
                type="button"
                onClick={toggleSound}
                className="absolute top-3 right-3 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-xs border border-white/20 transition-all shadow-md active:scale-95"
                title={isMuted ? "Unmute audio" : "Mute audio"}
                aria-label="Toggle greeting sound"
              >
                {isMuted ? "🔇" : "🔊"}
              </button>

              {/* Angled Silver Laptop Graphic (matching reference frame_01.jpg) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 w-44 sm:w-60 z-20 pointer-events-none drop-shadow-2xl">
                <svg
                  viewBox="0 0 280 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  {/* Laptop Lid (Angled Perspective) */}
                  <path
                    d="M30 40 L230 15 L260 145 L60 170 Z"
                    fill="#D1D5DB"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                  />
                  {/* Inner Screen Bezel Shadow */}
                  <path
                    d="M38 45 L224 22 L252 140 L66 163 Z"
                    fill="#E5E7EB"
                  />
                  {/* Apple / Monogram Logo on Lid */}
                  <circle cx="145" cy="92" r="14" fill="#9CA3AF" opacity="0.8" />
                  <path
                    d="M145 74 C148 70 152 70 153 68 C151 72 149 75 145 77 Z"
                    fill="#9CA3AF"
                    opacity="0.8"
                  />
                  {/* Laptop Base / Keyboard Lip */}
                  <path
                    d="M60 170 L260 145 L275 155 L75 178 Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Seamless Fluid Wave Transition into White Section (Matching Reference frame_07.jpg) */}
      <div className="absolute -bottom-1 inset-x-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 text-white fill-current"
        >
          <path d="M0,0 C200,90 400,-30 600,45 C800,120 1000,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
