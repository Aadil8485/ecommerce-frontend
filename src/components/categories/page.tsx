"use client";

import { useState } from "react";
import Link from "next/link";

// Mock Category Data
const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    description:
      "High-quality gadgets, wearables, smart home systems, and computing accessories.",
    itemCount: 124,
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Fashion & Apparel",
    slug: "fashion",
    description:
      "Trending seasonal clothing, designer footwear, and everyday stylish accessories.",
    itemCount: 352,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Home & Garden",
    slug: "home",
    description:
      "Elegant indoor furniture, minimalist decor, smart kitchen appliances, and outdoor gear.",
    itemCount: 89,
    image:
      "https://images.unsplash.com/photo-1416879598555-46e75514f77c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    slug: "sports",
    description:
      "Professional workout equipment, activewear, camping tools, and adventure gear.",
    itemCount: 67,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Health & Beauty",
    slug: "beauty",
    description:
      "Organic skincare products, premium cosmetics, vitamins, and wellness essentials.",
    itemCount: 145,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Automotive",
    slug: "automotive",
    description:
      "Replacement components, cleaning kits, car electronics, and maintenance tools.",
    itemCount: 42,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CategoriesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter logic (simulated for demonstration)
  const filteredCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((cat) => cat.slug === activeFilter);

  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Shop by Category
          </h1>
          <p className="text-base sm:text-lg text-gray-500">
            Browse our curated collection of high-quality products. Find exactly
            what you need instantly.
          </p>
        </div>

        {/* Layout Wrapper: Sidebar + Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Responsive Filter Control */}
          {/* Mobile view: Horizontal scrollable strip | Desktop view: Vertical sidebar menu */}
          <aside className="lg:w-64 shrink-0">
            <div className="flex flex-row lg:flex-col overflow-x-auto pb-3 lg:pb-0 gap-2 scrollbar-none border-b border-gray-200 lg:border-none">
              <button
                onClick={() => setActiveFilter("all")}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg text-left transition-all ${
                  activeFilter === "all"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 lg:border-transparent"
                }`}
              >
                All Collections (
                {categories.reduce(
                  (acc, current) => acc + current.itemCount,
                  0,
                )}
                )
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.slug)}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg text-left transition-all flex justify-between items-center gap-4 ${
                    activeFilter === category.slug
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 lg:border-transparent"
                  }`}
                >
                  <span>{category.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${activeFilter === category.slug ? "bg-blue-700 text-blue-100" : "bg-gray-100 text-gray-500"}`}
                  >
                    {category.itemCount}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* Categories Grid Area */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video sm:aspect-square lg:aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      src={category.image}
                      alt={`${category.name} category`}
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-gray-100">
                      <p className="text-xs font-bold text-gray-800">
                        {category.itemCount} Items
                      </p>
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                        {category.name}
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-3 lg:line-clamp-2 xl:line-clamp-3">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
