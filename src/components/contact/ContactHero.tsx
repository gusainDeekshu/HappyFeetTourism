import React from 'react';
import Image from 'next/image';
import { Clock, Phone, MapPin } from 'lucide-react';

export default function ContactHero() {
  return (
     <section className="relative w-full h-[60vh] flex items-center justify-center mb-10">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80" // Travel planning image
              alt="Contact Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
          </div>
    
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Get in Touch</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto font-light leading-relaxed">
             Have a question about a package or ready to book your dream vacation? 
             Our travel experts are standing by.
            </p>
    
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/90 mt-12 border-t border-white/20 pt-8">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-orange-400" />
                <div className="text-left">
                  <span className="block font-bold text-white text-lg">+91 98450 59899</span>
                  <span className="text-xs uppercase opacity-70">Support 24/7</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-orange-400" />
                <div className="text-left">
                  <span className="block font-bold text-white text-lg">Bangalore, India</span>
                  <span className="text-xs uppercase opacity-70">Headquarters</span>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}