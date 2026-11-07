import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection";
import StackSection from "./components/StackSection";
import ProjectsSection from "./components/ProjectsSection";
import CredentialsSection from "./components/CredentialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#E10600] selection:text-white">
      {/* Sticky Clean Navbar with "Fatima ." Wordmark */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Full-Screen Pure Red Hero with Cut-out Photo & Voice-Note Card */}
        <Hero />

        {/* About "Hello!" Section with Tilted Hanging ID Badge */}
        <AboutSection />

        {/* My Expertise with Tilted Red Cards along Dotted Path */}
        <ExpertiseSection />

        {/* Technical Stack Categorized Grid */}
        <StackSection />

        {/* Featured Work with Project Cards & Other Repositories */}
        <ProjectsSection />

        {/* System Badges with Horizontal Scrolling Credentials Track */}
        <CredentialsSection />

        {/* Contact Section with Gigantic CONTACT & Overlapping Red Form Panel */}
        <ContactSection />
      </main>

      {/* Footer with Giant Screen-Width "fatima." Wordmark */}
      <Footer />
    </div>
  );
}
