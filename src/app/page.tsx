// // src/app/page.js

import HeroSlider from "../components/home/HeroSlider";

// // 1. Data fetch karne ka function
// async function getProducts() {
//   // 'no-store' ka matlab hai ki har baar naya data laye (caching nahi karega)
//   const res = await fetch("http://localhost:3000/api/products", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Data lane me error aayi!");
//   }

//   return res.json();
// }

// // 2. Main UI Component (Yeh ek Server Component hai)
// export default async function Home() {
//   const data = await getProducts();
//   const products = data.products; // Jo data humne Postman me dekha tha, wahi yahan aayega

//   return (
//     <main className="min-h-screen p-8 bg-gray-50">
//       <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
//         Apna E-Commerce Store 🛒
//       </h1>

//       {/* Grid Layout products ko side-by-side dikhane ke liye */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white border p-6 rounded-xl shadow-lg hover:shadow-xl transition"
//             >
//               <h2 className="text-2xl font-semibold mb-2 text-gray-800">
//                 {product.name}
//               </h2>
//               <p className="text-gray-600 mb-4 h-12 overflow-hidden">
//                 {product.description}
//               </p>

//               <div className="flex justify-between items-center mt-4">
//                 <span className="text-2xl font-bold text-green-600">
//                   ₹{product.price}
//                 </span>
//                 <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">
//                   Stock: {product.stock}
//                 </span>
//               </div>

//               <button className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">
//                 Add to Cart
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-center col-span-3 text-xl text-gray-500">
//             Abhi koi product available nahi hai.
//           </p>
//         )}
//       </div>
//     </main>
//   );
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import HeroSlider from "./components/HeroSlider"; // 1. Slider import kiya

// Slider data laane ka function
async function getSliders() {
  const res = await fetch("http://localhost:3000/api/hero-slider", {
    cache: "no-store",
  });
  if (!res.ok) return { sliders: [] };
  return res.json();
}

// Products data laane ka function
async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Data lane me error aayi!");
  return res.json();
}

export default async function Home() {
  // Dono APIs ko yahan bulaya
  const sliderData = await getSliders();
  const sliders = sliderData.sliders;

  const productData = await getProducts();
  const products = productData.products;

  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      {/* 2. Slider Component ko sabse upar lagaya */}
      <HeroSlider sliders={sliders} />

      <div className="max-w-6xl mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Best Sellers 🛒
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white border p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold mb-1 text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-3 h-12 overflow-hidden text-sm">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-green-600">
                    ₹{product.price}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Stock: {product.stock}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              Products load ho rahe hain...
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

//================================================================================================================================
// import HeroSlider from "@/src/components/home/HeroSlider";
// import AutoSliderPage from "@/src/components/home/featured-products/AutoSliderPage";

// export default function HomePage() {
//   return (
//     <>
//       <HeroSlider />
//       <AutoSliderPage />
//     </>
//   );
// }
