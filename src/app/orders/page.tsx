// src/app/orders/page.tsx
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

const prisma = new PrismaClient();

// 🔥 Yeh ek Server Component hai (isliye "use client" nahi likha)
export default async function OrdersPage() {
  // 1. Check user session
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // Agar login nahi hai toh bahar fenk do
  }

  // 2. Database se User dhundo
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  // 3. User ke saare orders nikalo (latest wale upar)
  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: { items: true }, // Order ke andar ke items bhi sath me lao
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          My Orders 📦
        </h2>

        {orders.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <p className="text-gray-500 mb-4">
              Aapne abhi tak koi order nahi kiya hai.
            </p>
            <Link
              href="/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order ID: #{order.id}
                    </p>
                    <p className="text-sm text-gray-500">
                      Date: {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ₹{order.totalPrice}
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold mt-1">
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* Items in this order */}
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-gray-700 text-sm"
                    >
                      <p>
                        <span className="font-semibold">
                          {item.productName}
                        </span>{" "}
                        (x{item.quantity})
                      </p>
                      <p>₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
