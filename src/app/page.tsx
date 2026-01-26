import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import AchievementsSection from "@/components/landing/AchievementsSection";
import WhyChooseSection from "@/components/landing/WhyChooseSection";
import PartnerCTA from "@/components/landing/PartnerCTA";
import DestinationsShowcase from "@/components/landing/DestinationsShowcase"; 
import TravelGallerySection from "@/components/landing/ManufacturingGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DestinationsShowcase />
      <WhyChooseSection />
      <AchievementsSection />
      <TravelGallerySection />
      <PartnerCTA />
      <Footer />
    </main>
  );
}