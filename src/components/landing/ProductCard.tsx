// src/components/landing/ProductCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  slug: string; // Full path like "/products/basketball-equipment" or "/services/lighting..."
}

export default function ProductCard({ title, description, image, slug }: ProductCardProps) {
  return (
    <div className="bg-hercules-dark-blue rounded-[2rem] p-4 flex flex-col h-full group shadow-xl">
      {/* Image */}
      <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-2 flex flex-col flex-grow mb-2">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

        <p className="text-blue-200/80 text-base mb-8 leading-relaxed line-clamp-3 flex-grow font-light">
          {description}
        </p>

        {/* Use the full slug passed from parent – NO hardcoding */}
        <Link href={slug} className="w-full mt-auto">
          <Button className="w-full bg-hercules-red hover:bg-red-700 text-white font-bold py-6 text-lg rounded-xl transition-all shadow-md">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}