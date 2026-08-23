// src/app/admin/orders/page.tsx
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route"; // Path apne hisaab se check kar lein
import { redirect } from "next/navigation";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function AdminOrdersPage() {
  // 1. 🛡️ Security Check: Sirf ADMIN yahan aa sakta hai
  const session: any = await getServerSession(authOptions as any);
  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }

  // 2. 📦 Database se saare Orders nikalna (Naye orders sabse upar)
  // (Assuming aapke Order table me userId ya user relation hai)
  const allOrders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    // Agar relation banaya hai toh user ki details bhi laao
    include: {
      user: {
        select: { name: true, email: true },
      },
    },
  });

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Manage Orders 📦
          </h1>
          <Link
            href="/admin"
            className="text-blue-600 hover:underline font-semibold"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {allOrders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                    <th className="p-4 font-semibold">Order ID</th>
                    <th className="p-4 font-semibold">Customer</th>
                    <th className="p-4 font-semibold">Date</th>
                    <th className="p-4 font-semibold">Total Amount</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-medium text-gray-900">
                        #{order.id}
                      </td>
                      <td className="p-4">
                        <p className="font-semibold text-gray-800">
                          {order.user?.name || "Unknown"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {order.user?.email}
                        </p>
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        {new Date(order.createdAt).toLocaleDateString("en-IN")}
                      </td>
                      <td className="p-4 font-bold text-green-600">
                        ₹{order.totalPrice || 0}{" "}
                        {/* Aapke db column ke hisaab se */}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            order.status === "DELIVERED"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status || "PENDING"}
                        </span>
                      </td>
                      <td className="p-4">
                        <Link href={`/admin/orders/${order.id}`}>
                          <button className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-blue-100 transition">
                            View Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-10 text-center text-gray-500">
              <p className="text-xl font-semibold mb-2">
                Abhi tak koi order nahi aaya 😢
              </p>
              <p>Thoda wait kijiye, jaldi hi pehla customer aayega!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
