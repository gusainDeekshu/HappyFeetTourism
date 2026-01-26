import React from 'react';
import { Card } from "@/components/ui/card";

interface ProductProps {
  title: string;
  model: string;
  desc: string;
  image: string;
  features: string[]; // <--- 1. Add this new prop
}

export default function ProductHorizontalCard({ title, model, desc, image, features }: ProductProps) {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-lg mb-6 bg-white min-h-[280px]">
      
      {/* Left: Image (40% width) */}
      <div className="w-full md:w-5/12 relative bg-gray-200 min-h-[200px] md:min-h-full">
         <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
         >
             {/* Fallback */}
             <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-300 opacity-0">
                [Product Image]
             </div>
         </div>
      </div>

      {/* Right: Content (60% width) */}
      <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-center">
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-[#0f2a55] uppercase mb-2">
          {title}
        </h3>

        {/* Model Number */}
        <div className="text-sm font-bold text-gray-800 mb-4 uppercase">
          MODEL: {model}
        </div>

        {/* Description Text */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {desc}
        </p>

        {/* Dynamic Specs List */}
        {features && features.length > 0 && (
          <div className="text-xs text-gray-500 space-y-1">
             {features.map((feature, index) => (
                <p key={index}>• {feature}</p>
             ))}
          </div>
        )}

      </div>

    </Card>
  );
}