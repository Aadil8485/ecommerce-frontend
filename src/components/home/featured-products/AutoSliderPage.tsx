"use client";

import { useState, useEffect } from "react";

// Sample E-commerce Product Data
const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: "$299.00",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Minimalist Leather Smartwatch",
    price: "$199.50",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Polarized Vintage Sunglasses",
    price: "$85.00",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    rating: 4.9,
    reviews: 210,
  },
  {
    id: 4,
    name: "Ergonomic Optical Mouse",
    price: "$45.99",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    rating: 4.2,
    reviews: 56,
  },
  {
    id: 5,
    name: "Mechanical Gaming Keyboard",
    price: "$129.99",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
    rating: 4.7,
    reviews: 342,
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    rating: 4.6,
    reviews: 112,
  },
];

export default function AutoSliderPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  // Handle responsive visible cards
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640)
        setVisibleCards(1); // Mobile: 1 card
      else if (window.innerWidth < 1024)
        setVisibleCards(2); // Tablet: 2 cards
      else setVisibleCards(3); // Desktop: 3 cards
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const maxIndex = products.length - visibleCards;

    const slideInterval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) =>
          prevIndex >= maxIndex ? 0 : prevIndex + 1,
        );
      }
    }, 3500); // Slides every 3.5 seconds

    return () => clearInterval(slideInterval);
  }, [isHovered, visibleCards]);

  // SVG Star Icon for Ratings
  const StarIcon = () => (
    <svg
      className="w-4 h-4 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Featured Products
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  Math.min(products.length - visibleCards, currentIndex + 1),
                )
              }
              className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition disabled:opacity-50"
              disabled={currentIndex >= products.length - visibleCards}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          className="relative overflow-hidden rounded-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Inner Track */}
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                {/* E-commerce Card */}
                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col group">
                  {/* Image wrapper */}
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2.5 py-1 rounded-md text-gray-900 shadow-sm">
                      Best Seller
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-1 mb-2">
                      <StarIcon />
                      <span className="text-sm font-medium text-gray-700">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-400">
                        ({product.reviews})
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">
                      {product.name}
                    </h3>

                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-emerald-600">
                        {product.price}
                      </span>
                      <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors active:scale-95">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: products.length - visibleCards + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gray-900 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ),
          )}
        </div>
      </div>
    </main>
  );
}
