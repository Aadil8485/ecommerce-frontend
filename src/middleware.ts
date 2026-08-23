// src/middleware.js
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Token se user ka email nikalna
    const userEmail = req.nextauth.token?.email;

    // 🔥 YAHAN APNA ADMIN EMAIL DAALIYE
    const adminEmail = "syed@gmail.com";

    // Guard Check: Agar koi '/admin' wale page par jana chahta hai
    if (req.nextUrl.pathname.startsWith("/admin")) {
      // Aur uska email Admin email se match NAHI hota, toh usko wapas Home Page bhej do
      if (userEmail !== adminEmail) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    // '/checkout' ke liye humein alag se kuch likhne ki zaroorat nahi hai.
    // Niche wala 'authorized' function apne aap check kar lega ki user logged in hai ya nahi.
  },
  {
    callbacks: {
      // Yeh ensure karta hai ki Guard wale pages par jaane ke liye user ka Login hona zaroori hai
      authorized: ({ token }) => !!token,
    },
  },
);

// Yahan hum Guard ko batate hain ki usko kahan-kahan duty karni hai
export const config = {
  // 🔥 THE FIX: Ab guard '/checkout' aur '/admin' dono par khada hoga
  matcher: ["/checkout", "/admin/:path*"],
};
