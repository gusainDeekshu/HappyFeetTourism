import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-hercules-blue">
      <Navbar />

      <ProjectsHero />

      <ProjectsGrid />

      <Footer />
    </main>
  );
}