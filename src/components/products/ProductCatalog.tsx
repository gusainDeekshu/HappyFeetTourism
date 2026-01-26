'use client';

import React from 'react';
import Link from 'next/link';
import CategoryCard from './CategoryCard';
import { useFetch } from '@/hooks/useApi';
import { Loader2 } from 'lucide-react';

/* =========================================================
   TYPES
========================================================= */

type CategoryType = 'product' | 'service';

interface Category {
  _id: string;
  title: string;
  slug: string;
  type: CategoryType;

  /**
   * API may return image in multiple formats
   * Keep union explicit to stay type-safe
   */
  image?: string | { url: string };
  images?: string[];
}

/* =========================================================
   HELPERS
========================================================= */

function resolveCategoryImage(category: Category): string {
  if (typeof category.image === 'string' && category.image.trim() !== '') {
    return category.image;
  }

  if (
    typeof category.image === 'object' &&
    category.image !== null &&
    'url' in category.image
  ) {
    return category.image.url;
  }

  if (Array.isArray(category.images) && category.images.length > 0) {
    return category.images[0];
  }

  return '/images/placeholder.png';
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ProductCatalog() {
  const { data: categories, isLoading } = useFetch<Category[]>(
    ['all-categories'],
    '/categories'
  );

  const productCategories =
    categories?.filter((cat) => cat.type === 'product') ?? [];

  const serviceCategories =
    categories?.filter((cat) => cat.type === 'service') ?? [];

  if (isLoading) {
    return (
      <div className="py-20 bg-hercules-blue flex justify-center">
        <Loader2 className="animate-spin text-white w-8 h-8" />
      </div>
    );
  }

  return (
    <section className="bg-hercules-blue py-10">
      <div className="container mx-auto px-4 md:px-8">

        {/* ================= PRODUCT CATEGORIES ================= */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Product Categories
          </h2>
          <p className="text-blue-100 text-base font-light max-w-2xl mx-auto">
            Explore our comprehensive range of sports equipment and infrastructure solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 px-16">
          {productCategories.map((item) => (
            <Link
              key={item._id}
              href={`/products/${item.slug}`}
              className="block w-full transition-transform hover:-translate-y-2 duration-300"
            >
              <CategoryCard
                title={item.title}
                image={resolveCategoryImage(item)}
              />
            </Link>
          ))}
        </div>

        {/* ================= SERVICE CATEGORIES ================= */}
        <div className="text-center mb-16 space-y-3 pt-8 border-t border-white/10">
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Service Categories
          </h2>
          <p className="text-blue-100 text-base font-light max-w-2xl mx-auto">
            Professional maintenance, installation, and infrastructure services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceCategories.map((item) => (
            <Link
              key={item._id}
              href={`/services/${item.slug}`}
              className="block w-full transition-transform hover:-translate-y-2 duration-300"
            >
              <CategoryCard
                title={item.title}
                image={resolveCategoryImage(item)}
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
