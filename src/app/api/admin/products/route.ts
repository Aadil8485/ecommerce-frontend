// src/app/api/admin/products/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { writeFile } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // 1. Security Check
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. FormData receive karna (kyunki ab image file aa rahi hai, JSON nahi)
    const formData = await request.formData();

    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");
    const stock = formData.get("stock");
    const file = formData.get("image"); // Yeh hamari actual photo file hai

    let imagePath = "https://via.placeholder.com/300?text=No+Image";

    // 3. Agar photo aayi hai, toh usko public/uploads me save karo
    if (file && file !== "null" && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Photo ka unique naam banaya taaki purani photo overwrite na ho
      const uniqueName = Date.now() + "-" + file.name.replaceAll(" ", "_");
      const uploadDir = path.join(
        process.cwd(),
        "public",
        "uploads",
        uniqueName,
      );

      // Photo ko folder me save kiya
      await writeFile(uploadDir, buffer);

      // Database me save karne ke liye chota path banaya
      imagePath = `/uploads/${uniqueName}`;
    }

    // 4. Database me entry
    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: parseFloat(price),
        description: description || "",
        stock: parseInt(stock) || 0,
        image: imagePath, // 🔥 Yahan photo ka link save ho jayega
      },
    });

    return NextResponse.json(
      { message: "Product + Image Saved! 🎉", product: newProduct },
      { status: 201 },
    );
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      { error: "Product save nahi ho paya." },
      { status: 500 },
    );
  }
}
