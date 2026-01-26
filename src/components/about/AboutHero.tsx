import React from 'react';

export default function AboutHero() {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center bg-hercules-dark-blue overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(0deg, rgba(12, 74, 110, 0.7) 0%, rgba(12, 74, 110, 0.4) 100%), url('/images/static-images/aboutpage/about-hero.jpg') center/cover no-repeat`
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
        <span className="inline-block py-1 px-3 border border-hercules-red text-hercules-red text-sm font-bold tracking-widest uppercase mb-2">
          Est. 2010
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
          Curating Memories <br /> Not Just Trips
        </h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mt-4">
          For over a decade, Happy Feet Tourism has been the bridge between wanderlust and reality.
        </p>
      </div>
    </div>
  );
}