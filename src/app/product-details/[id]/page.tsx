import { Star, StarHalf, ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// ZAROORI: Ye products ka data is file mein bhi hona chahiye
const products = [
  {
    id: 1,
    name: "Apple AirPods Pro 2nd gen",
    description:
      "Apple AirPods Pro (2nd Gen) with MagSafe Charging Case. Active Noise Cancellation, Personalized Spatial Audio, and up to 30 hours of total listening time.",
    price: 399.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Canon EOS R5",
    description:
      "The Canon EOS R5 is a game-changing mirrorless camera featuring a 45MP full-frame sensor, 8K video recording, and exceptional autofocus capabilities.",
    price: 3899.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "PlayStation 5",
    description:
      "The PlayStation 5 takes gaming to the next level with lightning-fast loading, ultra-high-speed SSD, and breathtaking immersion with haptic feedback.",
    price: 499.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    description:
      "The Samsung Galaxy S23 offers an epic camera experience, blazing-fast Snapdragon processor, and a brilliant AMOLED display in a sleek design.",
    price: 799.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1610945265064-3234e442d586?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "ASUS ROG Zephyrus G16",
    description:
      "The ASUS ROG Zephyrus G16 gaming laptop delivers ultra-performance with its RTX 40-series GPU, Intel Core i9 processor, and a stunning QHD display.",
    price: 1999.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "ASUS ROG Zephyrus G18",
    description:
      "The ASUS ROG Zephyrus G16 gaming laptop delivers ultra-performance with its RTX 40-series GPU, Intel Core i9 processor, and a stunning QHD display.",
    price: 1999.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop",
  },
];

// FIX 1: Component ke aage 'async' lagaya hai (Latest Next.js ke liye zaroori hai)
export default async function ProductDetails({ params }) {
  // FIX 2: params ko 'await' kiya hai, kyunki naye Next.js mein ye ek Promise hota hai
  const resolvedParams = await params;

  // FIX 3: String() ka use karke match kiya hai taaki Number vs String ka error na aaye
  const product = products.find(
    (p) => String(p.id) === String(resolvedParams.id),
  );

  // Agar fir bhi match na ho
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800">Product Not Found</h1>
        <p className="mt-2 text-gray-500">
          Checking ID: {resolvedParams.id}
        </p>{" "}
        {/* Ye aapko screen pe dikhayega ki wo kis ID ko dhund raha hai */}
        <Link
          href="/"
          className="mt-6 rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Side: Product Image */}
          <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-[#f3f4f6] p-8">
            <button className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-colors hover:text-red-500 focus:outline-none">
              <Heart className="h-6 w-6" strokeWidth={2} />
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain mix-blend-darken"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center space-x-2">
              <div className="flex text-orange-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <StarHalf className="h-5 w-5 fill-current" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {product.rating} Rating
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 text-4xl font-extrabold text-gray-900">
              ${product.price}
            </p>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-base text-gray-500 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex gap-4">
              <button className="flex flex-1 items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Buy Now
              </button>
              <button className="flex flex-1 items-center justify-center rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:border-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
