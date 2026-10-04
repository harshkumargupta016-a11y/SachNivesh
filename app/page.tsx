import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Languages, Lock, ShieldCheck, Sparkles, UploadCloud } from "lucide-react";
import LandingDemo from "@/components/landing-demo";

const steps = [
  { title: "Share", description: "Paste a message, upload an image, or record a voice note." },
  { title: "Protect", description: "Sensitive details are masked before analysis whenever possible." },
  { title: "Analyze", description: "A rule-based safety engine highlights warning signals." },
  { title: "Verify", description: "The result explains uncertainty and directs users to official sources." },
];

const checks = [
  "Text messages",
  "Screenshots",
  "Voice notes",
  "UPI IDs",
  "URLs",
  "Social-media posts",
];

const reasons = [
  { title: "Privacy First", text: "Sensitive information is masked before processing wherever possible." },
  { title: "Explainable", text: "Every warning shows the exact signal that triggered it." },
  { title: "AI Assisted", text: "AI explains suspicious patterns in simple, plain language." },
  { title: "Uncertainty Aware", text: "The system clearly explains what it cannot verify." },
  { title: "Official Verification", text: "Users are directed to official verification channels and government resources." },
  { title: "Bharat First", text: "Support for regional languages and voice interaction is built into the design." },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#eff6ff_0%,#f8fafc_55%,#f8fafc_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              AI-assisted investor safety
            </div>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Before you trust it, verify it.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              SachNivesh helps you spot suspicious investment messages, screenshots, voice notes and payment requests — before money moves.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/check" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
                Check a Message
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/learn" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50">
                How SachNivesh Works
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Privacy-first</div>
              <div className="flex items-center gap-2"><Languages className="h-4 w-4 text-blue-600" /> Hindi + English</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <LandingDemo />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">How it works</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">A calm system for safer decisions</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">What can you check?</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white">From messages to payment requests</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {checks.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-700 bg-slate-800/70 p-5 text-base font-medium text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Why SachNivesh?</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Built for trust, clarity and safety</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                {reason.title === "Privacy First" ? <Lock className="h-5 w-5" /> : reason.title === "AI Assisted" ? <Sparkles className="h-5 w-5" /> : reason.title === "Bharat First" ? <Languages className="h-5 w-5" /> : reason.title === "Official Verification" ? <ShieldCheck className="h-5 w-5" /> : reason.title === "Explainable" ? <BriefcaseBusiness className="h-5 w-5" /> : <UploadCloud className="h-5 w-5" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
