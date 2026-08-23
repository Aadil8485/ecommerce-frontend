// src/app/api/register/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // 1. Frontend se data receive karo
    const body = await request.json();
    const { name, email, password } = body;

    // 2. Check karo ki koi field khali toh nahi hai
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Saari details bharna zaroori hai!" },
        { status: 400 },
      );
    }

    // 3. Check karo ki is email se pehle se koi account toh nahi hai
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Is email se account pehle se maujood hai!" },
        { status: 400 },
      );
    }

    // 4. Password ko secure (Hash) karo (10 rounds of salting)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Database me naya User save karo
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    // 6. Success message return karo (password kabhi wapas mat bhejo!)
    return NextResponse.json(
      {
        message: "Account successfully ban gaya!",
        user: { name: newUser.name, email: newUser.email },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json(
      { error: "Kuch galat ho gaya, baad me try karein." },
      { status: 500 },
    );
  }
}
