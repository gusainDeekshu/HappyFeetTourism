import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DestinationsHero from "@/components/products/ProductsHero"; // We will fix this component next
import DestinationsList from "@/components/landing/DestinationsShowcase"; // Reuse the showcase component

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <DestinationsHero />
      
      <div className="py-12">
        <DestinationsList /> 
      </div>
      
      <Footer />
    </main>
  );
}