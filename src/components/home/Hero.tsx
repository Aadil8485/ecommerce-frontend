"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 md:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Sparkles size={18} />
            AI Powered Shopping
          </div>

          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Shop Smarter With Artificial Intelligence
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Discover personalized products, AI recommendations, smart search and
            faster shopping experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-lg bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
            >
              Shop Now
            </Link>

            <Link
              href="/products"
              className="flex items-center gap-2 rounded-lg border border-white px-7 py-4 transition hover:bg-white hover:text-black"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/laptop.jpg"
            alt="Hero Product"
            width={600}
            height={600}
            priority
            className="drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
