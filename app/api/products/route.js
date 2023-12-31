import connectMongoDB from "@/libs/mongodb";
import Product from "@/model/product";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, category, type, os } = await request.json();
  await connectMongoDB();
  await Product.create({ name, category, type, os });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

