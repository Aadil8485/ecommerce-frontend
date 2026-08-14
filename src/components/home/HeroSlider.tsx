"use client";
import { useState, useEffect } from "react";

export default function HeroSlider({ sliders }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll ka logic (Har 3 second me image change)
  useEffect(() => {
    if (sliders.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearInterval(interval); // Component hatne par timer band karein
  }, [sliders.length]);

  if (!sliders || sliders.length === 0) return null;

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gray-200">
      {sliders.map((slider, index) => (
        <div
          key={slider.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Slider Image */}
          <img
            src={slider.imageUrl}
            alt={slider.title}
            className="w-full h-full object-cover"
          />

          {/* Slider Text/Title ke piche black shadow */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-10">
            <h2 className="text-4xl font-bold text-white shadow-lg drop-shadow-md">
              {slider.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

//=================================================================================================================================

// "use client";

// import { useState, useEffect } from "react";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// // Mock data for the slider
// const slides = [
//   {
//     id: 1,
//     tagline: "Exclusive Deal 40% Off",
//     title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
//     image:
//       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
//     buttonText: "Order Now",
//     buttonLink: "/shop",
//   },
//   {
//     id: 2,
//     tagline: "New Arrival 20% Off",
//     title: "Experience the Ultimate Sound with AirPods Max.",
//     image:
//       "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1000&auto=format&fit=crop",
//     buttonText: "Shop Audio",
//     buttonLink: "/shop/audio",
//   },
//   {
//     id: 3,
//     tagline: "Limited Time Offer",
//     title: "Capture Every Moment - Sony Alpha A7III on Sale.",
//     image:
//       "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
//     buttonText: "View Cameras",
//     buttonLink: "/shop/cameras",
//   },
// ];

// export default function HeroSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-slide functionality (Optional: remove this useEffect if you only want manual sliding)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000); // Changes slide every 5 seconds
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full bg-white pb-8 pt-4">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Slider Container */}
//         <div className="relative overflow-hidden rounded-xl bg-[#eff1f6] min-h-[450px] md:min-h-[500px]">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 flex transition-opacity duration-700 ease-in-out ${
//                 index === currentSlide
//                   ? "opacity-100 z-10"
//                   : "opacity-0 z-0 pointer-events-none"
//               }`}
//             >
//               <div className="flex h-full w-full flex-col-reverse items-center justify-between px-8 py-10 md:flex-row md:px-16 lg:px-24">
//                 {/* Left Side: Text Content */}
//                 <div className="w-full text-center md:w-1/2 md:text-left mt-8 md:mt-0">
//                   <p className="mb-3 text-sm font-semibold tracking-wide text-orange-500 md:text-base">
//                     {slide.tagline}
//                   </p>
//                   <h1 className="mb-8 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
//                     {slide.title}
//                   </h1>

//                   <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 md:justify-start">
//                     <Link
//                       href={slide.buttonLink}
//                       className="rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                     >
//                       {slide.buttonText}
//                     </Link>
//                     <Link
//                       href="/learn-more"
//                       className="group flex items-center text-sm font-semibold text-gray-700 transition-colors hover:text-orange-500"
//                     >
//                       Learn More
//                       <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Right Side: Image */}
//                 <div className="w-full flex justify-center md:w-1/2">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="max-h-[250px] object-contain drop-shadow-2xl md:max-h-[350px] lg:max-h-[400px]"
//                     // Note: In production, switch to Next.js <Image /> component for better optimization
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Dots */}
//         <div className="mt-8 flex items-center justify-center space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`h-2 w-2 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? "bg-orange-500 w-4"
//                   : "bg-gray-300 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
