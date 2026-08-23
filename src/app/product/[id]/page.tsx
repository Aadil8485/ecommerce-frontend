import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";

const prisma = new PrismaClient();

// Image theek karne wala function
const getValidImage = (url) => {
  if (!url || url.startsWith("/images/")) {
    return "https://via.placeholder.com/600?text=No+Image";
  }
  return url;
};

export default async function ProductDetailsPage({ params }) {
  // 🔥 THE FIX: Naye Next.js me params ko await karna padta hai
  const resolvedParams = await params;

  // URL se ID nikal kar Number me convert karna
  const productId = parseInt(resolvedParams.id);

  // Agar ID number nahi hai (invalid hai)
  if (isNaN(productId)) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Galat Product ID 😢
        </h1>
        <Link href="/" className="text-blue-600 hover:underline font-semibold">
          Wapas Home par jayein
        </Link>
      </div>
    );
  }

  // Database se search karna
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  // Agar database me product nahi mila
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Product nahi mila 😢
        </h1>
        <Link href="/" className="text-blue-600 hover:underline font-semibold">
          Wapas Home par jayein
        </Link>
      </div>
    );
  }

  // ==================== DESIGN (UI) ====================
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition font-medium"
        >
          <span className="mr-2">←</span> Back to Store
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side: Product Image */}
            <div className="h-[400px] md:h-[600px] bg-gray-100 flex items-center justify-center p-8">
              <img
                src={getValidImage(product.image)}
                alt={product.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Side: Product Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mb-2">
                New Arrival
              </p>

              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <p className="text-4xl font-black text-green-600">
                  ₹{product.price}
                </p>
                {product.stock > 0 ? (
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                    In Stock ({product.stock})
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>

              <div className="prose prose-blue text-gray-600 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Description:
                </h3>
                <p className="whitespace-pre-line leading-relaxed">
                  {product.description ||
                    "Is product ke bare me abhi details available nahi hain."}
                </p>
              </div>

              {/* 🔥 Client Component Button (Add to cart & Buy now) */}
              <AddToCartBtn product={product} />

              {/* Delivery Details */}
              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="text-2xl">🚚</span>
                  <span className="text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-sm font-medium">1 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

//=========================================================================================================

// import AddToCartButton from "@/src/components/AddToCartButton";
// import Link from "next/link";

// // Single product fetch function
// async function getProduct(id) {
//   try {
//     const res = await fetch(`http://localhost:3000/api/products/${id}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) return null;
//     const json = await res.json();
//     return json.data;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }

// export default async function ProductDetails({ params }) {
//   // Next.js 15/16 Fix: await params
//   const { id } = await params;
//   const product = await getProduct(id);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">
//           Product Not Found
//         </h1>
//         <p className="text-gray-500 mb-6">
//           Database me Product Table ke andar ID "{id}" wala product nahi mila.
//         </p>
//         <Link
//           href="/"
//           className="bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition"
//         >
//           &larr; Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-white py-10 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Back Button */}
//         <Link
//           href="/"
//           className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 font-medium"
//         >
//           <span className="mr-2">&larr;</span> Back to Products
//         </Link>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Left Side: Product Image Box */}
//           <div className="bg-[#f5f5f5] rounded-3xl p-8 relative flex items-center justify-center min-h-[400px]">
//             <img
//               src={product.imageUrl || "/images/placeholder.jpg"}
//               alt={product.name}
//               className="object-contain max-h-[500px] w-full drop-shadow-xl"
//             />
//           </div>

//           {/* Right Side: Product Info */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c] mb-4">
//               {product.name}
//             </h1>

//             {/* Price */}
//             <p className="text-4xl font-extrabold text-[#1a202c] mb-8">
//               ${product.price ? product.price.toFixed(2) : "0.00"}
//             </p>

//             {/* Description */}
//             <div className="mb-10">
//               <h3 className="text-xl font-semibold text-[#1a202c] mb-3">
//                 Description
//               </h3>
//               <p className="text-gray-500 leading-relaxed text-lg">
//                 {product.description ||
//                   "Is product ki koi description nahi hai."}
//               </p>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-[#ff7f00] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded-full flex-1 transition shadow-lg shadow-orange-500/30">
//                 Buy Now
//               </button>

//               <AddToCartButton
//                 product={product}
//                 className="flex-1 bg-white border-2 border-gray-200 text-gray-800 font-bold py-4 px-8 rounded-full hover:bg-gray-50 transition"
//               >
//                 Add to Cart
//               </AddToCartButton>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
