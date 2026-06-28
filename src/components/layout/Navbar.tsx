"use client";

import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AI Shop
        </Link>

        {/* Search */}
        <div className="hidden w-[400px] items-center rounded-lg border px-3 md:flex">
          <Search size={18} />

          <input
            className="w-full p-2 outline-none"
            placeholder="Search Products..."
          />
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-6">
          <Link href="/products">Products</Link>

          <Link href="/cart">
            <ShoppingCart />
          </Link>

          <Link href="/profile">
            <User />
          </Link>
        </nav>
      </div>
    </header>
  );
}
