import { NextResponse } from "next/server";
import { analyzeTextContent } from "@/lib/rules";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const langPrompts: Record<string, string> = {
  hi: "Respond in clear, accessible Hindi.",
  hing: "Respond in colloquial Hinglish (Hindi written in Roman script).",
  mr: "Respond in simple, accessible Marathi.",
  gu: "Respond in simple, accessible Gujarati.",
  ta: "Respond in simple, accessible Tamil.",
  en: "Respond in simple, plain English."
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const text = typeof body?.text === "string" ? body.text : "";
    const lang = typeof body?.lang === "string" ? body.lang : "en";

    const localResult = analyzeTextContent(text);

    // If Gemini API Key is available in environment
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (apiKey && text.trim().length > 0) {
      try {
        const langInstruction = langPrompts[lang] || langPrompts.en;
        const systemPrompt = `You are the SachNivesh Financial Content Intelligence Auditor. Evaluate the provided financial text for scams, unrealistic promises, and mis-selling.
Rule hints detected: ${localResult.signals.map(s => s.signal_name).join("; ")}
${langInstruction}
Return ONLY valid JSON matching this schema:
{
  "summary": string,
  "uncertainty": string,
  "recommended_actions": [string]
}`;

        const response = await fetch(`${GEMINI_API_URL}?key=${encodeURIComponent(apiKey)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: [{ role: "user", parts: [{ text: localResult.masked_text || text }] }],
            generationConfig: { responseMimeType: "application/json" }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const candidateText = data.candidates?.[0]?.content?.parts?.map((p: { text: string }) => p.text).join("");
          if (candidateText) {
            const parsed = JSON.parse(candidateText.replace(/```json|```/g, "").trim());
            return NextResponse.json({
              ...localResult,
              summary: parsed.summary || localResult.summary,
              uncertainty: parsed.uncertainty || localResult.uncertainty,
              recommended_actions: parsed.recommended_actions || localResult.recommended_actions,
              disclaimer: "SachNivesh provides educational risk signals using Google Gemini LLM, not financial advice."
            });
          }
        }
      } catch {
        // Fallback to local rule engine if Gemini fails
      }
    }

    return NextResponse.json({
      ...localResult,
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
