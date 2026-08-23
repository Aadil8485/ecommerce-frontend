// src/components/AddToCartButton.js
"use client";

import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="flex-1 bg-white border-2 border-gray-200 text-gray-800 font-bold py-4 px-8 rounded-full hover:bg-gray-50 transition active:scale-95 shadow-sm"
    >
      Add to Cart 🛒
    </button>
  );
}
