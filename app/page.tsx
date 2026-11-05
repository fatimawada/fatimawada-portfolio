"use client";

import React from "react";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0D13] text-[#F6F4EE] font-sans selection:bg-[#10B981]/25 selection:text-[#F6F4EE]">
      {/* Refined Ambient Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#10B981]/8 via-[#121620]/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-[#0D9488]/6 blur-[160px] rounded-full" />
        <div className="absolute top-[70%] left-[-10%] w-[600px] h-[600px] bg-[#3B82F6]/5 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
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