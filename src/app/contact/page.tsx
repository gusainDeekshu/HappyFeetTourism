import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <Footer />
    </main>
  );
}