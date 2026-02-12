// src/components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Packages", href: "/destinations" }, // Directs to the list of packages
    // { name: "Group Tours", href: "/destinations/group-tours" }, // Optional specific link
    { name: "Travel Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all px-6 duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full ${isScrolled ? "bg-black text-white" : "bg-white text-happy-blue"}`}>
            <Plane size={24} /> 
          </div>
          <div className="flex flex-col justify-center">
            <h1 className={`text-2xl font-bold leading-none transition-colors ${
                isScrolled ? "text-happy-dark" : "text-white"
              }`}>
              Happy Feet <span className="text-happy-yellow">Tourism</span>
            </h1>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-happy-yellow ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact#form-section">
  <button className={`px-6 py-2 rounded-full font-bold transition-all shadow-lg ${
    isScrolled 
      ? "bg-blue-600 text-white hover:bg-blue-700" 
      : "bg-happy-yellow text-white  hover:bg-blue-700"
  }`}>
    Book Now
  </button>
</Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu logic (omitted for brevity, keep existing structure) */}
    </header>
  );
}