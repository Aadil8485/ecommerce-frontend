"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";

// Initial mock data for the cart
const initialCartItems = [
  {
    id: 1,
    name: "SonicPro Noise-Canceling Earbuds",
    variant: "Matte Black",
    price: 199.99,
    qty: 1,
    imageUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=Earbuds",
    inStock: true,
  },
  {
    id: 2,
    name: "The Essential Heavyweight Cotton Hoodie",
    variant: "Large / Heather Gray",
    price: 89.5,
    qty: 2,
    imageUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=Hoodie",
    inStock: true,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Helper functions to handle quantity changes
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.qty + delta); // Prevent going below 1
          return { ...item, qty: newQty };
        }
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const shipping = subtotal > 0 ? 10.0 : 0; // Flat $10 shipping, free if cart is empty
  const tax = subtotal * 0.08; // 8% dummy tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="mt-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            {/* Left Side: Cart Items */}
            <section
              aria-labelledby="cart-heading"
              className="lg:col-span-7 xl:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200 bg-white shadow-sm rounded-lg"
              >
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-6 px-4 sm:px-6">
                    {/* Item Image */}
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <Link
                                href={`/product/${item.id}`}
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {item.name}
                              </Link>
                            </h3>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.variant}
                          </p>
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity & Remove */}
                        <div className="mt-4 sm:mt-0 sm:pr-9 flex items-center justify-between sm:justify-start sm:gap-4">
                          {/* Quantity Selector */}
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-l-md transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 text-sm font-medium text-gray-900 border-x border-gray-300">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-r-md transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <div className="absolute right-0 top-0 sm:relative sm:right-auto sm:top-auto">
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="-m-2 inline-flex p-2 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <span className="sr-only">Remove</span>
                              <Trash2 className="h-5 w-5" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                        {item.inStock ? (
                          <span className="text-green-600 font-medium">
                            In stock
                          </span>
                        ) : (
                          <span className="text-amber-500 font-medium">
                            Ships in 3-4 weeks
                          </span>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Right Side: Order Summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 xl:col-span-4 lg:mt-0 lg:p-8"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order Summary
              </h2>

              <dl className="mt-6 space-y-4 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <dt>Subtotal</dt>
                  <dd className="font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm">
                    <span>Shipping estimate</span>
                  </dt>
                  <dd className="font-medium text-gray-900">
                    ${shipping.toFixed(2)}
                  </dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm">
                    <span>Tax estimate</span>
                  </dt>
                  <dd className="font-medium text-gray-900">
                    ${tax.toFixed(2)}
                  </dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${total.toFixed(2)}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 flex justify-center items-center gap-2 transition-colors"
                >
                  Checkout
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span>Secure Checkout Guarantee</span>
              </div>
            </section>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="mt-16 text-center">
            <h2 className="text-xl font-medium text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Looks like you haven't added anything to your cart yet.
            </p>
            <div className="mt-6">
              <Link
                href="/products"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
