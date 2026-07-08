import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          -{product.discount}%
        </span>

        <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow transition hover:bg-red-500 hover:text-white">
          <Heart size={18} />
        </button>
      </div>

      <div className="space-y-3 p-5">
        <p className="text-sm text-gray-500">{product.category}</p>

        <h3 className="line-clamp-2 text-lg font-semibold">{product.title}</h3>

        <div className="flex items-center gap-1">
          <Star className="fill-yellow-400 text-yellow-400" size={18} />

          <span className="font-medium">{product.rating}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">${product.price}</span>

          <span className="text-gray-400 line-through">
            ${product.oldPrice}
          </span>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
