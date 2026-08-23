// import Link from "next/link";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       {/* Login Card */}
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         {/* Header Section */}
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Or{" "}
//             <Link
//               href="/register"
//               className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
//             >
//               start your 14-day free trial
//             </Link>
//           </p>
//         </div>

//         {/* Form Section */}
//         <form className="mt-8 space-y-6" action="#" method="POST">
//           <div className="rounded-md shadow-sm space-y-4">
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
//                 autoComplete="current-password"
//                 required
//                 className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-colors"
//                 placeholder="••••••••"
//               />
//             </div>
//           </div>

//           {/* Form Actions (Remember Me & Forgot Password) */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
//               />
//               <label
//                 htmlFor="remember-me"
//                 className="ml-2 block text-sm text-gray-900 cursor-pointer"
//               >
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <Link
//                 href="/forgot-password"
//                 className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
//               >
//                 Forgot your password?
//               </Link>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//             >
//               Sign in
//             </button>
//           </div>
//           {/* {Register Button} */}
//           <div>
//             <Link href="/register">
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//               >
//                 Register
//               </button>
//             </Link>
//           </div>
//           {/* {admin login Button} */}
//           <div>
//             <Link href="/admin/login">
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//               >
//                 Admin Login
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

//======================================================================================================================================

// src/app/login/page.tsx
"use client";

import { useState } from "react";
// 🔥 NextAuth ka signIn function import kiya
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // NextAuth engine ko login karne ke liye bol rahe hain
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false, // Hum khud redirect karenge
      });

      if (res?.error) {
        // Agar password galat hai ya account nahi hai
        toast.error(res.error, {
          style: { background: "#EF4444", color: "#fff" },
        });
      } else {
        // Agar login success ho gaya
        toast.success("Login Successful! Welcome back 🎉", {
          style: { background: "#10B981", color: "#fff" },
        });

        // Login hone ke baad Home page par bhej do
        setTimeout(() => {
          router.push("/");
          router.refresh(); // Navbar update karne ke liye
        }, 1500);
      }
    } catch (error) {
      toast.error("Kuch galat ho gaya. Phir se try karein!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Welcome Back! 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
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
              ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900 hover:bg-black active:scale-95"}`}
          >
            {loading ? "Logging in..." : "Log In 🚀"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </main>
  );
}
