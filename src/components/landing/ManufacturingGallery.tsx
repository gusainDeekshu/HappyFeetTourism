'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useFetch } from '@/hooks/useApi'; 
import { ArrowRight, Loader2, Play } from 'lucide-react';

interface GalleryItem {
  _id: string;
  title: string;
  mediaUrl: string;
  resourceType: string;
}

export default function TravelGallerySection() {
  // Fetch from the new dedicated /gallery route
  const { data: items = [], isLoading } = useFetch<GalleryItem[]>(
    ['homepage-gallery'], 
    '/gallery' 
  );

  if (isLoading) return <div className="py-20 text-center"><Loader2 className="animate-spin inline text-happy-yellow"/></div>;

  // Use the first item as the large featured one, and the next 4 for the small grid
  const featuredItem = items[0]; 
  const previewItems = items.slice(1, 5);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-happy-dark">Captured <span className="text-happy-yellow">Moments</span></h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Real stories and breathtaking views from our happy travelers.
          </p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto mb-12">
            
            {/* Left Grid (Small Items) */}
            <div className="grid grid-cols-2 gap-4">
              {previewItems.map((item) => (
                <div key={item._id} className="relative h-40 sm:h-60 rounded-[2rem] overflow-hidden group shadow-lg border border-gray-100">
                  {item.resourceType === 'video' ? (
                    <video src={item.mediaUrl} className="w-full h-full object-cover" muted />
                  ) : (
                    <Image 
                      src={item.mediaUrl} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  )}
                  <div className="absolute inset-0 bg-happy-dark/10 group-hover:bg-transparent transition-colors" />
                  {item.resourceType === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="text-white opacity-70" size={32} fill="currentColor" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Large Featured Image */}
            {featuredItem && (
              <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-[2.5rem] overflow-hidden group shadow-2xl border-4 border-white">
                {featuredItem.resourceType === 'video' ? (
                   <video src={featuredItem.mediaUrl} className="w-full h-full object-cover" autoPlay muted loop />
                ) : (
                  <Image 
                      src={featuredItem.mediaUrl} 
                      alt={featuredItem.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-happy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                    <span className="text-happy-yellow text-xs font-bold uppercase tracking-widest mb-2 block">Featured Moment</span>
                    <h3 className="text-3xl font-black">{featuredItem.title}</h3>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-[3rem] text-gray-400 font-bold border-2 border-dashed">
            No gallery moments captured yet.
          </div>
        )}

        <div className="text-center mt-12">
        <Link href="/gallery">
          <Button 
            size="lg" 
            className="group relative bg-happy-dark  hover:bg-happy-yellow hover:text-happy-dark rounded-full px-12 py-8 text-xl font-black transition-all duration-300 shadow-2xl hover:shadow-yellow-200/50 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              View Full Gallery
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </Link>
      </div>
      </div>
    </section>
  );
}