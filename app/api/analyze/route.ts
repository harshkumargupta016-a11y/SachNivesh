import { NextResponse } from "next/server";
import { analyzeTextContent } from "@/lib/rules";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const text = typeof body?.text === "string" ? body.text : "";

    const result = analyzeTextContent(text);

    return NextResponse.json({
      ...result,
      disclaimer: "SachNivesh provides educational risk signals, not financial or investment advice.",
    });
  } catch {
    return NextResponse.json(
      {
        risk_level: "low",
        risk_score: 0,
        signals: [],
        uncertainty: "We could not process the message at this time.",
        recommended_actions: ["Please check the content and try again."],
        summary: "Unable to analyze this input.",
        masked_text: "",
        disclaimer: "SachNivesh provides educational risk signals, not financial or investment advice.",
      },
      { status: 400 },
    );
  }
}
