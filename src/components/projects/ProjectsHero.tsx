import React from 'react';
import Image from 'next/image';

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white mt-10">
        <h1 className="text-5xl font-bold mb-4">Travel Gallery</h1>
        <p className="text-xl opacity-90">Memories from around the world</p>
      </div>
    </section>
  );
}