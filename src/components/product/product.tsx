"use client";

import { useState } from "react";

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("Vitality White");
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Realme Buds Wireless 3",
    price: 1699,
    rating: 4.8,
    reviews: 1245,
    description:
      "Experience immersive sound with 13.6mm dynamic bass drivers and 30dB Active Noise Cancellation. The lightweight, ergonomic neckband design ensures all-day comfort, while the 40-hour battery life keeps your music playing non-stop.",
    features: [
      "30dB Active Noise Cancellation",
      "13.6mm Dynamic Bass Driver",
      "40 Hours Battery Life",
      "360° Spatial Audio Effect",
      "IP55 Dust and Water Resistance",
    ],
    colors: [
      { name: "Vitality White", class: "bg-gray-100" },
      { name: "Bass Yellow", class: "bg-yellow-400" },
      { name: "Pure Black", class: "bg-gray-900" },
    ],
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${selectedColor} ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Product Image Section */}
          <div className="flex flex-col gap-4">
            <div className="aspect-w-1 aspect-h-1 w-full rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 p-8 shadow-sm h-96">
              {/* Replace this div with an actual <img /> or next/image tag in production */}
              <div className="text-gray-400 text-lg font-medium flex flex-col items-center">
                <svg
                  className="w-16 h-16 mb-4 text-gray-300"
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
                Product Image Placeholder
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((thumb) => (
                <div
                  key={thumb}
                  className="h-24 bg-gray-50 rounded-lg border border-gray-100 cursor-pointer hover:border-blue-500 transition-colors"
                ></div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="mt-10 px-4 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center justify-between">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl font-bold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3 flex items-center">
              <div className="flex items-center text-yellow-400">
                {"★".repeat(Math.floor(product.rating))}
                <span className="text-gray-300">★</span>
              </div>
              <p className="ml-2 text-sm text-gray-500">
                {product.rating} out of 5 stars ({product.reviews} reviews)
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">
                Key Features
              </h3>
              <ul className="mt-4 space-y-2 pl-4 list-disc text-sm text-gray-600">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
              {/* Color Picker */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Color:{" "}
                  <span className="text-gray-500 font-normal">
                    {selectedColor}
                  </span>
                </h3>
                <div className="mt-3 flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                        selectedColor === color.name
                          ? "ring-2 ring-blue-500 ring-offset-2"
                          : "ring-1 ring-gray-200"
                      }`}
                    >
                      <span
                        className={`h-8 w-8 rounded-full border border-black border-opacity-10 ${color.class}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-32 justify-between">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none text-xl font-medium"
                  >
                    -
                  </button>
                  <span className="text-gray-900 font-semibold">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none text-xl font-medium"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex max-w-xs flex-1 items-center justify-center rounded-lg border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-colors shadow-sm"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
