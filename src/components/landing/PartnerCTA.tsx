import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function PartnerCTA() {
  return (
    // Changed bg-hercules-dark-blue to bg-slate-900 (Standard Tailwind)
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Your Next Adventure <br className="hidden md:block" />
          Awaits You
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light">
          Stop dreaming and start packing. Let our experts craft the perfect itinerary for you today.
        </p>

        <Link href="/contact">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-8 rounded-full shadow-lg transition-all">
            Start Planning Now
          </Button>
        </Link>
      </div>
    </section>
  );
}