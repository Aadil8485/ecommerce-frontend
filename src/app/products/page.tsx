import { Heart, Star, StarHalf } from "lucide-react";
import Link from "next/link";

// Mock data based on your image
const products = [
  {
    id: 1,
    name: "Apple AirPods Pro 2nd gen",
    description: "Apple AirPods Pro (2nd Gen) with M...",
    price: 399.99,
    rating: 4.5,
    // Using unspash placeholders. mix-blend-darken in the CSS helps them blend into the gray card
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Canon EOS R5",
    description: "The Canon EOS R5 is a game-chan...",
    price: 3899.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "PlayStation 5",
    description: "The PlayStation 5 takes gaming to t...",
    price: 499.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    description: "The Samsung Galaxy S23 offers an ...",
    price: 799.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1610945265064-3234e442d586?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "ASUS ROG Zephyrus G16",
    description: "The ASUS ROG Zephyrus G16 gamin...",
    price: 1999.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-block">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              All products
            </h2>
            {/* Orange Underline */}
            <div className="mt-2 h-1 w-20 rounded-full bg-orange-500"></div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Image Container with Light Gray Background */}
              <Link href={`/product/${product.id}`}>
                <div className="relative mb-4 flex aspect-square items-center justify-center rounded-2xl bg-[#f3f4f6] p-6 transition-all duration-300 group-hover:shadow-md">
                  {/* Favorite Heart Button */}
                  <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-colors hover:text-red-500 focus:outline-none">
                    <Heart className="h-4 w-4" strokeWidth={2} />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain mix-blend-darken"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="flex flex-1 flex-col">
                <h3 className="text-base font-semibold text-gray-900 truncate">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 truncate">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="mt-2 flex items-center space-x-1">
                  <span className="mr-1 text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                  <div className="flex text-orange-500">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <StarHalf className="h-3.5 w-3.5 fill-current" />
                  </div>
                </div>

                {/* Footer: Price & Buy Button */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <Link
                    href={`/product/${product.id}`}
                    className="rounded-full border border-gray-200 bg-white px-5 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  >
                    Buy now
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
