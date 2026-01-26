'use client';

import React from 'react';
import Image from 'next/image';
import { useFetch } from '@/hooks/useApi';
import { MapPin } from 'lucide-react';

interface GalleryItem {
  _id: string;
  title: string;
  image: string;
}

export default function GalleryGrid() {
  const { data: items, isLoading } = useFetch<GalleryItem[]>(['all-projects'], '/projects');

  if (isLoading) return <div className="py-20 text-center">Loading Gallery...</div>;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items?.map((item) => (
          <div key={item._id} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
            <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 text-hercules-red mb-1">
                <MapPin size={16} />
                <span className="text-xs font-bold uppercase">Happy Feet Traveler</span>
              </div>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}