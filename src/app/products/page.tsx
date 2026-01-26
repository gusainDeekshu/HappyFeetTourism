import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductCatalog from "@/components/products/ProductCatalog";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-hercules-blue">
      {/* NOTE: Since this page has a dark hero image at the top, 
         the transparent Navbar we built for Home will work perfectly here too.
      */}
      <Navbar />
      
      <ProductsHero />
      
      <ProductCatalog />
      
      <Footer />
    </main>
  );
}