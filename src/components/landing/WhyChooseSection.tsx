import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Globe2, HeartHandshake, BadgeCheck } from 'lucide-react';

export default function WhyChooseSection() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 px-4 lg:px-12">
            <div>
              <h4 className="text-hercules-red font-bold tracking-wider uppercase text-sm mb-2">
                The Happy Feet Promise
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-hercules-dark-blue">
                Travel Without <br /> Boundaries
              </h2>
              <div className="h-1 w-24 bg-hercules-red rounded-full mb-6"></div>
              
              <p className="text-gray-600 leading-relaxed max-w-xl">
                We go the extra mile so you can travel thousands. From verified hotels to 24/7 on-trip support, we ensure your journey is as seamless as it is spectacular.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <FeatureItem icon={<Globe2 className="w-6 h-6" />} title="World Class Tours" desc="Destinations across 6 continents." />
              <FeatureItem icon={<BadgeCheck className="w-6 h-6" />} title="Verified Partners" desc="Only the best hotels & guides." />
              <FeatureItem icon={<HeartHandshake className="w-6 h-6" />} title="Transparent Pricing" desc="No hidden fees, ever." />
              <FeatureItem icon={<CheckCircle2 className="w-6 h-6" />} title="24/7 Support" desc="We are always just a call away." />
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1571723087561-a6f50e1db922?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZsZXJ8ZW58MHx8MHx8fDA%3D" alt="Happy Traveler" fill className="object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-hercules-light-blue text-hercules-blue rounded-full mt-1 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}