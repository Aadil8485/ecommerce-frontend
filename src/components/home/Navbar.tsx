// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   Search,
//   User,
//   Menu,
//   X,
//   ShoppingCart,
//   Heart,
//   Package,
// } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full border-b border-gray-200 bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* 1. Left Side: Logo */}
//           <div className="flex flex-1 items-center justify-start">
//             <Link href="/" className="flex items-center">
//               <span className="text-3xl font-bold text-blue-500">E</span>
//               <span className="text-2xl font-bold tracking-tight text-gray-800">
//                 -Commerce
//               </span>
//             </Link>
//           </div>

//           {/* 2. Center: Desktop Navigation Links */}
//           <div className="hidden md:flex flex-shrink-0 items-center space-x-8">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
//             >
//               Home
//             </Link>
//             <Link
//               href="/all-products"
//               className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
//             >
//               Shop
//             </Link>
//           </div>

//           {/* 3. Right Side: Icons & Account (Desktop) */}
//           <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
//             <button className="text-gray-600 transition-colors hover:text-gray-900">
//               <Search className="h-5 w-5" strokeWidth={1.5} />
//               <span className="sr-only">Search</span>
//             </button>

//             <Link
//               href="/wishlist"
//               className="text-gray-600 transition-colors hover:text-gray-900"
//             >
//               <Heart className="h-5 w-5" strokeWidth={1.5} />
//               <span className="sr-only">Wishlist</span>
//             </Link>

//             <Link
//               href="/my-orders"
//               className="text-gray-600 transition-colors hover:text-gray-900"
//             >
//               <Package className="h-5 w-5" strokeWidth={1.5} />
//               <span className="sr-only">Orders</span>
//             </Link>

//             <Link
//               href="/cart"
//               className="text-gray-600 transition-colors hover:text-gray-900"
//             >
//               <ShoppingCart className="h-5 w-5" strokeWidth={1.5} />
//               <span className="sr-only">Cart</span>
//             </Link>

//             <Link
//               href="/login"
//               className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-gray-900"
//             >
//               <User className="h-5 w-5" strokeWidth={1.5} />
//               {/* Hidden on medium screens to save space, visible on large screens */}
//               <span className="hidden lg:block text-sm font-medium">
//                 Account
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="md:hidden border-t border-gray-100 bg-white">
//           <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//             <Link
//               href="/"
//               className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//             >
//               Home
//             </Link>
//             <Link
//               href="/shop"
//               className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//             >
//               Shop
//             </Link>
//             <Link
//               href="/about"
//               className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//             >
//               About Us
//             </Link>
//             <Link
//               href="/contact"
//               className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Bottom Icon Bar */}
//           <div className="border-t border-gray-200 pb-4 pt-4">
//             <div className="flex items-center justify-around px-2">
//               <button className="flex flex-col items-center text-gray-600 hover:text-gray-900">
//                 <Search className="h-6 w-6" strokeWidth={1.5} />
//                 <span className="mt-1 text-xs font-medium">Search</span>
//               </button>

//               <Link
//                 href="/wishlist"
//                 className="flex flex-col items-center text-gray-600 hover:text-gray-900"
//               >
//                 <Heart className="h-6 w-6" strokeWidth={1.5} />
//                 <span className="mt-1 text-xs font-medium">Wishlist</span>
//               </Link>

//               <Link
//                 href="/orders"
//                 className="flex flex-col items-center text-gray-600 hover:text-gray-900"
//               >
//                 <Package className="h-6 w-6" strokeWidth={1.5} />
//                 <span className="mt-1 text-xs font-medium">Orders</span>
//               </Link>

//               <Link
//                 href="/cart"
//                 className="flex flex-col items-center text-gray-600 hover:text-gray-900"
//               >
//                 <ShoppingCart className="h-6 w-6" strokeWidth={1.5} />
//                 <span className="mt-1 text-xs font-medium">Cart</span>
//               </Link>

//               <Link
//                 href="/account"
//                 className="flex flex-col items-center text-gray-600 hover:text-gray-900"
//               >
//                 <User className="h-6 w-6" strokeWidth={1.5} />
//                 <span className="mt-1 text-xs font-medium">Account</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// ===========================================================================================================================

// src/components/Navbar.js
// Navbar component ke andar (Imports me add karein)
"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; // 🔥 NextAuth tools
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  // 🔥 User ka login data check kar rahe hain
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-gray-900">
        MyStore
      </Link>

      <div className="flex items-center gap-6">
        {/* Cart Link */}
        <Link
          href="/cart"
          className="relative text-gray-700 hover:text-blue-600 font-semibold"
        >
          🛒 Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* 🔥 Agar data load ho raha hai */}
        {status === "loading" ? (
          <span className="text-gray-500">Loading...</span>
        ) : session ? (
          /* 🔥 Agar User Login hai */
          <div className="flex items-center gap-4">
            {/* NAYA: Agar User Admin hai, tabhi yeh button dikhega */}
            {session.user?.role === "ADMIN" && (
              <Link
                href="/admin"
                className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-md font-bold hover:bg-indigo-200 transition"
              >
                👑 Admin Panel
              </Link>
            )}
            {/* NAYA: My Orders Link */}
            <Link
              href="/orders"
              className="text-gray-700 hover:text-blue-600 font-semibold"
            >
              📦 My Orders
            </Link>
            <span className="text-gray-800 font-medium flex items-center gap-2">
              Hi, {session.user?.name || "User"} 👋
              {/* 🔥 Nayi line: Yahan hum role print kar rahe hain */}
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-md">
                {session.user?.role}
              </span>
            </span>
            <button
              onClick={() => signOut()} // Logout function
              className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-100 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          /* 🔥 Agar User Login NAHI hai */
          <div className="flex gap-3">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-semibold px-2 py-2"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
