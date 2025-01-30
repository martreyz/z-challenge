import { getAllProducts } from "@/app/usecases/getAllProducts";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("search");
  const filteredProducts = await getAllProducts(searchQuery);
  return NextResponse.json(filteredProducts);
}
