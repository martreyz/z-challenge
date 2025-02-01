import { getSmartphones } from "@/app/usecases/getSmartphones";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("search");
  const filteredProducts = await getSmartphones(searchQuery);
  return NextResponse.json(filteredProducts);
}
