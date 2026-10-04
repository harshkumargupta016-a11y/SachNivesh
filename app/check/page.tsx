"use client";

import { useState } from "react";
import { ShieldCheck, Sparkles, Trash2 } from "lucide-react";
import RiskCard from "@/components/risk-card";

export default function CheckPage() {
  const [text, setText] = useState("");
  const [showMasked, setShowMasked] = useState(true);
  const [result, setResult] = useState<null | {
    risk_level: "low" | "medium" | "high";
    risk_score: number;
    summary: string;
    signals: Array<{ signal_name: string; explanation: string; severity: string; evidence: string }>;
    uncertainty: string;
    recommended_actions: string[];
  }>(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!text.trim()) {
      setResult({
        risk_level: "low",
        risk_score: 0,
        summary: "Please enter the message you want to review.",
        signals: [],
        uncertainty: "No content was provided for review.",
        recommended_actions: ["Paste the suspicious message before checking."],
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setResult({
        risk_level: data.risk_level,
        risk_score: data.risk_score,
        summary: data.summary,
        signals: data.signals,
        uncertainty: data.uncertainty,
        recommended_actions: data.recommended_actions,
      });
    } catch {
      setResult({
        risk_level: "medium",
        risk_score: 45,
        summary: "The analysis service is unavailable. Basic safety guidance is still recommended.",
        signals: [{ signal_name: "Service unavailable", explanation: "We could not complete the live check, so use official verification before sending money.", severity: "medium", evidence: "System error" }],
        uncertainty: "We could not independently confirm the risk level due to a temporary issue.",
        recommended_actions: ["Use official verification channels before acting.", "Avoid urgent payments until the identity is confirmed."],
      });
    } finally {
      setLoading(false);
    }
  };

  const maskedValue = text
    .replace(/\b[A-Z]{5}[0-9]{4}[A-Z]\b/g, "[PAN REDACTED]")
    .replace(/\b\d{12}\b/g, "[AADHAAR REDACTED]")
    .replace(/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g, "[EMAIL REDACTED]")
    .replace(/\b(?:\+?91[-\s]?)?(?:\d{10})\b/g, "[PHONE REDACTED]")
    .replace(/\b[a-zA-Z0-9._-]+@upi\b/g, "[UPI REDACTED]")
    .replace(/https?:\/\/[^\s]+/gi, "[URL REDACTED]");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Checker</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">What would you like to verify?</h1>
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
          Privacy-first review
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Text" },
              { label: "Screenshot" },
              { label: "Voice" },
              { label: "UPI" },
              { label: "Link" },
              { label: "Social Post" },
            ].map((tab) => (
              <button
                key={tab.label}
                type="button"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300"
              >
                {tab.label}
              </button>
            ))}
          </div>

          <label className="mt-6 block text-sm font-medium text-slate-700" htmlFor="message">
            Paste the message you received
          </label>
          <textarea
            id="message"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Paste the message you received..."
            className="mt-2 min-h-52 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={analyze}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Sparkles className="h-4 w-4" />
              {loading ? "Analyzing..." : "Analyze"}
            </button>
            <button type="button" onClick={() => setText("")} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              <Trash2 className="h-4 w-4" />
              Clear
            </button>
            <button type="button" onClick={() => setShowMasked((current) => !current)} className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              {showMasked ? "Hide masked content" : "Show masked content"}
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            Your content is processed with data minimization in mind. Sensitive personal information should be masked before external processing.
          </div>

          {text && (
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm font-medium text-slate-700">
                <span>Masked preview</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">PII-safe</span>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                {showMasked ? maskedValue : text}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Check signals
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Phone numbers</li>
              <li>• Email addresses</li>
              <li>• Bank account numbers</li>
              <li>• PAN and Aadhaar-like patterns</li>
              <li>• UPI IDs and URLs</li>
              <li>• Names and suspicious context</li>
            </ul>
          </div>

          {result && (
            <RiskCard
              summary={result.summary}
              score={result.risk_score}
              level={result.risk_level}
              signals={result.signals}
              uncertainty={result.uncertainty}
              actions={result.recommended_actions}
            />
          )}
        </div>
      </div>
    </div>
  );
}
