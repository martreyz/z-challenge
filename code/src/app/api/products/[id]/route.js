export const dynamic = "force-dynamic";

import { getSmartphoneById } from "@/app/usecases/getSmartphoneById";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await params;

  if (!params) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  const { id } = await params;
  const smartphoneDetail = await getSmartphoneById(id);
  return NextResponse.json(smartphoneDetail);
}
