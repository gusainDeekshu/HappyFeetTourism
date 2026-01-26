import React from 'react';
import { Map, CalendarCheck, UserCheck } from 'lucide-react';

export default function WhyChooseHappyFeet() {
  const features = [
    {
      icon: Map,
      title: "Expertly Crafted Itineraries",
      desc: "Our packages are designed by travel experts to ensure you see the best spots without the stress of planning."
    },
    {
      icon: UserCheck,
      title: "Verified Tour Guides",
      desc: "Every package includes on-ground support and experienced guides to ensure a safe and immersive experience."
    },
    {
      icon: CalendarCheck,
      title: "Hassle-Free Execution",
      desc: "From airport pickup to drop-off, we manage every logistical detail so you can simply enjoy the trip."
    }
  ];

  return (
    <section className="py-24 bg-hercules-dark-blue text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12">
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              The Happy Feet <br/> <span className="text-hercules-blue">Difference</span>
            </h2>
            <div className="space-y-10">
              {features.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-hercules-red">
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-blue-100/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="bg-white/5 rounded-3xl p-10 border border-white/10 relative overflow-hidden">
             {/* Decorative Quote Mark */}
             <div className="absolute top-4 right-8 text-9xl text-white/5 font-serif leading-none">”</div>
             
             <h3 className="text-2xl font-bold text-white mb-6">Traveler Diaries</h3>
             <p className="text-lg text-blue-100 italic mb-6 relative z-10">
               "We took the 10-day Europe package, and it was flawless. No worrying about train tickets or hotel check-ins—Happy Feet handled everything perfectly."
             </p>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden relative">
                  {/* <Image src="..." fill /> */}
               </div>
               <div>
                 <p className="font-bold text-white">Rajesh & Meena</p>
                 <p className="text-sm text-hercules-red">Europe Group Tour</p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}