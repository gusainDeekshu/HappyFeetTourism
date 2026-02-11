'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useFetch } from '@/hooks/useApi';
import { Loader2, AlertCircle, Calendar, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

// Updated Interface to match Package.js model
interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

interface PackagePageData {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  image: string;
  category: string;
  itinerary: ItineraryItem[];
}

export default function DestinationDynamicPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  // Change: Fetching from /packages/ instead of /products/
  const { data: pageData, isLoading, isError } = useFetch<PackagePageData>(
    ['package-page', slug],
    `/packages/${slug}`
  );

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="h-screen flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
        </div>
      </main>
    );
  }

  if (isError || !pageData) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="container mx-auto py-40 text-center">
           <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
           <h1 className="text-3xl font-bold text-slate-900">Package Not Found</h1>
           <p className="text-gray-500 mt-2">The trip "{slug}" could not be retrieved.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full">
         <Image 
           src={pageData.image || '/images/placeholder.png'} 
           alt={pageData.title}
           fill
           className="object-cover"
           priority
         />
         <div className="absolute inset-0 bg-black/40" />
         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{pageData.title}</h1>
            <div className="flex flex-wrap justify-center gap-6 text-white text-lg">
               <div className="flex items-center gap-2"><MapPin size={20} /> {pageData.location}</div>
               <div className="flex items-center gap-2"><Clock size={20} /> {pageData.duration}</div>
               <div className="flex items-center gap-2 font-bold text-yellow-400">₹{pageData.price}</div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
         {/* Overview Section */}
         <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
               {pageData.description}
            </p>
         </div>

         {/* Itinerary Section */}
         <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Itinerary</h2>
         <div className="space-y-6">
            {pageData.itinerary && pageData.itinerary.length > 0 ? (
               pageData.itinerary.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-100 pb-8 last:pb-0">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                     <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-md transition-shadow">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Day {item.day}</span>
                        <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                     </div>
                  </div>
               ))
            ) : (
               <p className="text-gray-400 italic">No itinerary details available for this package.</p>
            )}
         </div>
      </div>

      <Footer />
    </main>
  );
}