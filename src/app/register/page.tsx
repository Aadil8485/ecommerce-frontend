// import Link from "next/link";

// export default function RegisterPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       {/* Registration Card */}
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         {/* Header Section */}
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Create an account
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Already have an account?{" "}
//             <Link
//               href="/login"
//               className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
//             >
//               Sign in here
//             </Link>
//           </p>
//         </div>

//         {/* Form Section */}
//         <form className="mt-8 space-y-5" action="#" method="POST">
//           <div className="space-y-4">
//             {/* Full Name Input */}
//             <div>
//               <label
//                 htmlFor="full-name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <input
//                 id="full-name"
//                 name="name"
//                 type="text"
//                 autoComplete="name"
//                 required
//                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-colors"
//                 placeholder="John Doe"
//               />
//             </div>

//             {/* Email Input */}
//             <div>
//               <label
//                 htmlFor="email-address"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email address
//               </label>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-colors"
//                 placeholder="you@example.com"
//               />
//             </div>

//             {/* Password Input */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-colors"
//                 placeholder="••••••••"
//               />
//             </div>

//             {/* Confirm Password Input */}
//             <div>
//               <label
//                 htmlFor="confirm-password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 id="confirm-password"
//                 name="confirm-password"
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-colors"
//                 placeholder="••••••••"
//               />
//             </div>
//           </div>

//           {/* Terms and Conditions */}
//           <div className="flex items-center">
//             <input
//               id="terms"
//               name="terms"
//               type="checkbox"
//               required
//               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
//             />
//             <label
//               htmlFor="terms"
//               className="ml-2 block text-sm text-gray-900 cursor-pointer"
//             >
//               I agree to the{" "}
//               <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                 Terms and Conditions
//               </a>
//             </label>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//             >
//               Sign up
//             </button>
//           </div>
//           {/* Sign In Button */}
//           <div>
//             <Link href="/login">
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//               >
//                 Sign in
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
//==================================================================================================================================

// src/app/register/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  // Form ke data ke liye state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Button disable karne ke liye

  // Form submit hone par kya hoga
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Humari banayi hui API ko call kar rahe hain
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Agar account ban gaya
        toast.success(data.message, {
          style: { background: "#10B981", color: "#fff" },
        });

        // 2 second baad login page par bhej do
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        // Agar email pehle se hai ya koi error hai
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Kuch galat ho gaya, phir se try karein!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-lg text-white transition shadow-lg mt-4 
              ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95"}`}
          >
            {loading ? "Creating Account..." : "Sign Up 🚀"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Log in here
          </Link>
        </p>
      </div>
    </main>
  );
}
