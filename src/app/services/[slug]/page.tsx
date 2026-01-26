'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductHorizontalCard from "@/components/products/ProductHorizontalCard";
import CategoryFilter from "@/components/products/CategoryFilter"; 
import { useFetch } from '@/hooks/useApi';
import { Loader2, AlertCircle } from 'lucide-react';

// 1. Updated Interface to include optional features
interface ServiceItem {
  title: string;
  model: string;
  description: string;
  image: string;
  features?: string[]; // Added this
}

interface ServiceGroup {
  groupTitle: string;
  items: ServiceItem[];
}

interface ServicePageData {
  pageTitle: string;
  groups: ServiceGroup[];
}

export default function ServiceDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: pageData, isLoading, isError } = useFetch<ServicePageData>(
    ['service-page', slug], 
    `/services/${slug}`
  );

  // --- LOADING ---
  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#0f2a55]"> {/* Fixed color if variable missing */}
        <Navbar />
        <div className="pt-40 pb-12 flex justify-center items-center min-h-[50vh]">
          <Loader2 className="animate-spin text-white w-10 h-10" />
        </div>
      </main>
    );
  }

  // --- ERROR ---
  if (isError || !pageData) {
    return (
      <main className="min-h-screen bg-[#0f2a55]">
        <Navbar />
        <div className="pt-40 pb-12 container mx-auto px-4 text-center">
          <div className="bg-white/5 border border-white/10 rounded-xl p-12 max-w-2xl mx-auto">
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Service Not Found</h1>
            <p className="text-blue-200">
              Could not load data for: <span className="font-mono text-yellow-400">{slug}</span>
            </p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // --- SUCCESS ---
  return (
    <main className="min-h-screen bg-[#0f2a55]">
      <Navbar />

      <div className="pt-40 pb-12">
        {/* Filter with type="service" */}
        <CategoryFilter type="service" />

        <div className="container mx-auto px-4 mt-8 max-w-5xl">
            
            {/* Page Title */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl font-bold text-white uppercase tracking-wider">
                {pageData.pageTitle}
              </h1>
              <div className="h-1 w-20 bg-hercules-gold mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Groups */}
            <div className="space-y-16">
              {pageData.groups.map((group, index) => (
                <div key={index}>
                  
                  {/* Group Title */}
                  <div className="mb-6 text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-white inline-block border-b-2 border-white/20 pb-2 px-4">
                      {group.groupTitle}
                    </h2>
                  </div>

                  {/* Items Grid */}
                  <div className="space-y-6">
                    {group.items.map((item, itemIndex) => (
                      <ProductHorizontalCard 
                        key={itemIndex} 
                        title={item.title} 
                        model={item.model} 
                        desc={item.description}
                        image={item.image} 
                        // FIX: Pass features with fallback
                        features={item.features || []}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}