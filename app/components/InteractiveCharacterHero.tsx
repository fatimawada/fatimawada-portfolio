"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

type ReactionState = "working" | "look_left" | "look_right" | "greeting";

interface ZoneConfig {
  start: number;
  end: number;
  holdSeconds?: number;
  loop?: boolean;
  label: string;
}

interface ManifestConfig {
  name: string;
  fps: number;
  totalFrames: number;
  format: string;
  framePrefix: string;
  zeroPad: number;
  zones: {
    working: ZoneConfig;
    look_left: ZoneConfig;
    look_right: ZoneConfig;
    greeting: ZoneConfig;
  };
}

const DEFAULT_MANIFEST: ManifestConfig = {
  name: "Fatima Binta Wada - Interactive Character Hero",
  fps: 24,
  totalFrames: 120,
  format: "webp",
  framePrefix: "frame_",
  zeroPad: 4,
  zones: {
    working: { start: 1, end: 24, loop: true, label: "Working on Laptop" },
    look_left: { start: 25, end: 48, holdSeconds: 2.5, label: "Looking Left" },
    look_right: { start: 49, end: 72, holdSeconds: 2.5, label: "Looking Right" },
    greeting: { start: 73, end: 120, holdSeconds: 3.0, label: "Greeting Visitor & Pointing Down" },
  },
};

export default function InteractiveCharacterHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // States
  const [reactionState, setReactionState] = useState<ReactionState>("working");
  const [activeZone, setActiveZone] = useState<"left" | "center" | "right">("center");
  const [hasFrames, setHasFrames] = useState<boolean>(false);
  const [hasVideo, setHasVideo] = useState<boolean>(false);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [manifest] = useState<ManifestConfig>(DEFAULT_MANIFEST);

  // 3D Parallax Tilt coordinates for portrait fallback
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });

  // Animation references
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const stateRef = useRef<ReactionState>("working");
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoldingRef = useRef<boolean>(false);
  const animFrameIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Synchronize stateRef with reactionState
  useEffect(() => {
    stateRef.current = reactionState;
  }, [reactionState]);

  // Check whether frames or direct video exist
  useEffect(() => {
    let isMounted = true;

    // Helper to format frame filename
    const getFrameUrl = (frameIndex: number) => {
      const pad = String(frameIndex).padStart(manifest.zeroPad, "0");
      return `/character/frames/${manifest.framePrefix}${pad}.${manifest.format}`;
    };

    // Test first frame availability
    const testImg = new window.Image();
    testImg.src = getFrameUrl(1);
    testImg.onload = () => {
      if (!isMounted) return;
      setHasFrames(true);

      // Preload image frames buffer
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;
      const total = manifest.totalFrames;

      for (let i = 1; i <= total; i++) {
        const img = new window.Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          loadedCount++;
          if (isMounted) {
            setLoadProgress(Math.round((loadedCount / total) * 100));
          }
        };
        img.onerror = () => {
          loadedCount++;
        };
        loadedImages.push(img);
      }
      framesRef.current = loadedImages;
    };
    testImg.onerror = () => {
      if (!isMounted) return;
      setHasFrames(false);

      // Check if character.mp4 exists instead
      const testVideo = document.createElement("video");
      testVideo.src = "/character/character.mp4";
      testVideo.onloadedmetadata = () => {
        if (!isMounted) return;
        setHasVideo(true);
      };
      testVideo.onerror = () => {
        if (!isMounted) return;
        setHasVideo(false);
      };
    };

    return () => {
      isMounted = false;
    };
  }, [manifest]);

  // Trigger state transition with hold timer
  const triggerTransition = useCallback(
    (newState: ReactionState) => {
      // Clear any pending hold timeout
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
      isHoldingRef.current = false;

      setReactionState(newState);
      stateRef.current = newState;

      const zone = manifest.zones[newState];
      targetFrameRef.current = zone.end;

      // Setup hold duration if specified
      if (zone.holdSeconds && newState !== "working") {
        const holdMs = zone.holdSeconds * 1000;
        holdTimerRef.current = setTimeout(() => {
          // After holding for 2-3 seconds, smoothly return to working
          setReactionState("working");
          stateRef.current = "working";
          targetFrameRef.current = manifest.zones.working.start;
          isHoldingRef.current = false;
        }, holdMs);
      }
    },
    [manifest]
  );

  // Mouse interaction tracker across 3 horizontal zones
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const normX = Math.max(0, Math.min(1, mouseX / rect.width));
      const normY = Math.max(0, Math.min(1, mouseY / rect.height));

      // Calculate 3D Parallax Tilt for fallback portrait
      const rotY = (normX - 0.5) * 18; // -9 to +9 degrees
      const rotX = (0.5 - normY) * 14; // -7 to +7 degrees
      setTilt({
        rotateX: rotX,
        rotateY: rotY,
        shineX: Math.round(normX * 100),
        shineY: Math.round(normY * 100),
      });

      // Horizontal Zone Partitioning (LEFT, CENTER, RIGHT)
      if (normX < 0.33) {
        // Left zone
        setActiveZone("left");
        if (stateRef.current !== "look_left" && !isHoldingRef.current) {
          triggerTransition("look_left");
        }
      } else if (normX > 0.67) {
        // Right zone
        setActiveZone("right");
        if (stateRef.current !== "look_right" && !isHoldingRef.current) {
          triggerTransition("look_right");
        }
      } else {
        // Center zone
        setActiveZone("center");
        // Center triggers greeting when cursor centers after an idle period
        if (stateRef.current === "working" && !isHoldingRef.current) {
          triggerTransition("greeting");
        }
      }
    },
    [triggerTransition]
  );

  const handleMouseLeave = useCallback(() => {
    // Reset parallax tilt
    setTilt({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });
    setActiveZone("center");
    // Return to working state smoothly
    if (stateRef.current !== "working") {
      triggerTransition("working");
    }
  }, [triggerTransition]);

  // Main Canvas Render Loop
  useEffect(() => {
    if (!hasFrames) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isRunning = true;

    const render = (time: number) => {
      if (!isRunning) return;

      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      // Smooth frame interpolation toward target
      const current = currentFrameRef.current;
      const target = targetFrameRef.current;

      if (Math.abs(current - target) > 0.1) {
        const step = (target - current) * Math.min(1, delta * 14);
        currentFrameRef.current = current + step;
      } else {
        currentFrameRef.current = target;
        // If looping in working state
        if (stateRef.current === "working" && manifest.zones.working.loop) {
          const wStart = manifest.zones.working.start;
          const wEnd = manifest.zones.working.end;
          if (current >= wEnd - 0.5) {
            currentFrameRef.current = wStart;
            targetFrameRef.current = wEnd;
          }
        }
      }

      // Draw current frame on canvas
      const frameIdx = Math.max(
        1,
        Math.min(manifest.totalFrames, Math.round(currentFrameRef.current))
      );
      const img = framesRef.current[frameIdx - 1];

      if (img && img.complete && img.naturalWidth > 0) {
        // High DPI scaling
        const dpr = window.devicePixelRatio || 1;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
          canvas.width = width * dpr;
          canvas.height = height * dpr;
        }

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);

        // Aspect ratio cover calculation
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = width / height;
        let drawWidth = width;
        let drawHeight = height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawHeight = width / imgRatio;
          offsetY = (height - drawHeight) / 2;
        } else {
          drawWidth = height * imgRatio;
          offsetX = (width - drawWidth) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        ctx.restore();
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [hasFrames, manifest]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm sm:max-w-md select-none group"
    >
      {/* Ambient Aura Frame reacting to cursor */}
      <div
        className="absolute -inset-4 bg-gradient-to-tr from-[#10B981]/25 via-white/5 to-[#D4AF37]/20 rounded-3xl blur-2xl opacity-60 transition-all duration-500"
        style={{
          transform: `translate(${tilt.rotateY * 1.5}px, ${-tilt.rotateX * 1.5}px)`,
        }}
      />

      {/* Main Smoked Glass Character Card */}
      <div
        className="relative p-2.5 sm:p-3 rounded-3xl glass-card border border-white/15 shadow-2xl shadow-black transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.rotateY}deg) rotateX(${tilt.rotateX}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#08080A] border border-white/10">
          {/* MODE 1: Canvas Frame Player (When animation frames exist) */}
          {hasFrames ? (
            <div className="relative w-full h-full">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-cover block"
                style={{ imageRendering: "auto" }}
              />
              {loadProgress < 100 && (
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#34D399]">
                  Buffering {loadProgress}%
                </div>
              )}
            </div>
          ) : hasVideo ? (
            /* MODE 2: Direct Video Scrubbing (If character.mp4 dropped in public/character) */
            <video
              ref={videoRef}
              src="/character/character.mp4"
              playsInline
              muted
              loop
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            /* MODE 3: Elevated 3D Interactive Portrait Fallback */
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/fatima-binta-wada.jpg"
                alt="Fatima Binta Wada - Technology Entrepreneur, Founder & Product Leader"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                className="object-cover object-center transition-transform duration-500"
                style={{
                  transform: `scale(1.05) translate(${tilt.rotateY * 0.4}px, ${-tilt.rotateX * 0.4}px)`,
                }}
              />

              {/* Dynamic Interactive Light Sheen */}
              <div
                className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
                }}
              />
            </div>
          )}

          {/* Editorial Gradient Overlay for lower readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/95 via-transparent to-transparent opacity-90 pointer-events-none" />

          {/* Interactive Zone Indicator Badges */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            <span
              className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-all border ${
                activeZone === "left"
                  ? "bg-[#10B981]/25 text-[#34D399] border-[#10B981]/50 scale-105"
                  : "bg-black/40 text-zinc-500 border-white/5"
              }`}
            >
              ← Left Zone
            </span>
            <span
              className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-all border ${
                activeZone === "center"
                  ? "bg-[#10B981]/25 text-[#34D399] border-[#10B981]/50 scale-105"
                  : "bg-black/40 text-zinc-500 border-white/5"
              }`}
            >
              ✦ Center (Greeting)
            </span>
            <span
              className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-all border ${
                activeZone === "right"
                  ? "bg-[#10B981]/25 text-[#34D399] border-[#10B981]/50 scale-105"
                  : "bg-black/40 text-zinc-500 border-white/5"
              }`}
            >
              Right Zone →
            </span>
          </div>

          {/* Executive Founder Badge with Active Telemetry */}
          <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl glass-card border border-white/15 backdrop-blur-xl shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-sm font-semibold text-[#F4F4F5]">Fatima Binta Wada</div>
                <div className="text-[11px] text-[#34D399] font-mono">Founder &amp; CEO · Relyvora</div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[10px] font-mono font-semibold text-[#34D399] border border-[#10B981]/30">
                Active Venture
              </span>
            </div>

            {/* Live Interactive Reaction State Indicator */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
              <span className="text-zinc-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                Reaction State:
              </span>
              <span className="text-[#F4F4F5] font-semibold">
                {manifest.zones[reactionState]?.label || reactionState}
              </span>
            </div>

            {/* Touch-Friendly Action Buttons for Mobile Users */}
            <div className="grid grid-cols-3 gap-1.5 mt-2.5 pt-2 border-t border-white/5">
              <button
                type="button"
                onClick={() => triggerTransition("look_left")}
                className={`py-1 px-2 rounded-lg text-[10px] font-mono font-medium transition-colors border ${
                  reactionState === "look_left"
                    ? "bg-[#10B981] text-[#08080A] border-[#10B981] font-bold"
                    : "glass-card text-zinc-400 border-white/10 hover:text-white"
                }`}
              >
                Look Left
              </button>
              <button
                type="button"
                onClick={() => triggerTransition("greeting")}
                className={`py-1 px-2 rounded-lg text-[10px] font-mono font-medium transition-colors border ${
                  reactionState === "greeting"
                    ? "bg-[#10B981] text-[#08080A] border-[#10B981] font-bold"
                    : "glass-card text-zinc-400 border-white/10 hover:text-white"
                }`}
              >
                Wave Hello
              </button>
              <button
                type="button"
                onClick={() => triggerTransition("look_right")}
                className={`py-1 px-2 rounded-lg text-[10px] font-mono font-medium transition-colors border ${
                  reactionState === "look_right"
                    ? "bg-[#10B981] text-[#08080A] border-[#10B981] font-bold"
                    : "glass-card text-zinc-400 border-white/10 hover:text-white"
                }`}
              >
                Look Right
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
