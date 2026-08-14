"use client";

import { useState } from "react";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Realme Buds Wireless 3",
      description: "Active Noise Cancellation, 40 Hours Battery",
      price: 1699,
      inStock: true,
    },
    {
      id: 2,
      name: "Nova Pro Smartphone",
      description: "8GB RAM, 128GB Storage, 5G Ready",
      price: 18999,
      inStock: true,
    },
    {
      id: 3,
      name: "Ergonomic Desk Chair",
      description: "Lumbar support, breathable mesh",
      price: 4500,
      inStock: false,
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const moveToCart = (item) => {
    alert(`Added ${item.name} to your cart!`);
    removeFromWishlist(item.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            My Wishlist
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1 ? "Item" : "Items"}
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-shadow hover:shadow-md"
              >
                {/* Image Placeholder */}
                <div className="aspect-w-1 aspect-h-1 bg-gray-100 w-full h-48 flex items-center justify-center relative">
                  <svg
                    className="w-12 h-12 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>

                  {/* Remove Button (Top Right) */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-900">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${item.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => moveToCart(item)}
                    disabled={!item.inStock}
                    className={`mt-6 w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${
                      item.inStock
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {item.inStock ? "Move to Cart" : "Unavailable"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State UI */
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Your wishlist is empty
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Looks like you haven't saved any items yet.
            </p>
            <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
