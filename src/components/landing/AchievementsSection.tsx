import React from 'react';
import { Smile, Map, Award, Globe } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section className="py-24 px-6 bg-white text-gray-900">
      <div className="container mx-auto px-10 text-center">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-hercules-dark-blue">Our Milestones</h2>
          <p className="text-gray-500 text-lg">
            Creating smiles across miles
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard title="10,000+" subtitle="Happy Travelers" desc="Smiles delivered worldwide" />
          <StatCard title="500+" subtitle="Tours Completed" desc="Across 40+ countries" />
          <StatCard title="4.9/5" subtitle="Customer Rating" desc="Excellence in every journey" />
        </div>

        {/* Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BadgeItem icon={<Award className="w-6 h-6 text-orange-500" />} title="Best Operator" subtitle="Tourism Awards 2024" />
            <BadgeItem icon={<Globe className="w-6 h-6 text-blue-500" />} title="IATA Accredited" subtitle="Certified Partner" />
            <BadgeItem icon={<Smile className="w-6 h-6 text-yellow-500" />} title="Top Rated" subtitle="TripAdvisor Excellence" />
            <BadgeItem icon={<Map className="w-6 h-6 text-green-500" />} title="Eco-Friendly" subtitle="Sustainable Tourism" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, subtitle, desc }: { title: string, subtitle: string, desc: string }) {
  return (
    <div className="bg-hercules-light-blue rounded-3xl p-10 hover:shadow-lg transition-all duration-300">
      <h3 className="text-5xl font-bold text-hercules-blue mb-2">{title}</h3>
      <h4 className="text-xl font-bold text-gray-800 mb-2">{subtitle}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function BadgeItem({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 border border-gray-100">
      <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">{icon}</div>
      <div className="text-left">
        <h5 className="font-bold text-gray-900">{title}</h5>
        <p className="text-gray-500 text-xs">{subtitle}</p>
      </div>
    </div>
  );
}