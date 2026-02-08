// src/components/landing/DestinationsShowcase.tsx
'use client';
import React from 'react';
import { useFetch } from '@/hooks/useApi';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

// src/components/landing/DestinationsShowcase.tsx
export default function DestinationsShowcase() {
  const { data: packages = [], isLoading } = useFetch<any[]>(['packages'], '/content/packages');

  if (isLoading) return <div className="py-24 text-center">Loading Dream Destinations...</div>;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg._id} className="bg-white rounded-3xl shadow-xl overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img src={pkg.image} alt={pkg.title} className="object-cover w-full h-full transition-transform group-hover:scale-110" />
            </div>
            <div className="p-8">
              <div className="flex justify-between text-orange-500 font-bold mb-2">
                <span>{pkg.duration}</span>
                <span>{pkg.price}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
              <p className="text-gray-600 mb-6">{pkg.shortDescription}</p>
              <Link href={`/destinations/${pkg.slug}`}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">Explore More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}