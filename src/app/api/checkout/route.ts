// src/app/api/checkout/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
// Dhyan de: Yahan humne wahi authOptions import kiye hain jo NextAuth engine me banaye the
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // 1. Security Check: Kya user sach me login hai?
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "Order place karne ke liye login karna zaroori hai!" },
        { status: 401 },
      );
    }

    // 2. Frontend se Cart items aur Total Price lena
    const body = await request.json();
    const { cartItems, totalPrice } = body;

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json(
        { error: "Aapka cart khali hai!" },
        { status: 400 },
      );
    }

    // 3. Database me Login kiye hue User ko dhundhna
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    // 4. 🔥 Magic of Prisma: Order aur uske Items ek sath Database me save karna
    const newOrder = await prisma.order.create({
      data: {
        userId: user.id,
        totalPrice: totalPrice,
        // Yahan array map karke saare products ek sath save kar rahe hain
        items: {
          create: cartItems.map((item) => ({
            productId: item.id || item.productId, // Product ID
            productName: item.title || item.name, // Product ka naam
            price: item.price,
            quantity: item.quantity,
          })),
        },
      },
    });

    return NextResponse.json(
      { message: "Order successfully place ho gaya! 🎉", orderId: newOrder.id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Checkout Error:", error);
    return NextResponse.json(
      { error: "Order process karne me problem aayi. Phir se try karein." },
      { status: 500 },
    );
  }
}
