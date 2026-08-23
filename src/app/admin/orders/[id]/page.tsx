// src/app/admin/orders/[id]/page.tsx
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
// authOptions ka path check kar lein
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { revalidatePath } from "next/cache"; // 🔥 NAYA IMPORT: Page refresh karne ke liye

const prisma = new PrismaClient();

export default async function OrderDetailsPage({ params }: { params: any }) {
  // 1. Security Check
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }

  const resolvedParams = await params;
  const orderId = parseInt(resolvedParams.id);

  // 2. Database se Order ki jankari nikalna
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      user: {
        select: { name: true, email: true },
      },
      items: true,
    },
  });

  if (!order) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Order nahi mila 😢
      </div>
    );
  }

  // 🔥 MAGIC FUNCTION: Server Action jo Database update karega
  async function markAsDelivered() {
    "use server";

    // Database me status update kiya
    await prisma.order.update({
      where: { id: orderId },
      data: { status: "DELIVERED" },
    });

    // Page ko turant naye data ke sath refresh karne ke liye
    revalidatePath(`/admin/orders/${orderId}`);
    revalidatePath(`/admin/orders`);
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              Order #{order.id}
            </h1>
            <p className="text-gray-500 mt-1">
              Date: {new Date(order.createdAt).toLocaleString("en-IN")}
            </p>
          </div>
          <Link
            href="/admin/orders"
            className="text-blue-600 hover:underline font-semibold"
          >
            ← Back to Orders
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side: Order Items */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4 border-b pb-2">
                Items Ordered 🛒
              </h2>
              <div className="space-y-4">
                {order.items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                        <img
                          src={"https://via.placeholder.com/150?text=Item"}
                          alt="item"
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.name ||
                            item.productName ||
                            `Product ID: ${item.productId}`}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity} x ₹{item.price}
                        </p>
                      </div>
                    </div>
                    <div className="font-bold text-gray-900">
                      ₹{item.quantity * item.price}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t flex justify-between items-center">
                <span className="text-lg font-bold text-gray-700">
                  Total Amount
                </span>
                <span className="text-2xl font-extrabold text-green-600">
                  ₹{order.totalAmount || order.total || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Customer Details & Action */}
          <div className="space-y-6">
            {/* Customer Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4 border-b pb-2">
                Customer Details 👤
              </h2>
              <p className="font-semibold text-gray-800">
                {order.user?.name || "Guest"}
              </p>
              <p className="text-gray-600 text-sm mb-4">{order.user?.email}</p>

              <h3 className="font-bold text-gray-800 mb-1">
                Shipping Address:
              </h3>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md border">
                {order.address || "No address provided"}
              </p>
            </div>

            {/* Status Update Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-4 border-b pb-2">
                Order Status 🚚
              </h2>
              <div className="mb-4">
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                    order.status === "DELIVERED"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  Current: {order.status || "PENDING"}
                </span>
              </div>

              {/* 🔥 MAGIC BUTTON: Ab isko ek form me daal diya hai */}
              <form action={markAsDelivered}>
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-bold text-white transition ${
                    order.status === "DELIVERED"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 shadow-md"
                  }`}
                  disabled={order.status === "DELIVERED"}
                >
                  {order.status === "DELIVERED"
                    ? "Already Delivered ✔️"
                    : "Mark as Delivered 📦"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
