import React from "react";
import { PhoneCall } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    // Main container: Full width, dark blue, with hidden overflow for cropping images
    <section className="relative w-full bg-[#0f2a55] py-20 px-4 md:px-12 text-center ">
      {/* --- Decor: Left Side --- */}
      {/* Large, cropped, low-opacity image of all sports equipment */}
      <div className="absolute -left-60 -top-60 w-80 h-80 md:w-[30rem] md:h-[30rem] z-10 pointer-events-none opacity-90">
        <Image
          src="/images/static-images/contactpage/allsports.png" // Using the allsports.png image
          alt="sports equipment decor left"
          fill
          className="object-contain"
        />
      </div>

      {/* --- Decor: Right Side --- */}
      {/* Same image, mirrored horizontally, on the right side */}
      <div className="absolute -right-40 -top-60 w-80 h-80 md:w-[30rem] md:h-[30rem] z-10 pointer-events-none opacity-90">
        <Image
          src="/images/static-images/contactpage/allsports.png" // Using the allsports.png image
          alt="sports equipment decor left"
          fill
          className="object-contain"
        />
      </div>

      {/* Content Container (z-10 places it above the decorative images) */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Something Great?
        </h2>
        <p className="text-blue-200 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
          Let{"'"}s discuss your sports infrastructure project and create a
          solution that exceeds your expectations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors">
            Start Your Project 
          </button>
          <a href="tel:+919845059899">
            <button
              type="button"
              className=" border-white/30 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg
               flex items-center justify-center gap-2 transition-colors"
            >
              {/* <PhoneCall size={20} /> */}
              Call Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
