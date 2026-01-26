import React from 'react';
import Image from 'next/image';

export default function PartnersStrip() {
  const partners = [
    // Update these filenames to match your uploaded SVGs
    { name: "Garmin", logo: "/images/partner-logos/garmin.svg" },
    { name: "Polar", logo: "/images/partner-logos/polar.svg" },
    { name: "Rouvy", logo: "/images/partner-logos/rouvy.svg" },
    { name: "Strava", logo: "/images/partner-logos/strava.svg" },
    { name: "Stryd", logo: "/images/partner-logos/stryd.svg" },
    { name: "Wahoo", logo: "/images/partner-logos/wahoo-systm.svg" },
  ];

  return (
    <div className="py-12 px-16 bg-hercules-dark-blue border-y border-white/5">
      <div className="container mx-auto px-20">
        
        {/* Responsive Flex Container */}
        <div className="flex flex-wrap justify-center gap-10">
          
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="relative h-5 w-24 md:h-6 md:w-30 opacity-60 hover:opacity-100 transition-all duration-300"
            >
               {/* NOTE: The class 'brightness-0 invert' forces the image to be Pure White.
                  Remove it if your SVGs are already white.
               */}
               <Image 
                 src={partner.logo} 
                 alt={partner.name} 
                 fill 
                 className="object-contain  brightness-0 invert" 
               />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}