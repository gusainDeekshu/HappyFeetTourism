'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiCall } from '@/services/apiClient';
import Link from 'next/link';

export default function UserDestinations() {
  const { data: packages, isLoading } = useQuery({
    queryKey: ['packages'],
    queryFn: () => apiCall<any[]>('GET', '/packages')
  });

  if (isLoading) return <div className="h-screen flex items-center justify-center font-bold">Planning your next trip...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-blue-900 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">Happy Feet Destinations</h1>
        <p className="mt-4 text-xl text-blue-100">Explore handpicked group tours across India.</p>
      </header>

      <section className="max-w-7xl mx-auto px-4 -mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages?.map((pkg: any) => (
          <div key={pkg._id} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition duration-300">
            <div className="relative h-64 overflow-hidden">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                {pkg.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">{pkg.title}</h3>
              <p className="text-gray-500 mt-2 text-sm italic">{pkg.duration} • {pkg.location}</p>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <span className="text-gray-400 text-xs block uppercase font-bold">Starting at</span>
                  <span className="text-2xl font-black text-blue-700">₹{pkg.price}</span>
                </div>
                <Link href={`/destinations/${pkg.slug}`} className="bg-blue-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-bold transition">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}