import connectMongoDB from "@/libs/mongodb";
import Category from "@/model/category";

import { NextResponse } from "next/server";


export async function POST(request) {
  const {category } = await request.json();
  await connectMongoDB();
  await Category.create({category });
  return NextResponse.json({ message: "Category Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const categories = await Category.find();
  return NextResponse.json({ categories });
}

