// src/app/admin/products/page.tsx
import DeleteButton from "./DeleteButton";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function ManageProductsPage() {
  // 1. Database se saare products nikalna (Naye wale sabse upar)
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  // 🔥 MAGIC FUNCTION: Product Delete karne ke liye
  async function deleteProduct(formData) {
    "use server";
    const productId = parseInt(formData.get("productId"));

    try {
      await prisma.product.delete({
        where: { id: productId },
      });
      // Delete hone ke baad page refresh karna
      revalidatePath("/admin/products");
      revalidatePath("/"); // Home page se bhi hat jaye
    } catch (error) {
      console.error("Delete karne me error aaya:", error);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              Manage Products 🛒
            </h1>
            <p className="text-gray-500 mt-1">
              Apne saare products yahan dekhein aur manage karein.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/admin"
              className="text-blue-600 hover:underline font-semibold flex items-center"
            >
              ← Back to Dashboard
            </Link>
            {/* Note: Agar aapka Add Product ka page alag hai, toh uska link yahan laga sakte hain */}
            <button className="bg-[#0f172a] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-slate-800 transition shadow-sm">
              + Add New Product
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {products.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                    <th className="p-4 font-semibold">Image</th>
                    <th className="p-4 font-semibold">Product Name</th>
                    <th className="p-4 font-semibold">Price</th>
                    <th className="p-4 font-semibold">Stock</th>
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="p-4">
                        <div className="h-12 w-12 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                          <img
                            src={
                              product.image &&
                              !product.image.includes("/images/placeholder.jpg")
                                ? product.image
                                : "https://via.placeholder.com/150?text=No+Image"
                            }
                            alt={product.name}
                            className="object-cover h-full w-full"
                          />
                        </div>
                      </td>
                      <td className="p-4 font-medium text-gray-900">
                        {product.name}
                      </td>
                      <td className="p-4 font-bold text-green-600">
                        ₹{product.price}
                      </td>
                      <td className="p-4 text-gray-600">
                        <span
                          className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                            product.stock > 0
                              ? "bg-blue-50 text-blue-700"
                              : "bg-red-50 text-red-700"
                          }`}
                        >
                          {product.stock > 0
                            ? `${product.stock} in stock`
                            : "Out of Stock"}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center gap-3">
                          {/* Edit Button (Isko hum next step me zinda karenge) */}
                          <Link href={`/admin/products/${product.id}`}>
                            <button className="bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-yellow-100 transition">
                              Edit
                            </button>
                          </Link>

                          {/* 🔥 Delete Button with Server Action */}
                          {/* 🔥 Delete Button with Server Action */}
                          <form action={deleteProduct}>
                            <input
                              type="hidden"
                              name="productId"
                              value={product.id}
                            />
                            <DeleteButton />
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-10 text-center text-gray-500">
              <p className="text-xl font-semibold mb-2">
                Abhi tak koi product add nahi kiya 😢
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
