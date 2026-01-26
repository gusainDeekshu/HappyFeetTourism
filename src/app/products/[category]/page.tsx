'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CategoryFilter from '@/components/products/CategoryFilter';
import ProductHorizontalCard from '@/components/products/ProductHorizontalCard';
import { useFetch } from '@/hooks/useApi';
import { Loader2, AlertCircle, Package } from 'lucide-react';

/* ---------------------------------------------
   TYPES (STRICT & BACKEND-SAFE)
--------------------------------------------- */

interface ProductItem {
  title: string;
  model?: string;
  description?: string;
  image?: string;
  features?: string[];
}

interface ProductGroup {
  groupTitle: string;
  items: ProductItem[];
}

interface ProductPageData {
  _id: string;
  title: string;
  slug: string;
  image?: string;
  shortDescription?: string;
  groups?: ProductGroup[];
  createdAt?: string;
  updatedAt?: string;
}

/* ---------------------------------------------
   PAGE
--------------------------------------------- */

export default function ProductListingPage() {
  const params = useParams<{ category: string }>();
  const slug = params.category;

  const {
    data: pageData,
    isLoading,
    isError,
  } = useFetch<ProductPageData>(
    ['product-page', slug],
    `/products/${slug}`
  );

  /* ---------------------------------------------
     LOADING STATE
  --------------------------------------------- */
  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#0f2a55] flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-40 pb-20">
          <div className="text-center">
            <Loader2 className="w-16 h-16 animate-spin text-hercules-gold mx-auto mb-6" />
            <p className="text-white text-xl">Loading category...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  /* ---------------------------------------------
     ERROR / NOT FOUND
  --------------------------------------------- */
  if (isError || !pageData) {
    return (
      <main className="min-h-screen bg-[#0f2a55] flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 pt-40 pb-20 text-center">
          <div className="max-w-2xl mx-auto">
            <AlertCircle className="w-20 h-20 text-red-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Category Not Found
            </h1>
            <p className="text-xl text-blue-200">
              The product category{" "}
              <span className="font-mono text-yellow-300">{slug}</span>{" "}
              does not exist or is temporarily unavailable.
            </p>
            <p className="text-blue-300 mt-6">
              Please check the URL or try again later.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  /* ---------------------------------------------
     SAFE DERIVED DATA
  --------------------------------------------- */

  const displayTitle =
    pageData.title ||
    slug.replace(/-/g, ' ').toUpperCase();

  const groups: ProductGroup[] = Array.isArray(pageData.groups)
    ? pageData.groups
    : [];

  const hasGroups =
    groups.length > 0 &&
    groups.some(group => group.items?.length > 0);

  /* ---------------------------------------------
     SUCCESS VIEW
  --------------------------------------------- */

  return (
    <main className="min-h-screen bg-[#0f2a55] flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-20">
        <CategoryFilter />

        <div className="container mx-auto px-4 mt-12 max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              {displayTitle}
            </h1>
            <div className="h-1 w-32 bg-hercules-gold mx-auto mb-8 rounded-full" />

            {pageData.shortDescription && (
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                {pageData.shortDescription}
              </p>
            )}
          </div>

          {/* Products */}
          {hasGroups ? (
            <div className="space-y-24">
              {groups.map((group, groupIndex) => (
                <section
                  key={groupIndex}
                  className="bg-gradient-to-b from-white/5 to-transparent rounded-3xl p-10 border border-white/10 backdrop-blur-sm"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 pb-4 border-b-2 border-hercules-gold/50 inline-block px-8">
                    {group.groupTitle}
                  </h2>

                  <div className="space-y-10">
                    {group.items.map((item, itemIndex) => (
                      <ProductHorizontalCard
                        key={itemIndex}
                        title={item.title}
                        model={item.model ?? ''}
                        desc={item.description ?? ''}
                        image={item.image ?? '/images/placeholder.png'}
                        features={item.features ?? []}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            /* Coming Soon */
            <div className="text-center py-24 px-8">
              <div className="max-w-3xl mx-auto">
                <Package className="w-24 h-24 text-hercules-gold mx-auto mb-8 opacity-80" />
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Products Coming Soon
                </h3>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  We’re preparing our premium{" "}
                  <strong>{displayTitle.toLowerCase()}</strong> range
                  to meet global performance standards.
                </p>
                <p className="text-lg text-blue-200">
                  Detailed specifications, professional images, and
                  documentation will be available shortly.
                </p>
                <p className="text-blue-300 mt-8 italic">
                  Stay tuned — excellence takes time.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
