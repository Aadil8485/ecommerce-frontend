import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

// GET: AutoSlider ka data frontend par bhejne ke liye
export async function GET() {
  try {
    const sliders = await prisma.autoSlider.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" }, // Naye items pehle dikhenge
    });
    return NextResponse.json({ success: true, data: sliders });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// POST: Admin/Postman se AutoSlider me naya data daalne ke liye
export async function POST(request) {
  try {
    const body = await request.json();

    const newSlide = await prisma.autoSlider.create({
      data: {
        name: body.name,
        price: body.price,
        imageUrl: body.imageUrl,
        rating: body.rating,
        reviewCount: body.reviewCount,
        badge: body.badge,
        // 🔥 Yeh line add ki gayi hai taaki Postman ka productId save ho sake
        productId: body.productId ? parseInt(body.productId) : null,
      },
    });

    return NextResponse.json({ success: true, data: newSlide });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
