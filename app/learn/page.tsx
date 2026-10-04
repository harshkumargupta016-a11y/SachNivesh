import Link from "next/link";
import { BookOpen, ShieldAlert, ArrowRight } from "lucide-react";

const articles = [
  "Scam Basics",
  "Investment Fraud",
  "Fake Trading Apps",
  "Finfluencer Scams",
  "Guaranteed Returns",
  "Ponzi Schemes",
  "UPI Fraud",
  "Phishing",
  "Impersonation",
  "Deepfake Scams",
  "Social Engineering",
];

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Learning center</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Understand the warning signs.</h1>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((title) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">Simple explanation, warning signs, and official guidance for everyday investor safety.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              Read article
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-900 px-5 py-6 text-white sm:px-6">
        <div className="flex items-center gap-3">
          <ShieldAlert className="h-5 w-5 text-amber-400" />
          <div className="text-lg font-bold">Scam Spotting Game</div>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">Build confidence by spotting suspicious claims in realistic examples before money moves.</p>
        <Link href="/learn/game" className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
          Play the game
        </Link>
      </div>
    </div>
  );
}
