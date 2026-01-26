import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Users, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function GroupToursPage() {
  const benefits = [
    "Meet like-minded travelers",
    "Shared costs = Lower prices",
    "Expert group guides included",
    "Pre-planned safe itineraries"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full flex items-center justify-center bg-slate-900">
         <Image 
            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=2000&q=80" // Group of friends image
            alt="Group Tour" 
            fill 
            className="object-cover opacity-50"
         />
         <div className="absolute inset-0 bg-black/40" />
         
         <div className="relative z-10 text-center text-white px-4">
            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
              Join the Community
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Group Adventures</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Travel together, make new friends, and share memories that last a lifetime.
            </p>
         </div>
      </div>

      {/* Content Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
           {/* Left Text */}
           <div>
             <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose a Group Tour?</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               Our group tours are designed for solo travelers, couples, and friends who want to explore the world without the hassle of planning. We handle the logistics; you handle the fun.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
               {benefits.map((benefit, index) => (
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

           {/* Right Card */}
           <div className="bg-slate-100 p-8 rounded-[2.5rem] relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl relative z-10">
                 <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-6">
                    <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                      <Users size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Next Departure</h3>
                      <p className="text-gray-500">Europe Explorer - 12 Days</p>
                    </div>
                 </div>
                 
                 <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2"><Calendar size={16}/> Date</span>
                      <span className="font-bold text-gray-900">Oct 15th, 2026</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2"><Users size={16}/> Slots</span>
                      <span className="font-bold text-orange-600">Only 4 Left!</span>
                    </div>
                 </div>

                 <Button className="w-full bg-slate-900 text-white py-6 rounded-xl font-bold flex items-center justify-center gap-2">
                   Reserve My Spot <ArrowRight size={18} />
                 </Button>
              </div>
              
              {/* Decorative elements behind card */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-200 rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50" />
           </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}