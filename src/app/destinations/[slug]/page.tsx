'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useFetch } from '@/hooks/useApi';
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import Image from 'next/image';

// Types reflecting your backend structure
interface ProductItem {
  title: string;
  description?: string;
  image?: string;
  features?: string[];
}

interface ProductGroup {
  groupTitle: string;
  items: ProductItem[];
}

interface ProductPageData {
  _id: string;
  title: string;
  slug: string;
  image?: string;
  shortDescription?: string;
  groups?: ProductGroup[]; // Your backend returns 'groups' containing the itinerary/details
}

export default function DestinationDynamicPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  // Fetch specific destination by slug
  const { data: pageData, isLoading, isError } = useFetch<ProductPageData>(
    ['product-page', slug],
    `/products/${slug}`
  );

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="h-screen flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-hercules-blue" />
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
           <h1 className="text-3xl font-bold text-slate-900">Destination Not Found</h1>
           <p className="text-gray-500 mt-2">The package "{slug}" does not exist.</p>
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
         />
         <div className="absolute inset-0 bg-black/50" />
         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{pageData.title}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">{pageData.shortDescription}</p>
         </div>
      </div>

      {/* Itinerary / Details (Groups) */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
         {pageData.groups?.map((group, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-hercules-dark-blue mb-8 border-b pb-4">
                {group.groupTitle}
              </h2>
              
              <div className="space-y-8">
                {group.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-8 bg-slate-50 p-6 rounded-2xl">
                    {/* Item Image */}
                    {item.image && (
                      <div className="relative w-full md:w-1/3 h-64 md:h-auto rounded-xl overflow-hidden shrink-0">
                         <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                    )}
                    
                    {/* Item Content */}
                    <div className="flex-1">
                       <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                       <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                       
                       {/* Features List */}
                       {item.features && item.features.length > 0 && (
                         <div className="grid grid-cols-2 gap-2 mt-4">
                            {item.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <CheckCircle size={16} className="text-green-500" />
                                {feature}
                              </div>
                            ))}
                         </div>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
         ))}
      </div>

      <Footer />
    </main>
  );
}