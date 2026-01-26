import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function ReadyToTravel() {
  return (
    <section className="py-24 bg-hercules-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Explore the World?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Your dream destination is just a click away. Let's make it happen.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-hercules-blue hover:bg-gray-100 font-bold px-8 py-6 rounded-full">
              Get Free Consultation
            </Button>
          </Link>
          <Link href="/destinations">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full bg-transparent">
              Browse Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}