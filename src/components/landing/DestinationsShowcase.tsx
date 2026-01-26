'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

// Static data for display (since API might be empty)
const destinations = [
  {
    id: 1,
    title: "Bali Adventure",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    price: "₹25,000",
    days: "5 Days"
  },
  {
    id: 2,
    title: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    price: "₹85,000",
    days: "7 Days"
  },
  {
    id: 3,
    title: "Dubai Luxury",
    image: "https://images.unsplash.com/photo-1512453979798-5ea904acfb5a?auto=format&fit=crop&w=800&q=80",
    price: "₹45,000",
    days: "4 Days"
  },
  {
    id: 4,
    title: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    price: "₹18,000",
    days: "3 Days"
  }
];

export default function DestinationsShowcase() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="container mx-auto px-4 md:px-10">
        
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Trending Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Handpicked holiday packages designed for the modern traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
              
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                   {dest.days}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{dest.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                   <span className="text-blue-600 font-bold text-lg">{dest.price}</span>
                   <Link href="/destinations">
                     <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg">
                       Details
                     </Button>
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}