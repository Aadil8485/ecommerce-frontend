import Link from "next/link";

// Mock Category Data
const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Gadgets, wearables, and computing.",
    itemCount: 124,
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop",
    href: "/categories/electronics",
  },
  {
    id: 2,
    name: "Fashion & Apparel",
    description: "Trending clothing and accessories.",
    itemCount: 352,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
    href: "/categories/fashion",
  },
  {
    id: 3,
    name: "Home & Garden",
    description: "Furniture, decor, and outdoor living.",
    itemCount: 89,
    image:
      "https://images.unsplash.com/photo-1416879598555-46e75514f77c?q=80&w=800&auto=format&fit=crop",
    href: "/categories/home",
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    description: "Gear up for your next adventure.",
    itemCount: 67,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
    href: "/categories/sports",
  },
  {
    id: 5,
    name: "Health & Beauty",
    description: "Skincare, makeup, and wellness.",
    itemCount: 145,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    href: "/categories/beauty",
  },
  {
    id: 6,
    name: "Automotive",
    description: "Parts, accessories, and tools.",
    itemCount: 42,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop",
    href: "/categories/automotive",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Shop by Category
          </h1>
          <p className="text-lg text-gray-500">
            Browse our extensive collection of products across multiple
            categories. Find exactly what you are looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-200">
                <img
                  src={category.image}
                  alt={`${category.name} category`}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-1">
                      {category.description}
                    </p>
                  </div>

                  {/* Item Count Pill */}
                  <span className="shrink-0 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                    {category.itemCount} items
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
