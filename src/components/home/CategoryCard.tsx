"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Category } from "@/types/category";

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{ duration: 0.25 }}
    >
      <Link
        href={`/products?category=${category.slug}`}
        className="group block rounded-2xl border bg-white p-6 shadow-sm transition hover:border-blue-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
      >
        <div className="mb-4 flex justify-center text-blue-600 transition group-hover:scale-110">
          {category.icon}
        </div>

        <h3 className="text-center text-lg font-semibold">{category.name}</h3>

        <p className="mt-2 text-center text-sm text-gray-500">
          {category.productCount} Products
        </p>
      </Link>
    </motion.div>
  );
}
