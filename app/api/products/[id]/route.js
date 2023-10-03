import connectMongoDB from "@/libs/mongodb";
import Product from "@/model/product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newCategory: category } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, { name, category });
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request,{params}) {
  const {id} = params;
  await connectMongoDB();
  const product = await Product.findOne({_id:id});
  return NextResponse.json({product},{status:200});
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Product.findByIdAndRemove(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}

