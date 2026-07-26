"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 1. Left Side: Logo */}
          <div className="flex flex-1 items-center justify-start">
            <Link href="/" className="flex items-center">
              {/* Simulating the 'Q' icon */}
              <span className="text-3xl font-bold text-blue-500">E</span>
              <span className="text-2xl font-bold tracking-tight text-gray-800">
                -Commerce
              </span>
            </Link>
          </div>

          {/* 2. Center: Desktop Navigation Links */}
          <div className="hidden md:flex flex-shrink-0 items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Shop
            </Link>
          </div>

          {/* 3. Right Side: Icons & Account */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
            <button className="text-gray-600 transition-colors hover:text-gray-900">
              <Search className="h-5 w-5" strokeWidth={1.5} />
              <span className="sr-only">Search</span>
            </button>
            <Link
              href="/login"
              className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-gray-900"
            >
              <User className="h-5 w-5" strokeWidth={1.5} />
              <span className="text-sm font-medium">Account</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>

          <div className="border-t border-gray-200 pb-4 pt-4">
            <div className="flex items-center justify-around px-5">
              <button className="flex flex-col items-center text-gray-600 hover:text-gray-900">
                <Search className="h-6 w-6" />
                <span className="mt-1 text-xs font-medium">Search</span>
              </button>
              <Link
                href="/account"
                className="flex flex-col items-center text-gray-600 hover:text-gray-900"
              >
                <User className="h-6 w-6" />
                <span className="mt-1 text-xs font-medium">Account</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
