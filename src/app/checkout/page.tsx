// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   CreditCard,
//   Truck,
//   ShieldCheck,
//   Lock,
//   CheckCircle2,
//   ChevronLeft,
// } from "lucide-react";

// // Mock data for the checkout summary
// const checkoutItems = [
//   {
//     id: 1,
//     name: "SonicPro Noise-Canceling Earbuds",
//     variant: "Matte Black",
//     price: 199.99,
//     qty: 1,
//     imageUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=Earbuds",
//   },
//   {
//     id: 2,
//     name: "Premium Silicone Case",
//     variant: "Midnight Blue",
//     price: 50.0,
//     qty: 1,
//     imageUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=Case",
//   },
// ];

// export default function CheckoutPage() {
//   // State to manage the checkout process: "idle", "processing", "success"
//   const [checkoutState, setCheckoutState] = useState("idle");

//   // Calculate totals
//   const subtotal = checkoutItems.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0,
//   );
//   const shipping = 10.0;
//   const tax = subtotal * 0.08;
//   const total = subtotal + shipping + tax;

//   // Handle the form submission
//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     setCheckoutState("processing");

//     // Simulate an API call to a payment gateway
//     setTimeout(() => {
//       setCheckoutState("success");
//     }, 2000);
//   };

//   // SUCCESS SCREEN
//   if (checkoutState === "success") {
//     return (
//       <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//         <div className="max-w-xl w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center space-y-6">
//           <div className="flex justify-center">
//             <CheckCircle2 className="h-20 w-20 text-green-500" />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900">
//             Order Placed Successfully!
//           </h1>
//           <p className="text-gray-500">
//             Thank you for your purchase. Your order number is{" "}
//             <span className="font-semibold text-gray-900">#ORD-89021</span>. We
//             have sent a confirmation email with your receipt and tracking
//             details.
//           </p>
//           <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               href="/orders"
//               className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
//             >
//               View Order Status
//             </Link>
//             <Link
//               href="/products"
//               className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
//             >
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // CHECKOUT FORM SCREEN
//   return (
//     <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <Link
//             href="/cart"
//             className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-4 transition-colors"
//           >
//             <ChevronLeft className="mr-1 h-4 w-4" />
//             Back to Cart
//           </Link>
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-3">
//             <Lock className="h-6 w-6 text-gray-400" />
//             Secure Checkout
//           </h1>
//         </div>

//         <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
//           {/* Left Column: Form */}
//           <div className="lg:col-span-7">
//             <form
//               onSubmit={handlePlaceOrder}
//               id="checkout-form"
//               className="space-y-8"
//             >
//               {/* Contact Info */}
//               <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <h2 className="text-lg font-medium text-gray-900 mb-4">
//                   Contact Information
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Email address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="phone"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Phone number (optional)
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>
//               </section>

//               {/* Shipping Details */}
//               <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <div className="flex items-center gap-2 mb-4">
//                   <Truck className="h-5 w-5 text-gray-500" />
//                   <h2 className="text-lg font-medium text-gray-900">
//                     Shipping Details
//                   </h2>
//                 </div>
//                 <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
//                   <div className="sm:col-span-2">
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Full name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div className="sm:col-span-2">
//                     <label
//                       htmlFor="address"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Street address
//                     </label>
//                     <input
//                       type="text"
//                       id="address"
//                       name="address"
//                       required
//                       className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="city"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       City
//                     </label>
//                     <input
//                       type="text"
//                       id="city"
//                       name="city"
//                       required
//                       className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="state"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       State / Province
//                     </label>
//                     <input
//                       type="text"
//                       id="state"
//                       name="state"
//                       required
//                       className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="zip"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       ZIP / Postal code
//                     </label>
//                     <input
//                       type="text"
//                       id="zip"
//                       name="zip"
//                       required
//                       className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>
//               </section>

//               {/* Payment Details */}
//               <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-2">
//                     <CreditCard className="h-5 w-5 text-gray-500" />
//                     <h2 className="text-lg font-medium text-gray-900">
//                       Payment Method
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div>
//                     <label
//                       htmlFor="card-number"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Card number
//                     </label>
//                     <input
//                       type="text"
//                       id="card-number"
//                       placeholder="0000 0000 0000 0000"
//                       required
//                       className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label
//                         htmlFor="expiration"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Expiration date (MM/YY)
//                       </label>
//                       <input
//                         type="text"
//                         id="expiration"
//                         placeholder="MM/YY"
//                         required
//                         className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="cvc"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         CVC
//                       </label>
//                       <input
//                         type="text"
//                         id="cvc"
//                         placeholder="123"
//                         required
//                         className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </form>
//           </div>

//           {/* Right Column: Order Summary */}
//           <div className="mt-10 lg:mt-0 lg:col-span-5">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
//               <h2 className="text-lg font-medium text-gray-900 mb-6">
//                 Order Summary
//               </h2>

//               {/* Items List */}
//               <ul className="divide-y divide-gray-200 mb-6">
//                 {checkoutItems.map((item) => (
//                   <li key={item.id} className="flex py-4">
//                     <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                       {/* eslint-disable-next-line @next/next/no-img-element */}
//                       <img
//                         src={item.imageUrl}
//                         alt={item.name}
//                         className="h-full w-full object-cover object-center"
//                       />
//                     </div>
//                     <div className="ml-4 flex flex-1 flex-col justify-center">
//                       <div className="flex justify-between text-sm font-medium text-gray-900">
//                         <h3 className="line-clamp-1">{item.name}</h3>
//                         <p className="ml-4">${item.price.toFixed(2)}</p>
//                       </div>
//                       <p className="mt-1 text-sm text-gray-500">
//                         Qty: {item.qty}
//                       </p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               {/* Totals */}
//               <dl className="space-y-4 text-sm text-gray-600 border-t border-gray-200 pt-6 mb-6">
//                 <div className="flex justify-between">
//                   <dt>Subtotal</dt>
//                   <dd className="font-medium text-gray-900">
//                     ${subtotal.toFixed(2)}
//                   </dd>
//                 </div>
//                 <div className="flex justify-between">
//                   <dt>Shipping</dt>
//                   <dd className="font-medium text-gray-900">
//                     ${shipping.toFixed(2)}
//                   </dd>
//                 </div>
//                 <div className="flex justify-between">
//                   <dt>Taxes</dt>
//                   <dd className="font-medium text-gray-900">
//                     ${tax.toFixed(2)}
//                   </dd>
//                 </div>
//                 <div className="flex justify-between border-t border-gray-200 pt-4 text-base font-bold text-gray-900">
//                   <dt>Total</dt>
//                   <dd>${total.toFixed(2)}</dd>
//                 </div>
//               </dl>

//               {/* Place Order Button */}
//               <button
//                 type="submit"
//                 form="checkout-form" // Connects button to the form element above
//                 disabled={checkoutState === "processing"}
//                 className={`w-full rounded-md border border-transparent px-4 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex justify-center items-center gap-2
//                   ${checkoutState === "processing" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
//               >
//                 {checkoutState === "processing" ? (
//                   <>
//                     <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
//                     Processing...
//                   </>
//                 ) : (
//                   <>
//                     Place Order
//                     <Lock className="h-4 w-4" />
//                   </>
//                 )}
//               </button>

//               <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
//                 <ShieldCheck className="h-4 w-4 text-green-500" />
//                 <span>Your payment information is encrypted and secure.</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//===================================================================================================================================
// src/app/checkout/page.tsx
"use client";

import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  // 1. Total Price Calculate karna
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // 2. Place Order ka main function
  const handlePlaceOrder = async (e) => {
    e.preventDefault(); // 🔥 Form ko reload hone se rokne ke liye

    setLoading(true);
    console.log("Button click hua! Address hai:", address);
    console.log("Cart me items hain:", cartItems);

    try {
      // 🔥 URL ko '/api/orders' kar diya, kyunki humne wo API banayi thi
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // 🔥 Hamari API ko jis naam se data chahiye, usi naam se bheja hai
        body: JSON.stringify({
          items: cartItems,
          address: address,
          totalPrice: totalPrice,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Order success hone par
        toast.success(data.message || "Order Successfully Placed! 🎉", {
          style: { background: "#10B981", color: "#fff" },
        });

        // 2 second baad Home page par bhej do
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Kuch galat ho gaya, phir se try karein!");
    } finally {
      setLoading(false);
    }
  };

  // Agar cart khali hai toh
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Aapka cart khali hai 🛒
        </h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">
          Checkout Summary
        </h2>

        {/* Cart Items ki List */}
        <div className="space-y-4 mb-8">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
            >
              <div>
                <p className="font-semibold text-gray-800">
                  {item.title || item.name}
                </p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold text-gray-900">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 THE FIX: Yahan se Form START kiya hai */}
        <form onSubmit={handlePlaceOrder} className="space-y-5">
          {/* Address Box */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Pura Address (Address) *
            </label>
            <textarea
              required
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Ghar ka number, Gali, Shehar, Pincode..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Total Price & Button */}
          <div className="border-t pt-6 flex flex-col items-end">
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Total Bill: <span className="text-blue-600">₹{totalPrice}</span>
            </p>

            <button
              type="submit" // 🔥 onClick hatakar 'type="submit"' kiya
              disabled={loading}
              className={`w-full md:w-auto px-10 py-4 rounded-xl font-bold text-lg text-white transition shadow-lg
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 active:scale-95"}`}
            >
              {loading ? "Processing..." : "Place Order 🚀"}
            </button>
          </div>
        </form>
        {/* 🔥 Yahan Form CLOSE hua hai */}
      </div>
    </main>
  );
}
