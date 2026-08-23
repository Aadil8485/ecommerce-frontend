// src/app/api/orders/route.js
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
// Dhyan rahe, authOptions ka path theek ho
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // 1. Security: Check karna ki customer logged in hai ya nahi
    const session: any = await getServerSession(authOptions as any);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Order place karne ke liye Login karna zaroori hai!" },
        { status: 401 },
      );
    }

    // 2. Frontend se aane wala data (Cart items aur Address) nikalna
    const body = await req.json();
    const { items, address, totalPrice } = body;

    // 🔥 YEH LINE ADD KAREIN (Checking ke liye)
    console.log("Frontend se yeh data aaya:", body);

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Aapka cart khali hai" },
        { status: 400 },
      );
    }

    // 3. Database me naya Order aur uske Items save karna
    const newOrder = await prisma.order.create({
      data: {
        address: address,
        // Dhyan dein: Agar aapke db me iska naam 'total' hai toh 'total: totalAmount' likhein
        totalPrice: parseFloat(totalPrice),
        status: "PENDING",

        // Order ko us user se link karna jisne login kiya hai
        user: {
          connect: { email: session.user.email },
        },

        // Cart ke saare items ko ek sath database me save karna
        items: {
          create: items.map((item) => ({
            productName: item.name,
            price: parseFloat(item.price),
            quantity: parseInt(item.quantity),
            productId: parseInt(item.id),
          })),
        },
      },
    });

    return NextResponse.json(
      { message: "Order Placed Successfully! 🎉", order: newOrder },
      { status: 201 },
    );
  } catch (error) {
    console.error("Order API me error aaya:", error);
    return NextResponse.json(
      { error: "Kuch galat ho gaya, phir se try karein!" },
      { status: 500 },
    );
  }
}
