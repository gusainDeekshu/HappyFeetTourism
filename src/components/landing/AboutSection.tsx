import React from "react";
import Image from "next/image";
import { Globe, Users, Smile, Map } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h4 className="text-hercules-red font-bold uppercase tracking-wider">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-hercules-dark-blue">
              Crafting Unforgettable <br/> Travel Experiences
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Happy Feet Tourism, we believe travel is not just about going places—it's 
              about the stories you bring back. Whether you're seeking a solo adventure, 
              a romantic getaway, or a family expedition, our team of travel experts 
              ensures every detail is perfect.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <FeatureItem icon={<Globe />} title="Global Reach" subtitle="100+ Destinations" />
              <FeatureItem icon={<Users />} title="Expert Guides" subtitle="Local Knowledge" />
              <FeatureItem icon={<Smile />} title="Happy Travelers" subtitle="5000+ Customers" />
              <FeatureItem icon={<Map />} title="Custom Tours" subtitle="Tailor-made Plans" />
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1571723087561-a6f50e1db922?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZsZXJ8ZW58MHx8MHx8fDA%3D" // Add a travel group image
              alt="Happy Travelers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-hercules-light-blue text-hercules-blue rounded-xl">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}