'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useFetch } from '@/hooks/useApi';

// 1. Define the props interface to accept 'type'
interface FilterProps {
  type?: 'product' | 'service';
}

// 2. Add the prop to the function arguments with a default value
export default function CategoryFilter({ type = 'product' }: FilterProps) {
  const router = useRouter();
  
  // Fetch categories (assuming regions/destinations are shared)
  const { data: categories } = useFetch<any[]>(['product-pages'], '/product-pages');

  // Determine the base path for links based on the type
  // If type is 'service', go to /services, else go to /destinations
  const basePath = type === 'service' ? '/services' : '/destinations';

  return (
    <div className="py-8 container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold text-hercules-dark-blue mb-6">
        Filter by Region
      </h2>
      
      <div className="flex flex-wrap justify-center gap-3">
        {/* 'All' Button */}
        <Button 
          onClick={() => router.push(basePath)} 
          variant="outline" 
          className="rounded-full border-hercules-blue text-hercules-blue hover:bg-hercules-blue hover:text-white"
        >
          All
        </Button>

        {/* Dynamic Category Buttons */}
        {categories?.map((cat) => (
           <Button 
             key={cat._id} 
             onClick={() => router.push(`${basePath}/${cat.slug}`)} 
             variant="ghost" 
             className="rounded-full hover:bg-hercules-light-blue text-gray-600"
           >
             {cat.title}
           </Button>
        ))}
      </div>
    </div>
  );
}