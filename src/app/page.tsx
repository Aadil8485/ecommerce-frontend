// src/app/page.js
import ProductGridWithSearch from "./ProductGridWithSearch";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

// 🔥 YEH HAI MASTER FILTER
const getValidImage = (url: any) => {
  // Galti yahan thi: Humein purane "/images/" ko block karna hai, "/uploads/" ko nahi!
  if (!url || url.startsWith("/images/")) {
    return "https://via.placeholder.com/300?text=No+Image";
  }

  // Agar link "/uploads/..." se shuru hota hai, toh wo yahan se bina ruke pass ho jayega!
  return url;
};

const prisma = new PrismaClient();

// 1. Teeno tables se data laane ke functions
async function getHeroBanners() {
  try {
    return await prisma.heroSlider.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    return [];
  }
}

async function getFeaturedProducts() {
  try {
    return await prisma.autoSlider.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    return [];
  }
}

async function getAllProducts() {
  try {
    return await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    return [];
  }
}

// 2. Main Home Page Component
export default async function Home() {
  // Teeno data ek sath fetch kar rahe hain
  const heroBanners = await getHeroBanners();
  const featuredProducts = await getFeaturedProducts();
  const allProducts = await getAllProducts();

  return (
    <main className="min-h-screen bg-[#fafafa] pb-20">
      {/* ==================== 1. HERO SLIDER SECTION ==================== */}
      <section className="w-full bg-gray-900 mb-12">
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {heroBanners.length > 0 ? (
            heroBanners.map((banner) => (
              <div
                key={banner.id}
                className="min-w-full h-[300px] md:h-[450px] snap-center relative"
              >
                <img
                  src={getValidImage(banner.imageUrl)}
                  alt={banner.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center px-4">
                    {banner.title}
                  </h1>
                </div>
              </div>
            ))
          ) : (
            <div className="min-w-full h-[300px] flex items-center justify-center text-gray-400">
              Hero Banners Postman se add karein...
            </div>
          )}
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-6">
        {/* ==================== 2. AUTO SLIDER (FEATURED) ==================== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-[28px] mb-6">
            Featured Products 🔥
          </h2>

          <div
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredProducts.length > 0 ? (
              featuredProducts.map((item) => (
                <div
                  key={item.id}
                  className="snap-start min-w-[310px] max-w-[310px] bg-white border border-gray-100 rounded-[20px] p-4 shadow-sm hover:shadow-md transition relative flex flex-col justify-between"
                >
                  {item.badge && (
                    <span className="absolute top-6 left-6 bg-white text-[11px] font-bold text-gray-700 border border-gray-100 px-2.5 py-1 rounded-[8px] shadow-sm z-10">
                      {item.badge}
                    </span>
                  )}

                  <Link href={`/product/${item.productId}`}>
                    <div className="w-full h-[220px] bg-[#f3f4f6] rounded-[16px] mb-4 overflow-hidden flex items-center justify-center">
                      <img
                        src={getValidImage(item.imageUrl)}
                        alt={item.name}
                        className="object-contain h-[85%] w-[85%] mix-blend-multiply transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="font-semibold text-[17px] text-gray-900 mb-4 line-clamp-1 hover:text-blue-600 hover:underline cursor-pointer">
                      {item.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-1 text-[13px] text-gray-800 mb-1.5 font-medium">
                    <span className="text-amber-400 text-base">★</span>
                    <span>{item.rating ? item.rating.toFixed(1) : "0.0"}</span>
                    <span className="text-gray-400 font-normal">
                      ({item.reviewCount || 0})
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-2">
                    <span className="text-[#10b981] font-bold text-[22px]">
                      ${item.price ? item.price.toFixed(2) : "0.00"}
                    </span>
                    <button className="bg-[#0f172a] text-white text-xs font-semibold px-4 py-2.5 rounded-[10px] hover:bg-slate-800 transition active:scale-95">
                      Add
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-10 bg-white border border-dashed rounded-[20px] text-gray-400">
                AutoSlider table me data nahi hai.
              </div>
            )}
          </div>
        </section>

        {/* ==================== 3. ALL PRODUCTS GRID ==================== */}
        {/* ==================== 3. ALL PRODUCTS GRID ==================== */}
        <ProductGridWithSearch allProducts={allProducts} />
      </div>
    </main>
  );
}
//==================================================================================

// // src/app/page.js

// import HeroSlider from "../components/home/HeroSlider";

// import HeroSlider from "./components/HeroSlider"; // 1. Slider import kiya

// Slider data laane ka function
// async function getSliders() {
//   const res = await fetch("http://localhost:3000/api/hero-slider", {
//     cache: "no-store",
//   });
//   if (!res.ok) return { sliders: [] };
//   return res.json();
// }

// // Products data laane ka function
// async function getProducts() {
//   const res = await fetch("http://localhost:3000/api/products", {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error("Data lane me error aayi!");
//   return res.json();
// }

// export default async function Home() {
//   // Dono APIs ko yahan bulaya
//   const sliderData = await getSliders();
//   const sliders = sliderData.sliders;

//   const productData = await getProducts();
//   const products = productData.products;

//   return (
//     <main className="min-h-screen bg-gray-50 pb-10">
//       {/* 2. Slider Component ko sabse upar lagaya */}
//       <HeroSlider sliders={sliders} />

//       <div className="max-w-6xl mx-auto px-4 mt-10">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Best Sellers 🛒
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white border p-4 rounded-xl shadow-md hover:shadow-lg transition"
//               >
//                 {product.imageUrl && (
//                   <img
//                     src={product.imageUrl}
//                     alt={product.name}
//                     className="w-full h-48 object-cover rounded-md mb-4"
//                   />
//                 )}
//                 <h2 className="text-xl font-semibold mb-1 text-gray-800">
//                   {product.name}
//                 </h2>
//                 <p className="text-gray-600 mb-3 h-12 overflow-hidden text-sm">
//                   {product.description}
//                 </p>

//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-xl font-bold text-green-600">
//                     ₹{product.price}
//                   </span>
//                   <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                     Stock: {product.stock}
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center col-span-3 text-gray-500">
//               Products load ho rahe hain...
//             </p>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }

//================================================================================================================================

// import AutoSliderPage from "@/src/components/home/featured-products/AutoSliderPage";
// import HeroSlider from "@/src/components/home/HeroSlider";

// export default function HomePage() {
//   return (
//     <>
//       <HeroSlider />
//       <AutoSliderPage />
//     </>
//   );
// }
//================================================================================================================================

// // src / app / page.js;
// import Link from "next/link";
// import { NextResponse } from "next/server";
// import { PrismaClient } from "../generated/prisma";

// const prisma = new PrismaClient();

// // 1. Database se AutoSlider ka data laane ka function
// async function getAutoSliderData() {
//   try {
//     const sliders = await prisma.autoSlider.findMany({
//       where: { isActive: true },
//       orderBy: { createdAt: "desc" },
//     });
//     return sliders;
//   } catch (error) {
//     console.error("Database se data lane me galti hui:", error.message);
//     return [];
//   }
// }

// // 2. Main Home Page (Server Component)
// export default async function Home() {
//   const slides = await getAutoSliderData();

//   return (
//     <main className="min-h-screen bg-[#fafafa] py-10 px-6">
//       <div className="w-full max-w-7xl mx-auto">
//         {/* Upper Header: Title aur Navigation Buttons */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-slate-900 text-[28px]">
//             Featured Products
//           </h2>

//           {/* Arrow Buttons (Aap inpar click karke mouse se scroll bhi kar sakte hain) */}
//           <div className="flex gap-2">
//             <button
//               className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition active:scale-95"
//               title="Scroll Left"
//             >
//               <span className="text-gray-600 font-semibold text-lg">&lt;</span>
//             </button>
//             <button
//               className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition active:scale-95"
//               title="Scroll Right"
//             >
//               <span className="text-gray-600 font-semibold text-lg">&gt;</span>
//             </button>
//           </div>
//         </div>

//         {/* Main Cards Container (Horizontal Scroll) */}
//         <div
//           className="flex overflow-x-auto gap-6 pb-4 scroll-smooth"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {slides.length > 0 ? (
//             slides.map((item) => (
//               <div
//                 key={item.id}
//                 className="min-w-[310px] max-w-[310px] bg-white border border-gray-100 rounded-[20px] p-4 shadow-sm hover:shadow-md transition relative flex flex-col justify-between"
//               >
//                 {/* Badge Indicator (e.g., Best Seller) */}
//                 {item.badge && (
//                   <span className="absolute top-6 left-6 bg-white text-[11px] font-bold text-gray-700 border border-gray-100 px-2.5 py-1 rounded-[8px] shadow-sm z-10">
//                     {item.badge}
//                   </span>
//                 )}

//                 {/* Gray Background Box for Product Image aur Title (Dono Link me wrap hain) */}
//                 <Link href={`/product/${item.id}`}>
//                   <div className="w-full h-[220px] bg-[#f3f4f6] rounded-[16px] mb-4 overflow-hidden flex items-center justify-center">
//                     <img
//                       src={item.imageUrl || "/images/placeholder.jpg"}
//                       alt={item.name}
//                       className="object-contain h-[85%] w-[85%] mix-blend-multiply transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                   <h3 className="font-semibold text-[17px] text-gray-900 mb-4 line-clamp-1 hover:text-blue-600 hover:underline cursor-pointer">
//                     {item.name}
//                   </h3>
//                 </Link>

//                 {/* Ratings Line */}
//                 <div className="flex items-center gap-1 text-[13px] text-gray-800 mb-1.5 font-medium">
//                   <span className="text-amber-400 text-base">★</span>
//                   <span>{item.rating ? item.rating.toFixed(1) : "0.0"}</span>
//                   <span className="text-gray-400 font-normal">
//                     ({item.reviewCount || 0})
//                   </span>
//                 </div>

//                 {/* Bottom Section: Price & Add to Cart Button */}
//                 <div className="flex justify-between items-center mt-auto pt-2">
//                   <span className="text-[#10b981] font-bold text-[22px]">
//                     ${item.price ? item.price.toFixed(2) : "0.00"}
//                   </span>

//                   <button className="bg-[#0f172a] text-white text-xs font-semibold px-4 py-2.5 rounded-[10px] hover:bg-slate-800 transition active:scale-95">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             // Agar database khali hoga toh yeh message dikhega
//             <div className="w-full text-center py-20 bg-white border border-dashed rounded-[20px] text-gray-400">
//               AutoSlider table me koi data nahi mila. Postman se data daalein!
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }
