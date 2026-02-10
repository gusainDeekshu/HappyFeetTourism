'use client';
import { useQuery } from '@tanstack/react-query';
import { apiCall } from '@/services/apiClient';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function TourCatalog() {
  const { data: packages, isLoading } = useQuery({
    queryKey: ['packages'],
    queryFn: () => apiCall<any[]>('GET', '/packages')
  });

  if (isLoading) return <div className="text-center py-20">Finding best destinations...</div>;

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages?.map((pkg) => (
          <div key={pkg._id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div className="relative h-56">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow">
                {pkg.category}
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{pkg.duration}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">₹{pkg.price}</span>
                <Link href={`/destinations/${pkg.slug}`}>
                  <Button variant="outline">Explore</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}