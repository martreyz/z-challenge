import { getSmartphones } from "@/app/usecases/getSmartphones";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get("search");

    const filteredProducts = await getSmartphones(searchQuery);
    return NextResponse.json(filteredProducts);
  } catch (error) {
    console.error(`Error fetching smartphones list: ${error.message}`);
    return NextResponse.json(
      { error: "Failed to retrieve smartphones list" },
      { status: 500 }
    );
  }
}
