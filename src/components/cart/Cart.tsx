"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data for initial cart state
const initialCartItems = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 299.99,
    quantity: 1,
    imageColor: "bg-blue-100",
  },
  {
    id: 2,
    name: "Minimalist Cotton T-Shirt",
    category: "Clothing",
    price: 24.5,
    quantity: 2,
    imageColor: "bg-gray-200",
  },
  {
    id: 3,
    name: "The Complete Developer Guide",
    category: "Books",
    price: 45.0,
    quantity: 1,
    imageColor: "bg-green-100",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Handlers for cart actions
  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 15.0 : 0; // Flat rate shipping
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-50 min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
          Shopping Cart
        </h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          {/* Cart Items Section */}
          <div className="lg:col-span-8">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h2 className="mt-4 text-lg font-medium text-gray-900">
                  Your cart is empty
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Link
                  href="/"
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <ul className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center"
                  >
                    {/* Placeholder Image (Colored Square) */}
                    <div
                      className={`flex-shrink-0 w-full sm:w-24 h-24 rounded-md ${item.imageColor} mb-4 sm:mb-0 border border-gray-200`}
                    ></div>

                    {/* Item Details */}
                    <div className="flex-1 sm:ml-6 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-base font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.category}
                          </p>
                        </div>
                        <p className="text-base font-medium text-gray-900 ml-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 hover:text-blue-600 rounded-l-md focus:outline-none transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                          </button>
                          <span className="px-4 py-1 text-gray-900 font-medium text-sm border-l border-r border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 hover:text-blue-600 rounded-r-md focus:outline-none transition-colors"
                            aria-label="Increase quantity"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors flex items-center"
                        >
                          <svg
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          <span className="hidden sm:inline">Remove</span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-medium text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Subtotal</p>
                  <p className="font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Shipping estimate</p>
                  <p className="font-medium text-gray-900">
                    ${shipping.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Tax estimate</p>
                  <p className="font-medium text-gray-900">${tax.toFixed(2)}</p>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between text-base font-bold text-gray-900">
                    <p>Order Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <button
                disabled={cartItems.length === 0}
                className="mt-6 w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Checkout
              </button>

              <div className="mt-6 text-center">
                <Link
                  href="/"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 flex justify-center items-center"
                >
                  or Continue Shopping
                  <span aria-hidden="true" className="ml-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
