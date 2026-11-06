"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import VenturesSection from "./components/VenturesSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ResearchSection from "./components/ResearchSection";
import SpeakingSection from "./components/SpeakingSection";
import StackSection from "./components/StackSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Dynamically load ambient 3D Canvas without blocking SSR
const AmbientCanvas = dynamic(() => import("./components/3d/AmbientCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F4F4F5] font-sans selection:bg-[#10B981]/25 selection:text-white overflow-x-hidden">
      {/* Interactive 3D Ambient Anti-Gravity Canvas */}
      <AmbientCanvas />

      {/* Subtle Ambient Grid Scanline Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <VenturesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResearchSection />
        <SpeakingSection />
        <StackSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
