// import "./globals.css";
// import Navbar from "../components/home/Navbar";
// import Footer from "../components/home/Footer";
// import { CartProvider } from "../context/CartContext";
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <CartProvider>{children}</CartProvider>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// src/app/layout.js (Update karein)
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthProvider"; // 🔥 Naya add kiya
import Navbar from "../components/home/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 🔥 AuthProvider se sabko wrap kar diya */}
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <Toaster position="top-center" reverseOrder={false} />
            <div className="pt-2">{children}</div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
