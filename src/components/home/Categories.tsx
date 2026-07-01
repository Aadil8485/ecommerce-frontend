import CategoryCard from "./CategoryCard";
import { categories } from "@/src/data/categories";

export default function Categories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Shop by Categories</h2>

          <p className="mt-4 text-gray-500">
            Explore products from different categories.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
