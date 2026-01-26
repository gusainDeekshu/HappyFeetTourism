import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryHero from "@/components/projects/ProjectsHero";
import GalleryGrid from "@/components/projects/ProjectsGrid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </main>
  );
}