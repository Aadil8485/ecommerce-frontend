"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-extrabold text-blue-600 tracking-tight"
            >
              BrandLogo
            </Link>
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* 2. Categories with Popup Window */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                onBlur={() => setTimeout(() => setIsCategoryOpen(false), 200)} // Auto-close on click away
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
              >
                Categories
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Popup Dropdown */}
              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-3 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all">
                  <div className="py-2" role="menu" aria-orientation="vertical">
                    <Link
                      href="/electronics"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      Categories
                    </Link>
                    <Link
                      href="/clothing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      Clothing
                    </Link>
                    <Link
                      href="/books"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    >
                      Books
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Action Buttons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* 3. Search Button */}
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* 4. Profile Button */}
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors hidden sm:block">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* 5. Cart Button */}
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors relative">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* Optional: Cart Item Count Badge */}
              <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile Menu Toggle (Hamburger) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner absolute w-full z-40">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Mobile Categories Accordion */}
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full text-left py-3 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 flex justify-between items-center"
            >
              Categories
              <svg
                className={`h-5 w-5 transform transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isCategoryOpen && (
              <div className="pl-4 space-y-2 pb-2 border-l-2 border-gray-100 ml-2">
                <Link
                  href="/electronics"
                  className="block py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                >
                  Electronics
                </Link>
                <Link
                  href="/clothing"
                  className="block py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                >
                  Clothing
                </Link>
                <Link
                  href="/books"
                  className="block py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                >
                  Books
                </Link>
              </div>
            )}

            {/* Profile Link for Mobile (Since the icon is hidden on very small screens) */}
            <Link
              href="/profile"
              className="block py-3 text-base font-medium text-gray-800 hover:text-blue-600"
            >
              My Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
