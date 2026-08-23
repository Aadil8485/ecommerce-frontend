// src/app/ProductGridWithSearch.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
// getValidImage function yahan bhi chahiye hoga
const getValidImage = (url: any) => {
  if (!url || url.startsWith("/images/")) {
    return "https://via.placeholder.com/300?text=No+Image";
  }
  return url;
};

export default function ProductGridWithSearch({
  allProducts,
}: {
  allProducts: any;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart() as any;

  // Search Logic
  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description &&
        product.description.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-6 border-t pt-10 gap-4">
        <h2 className="text-2xl font-bold text-slate-900 text-[28px]">
          All Products 🛒
        </h2>

        {/* 🔥 SEARCH BAR */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          <span className="absolute left-3 top-3 text-gray-400">🔍</span>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <Link href={`/product/${product.id}`}>
                <div className="h-48 w-full bg-gray-50 rounded-lg mb-4 overflow-hidden flex justify-center items-center">
                  <img
                    src={getValidImage(product.image)}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800 hover:text-blue-600 hover:underline line-clamp-1">
                  {product.name}
                </h3>
              </Link>

              <p className="text-gray-500 text-sm mb-3 line-clamp-2 min-h-[40px]">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-auto pt-4 border-t">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price ? product.price.toFixed(2) : "0.00"}
                </span>
                {/* 🔥 YAHAN ADD TO CART BUTTON LAGA DIYA HAI */}
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#0f172a] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full text-center py-20 bg-white border border-dashed rounded-[20px] text-gray-400">
          Apki search "{searchTerm}" se koi product nahi mila 😢
        </div>
      )}
    </section>
  );
}
