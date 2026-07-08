import ProductCard from "./ProductCard";
import { products } from "./products";

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <p className="font-medium text-indigo-600">Featured Collection</p>

          <h2 className="mt-2 text-4xl font-bold">Featured Products</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover our best-selling products with amazing deals and premium
            quality.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
