// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  // 1. Kis tarike se login karna hai? (Email & Password)
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "john@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      // 2. Database check karne ka function
      async authorize(credentials) {
        // Agar email ya password nahi daala
        if (!credentials.email || !credentials.password) {
          throw new Error("Email aur password dono zaroori hain!");
        }

        // Database me user ko uske email se dhundho
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // Agar user nahi mila
        if (!user) {
          throw new Error("Is email se koi account nahi mila!");
        }

        // Agar user mila, toh password check karo (Bcrypt hash se match karo)
        const isPasswordMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordMatch) {
          throw new Error("Galat password!");
        }

        // Sab sahi hai toh user ko return kar do (Login Success!)
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login", // NextAuth ko bata rahe hain ki hamara login page kahan hai
  },

  // 🔥 YEH NAYA BLOCK ADD KARNA HAI 🔥
  callbacks: {
    // 1. JWT Token me role daalo
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Database se role liya
      }
      return token;
    },

    // 2. Us token se role nikal kar frontend session ko de do
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  // 3. Security Session Strategy
  session: {
    strategy: "jwt",
  },
  // 4. Secret key (Authentication tokens banane ke liye)
  secret: process.env.NEXTAUTH_SECRET || "my-super-secret-key-123",
};

const handler = NextAuth(authOptions);

// Next.js App Router me GET aur POST dono export karne padte hain
export { handler as GET, handler as POST };
