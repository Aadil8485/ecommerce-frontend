import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Sirf woh sliders lao jo 'isActive: true' hain
export async function GET() {
  try {
    const sliders = await prisma.heroSlider.findMany({
      where: { isActive: true },
    });
    return NextResponse.json({ success: true, sliders });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// POST: Naya slider add karne ke liye
export async function POST(request) {
  try {
    const body = await request.json();
    const newSlider = await prisma.heroSlider.create({
      data: {
        title: body.title,
        imageUrl: body.imageUrl,
        linkUrl: body.linkUrl,
      },
    });
    return NextResponse.json({ success: true, slider: newSlider });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
