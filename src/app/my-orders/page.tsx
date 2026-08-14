import Link from "next/link";
import {
  Package,
  ChevronRight,
  CheckCircle2,
  Clock,
  Search,
} from "lucide-react";

// Mock data for orders
const mockOrders = [
  {
    id: "#ORD-73920",
    date: "July 24, 2026",
    total: "$249.99",
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "SonicPro Noise-Canceling Earbuds",
        variant: "Matte Black",
        price: "$199.99",
        qty: 1,
        imageUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=Earbuds",
      },
      {
        id: 2,
        name: "Premium Silicone Case",
        variant: "Midnight Blue",
        price: "$50.00",
        qty: 1,
        imageUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=Case",
      },
    ],
  },
  {
    id: "#ORD-73855",
    date: "July 20, 2026",
    total: "$89.50",
    status: "Processing",
    items: [
      {
        id: 3,
        name: "Heavyweight Cotton Hoodie",
        variant: "Large / Heather Gray",
        price: "$89.50",
        qty: 1,
        imageUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=Hoodie",
      },
    ],
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              My Orders
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and download
              invoices.
            </p>
          </div>

          {/* Search Bar for Orders */}
          <div className="relative w-full sm:max-w-xs">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search orders..."
              className="block w-full rounded-md border-gray-300 border py-2 pl-10 pr-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              {/* Order Header */}
              <div className="border-b border-gray-200 bg-gray-50 p-4 sm:flex sm:items-center sm:justify-between sm:p-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 w-full">
                  <div>
                    <dt className="text-xs font-medium uppercase text-gray-500">
                      Order Number
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-gray-900">
                      {order.id}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase text-gray-500">
                      Date Placed
                    </dt>
                    <dd className="mt-1 text-sm text-gray-700">{order.date}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase text-gray-500">
                      Total Amount
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-gray-900">
                      {order.total}
                    </dd>
                  </div>
                  <div className="flex sm:justify-end">
                    <Link
                      href={`/orders/${order.id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      View Invoice
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4 sm:p-6">
                {/* Status Badge */}
                <div className="mb-6 flex items-center">
                  {order.status === "Delivered" ? (
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  ) : (
                    <Clock className="mr-2 h-5 w-5 text-amber-500" />
                  )}
                  <span className="text-sm font-medium text-gray-900">
                    {order.status === "Delivered"
                      ? "Delivered on July 26, 2026"
                      : "Processing - Expected July 30, 2026"}
                  </span>
                </div>

                <ul className="space-y-6">
                  {order.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                    >
                      {/* Product Image */}
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-1 flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.variant}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Qty: {item.qty}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-col sm:mt-0 sm:items-end sm:justify-center space-y-2 sm:space-y-3">
                          <p className="text-base font-medium text-gray-900">
                            {item.price}
                          </p>
                          <div className="flex space-x-4">
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                              Buy Again
                            </button>
                            <span className="text-gray-300">|</span>
                            <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
                              Track Item
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
