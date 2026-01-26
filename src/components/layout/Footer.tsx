import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    // Hardcoded bg-slate-900 to ensure background is dark
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
               Happy Feet <span className="text-orange-500">Tourism</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your trusted partner for unforgettable journeys. We craft experiences that turn into lifelong memories.
            </p>
            <div className="flex gap-4 pt-4">
              <Facebook className="text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex md:justify-center">
            <div>
              <h4 className="font-bold mb-4 text-orange-500 uppercase tracking-wider text-sm">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Travel Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Plan A Trip</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="shrink-0 mt-1 text-orange-500" />
                <span>Indiranagar, Bangalore – 560038</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="shrink-0 text-orange-500" />
                <a href="mailto:hello@happyfeet.com" className="hover:text-white">hello@happyfeet.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="shrink-0 text-orange-500" />
                <a href="tel:+919845059899" className="hover:text-white">+91-98450 59899</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Happy Feet Tourism Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}