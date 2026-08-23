// src/app/admin/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminDashboard() {
  // 1. Session check karo
  const session: any = await getServerSession(authOptions as any);

  // 2. 🛡️ SUPER SECURITY: Agar session nahi hai YA role 'ADMIN' nahi hai, toh block karo!
  if (!session || session.user.role !== "ADMIN") {
    redirect("/"); // Wapas home page par bhej do
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Admin Dashboard 👑
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Products Manage Karne Ka Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Manage Products 🛍️
            </h2>
            <p className="text-gray-600 mb-6">
              Dukaan me naye products add karein, purane update ya delete
              karein.
            </p>
            <Link
              href="/admin/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Go to Products
            </Link>
          </div>

          {/* Orders Manage Karne Ka Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Manage Orders 📦
            </h2>
            <p className="text-gray-600 mb-6">
              Customers ke sabhi orders dekhein aur unka status update karein.
            </p>
            <Link
              href="/admin/orders"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
            >
              Go to Orders
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
