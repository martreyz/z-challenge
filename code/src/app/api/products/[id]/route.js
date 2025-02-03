import { getSmartphoneById } from "@/app/usecases/getSmartphoneById";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  if (!params || !params.id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  const { id } = await params;

  try {
    const smartphoneDetail = await getSmartphoneById(id);
    return NextResponse.json(smartphoneDetail);
  } catch (error) {
    console.error(`Error fetching smartphone detail: ${error.message}`);
    return NextResponse.json(
      { error: "Failed to retrieve smartphone detail" },
      { status: 500 }
    );
  }
}
