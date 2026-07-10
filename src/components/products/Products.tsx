"use client";

import { useState, useMemo } from "react";

// --- MOCK DATA ---
const PRODUCTS = [
  {
    id: 1,
    name: "Realme Wireless 3 Neckband",
    price: "₹1,699",
    category: "Audio",
    image: "RW",
    description:
      "High-quality wireless neckband with active noise cancellation, spatial audio, and long battery life. Perfect for calls and music on the go.",
  },
  {
    id: 2,
    name: "Velocity 5G Smartphone",
    price: "₹18,999",
    category: "Mobile",
    image: "V5",
    description:
      "Best-in-class performance with a 120Hz display, 50MP AI camera, and a massive 5000mAh battery. The ultimate device under ₹20k.",
  },
  {
    id: 3,
    name: "Pro Developer Keyboard",
    price: "₹4,299",
    category: "Accessories",
    image: "KB",
    description:
      "Tactile mechanical switches, customizable RGB backlighting, and an ergonomic layout designed specifically for long coding sessions.",
  },
  {
    id: 4,
    name: "UltraSharp 27-inch Monitor",
    price: "₹24,500",
    category: "Electronics",
    image: "M27",
    description:
      "Crisp 4K resolution with 99% sRGB color accuracy. An essential upgrade for web development and design work.",
  },
  {
    id: 5,
    name: "ErgoMesh Office Chair",
    price: "₹8,999",
    category: "Furniture",
    image: "EC",
    description:
      "Breathable mesh back, adjustable lumbar support, and 3D armrests to keep you comfortable during long hours at the desk.",
  },
  {
    id: 6,
    name: "Precision Wireless Mouse",
    price: "₹999",
    category: "Accessories",
    image: "WM",
    description:
      "Ergonomic design with multi-device Bluetooth connectivity and silent clicks. Works seamlessly across Windows and Mac.",
  },
  {
    id: 7,
    name: "Wireless Neckband Earphones Series 3",
    price: "₹1,999",
    category: "Audio",
    inStock: true,
  },
  {
    id: 8,
    name: "Smartphone X 5G (128GB)",
    price: "₹18,999",
    category: "Mobile Phones",
    inStock: true,
  },
  {
    id: 9,
    name: "Mechanical Developer Keyboard",
    price: "₹4,499",
    category: "Accessories",
    inStock: true,
  },
  {
    id: 10,
    name: 'Ultra-Wide 27" Monitor',
    price: "₹14,500",
    category: "Displays",
    inStock: false,
  },
  {
    id: 11,
    name: "Noise Cancelling Over-Ear Headphones",
    price: "₹5,999",
    category: "Audio",
    inStock: true,
  },
  {
    id: 12,
    name: "Ergonomic Desk Chair",
    price: "₹8,999",
    category: "Furniture",
    inStock: true,
  },
];

const CATEGORIES = [
  "All",
  "Audio",
  "Mobile",
  "Accessories",
  "Electronics",
  "Furniture",
];

// --- MAIN COMPONENT ---
export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof PRODUCTS)[0] | null
  >(null);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header & Search/Filter Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
            <p className="mt-1 text-sm text-gray-500">
              Find the gear you need to build and create.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full sm:w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-100 flex items-center justify-center shrink-0">
                  <span className="text-4xl font-black text-gray-200">
                    {product.image}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                      {product.category}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                    {product.description}
                  </p>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full mt-auto py-2 px-4 border border-indigo-600 rounded-lg text-sm font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-xl border border-gray-100 border-dashed">
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No products found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter settings.
            </p>
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background Overlay */}
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={() => setSelectedProduct(null)}
            ></div>

            {/* Modal Positioning */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            {/* Modal Panel */}
            <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* Modal Image Placeholder */}
                  <div className="w-full sm:w-1/2 h-64 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <span className="text-6xl font-black text-gray-200">
                      {selectedProduct.image}
                    </span>
                  </div>

                  {/* Modal Content */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {selectedProduct.category}
                      </span>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <h3
                      className="text-2xl leading-6 font-bold text-gray-900 mb-2"
                      id="modal-title"
                    >
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xl font-bold text-indigo-600 mb-4">
                      {selectedProduct.price}
                    </p>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm transition-colors"
                      onClick={() => setSelectedProduct(null)} // Replace with Add to Cart logic
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
