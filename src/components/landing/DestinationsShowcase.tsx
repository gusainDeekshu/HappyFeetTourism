"use client";

import React from "react";
import { useFetch } from "@/hooks/useApi";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Loader2 } from "lucide-react";

export default function DestinationsShowcase() {
  // Fetch from the direct /packages route we fixed earlier
  const { data: packages = [], isLoading } = useFetch<any[]>(
    ["packages"],
    "/packages",
  );

  if (isLoading)
    return (
      <div className="py-24 text-center">
        <Loader2 className="animate-spin inline text-happy-yellow w-12 h-12 mb-4" />
        <p className="font-bold text-happy-dark tracking-widest uppercase">
          Planning Dream Trips...
        </p>
      </div>
    );

  return (
    <section className="p-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-happy-dark">
              Popular <span className="text-happy-yellow">Escapes</span>
            </h2>
            <p className="text-gray-500 mt-4 font-medium">
              Handpicked tours for your next grand adventure.
            </p>
          </div>
          <Link href="/destinations">
            <Button
              variant="ghost"
              className="text-happy-dark font-bold hover:text-blue-600 group"
            >
              View All{" "}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.slice(0, 3).map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 bg-happy-yellow text-happy-dark px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  {pkg.category || "Group Tour"}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-3">
                  <MapPin size={14} /> {pkg.location}
                </div>
                <h3 className="text-2xl font-black text-happy-dark mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-4 text-gray-400 text-sm font-bold mb-8">
                  <Clock size={16} className="text-happy-yellow" />{" "}
                  {pkg.duration}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-tighter block leading-none mb-1">
                      Starting at
                    </span>
                    <span className="text-2xl font-black text-happy-dark">
                      ₹{pkg.price.toLocaleString()}
                    </span>
                  </div>
                  <Link href={`/destinations/${pkg.slug}`}>
                    <Button className="bg-happy-dark hover:bg-happy-yellow hover:text-happy-dark  rounded-2xl font-bold px-8 py-6 transition-all shadow-lg active:scale-95">
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
