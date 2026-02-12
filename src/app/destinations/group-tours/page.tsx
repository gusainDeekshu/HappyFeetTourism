'use client';

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Users, Calendar, CheckCircle, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { useFetch } from '@/hooks/useApi'; //

// Define the interface based on your Package Model
interface PackageData {
  _id: string;
  title: string;
  description: string;
  heroImage: string;
  nextDepartureDate: string;
  slotsLeft: number;
  duration: string;
  benefits: string[];
}

export default function GroupToursPage() {
  // Fetching all packages. You can also fetch a specific one by ID if preferred.
  // The URL matches the backend route: /api/content/:type
  const { data: packages, isLoading, isError } = useFetch<PackageData[]>(
    ['group-tours'], 
    '/content/packages' 
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <Loader2 className="animate-spin text-white w-10 h-10" />
      </div>
    );
  }

  // Display error if API fails or no data is returned
  if (isError || !packages || packages.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="py-40 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">No Tours Found</h2>
          <p className="text-gray-500">Please add group tours in the admin panel.</p>
        </div>
        <Footer />
      </main>
    );
  }

  // Use the first package found for the main display
  const pkg = packages[0];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Dynamic Hero Section */}
      <div className="relative h-[70vh] w-full flex items-center justify-center bg-slate-900">
         <Image 
            src={pkg.heroImage || "https://images.unsplash.com/photo-1530521954074-e64f6810b32d"} 
            alt={pkg.title} 
            fill 
            className="object-cover opacity-50"
         />
         <div className="absolute inset-0 bg-black/40" />
         
         <div className="relative z-10 text-center text-white px-4">
            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
               Join the Community
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{pkg.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              {pkg.description}
            </p>
         </div>
      </div>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose {pkg.title}?</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               Our group tours are designed to handle the logistics while you focus on the adventure.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
               {pkg.benefits?.map((benefit, index) => (
                 <div key={index} className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full text-green-600">
                     <CheckCircle size={20} />
                   </div>
                   <span className="font-medium text-gray-800">{benefit}</span>
                 </div>
               ))}
             </div>

             <Link href="/contact">
               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-xl">
                 Join Upcoming Group
               </Button>
             </Link>
           </div>

           {/* Dynamic Booking Card */}
           <div className="bg-slate-100 p-8 rounded-[2.5rem] relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl relative z-10">
                 <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-6">
                    <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                      <Users size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Next Departure</h3>
                      <p className="text-gray-500">{pkg.duration || "Contact for details"}</p>
                    </div>
                 </div>
                 
                 <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2"><Calendar size={16}/> Date</span>
                      <span className="font-bold text-gray-900">{pkg.nextDepartureDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2"><Users size={16}/> Slots</span>
                      <span className="font-bold text-orange-600">Only {pkg.slotsLeft} Left!</span>
                    </div>
                 </div>

                 <Button className="w-full bg-slate-900 text-white py-6 rounded-xl font-bold flex items-center justify-center gap-2">
                    Reserve My Spot <ArrowRight size={18} />
                 </Button>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}