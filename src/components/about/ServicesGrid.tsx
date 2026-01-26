import React from 'react';
import { Users, Heart, Mountain, Briefcase, GraduationCap, Map } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: <Users size={40} />,
      title: "Family Vacation Packages",
      desc: "All-inclusive family holiday packages designed for fun, relaxation, and bonding time."
    },
    {
      icon: <Heart size={40} />,
      title: "Honeymoon Specials",
      desc: "Romantic getaways to exotic locations with candlelight dinners and private tours included."
    },
    {
      icon: <Mountain size={40} />,
      title: "Adventure Expeditions",
      desc: "Thrilling trekking, rafting, and camping packages for the adrenaline seekers."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Corporate Retreats",
      desc: "Organized team-building trips and offsite meetings with complete itinerary management."
    },
    {
      icon: <GraduationCap size={40} />,
      title: "Educational Tours",
      desc: "Curated industrial visits and historical excursions for schools and colleges."
    },
    {
      icon: <Map size={40} />,
      title: "Custom Itineraries",
      desc: "Don't like pre-made packages? We build a custom tour plan just for you."
    }
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-hercules-red font-bold uppercase tracking-wider mb-2">Our Expertise</h4>
          <h2 className="text-4xl font-bold text-hercules-dark-blue">Curated Tour Experiences</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We don't just book tickets; we craft complete journeys. Choose the perfect package for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl bg-hercules-light-blue hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="mb-6 text-hercules-blue group-hover:text-hercules-red transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-hercules-dark-blue">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}