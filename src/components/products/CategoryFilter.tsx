'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from 'next/navigation';
import { useFetch } from '@/hooks/useApi';

export default function DestinationFilter() {
  const router = useRouter();
  const { data: categories } = useFetch<any[]>(['product-pages'], '/product-pages');

  return (
    <div className="py-8 container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold text-hercules-dark-blue mb-6">Filter by Region</h2>
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={() => router.push('/destinations')} variant="outline" className="rounded-full border-hercules-blue text-hercules-blue hover:bg-hercules-blue hover:text-white">
          All
        </Button>
        {categories?.map((cat) => (
           <Button key={cat._id} onClick={() => router.push(`/destinations/${cat.slug}`)} variant="ghost" className="rounded-full hover:bg-hercules-light-blue text-gray-600">
             {cat.title}
           </Button>
        ))}
      </div>
    </div>
  );
}