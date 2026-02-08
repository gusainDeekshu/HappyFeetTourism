'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useFetch } from '@/hooks/useApi'; // Hook
import { Loader2 } from 'lucide-react';

interface GalleryItem {
  _id: string;
  title: string;
  image: string;
}

export default function TravelGallerySection() {
  // 1. Fetch from backend route: router.get('/projects', ...)
  const { data: projects = [], isLoading } = useFetch<GalleryItem[]>(
    ['gallery'], 
    '/projects' 
  );

  if (isLoading) return <div className="py-20 text-center"><Loader2 className="animate-spin inline"/></div>;

  // Separate the projects into small grid items and one large item
  const largeItem = projects[0]; 
  const smallItems = projects.slice(1, 5); // Take next 4 items

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Captured Moments</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from our happy travelers.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            
            {/* Left Grid (Small Items) */}
            <div className="grid grid-cols-2 gap-4">
              {smallItems.map((item) => (
                <div key={item._id} className="relative h-40 sm:h-60 rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>

            {/* Right Large Image */}
            {largeItem && (
              <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden group shadow-2xl">
                <Image 
                    src={largeItem.image} 
                    alt={largeItem.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold">{largeItem.title}</h3>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-400">No gallery images uploaded yet.</div>
        )}

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 py-6 text-lg">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}