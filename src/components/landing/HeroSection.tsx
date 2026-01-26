import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    // Added bg-slate-900 as a fallback color so text is visible if image fails
    <div className="relative w-full h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image 
            // Using a real travel image URL
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Travel Background"
            fill
            className="object-cover opacity-60" // Opacity ensures text pops
            priority
         />
         {/* Gradient Overlay for better text readability */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
        <div className="animate-fadeInUp">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">
            Est. 2010 • World Travel Awards Winner
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg mt-4">
            Don't Just Visit. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Live The Moment.
            </span>
            </h1>
        </div>

        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
          Premium all-inclusive tour packages to the world's most beautiful destinations. 
          We handle the planning; you handle the memories.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
          <Link href="/destinations">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-7 text-lg rounded-full shadow-lg shadow-orange-500/30 transition-all hover:scale-105">
              View Packages
            </Button>
          </Link>
          
          <Link href="/contact">
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold px-10 py-7 text-lg rounded-full bg-transparent transition-all">
              Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}