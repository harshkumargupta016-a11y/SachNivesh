"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, TriangleAlert } from "lucide-react";

interface RiskCardProps {
  summary: string;
  score: number;
  level: "low" | "medium" | "high";
  signals: Array<{ signal_name: string; explanation: string; severity: string; evidence: string }>;
  uncertainty: string;
  actions: string[];
}

export default function RiskCard({ summary, score, level, signals, uncertainty, actions }: RiskCardProps) {
  const tone =
    level === "high"
      ? "border-rose-200 bg-rose-50 text-rose-800"
      : level === "medium"
        ? "border-amber-200 bg-amber-50 text-amber-800"
        : "border-emerald-200 bg-emerald-50 text-emerald-800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`rounded-3xl border p-5 shadow-sm ${tone}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xl font-bold uppercase tracking-[0.14em]">
          {level === "high" ? <AlertTriangle className="h-5 w-5" /> : level === "medium" ? <TriangleAlert className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
          {level === "high" ? "High Concern" : level === "medium" ? "Medium Concern" : "Low Concern"}
        </div>
        <div className="text-sm font-semibold">Score: {score}/100</div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">{summary}</p>

      <div className="mt-5 grid gap-3">
        {signals.length > 0 ? (
          signals.map((signal) => (
            <div key={signal.signal_name} className="rounded-2xl border border-white/60 bg-white/70 p-3 text-sm text-slate-700">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-current opacity-80" />
                {signal.signal_name}
              </div>
              <p className="mt-1 text-sm text-slate-600">{signal.explanation}</p>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-white/60 bg-white/70 p-3 text-sm text-slate-700">
            No obvious scam patterns were detected in this sample.
          </div>
        )}
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white/70 p-3 text-sm text-slate-700">
        <div className="font-semibold text-slate-900">Uncertainty</div>
        <p className="mt-1">{uncertainty}</p>
      </div>

      <div className="mt-5">
        <div className="font-semibold text-slate-900">Recommended actions</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {actions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
