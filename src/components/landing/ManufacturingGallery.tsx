import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function TravelGallerySection() {
  // Real images from Unsplash
  const images = {
    small1: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80", // Mountains
    small2: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Beach
    small3: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80", // City
    small4: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80", // Safari
    large:  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"  // Group Travel
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Captured Moments</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from our happy travelers. From the peaks of the Himalayas to the beaches of Bali.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {/* Left Grid */}
          <div className="grid grid-cols-2 gap-4">
            <GalleryItem src={images.small1} alt="Mountain Trekking" />
            <GalleryItem src={images.small2} alt="Beach Relaxing" />
            <GalleryItem src={images.small3} alt="City Tour" />
            <GalleryItem src={images.small4} alt="Safari Adventure" />
          </div>
          {/* Right Large Image */}
          <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden group shadow-2xl">
             <Image 
                src={images.large} 
                alt="Group Tour Fun" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
             <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold">Group Expeditions</h3>
                <p>Join our next community trip.</p>
             </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 py-6 text-lg">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="relative h-40 sm:h-60 rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
      <Image src={src} alt={alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
    </div>
  );
}