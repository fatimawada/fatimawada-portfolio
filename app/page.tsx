import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExpertiseSection from "./components/ExpertiseSection";
import StackSection from "./components/StackSection";
import ProjectsSection from "./components/ProjectsSection";
import CredentialsSection from "./components/CredentialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#CE1126] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section with Animated Video Window */}
        <Hero />

        {/* Expertise Section */}
        <ExpertiseSection />

        {/* Technical Stack */}
        <StackSection />

        {/* Featured Ventures & Projects */}
        <ProjectsSection />

        {/* Credentials & Recognition */}
        <CredentialsSection />

        {/* Contact Form with Giant Typography */}
        <ContactSection />
      </main>

      {/* Iconic Statement Footer */}
      <Footer />
    </div>
  );
}
