import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

// GET Method: Database se saare products lane ke liye
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({ success: true, products: products });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// POST Method: Database me naya product daalne ke liye
export async function POST(request) {
  try {
    const body = await request.json();

    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        stock: body.stock,
      },
    });

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
