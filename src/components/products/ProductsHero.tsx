import React from 'react';
import Image from 'next/image';

export default function DestinationsHero() {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          // Beautiful Map/Passport image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2021&q=80"
          alt="Destinations"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 text-center md:text-left px-6 container mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
          Explore Our <br/>
          <span className="text-orange-500">World Packages</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
          From the canals of Venice to the beaches of Maldives. 
          Choose from a wide range of meticulously planned holiday packages.
        </p>
      </div>
    </div>
  );
}