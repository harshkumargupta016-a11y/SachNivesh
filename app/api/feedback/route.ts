import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const helpful = typeof body?.helpful === "boolean" ? body.helpful : null;
    return NextResponse.json({
      status: "received",
      helpful,
      message: "Feedback recorded successfully. Thank you for helping improve SachNivesh.",
    });
  } catch {
    return NextResponse.json({ status: "error", message: "Unable to save feedback right now." }, { status: 400 });
  }
}
