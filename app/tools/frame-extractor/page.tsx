"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

interface ExtractedFrame {
  index: number;
  dataUrl: string;
  blob: Blob;
  filename: string;
}

export default function FrameExtractorPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [fps, setFps] = useState<number>(24);
  const [isExtracting, setIsExtracting] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [frames, setFrames] = useState<ExtractedFrame[]>([]);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setFrames([]);
      setProgress(0);
      setStatusMessage("Video loaded. Ready to extract frames.");
    }
  };

  const extractFrames = async () => {
    if (!videoRef.current || !videoFile) return;

    const video = videoRef.current;
    const canvas = canvasRef.current || document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsExtracting(true);
    setFrames([]);
    setProgress(0);
    setStatusMessage("Analyzing video duration and properties...");

    // Wait until video metadata is ready
    if (video.readyState < 1) {
      await new Promise((resolve) => {
        video.onloadedmetadata = resolve;
      });
    }

    const duration = video.duration;
    const totalFramesToExtract = Math.floor(duration * fps);
    const interval = 1 / fps;
    const extractedList: ExtractedFrame[] = [];

    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;

    setStatusMessage(`Extracting ${totalFramesToExtract} frames at ${fps} FPS...`);

    for (let i = 0; i < totalFramesToExtract; i++) {
      const targetTime = i * interval;
      video.currentTime = targetTime;

      await new Promise((resolve) => {
        video.onseeked = resolve;
      });

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const frameNumber = i + 1;
      const pad = String(frameNumber).padStart(4, "0");
      const filename = `frame_${pad}.webp`;

      // Convert canvas to WebP blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((b) => resolve(b!), "image/webp", 0.9);
      });

      const dataUrl = canvas.toDataURL("image/webp", 0.9);

      extractedList.push({
        index: frameNumber,
        dataUrl,
        blob,
        filename,
      });

      const pct = Math.round(((i + 1) / totalFramesToExtract) * 100);
      setProgress(pct);
      setStatusMessage(`Extracted frame ${i + 1} of ${totalFramesToExtract} (${pct}%)`);
    }

    setFrames(extractedList);
    setIsExtracting(false);
    setStatusMessage(
      `Extraction complete! Extracted ${extractedList.length} optimized WebP frames.`
    );
  };

  const downloadAllFrames = () => {
    if (frames.length === 0) return;

    frames.forEach((f, idx) => {
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(f.blob);
        a.download = f.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, idx * 120);
    });
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-[#F4F4F5] p-6 sm:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#34D399] uppercase tracking-wider mb-1 font-semibold">
              Sri Tech Interactive Hero Tool
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Character Video-to-Frames Extractor
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Extract optimized WebP frame sequences for Fatima&apos;s interactive character hero.
            </p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 rounded-xl glass-card text-xs font-mono text-zinc-300 hover:text-white border border-white/10"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
          <h2 className="text-sm font-bold text-[#F4F4F5] uppercase tracking-wider font-mono">
            How to Use This Tool:
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <li>
              Generate your continuous character video using Google Flow, Kling AI, or Runway using the recommended sequence (Working → Look Left → Look Right → Greeting Visitor &amp; Point Down).
            </li>
            <li>
              Select or drop your generated <code>.mp4</code> video file below.
            </li>
            <li>
              Click <strong>&ldquo;Extract WebP Frames&rdquo;</strong> to extract high-quality, web-optimized frames.
            </li>
            <li>
              Save the frames into your project at <code>public/character/frames/</code>.
            </li>
          </ol>
        </div>

        {/* Video Upload & Settings */}
        <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-6">
          <div>
            <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
              Select Character Video (.mp4 / .webm):
            </label>
            <input
              type="file"
              accept="video/mp4,video/webm,video/quicktime"
              onChange={handleFileChange}
              className="block w-full text-xs text-zinc-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#10B981] file:text-[#08080A] hover:file:bg-[#34D399] file:cursor-pointer cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">
                Target Frame Rate (FPS):
              </label>
              <select
                value={fps}
                onChange={(e) => setFps(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-[#08080A] border border-white/10 text-xs font-mono text-[#F4F4F5]"
              >
                <option value={15}>15 FPS (Ultra Lightweight)</option>
                <option value={20}>20 FPS (Smooth &amp; Fast)</option>
                <option value={24}>24 FPS (Cinematic Default)</option>
                <option value={30}>30 FPS (High Fidelity)</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={extractFrames}
                disabled={!videoFile || isExtracting}
                className="w-full px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#08080A] font-bold text-xs transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-[#10B981]/20"
              >
                {isExtracting ? `Extracting (${progress}%)` : "Extract WebP Frames"}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          {isExtracting && (
            <div className="space-y-2">
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/10">
                <div
                  className="bg-[#10B981] h-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs font-mono text-zinc-400">{statusMessage}</p>
            </div>
          )}

          {/* Hidden Canvas and Preview Video */}
          {videoUrl && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-zinc-400">Video Source Preview:</div>
              <video
                ref={videoRef}
                src={videoUrl}
                controls
                className="w-full max-h-64 rounded-xl bg-black border border-white/10 object-contain"
              />
              <canvas ref={canvasRef} className="hidden" />
            </div>
          )}
        </div>

        {/* Results & Download Section */}
        {frames.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-[#F4F4F5]">
                  Extracted {frames.length} WebP Frames
                </h3>
                <p className="text-xs text-zinc-400">
                  Ready to copy into <code>public/character/frames/</code>
                </p>
              </div>

              <button
                type="button"
                onClick={downloadAllFrames}
                className="px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#34D399] text-[#08080A] font-bold text-xs transition-all shadow-md"
              >
                Download All Frames (.webp)
              </button>
            </div>

            {/* Frame Grid Preview */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-h-96 overflow-y-auto p-2 bg-[#08080A]/60 rounded-xl border border-white/10">
              {frames.map((frame) => (
                <div key={frame.index} className="space-y-1 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={frame.dataUrl}
                    alt={frame.filename}
                    className="w-full aspect-[4/5] object-cover rounded-lg border border-white/10"
                  />
                  <div className="text-[9px] font-mono text-zinc-500 truncate">
                    {frame.filename}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
