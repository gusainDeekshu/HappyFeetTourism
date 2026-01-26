import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import CommitmentSection from "@/components/about/CommitmentSection";
import ServicesGrid from "@/components/about/ServicesGrid";
import ReadyToTravel from "@/components/about/ReadyToBuild";
import WhyChooseHappyFeet from "@/components/about/WhyChooseHappyFeet";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <CommitmentSection />
      <ServicesGrid /> {/* Shows Tour Categories */}
      <WhyChooseHappyFeet />
      <ReadyToTravel />
      <Footer />
    </main>
  );
}