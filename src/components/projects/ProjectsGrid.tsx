'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { apiCall } from '@/services/apiClient';
import { Play, MapPin, Loader2 } from 'lucide-react';

interface GalleryItem {
  _id: string;
  title: string;
  mediaUrl: string;    // Matches Admin 'mediaUrl'
  resourceType: string; // 'image' or 'video'
}

export default function UserGallery() {
  const { data: items, isLoading } = useQuery({
    queryKey: ['public-gallery'],
    queryFn: () => apiCall<GalleryItem[]>('GET', '/gallery')
  });

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="h-[60vh] flex flex-col items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-happy-yellow mb-4" />
          <p className="font-bold text-happy-dark uppercase tracking-widest text-sm">Loading Moments...</p>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <header className="bg-happy-dark py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-black">
          Our <span className="text-happy-yellow">Moments</span>
        </h1>
        <p className="text-gray-400 mt-6 font-medium uppercase tracking-[0.2em] text-sm px-4">
          Visual stories from Happy Feet Travelers across India
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items?.map((item) => (
            <div 
              key={item._id} 
              className="relative rounded-[2.5rem] overflow-hidden break-inside-avoid shadow-lg hover:shadow-2xl transition-all group cursor-pointer border border-gray-100"
            >
              {item.resourceType === 'video' ? (
                <div className="relative">
                  <video 
                    src={item.mediaUrl} 
                    className="w-full" 
                    muted loop 
                    onMouseOver={e => e.currentTarget.play()} 
                    onMouseOut={e => e.currentTarget.pause()} 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                    <div className="w-14 h-14 bg-happy-yellow rounded-full flex items-center justify-center text-happy-dark shadow-xl">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={item.mediaUrl} 
                  alt={item.title} 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700" 
                />
              )}
              
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-happy-dark via-happy-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-2 text-happy-yellow mb-2">
                  <MapPin size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Happy Feet Moments</span>
                </div>
                <p className="text-white text-lg font-bold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}