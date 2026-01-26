import React from 'react';
import Image from 'next/image';

export default function CommitmentSection() {
  return (
    <section className="py-20 bg-white text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
               <Image src="/images/static-images/aboutpage/founder-travel.jpg" alt="Founder" fill className="object-cover" />
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-3">
              <h4 className="text-hercules-red font-bold tracking-widest text-xs uppercase">Our Story</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-hercules-dark-blue leading-tight">
                Passion for <br /> Exploration
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2010, Happy Feet Tourism started with a simple mission: to make the world accessible to everyone. What began as a small group tour operator has grown into a premier travel company.
              </p>
              <p>
                We believe that travel is the best education. Our team consists of avid travelers who have personally visited the destinations we offer, ensuring that you get authentic advice and hidden gems in every itinerary.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-gray-100 mt-2">
              <div>
                <span className="block text-4xl font-bold text-hercules-blue mb-2">15+</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-hercules-blue mb-2">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Trip Satisfaction</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}