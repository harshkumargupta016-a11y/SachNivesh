import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body?.message === "string" ? body.message : "";

    const lower = message.toLowerCase();
    const investmentAsk = /(buy|sell|hold|should i invest|buy reliance|buy tcs|should i buy|should i sell|stock price)/i.test(lower);

    if (investmentAsk) {
      return NextResponse.json({
        answer:
          "I can't recommend whether you should buy or sell a specific security. I can explain general concepts or help you identify scam signals in an investment message.",
        risk_level: "unknown",
        uncertainty: "I do not provide individualized investment recommendations.",
        sources: ["SEBI Investor Education"],
        recommended_actions: ["Use official investor-protection resources and verify claims before acting."],
        disclaimer_required: true,
      });
    }

    if (/5% daily|guaranteed.*return|guaranteed.*profit|vip group|upi.*pay|limited time/i.test(lower)) {
      return NextResponse.json({
        answer:
          "A message promising guaranteed returns, VIP access, or a time-bound payment request is a common scam pattern. Check the sender's identity, use official sources, and never send money without independent verification.",
        risk_level: "high",
        uncertainty: "I cannot confirm whether the sender is genuine without authoritative verification.",
        sources: ["SEBI Investor Education", "Cyber Crime Portal"],
        recommended_actions: ["Pause and verify the person or organization through an official source.", "Avoid sending money before confirming the identity and payment request."],
        disclaimer_required: true,
      });
    }

    return NextResponse.json({
      answer:
        "The safest first step is to pause, verify the source, and check whether the claim matches official information. I can help explain common scam signals and what to do next.",
      risk_level: "low",
      uncertainty: "I can explain general safety concepts, but I cannot verify a specific source without a trusted official record.",
      sources: ["SEBI Investor Education", "Cyber Crime Portal"],
      recommended_actions: ["Verify the intermediary through official channels.", "Never send money on urgency alone."],
      disclaimer_required: true,
    });
  } catch {
    return NextResponse.json(
      {
        answer: "I could not process that question right now. Please verify the request through an official source and avoid acting on urgency alone.",
        risk_level: "unknown",
        uncertainty: "The assistant is unavailable; this is not a verified result.",
        sources: [],
        recommended_actions: ["Use official verification links and contact cybercrime support if needed."],
        disclaimer_required: true,
      },
      { status: 500 },
    );
  }
}
