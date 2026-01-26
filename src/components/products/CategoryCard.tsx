import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg flex flex-col group cursor-pointer bg-white">
      
      {/* Image Area - Takes up 85% of the card */}
      <div className="relative h-[85%] w-full bg-gray-200">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle hover effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Footer Label - Takes up 15% of the card */}
      <div className="h-[15%] min-h-[50px] bg-white flex items-center justify-center px-4 relative z-10">
        <h3 className="ps-2 font-bold uppercase text-l md:text-l tracking-widest text-left truncate w-full">
          {title}
        </h3>
      </div>

    </div>
  );
}