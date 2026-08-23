// src/app/product/[id]/AddToCartBtn.js
"use client";

import { useCart } from "../../../context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddToCartBtn({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} cart me add ho gaya! 🛒`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/checkout"); // Direct checkout par bhej do
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button
        onClick={handleAddToCart}
        className="flex-1 bg-white border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition active:scale-95"
      >
        Add to Cart
      </button>

      <button
        onClick={handleBuyNow}
        className="flex-1 bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition active:scale-95"
      >
        Buy Now 🚀
      </button>
    </div>
  );
}
