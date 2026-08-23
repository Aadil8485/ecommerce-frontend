// src/app/admin/products/[id]/page.tsx
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function EditProductPage({ params }) {
  // 1. URL se ID nikalna (Next.js 15+ ke liye pehle await karna padta hai)
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);

  // 2. Database se purana product nikalna
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Product nahi mila 😢
      </div>
    );
  }

  // 3. 🔥 Server Action: Product ko update karne ke liye
  async function updateProduct(formData) {
    "use server";

    const name = formData.get("name");
    const price = parseFloat(formData.get("price"));
    const stock = parseInt(formData.get("stock"));
    const description = formData.get("description");

    try {
      await prisma.product.update({
        where: { id: productId },
        data: { name, price, stock, description },
      });

      // Update ke baad pages ko refresh karein aur wapas products table par bhej dein
      revalidatePath("/");
      revalidatePath("/admin/products");
      redirect("/admin/products");
    } catch (error) {
      console.error("Update error:", error);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h1 className="text-2xl font-extrabold text-gray-900">
            ✏️ Edit Product
          </h1>
          <Link
            href="/admin/products"
            className="text-blue-600 hover:underline font-semibold"
          >
            Cancel
          </Link>
        </div>

        <form action={updateProduct} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={product.name}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                step="0.01"
                defaultValue={product.price}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                defaultValue={product.stock}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              defaultValue={product.description}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Update Product 💾
          </button>
        </form>
      </div>
    </main>
  );
}
