'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiCall } from '@/services/apiClient';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Clock, ArrowRight, Star, Compass } from 'lucide-react';
import Image from 'next/image';

export default function UserDestinations() {
  const { data: packages, isLoading } = useQuery({
    queryKey: ['packages'],
    queryFn: () => apiCall<any[]>('GET', '/packages')
  });

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="h-[60vh] flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-happy-yellow border-t-happy-dark rounded-full animate-spin mb-4"></div>
          <p className="font-bold text-happy-dark tracking-widest uppercase text-sm">Loading Adventures...</p>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Brand Hero Header */}
      <header className="relative bg-happy-dark text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
                 <Image 
                    // Using a real travel image URL
                    src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Travel Background"
                    fill
                    className="object-cover" // Opacity ensures text pops
                    priority
                 />
                 {/* Gradient Overlay for better text readability */}
                 <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
              </div>
        {/* <div className="absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
        </div>
         */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-happy-yellow font-bold uppercase tracking-[0.3em] text-xs mb-6 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                <Compass size={14} className="animate-pulse" /> Your Journey Begins Here
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                Explore <span className="text-happy-yellow">India</span>
            </h1>
            <p className="text-xl text-white leading-relaxed font-medium max-w-2xl mx-auto">
                Discover handpicked group tours designed for the modern explorer. From the Himalayas to the coast, find your next story with us.
            </p>
        </div>
      </header>

      {/* Package Grid Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages?.map((pkg: any) => (
            <Link href={`/destinations/${pkg.slug}`} key={pkg._id} className="group">
                <div className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100 transition-all duration-500 flex flex-col h-full">
                    
                    {/* Image Container with Zoom Effect */}
                    <div className="relative h-80 overflow-hidden">
                        <img 
                            src={pkg.image} 
                            alt={pkg.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" 
                        />
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                            <span className="bg-happy-dark text-happy-yellow px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                {pkg.category}
                            </span>
                        </div>
                        {/* Location Badge */}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md text-happy-dark px-4 py-2 rounded-2xl font-bold shadow-lg flex items-center gap-1.5 text-xs">
                            <MapPin size={14} className="text-happy-yellow" /> {pkg.location}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-3xl font-black text-happy-dark leading-tight group-hover:text-blue-600 transition-colors">
                                {pkg.title}
                            </h3>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-gray-500 font-bold text-sm bg-slate-50 px-3 py-1.5 rounded-lg">
                                <Clock size={16} className="text-happy-yellow" /> {pkg.duration}
                            </div>
                        </div>

                        {/* Card Footer: Pricing & Action */}
                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Total Package</p>
                                <p className="text-3xl font-black text-happy-dark">₹{pkg.price.toLocaleString()}</p>
                            </div>
                            
                            <div className="w-14 h-14 bg-happy-dark text-happy-yellow rounded-full flex items-center justify-center group-hover:bg-happy-yellow group-hover:text-happy-dark transition-all duration-300 shadow-xl">
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}