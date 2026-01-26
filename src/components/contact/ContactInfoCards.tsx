import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const cards = [
  { 
    icon: Phone, 
    title: "Phone", 
    text: "Speak directly with our experts", 
    mainInfo: "+91 80883 45678", 
    subInfo: "Sales & Enquiries",
    // Colors from the image
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50"
  },
  { 
    icon: Mail, 
    title: "Email", 
    text: "Send us your requirements", 
    mainInfo: "info@herculessport.com", 
    subInfo: "General Enquiries",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50"
  },
  { 
    icon: MapPin, 
    title: "Location", 
    text: "Visit our headquarters", 
    mainInfo: "Bangalore", 
    subInfo: "Karnataka, India",
    iconColor: "text-green-600",
    iconBg: "bg-green-50"
  },
  { 
    icon: Clock, 
    title: "Hours", 
    text: "We’re here when you need us", 
    mainInfo: "Mon - Sat", 
    subInfo: "9:00 AM - 6:00 PM",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50"
  },
];

export default function ContactInfoCards() {
  return (
    <section className="container mx-auto px-4 relative z-20 mb-20 pt-12"> {/* Added padding top */}
      
      {/* --- HEADER SECTION (Moved to Top) --- */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get In Touch</h2>
        <p className="text-blue-100/90 text-base font-light">
          Multiple ways to connect with our team for your sports infrastructure needs
        </p>
      </div>

      {/* --- CARDS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-xl text-center hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center h-full">
            
            {/* Icon Circle with Dynamic Colors */}
            <div className={`w-16 h-16 ${card.iconBg} rounded-full flex items-center justify-center mb-6`}>
              <card.icon size={28} className={card.iconColor} />
            </div>
            
            {/* Title */}
            <h3 className="font-bold text-gray-900 text-xl mb-3">{card.title}</h3>
            
            {/* Description Text */}
            <p className="text-gray-600 text-sm mb-8 leading-relaxed max-w-[200px] mx-auto">
              {card.text}
            </p>
            
            {/* Footer Info (Pushed to bottom) */}
            <div className="mt-auto space-y-1">
              <p className="text-[#134094] font-bold text-base md:text-[17px]">
                {card.mainInfo}
              </p>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                {card.subInfo}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}