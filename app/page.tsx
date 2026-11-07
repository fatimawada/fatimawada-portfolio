import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import VenturesSection from "./components/VenturesSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ResearchSection from "./components/ResearchSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#E10600] selection:text-white">
      {/* Sticky Clean Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About "Hello!" Section */}
        <AboutSection />

        {/* Featured Ventures */}
        <VenturesSection />

        {/* Collaborative & Innovation Projects */}
        <ProjectsSection />

        {/* Experience & Leadership Horizontal Scrolling Track */}
        <ExperienceSection />

        {/* Scientific Foundation & Research */}
        <ResearchSection />

        {/* Contact Section with Gigantic CONTACT & Overlapping Red Form Panel */}
        <ContactSection />
      </main>

      {/* Footer with Screen-Width "fatima." Wordmark */}
      <Footer />
    </div>
  );
}
